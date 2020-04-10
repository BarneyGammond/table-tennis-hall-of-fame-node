import * as Koa from 'koa'
let app = new Koa();
module.exports = app;

/* import mysql from 'mysql';

var con = mysql.createConnection({
  host: "vagrant.dev",
  user: "vagrant",
  password: "",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */