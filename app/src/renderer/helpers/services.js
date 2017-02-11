import DB from '../db';
const db = new DB();
const connect = db.init();
const Console = console;

export default {
  info() {
    connect.insert([{ a: 5 }, { a: 42 }], (err, newDocs) => {
      Console.log(newDocs);
    });
  },
};
