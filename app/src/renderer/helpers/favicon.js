import cheerio from 'cheerio';
import urlUtil from 'url';
import request from 'xhr-request';
import axios from 'axios';

const Console = console;

export default class {
  constructor(url) {
    this.url = url;
  }

  findFaviconHTML(url, body) {
    const dom = cheerio.load(body);
    let link = dom('link[rel="icon"], link[rel="shortcut icon"], link[rel="Shortcut Icon"]');
    if (link.last().attr('href') && !link.last().attr('href').match(/^http/)) {
      link = urlUtil.resolve(url, link.last().attr('href'));
    }
    return link;
  }

  discoverImageType(buffer) {
    if (buffer.length < 5) {
      return null;
    }
    if (buffer.readUInt16LE(0) === 0 && buffer.readUInt16LE(2) === 1) {
      return 'ico';
    }
    if (buffer.slice(1, 4).toString() === 'PNG') {
      return 'png';
    }
    if (buffer.slice(0, 3).toString() === 'GIF') {
      return 'gif';
    }
    return null;
  }

  init() {
    const self = this;
    Console.log(`Fetching favicon for ${self.url}`);
    const promise = new Promise((resolve) => {
      axios.get(self.url).then((res) => {
        const faviconUrl = this.findFaviconHTML(self.url, res.body);
        if (faviconUrl) {
          request(faviconUrl, {
            responseType: 'arraybuffer',
          }, (err, data) => {
            if (err) throw err;
            const buf = new Buffer(new Uint8Array(data));
            const imageType = self.discoverImageType(buf);
            if (imageType) {
              resolve({ bytes: buf, format: imageType });
            }
          });
        } else {
          resolve(null);
        }
      }, err => {
        if (err) throw err;
        resolve(null);
      });
    });
    return promise;
  }
}
