const { ObjectId } = require("mongodb");
const db = require("./db");

const content = {
  title: "Sports",
  content:
    "new content body",
  user: new ObjectId("64ec1ce1b21f2f98d8267181"),
  category: "Sports",
  comments: [new ObjectId('64fe8c0ec6e2d9413dc6a7ab')],
  publish_date: Date(),
  like: 3
};

//  Inserting Content

async function posts() {
  const post = await db.collection("content").insertOne(content);

  if (!post) {
    console.log("Error");
    return false;
  }
  console.log("Content Added Successfully." + post.insertedId);
  if (post) {
    const ctou = await db.collection("users").updateOne({ _id: content.user }, {
      $push: {
        contents: new ObjectId(`${post.insertedId}`)
      }
    });
    if (!ctou) {
      console.log("error");
      return false;
    }
    console.log("added");
  }
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

// async function ContenttoUser() {
//   const ctou = await db.collection("users").updateOne({ _id:new ObjectId('64ec1ce1b21f2f98d8267181') }, {
//     $push: {
//       contents: new ObjectId('653c7b04de20e5f0ace28ea3')
//     }
//   });
//   if (!ctou) {
//     console.log("error");
//     return false;
//   }
//   console.log("added");
// }

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
posts();
// ContenttoUser();
// update();
// delete1();
