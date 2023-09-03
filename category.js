const db = require("./db");

async function category() {
  const cate = await db.collection("category").insertMany([
    {
        name: "Technology"
    },
    {
        name: "Sports"
    },
    {
        name: "Education"
    },
    {
        name: "Entertainment"
    }
  ]);

  if (!cate) {
    console.log("Error while adding category.");
    return false;
  }
  console.log("Category Added Successfully.");
}

category();