const { ObjectId } = require("mongodb");
const db = require("./db");

const content = {
  title: "20 Examples of Digital Technology",
  content:
    "20 Examples of Digital Technology  \n \n1. Websites \n2. Buying and Selling Online",
  user: new ObjectId("64f2e8a33fbf430ee38918a8"),
  category: "Technology",
  comments: [new ObjectId("64f7fbeb5d189eb2fc16fb45")],
  publish_date: Date(),
};

//  Inserting Content

async function posts() {
  const post = await db.collection("content").insertOne(content);

  if (!post) {
    console.log("Error");
    return false;
  }
  console.log("Content Added Successfully.");
}
// posts();

// Update Content

async function update() {
  const updateduser = await db.collection("content").updateOne(
    { title: "new content" },
    {
      $set: {
        title: "new content",
        content: "new content body ",
        user: new ObjectId("64ec1ce1b21f2f98d8267181"),
        category: "Entertainment",
        publish_date: Date(),
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

// Deleting Content

async function delete1() {
  const delete1 = await db
    .collection("content")
    .deleteOne({ title: "20 Examples of Digital Technology" });
  if (!delete1.deletedCount) {
    console.log("Error while deleting Document.");
    return false;
  }
  console.log("Document Deleted..");
}

// posts();
update();
// delete1();
