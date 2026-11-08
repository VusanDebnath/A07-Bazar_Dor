import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI পাওয়া যায়নি, .env.local ফাইলটা চেক করুন");
}

let client;

if (process.env.NODE_ENV === "development") {
  // development-এ বারবার নতুন connection না খুলে একটাই ব্যবহার করবে
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri);
}

export const db = client.db();
export default client;
