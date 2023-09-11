const { ObjectId } = require("mongodb");
const db = require("./db");

const content = {
  title: "G20 Summit",
  content:
    "AS the curtains fell on the G20 Summit Sunday, the consensus arrived in the G20 New Delhi Leaders’ Declaration set the stage for the diplomatic and political conversation on the Russia-Ukraine conflict with a hope — across the spectrum — that the text is expected to set the tone for any negotiations between the two warring sides: the West-led G7 grouping that is backing Ukraine, and Russia, which has Beijing’s support in the form of a no-limits friendship.",
  user: new ObjectId("64f7fabfa34346831cd080c5"),
  category: "News",
  comments: [new ObjectId('64fbe918b04568852dafcc3b'),new ObjectId('64fbe9716bff13fe0d6ec768')],
  publish_date: Date()
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
    { _id : new ObjectId('64f7fcab7b4d79f9b9fe2cd2') },
    {
      $set: {
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

posts();
// update();
// delete1();
