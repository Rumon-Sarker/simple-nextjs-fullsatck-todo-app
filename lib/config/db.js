import mongoose from "mongoose"

export const conectDb = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@expressdb.hgdaj4q.mongodb.net/todo-app`);
    console.log("DB Conected")
}