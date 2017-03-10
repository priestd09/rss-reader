import _ from 'lodash';
import axios from 'axios';
import c from 'cheerio';
import moment from 'moment';
import Stream from 'stream';
import ParseFeed from 'feedparser';
import URI from 'urijs';
const Console = window.console;

export default class {
  constructor(url) {
    this.url = url;
  }


/**
 * Clean up output for Articles
 */
  cleanArticleItem(data) {
    return {
      guid: data.guid,
      author: data.author,
      source: data.source,
      title: data.title,
      read: false,
      favourite: false,
      summary: data.summary,
      tags: [],
      link: data.origlink ? data.origlink : data.link,
      pubDate: moment(data.pubDate).format('X'),
    };
  }

/**
 *  Stream and parse Feed Data;
 */
  streamFeed(body) {
    let meta = null;
    const articles = [];

    const s = new Stream();
    s.readable = true;
    s.pipe(new ParseFeed()).on('meta', m => {
      meta = m;
    }).on('readable', () => {
      const stream = this;
      let item = stream.read();
      while (item) {
        articles.push(item);
        item = stream.read();
      }
    });
    s.emit('data', body);
    s.emit('end');

    return {
      meta: {
        title: meta.title,
        description: meta.description,
        link: meta.link,
        favicon: meta.favicon,
        url: meta.xmlUrl,
      },
      articles: _.map(articles, this.cleanArticleItem),
    };
  }

  /**
  * Fetch feed url from body
  */
  fetchFeedUrl(body, url) {
    const dom = c.load(body);
    const uri = new URI(url);
    let href = dom('link[type="application/rss+xml"]').attr('href');
    if (!href) {
      href = dom('link[type="application/atom+xml"]').attr('href');
    } else {
      if (!href.match(/^http/)) {
        href = uri.normalizeHostname(url);
      }
      return href;
    }
    return null;
  }

  init() {
    Console.log(`Processing ${this.url}`);
    const self = this;
    const uri = new URI(this.url);
    const cleanUri = uri.normalizeHostname();
    const promise = new Promise((resolve, reject) => {
      axios.get(cleanUri).then((res) => {
        const feedUrl = self.fetchFeedUrl(res.data.data, cleanUri);
        if (feedUrl === null) {
          resolve(self.streamFeed(res.data.data));
        } else if (feedUrl !== null) {
          axios.get(feedUrl).then((res) => {
            resolve(self.streamFeed(res.data.data));
          });
        } else {
          reject('Oops something went wrong');
        }
      });
    });
    return promise;
  }
}
