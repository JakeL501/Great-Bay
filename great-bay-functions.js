var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

function postItem() {
  console.log("Posting a new item...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      username: username,
      item: item-name,
      bid: item-value,
      category: item-category,
    },
  )};

  export {postItem};
