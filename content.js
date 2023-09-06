const { ObjectId } = require("mongodb");
const db = require("./db");

const content = {
    title: "20 Examples of Digital Technology",
    content: "20 Examples of Digital Technology  \n \n1. Websites \n2. Buying and Selling Online",
    user: new ObjectId('64f2e8a33fbf430ee38918a8'),
    category: "Technology",
    comments: [new ObjectId('64f7fbeb5d189eb2fc16fb45')],
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
