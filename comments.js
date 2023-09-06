const db = require("./db");

async function comments() {
    const com = await db.collection("comments").insertOne({
        comment: "Nice",
        comment_date: Date()
    });

    if (!com) {
        console.log("Error in Inserting Comment.");
        return false;
    }
    console.log("Successfully Commented.");
}

comments();