import jetpack from 'fs-jetpack';
import DataStore from 'nedb';
import { remote } from 'electron';

export default class {
  constructor() {
    this.db = null;
    this.useDataDir = jetpack.cwd(remote.app.getPath('userData'));
  }
  createOrReadDatabase(dbname) {
    const yesArticle = this.useDataDir.exists(dbname.article);
    const yesTag = this.useDataDir.exists(dbname.tag);
    const yesFeed = this.useDataDir.exists(dbname.feed);
    const yesFavourites = this.useDataDir.exists(dbname.favourites);
    const database = {};

    if (!yesArticle && !yesTag && !yesFeed && !yesFavourites) {
      this.useDataDir.write(dbname.article, '');
      this.useDataDir.write(dbname.tag, '');
      this.useDataDir.write(dbname.feed, '');
      this.useDataDir.write(dbname.favourites, '');
    }
    database.article = new DataStore({
      filename: this.useDataDir.path(dbname.article),
      autoload: true,
    });

    database.feed = new DataStore({
      filename: this.useDataDir.path(dbname.feed),
      autoload: true,
    });

    database.tag = new DataStore({
      filename: this.useDataDir.path(dbname.tag),
      autoload: true,
    });

    database.favourites = new DataStore({
      filename: this.useDataDir.path(dbname.favourites),
      autoload: true,
    });

    return database;
  }

  init() {
    if (this.db) {
      return this.db;
    }
    this.db = this.createOrReadDatabase({
      article: 'articles.db',
      tag: 'tags.db',
      favourites: 'favourites.db',
      feed: 'feeds.db',
    });

    return this.db;
  }
}
