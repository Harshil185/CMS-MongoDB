const db = require("./db");

// Registration --insertOne()

const evalid = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,5}$/;
const phoneno = /^\d{10}$/;

async function registration(uname, uemail, upassword, umobile_no, urole) {
  if (uname == null || uname.length < 3) {
    console.log("Invalid User name.");
    return false;
  } else if (upassword.length < 6) {
    console.log("Password cannot be less than 6 character.  ");
    return false;
  } else if (!phoneno.test(umobile_no)) {
    console.log("Mobile Number should be 10 'digits'");
    return false;
  } else if (!evalid.test(uemail)) {
    console.log("Invalid Email");
    return false;
  } else if (urole == null) {
    console.log("Role cannot be Empty");
    return false;
  } else {
    const userData = await db.collection("users").insertOne({
      name: uname,
      email: uemail,
      password: upassword,
      mobile_no: umobile_no,
      role: urole,
      date: Date(),
    });

    if (!userData) {
      console.log("Registration Failed..");
      return false;
    }

    console.log("Registered successfully..");
  }
}
registration("Virat", "virat18@gmail.com", "vk@183", 8909384235, "user");

// Login --findOne()

async function login(uemail, upassword) {
  if (!evalid.test(uemail)) {
    console.log("Invalid Email");
    return false;
  } else if (upassword.length < 6) {
    console.log("Password cannot be less than 6 character.  ");
    return false;
  } else {
    const user = await db.collection("users").findOne({ email: uemail });
    if (!user) {
      console.log("User not Found.");
      return false;
    }
    if (user.password !== upassword) {
      console.log("Incorrect Password.");
      return false;
    }
    console.log("Login Successful..");
    console.log(user);
  }
}
// login("harshil18@gmail.com", "543$16");

// Update --updateOne()

async function update() {
  const updateduser = await db.collection("users").updateOne(
    { email: "harsh098@gmail.com" },
    {
      $set: {
        name: "harsh12",
        email: "harsh0981@gmail.com",
        mobile_no: 1234598760,
      },
    },
    { upsert: true } //Insert if not found
  );
  if (!updateduser.modifiedCount) {
    console.log("Updating Failed...");
    return false;
  }
  console.log("Document Updated Successful..");
}
// update();

// Delete --deleteOne()

async function delete1() {
  const delete1 = await db
    .collection("users")
    .deleteOne({ email: "harsh0981@gmail.com" });
  if (!delete1.deletedCount) {
    console.log("Error while deleting Document.");
    return false;
  }
  console.log("Document Deleted..");
}

// registration("Harshil", "harshil18@gmail.com", "543$16", 908235435100,"user");
// login("harshil@gmail.com", "har123");
// update();
// delete1();
