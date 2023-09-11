const db = require("./db");

// Added Categorys : Technology, Sports, Education, Entertainment, News
async function category() {
  const cate = await db.collection("category").insertOne({
      name: "News"
    });

  if (!cate) {
    console.log("Error while adding category.");
    return false;
  }
  console.log("Category Added Successfully.");
}

async function deleteCategory() {
  const deletecate = await db
    .collection("category")
    .deleteOne({ name: "Sports" });
  if (!deletecate.deletedCount) {
    console.log("Error while deleting Category.");
    return false;
  }
  console.log("Category Deleted..");
}

category();
// deleteCategory()