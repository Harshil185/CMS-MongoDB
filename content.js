const db = require("./db");

const content = {
    title: "20 Examples of Digital Technology",
    content: "20 Examples of Digital Technology  \n \n1. Websites \n2. Buying and Selling Online",
    user: "Virat",
    category: "Technology",
    publish_date: Date()
}

async function posts() {
    const post = await db.collection("content").insertOne(content);

    if (!post) {
        console.log("Error");
        return false;
    }
    console.log("Content Added Successfully.");
}

posts();
