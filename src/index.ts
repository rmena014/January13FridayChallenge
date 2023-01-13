// import * as mysql from "mysql2";

// const connect = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "devuser",
//   password: "Richjenn014",
//   database: "classicmodels",
// });

// async function connectToDB() {
//   try {
//     connect.connect();
//     console.log("Connected to the database.");
//   } catch (error) {
//     console.error(`Error connecting to the database: ${error.message}`);
//   }
// }
// connectToDB();

// connect.query("SELECT 1", (error, results, fields) => {
//   if (error) {
//     console.error(`Error testing connection: ${error.message}`);
//   } else {
//     console.log("Connection test successful!");
//   }
// });

// // CREATE OPERATION
// connect.query(
//   "INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (497, 'Armada Workwear', 'Mena', 'Richard', '123-456-7890', '123 Goat St.', 'New York', 'USA')",
//   (error, results) => {
//     if (error) {
//       console.error(`Error inserting record: ${error.message}`);
//     } else {
//       console.log("Record created successfully!");
//     }
//   }
// );

// //READ OPERATION
// connect.query("Select * FROM customers", (error, results) => {
//   if (error) {
//     console.error(`Error reading record: ${error.message}`);
//   } else {
//     console.log("Record read successfully!");
//   }
// });

// //UPDATE OPERATION
// connect.query(
//   "UPDATE customers SET customerName = 'New Armada Workwear' WHERE customerNumber = 497",
//   (error, results) => {
//     if (error) {
//       console.error(`Error updating record: ${error.message}`);
//     } else {
//       console.log("Record updated successfully!");
//     }
//   }
// );

// // DELETE OPERATION
// connect.query(
//   "DELETE FROM customers WHERE customerNumber = 497",
//   (error, results) => {
//     if (error) {
//       console.error(`Error deleting record: ${error.message}`);
//     } else {
//       console.log("Record deleted successfully!");
//     }
//   }
// );

import * as mysql from "mysql2";

const connect = mysql.createConnection({
  host: "127.0.0.1",
  user: "devuser",
  password: "Richjenn014",
  database: "classicmodels",
});

async function connectToDB() {
  try {
    await connect.connect();
    console.log("Connected to the database.");
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
  }
}
connectToDB();

//CREATE OPERATION
async function createRecord() {
  try {
    await connect.query(
      "INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (497, 'Armada Workwear', 'Mena', 'Richard', '123-456-7890', '123 Goat St.', 'New York', 'USA')"
    );
    console.log("Record created successfully!");
  } catch (error) {
    console.error(`Error inserting record: ${error.message}`);
  }
}
createRecord();

// READ OPERATION
async function readRecord() {
  try {
    const results = await connect.query("Select * FROM customers");
    console.log("Record read successfully!");
  } catch (error) {
    console.error(`Error reading record: ${error.message}`);
  }
}
readRecord();

// UPDATE OPERATION
async function updateRecord() {
  try {
    await connect.query(
      "UPDATE customers SET customerName = 'New Armada Workwear' WHERE customerNumber = 497"
    );
    console.log("Record updated successfully!");
  } catch (error) {
    console.error(`Error updating record: ${error.message}`);
  }
}
updateRecord();

// DELETE OPERATION
async function deleteRecord() {
  try {
    await connect.query("DELETE FROM customers WHERE customerNumber = 497");
    console.log("Record deleted successfully!");
  } catch (error) {
    console.error(`Error deleting record: ${error.message}`);
  }
}
deleteRecord();
