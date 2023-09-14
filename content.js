const { ObjectId } = require("mongodb");
const db = require("./db");

const content = {
  title: "12 cnkl",
  content:
    "new content body",
  user: new ObjectId("64f7fabfa34346831cd080c5"),
  category: "News",
  comments: [new ObjectId('64fbe918b04568852dafcc3b'), new ObjectId('64fbe9716bff13fe0d6ec768')],
  publish_date: Date(),
  like: 0
};

//  Inserting Content

async function posts() {
  const post = await db.collection("content").insertOne(content);

  if (!post) {
    console.log("Error");
    return false;
  }
  console.log("Content Added Successfully." + post.insertedId);
}
// posts();

// Update Content

async function update() {
  const updateduser = await db.collection("content").updateOne(
    { _id: new ObjectId('64f7fcab7b4d79f9b9fe2cd2') },
    {
      $push: {
        user: new ObjectId('64f7fabfa34346831cd080c5')
      },
    },
    { upsert: false } //true - Insert if not found
  );
  if (!updateduser.modifiedCount) {
    console.log("Updating Failed...");
    return false;
  }
  console.log("Content Updated Successful..");
}
// update();

// Deleting Content

async function delete1() {
  const delete1 = await db
    .collection("content")
    .deleteOne({ title: "20 Examples of Digital Technology" });
  if (!delete1.deletedCount) {
    console.log("Error while deleting Content.");
    return false;
  }
  console.log("Content Deleted..");
}

async function ContenttoUser() {
  const ctou = await db.collection("users").updateOne({ _id:new ObjectId('64f7fabfa34346831cd080c5') }, {
    $push: {
      contents: new ObjectId('650280a39e87e2c962381f3a')
    }
  });
  if (!ctou) {
    console.log("error");
    return false;
  }
  console.log("added");
}

async function Like() {
  const lk = await db.collection("content").updateOne({ title: "12 cnkl" }, { $inc: { like: 1 } });
  if (!lk) {
    console.log("error");
    return false;
  } else if (lk.modifiedCount) {
    console.log("Content liked.");
  }
}
// Like();
// posts();
ContenttoUser()
// update();
// delete1();
