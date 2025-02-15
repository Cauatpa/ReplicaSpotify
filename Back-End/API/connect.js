import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Choso:Cautpa.2003@cluster0.fvwts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
