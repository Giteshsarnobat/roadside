const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connection URI for MongoDB
const uri = "mongodb://127.0.0.1:27017";

let counter = 1001;

serviceCounter = () => {
  counter += 1;
  return counter;
};

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");

    // Find the user by username and password
    const user = await db.collection("users").findOne({ email, password });

    // Close the MongoDB connection
    client.close();

    if (user) {
      const data = { user, authenticate: true };
      res.send(data);
      //res.status(200).json({ message: "Login successful" });
    } else {
      res.send({ authenticate: false });
      //res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.send("Internal Server Connection Error");
    //res.status(500).json({ message: "Internal server error" });
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, mobile } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");

    // Check if the username already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      //res.send("Email Already Exists in DB");
      res.status(409).json({ message: "Username already exists" });
      client.close();
      return;
    }

    // Create the new user
    const newUser = {
      email,
      password,
      name,
      mobile,
      cars: [],
      bikes: [],
      requests: [],
    };
    await db.collection("users").insertOne(newUser);

    // Close the MongoDB connection
    client.close();
    res.send("Signup  on Server Succesful");
    //res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error:", error);
    res.send("Connection to DB failed");
    //res.status(500).json({ message: "Internal server error" });
  }
});

//Raise
app.post("/raise", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");

    // Find the user by username and password
    const user = await db.collection("users").findOne({ email, password });

    // Close the MongoDB connection

    if (user) {
      const data = { user, authenticate: true };
      const date = new Date();
      const dateString = date.toISOString();
      // Extract the date components
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      // Display the date
      const date1 = `${year}-${month}-${day}`;
      //Update the data
      const requests = [...user.requests];
      const newData = {
        ...req.body.addData,
        servicenumber: serviceCounter(),
        timestamp: dateString,
        date: date1,
      };
      requests.push(newData);
      const setData = { $set: { requests: requests } };
      const result = await db.collection("users").updateOne(user, setData);
      res.send("Done");
      //res.status(200).json({ message: "Login successful" });
    } else {
      res.send({ authenticate: false });
      //res.status(401).json({ message: "Invalid credentials" });
    }
    client.close();
  } catch (error) {
    console.error("Error:", error);
    res.send("Internal Server Error! Contact Admin");
    //res.status(500).json({ message: "Internal server error" });
  }
});

//Vehicle Registeration
app.post("/vehicle", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");

    // Find the user by username and password
    const user = await db.collection("users").findOne({ email, password });

    // Close the MongoDB connection

    if (user) {
      const newData = { ...req.body.addData };
      if (newData.vehicle === "Car") {
        const cars = [...user.cars];

        cars.push(newData);
        const setData = { $set: { cars: cars } };
        const result = await db.collection("users").updateOne(user, setData);
        res.send("Car Succesfully Added ");
      } else {
        const bikes = [...user.bikes];
        bikes.push(newData);
        const setData = { $set: { bikes: bikes } };
        const result = await db.collection("users").updateOne(user, setData);
        res.send("Bike Succesfully Added");
      }
      //Update the data

      //res.status(200).json({ message: "Login successful" });
    } else {
      res.send({ authenticate: false });
      //res.status(401).json({ message: "Invalid credentials" });
    }
    client.close();
  } catch (error) {
    console.error("Error:", error);
    res.send("Internal Server Error! Contact Admin");
    //res.status(500).json({ message: "Internal server error" });
  }
});

//Delete Vehicle
app.post("/vehicleDelete", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");

    // Find the user by username and password
    const user = await db.collection("users").findOne({ email, password });

    // Close the MongoDB connection

    if (user) {
      const newData = { ...req.body.item };
      if (newData.vehicle === "Car") {
        const cars = [...user.cars];
        let i;
        for (i = 0; i < cars.length; i++) {
          if (cars[i].vehNumber === newData.vehNumber) {
            break;
          }
        }
        cars.splice(i, 1);
        const setData = { $set: { cars: cars } };
        const result = await db.collection("users").updateOne(user, setData);
        res.send("Car Succesfully Deleted ");
      } else {
        const bikes = [...user.bikes];
        let i;
        for (i = 0; i < bikes.length; i++) {
          if (bikes[i].vehNumber === newData.vehNumber) {
            break;
          }
        }
        bikes.splice(i, 1);
        const setData = { $set: { bikes: bikes } };
        const result = await db.collection("users").updateOne(user, setData);
        res.send("Bike Succesfully Deleted");
      }
      //Update the data

      //res.status(200).json({ message: "Login successful" });
    } else {
      res.send({ authenticate: false });
      //res.status(401).json({ message: "Invalid credentials" });
    }
    client.close();
  } catch (error) {
    console.error("Error:", error);
    res.send("Internal Server Error! Contact Admin");
    //res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/contact", async (req, res) => {
  try {
    const { data, sales } = req.body;
    x``;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mydb");
    if (sales === 1) {
      await db.collection("SalesContact").insertOne(data);
      res.send("Succesfully Forwarded the Querry to Sales Team");
    } else if (sales === 2) {
      await db.collection("SupportContact").insertOne(data);
      res.send("Succesfully Forwarded the Querry to Support Team");
    } else {
      await db.collection("EscalationContact").insertOne(data);
      res.send("Succesfully Forwarded the Querry to Escalation Team");
    }

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error("Error:", error);
    res.send("Internal Server Connection Error");
    //res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
