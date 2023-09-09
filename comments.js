const { ObjectId } = require("mongodb");
const db = require("./db");

async function comments() {
  const com = await db.collection("comments").insertOne({
    comment: "Nice",
    comment_date: Date(),
  });

  if (!com) {
    console.log("Error in Inserting Comment.");
    return false;
  }
  console.log("Successfully Commented.");
}

async function deleteComment() {
  const deletecom = await db
    .collection("comments")
    .deleteOne({ _id: new ObjectId("64fb22f361ba2423e15ec90d") });
  if (!deletecom.deletedCount) {
    console.log("Error while deleting Document.");
    return false;
  }
  console.log("Document Deleted..");
}

comments();
// deleteComment();
