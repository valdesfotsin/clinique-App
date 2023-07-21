import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from "cors";
import { ObjectId } from "mongodb";
const app = express();
const port = 4000;

app.use(cors());
dotenv.config();
const uri = process.env.STRING_URI;
app.use(express.json());

// Créez le client MongoDB à l'extérieur de la fonction run()
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connectez-vous au pool de connexions MongoDB au démarrage de l'application
(async () => {
  try {
    await client.connect();
    console.log("Connecté à MongoDB avec succès !");
  } catch (err) {
    console.dir(err);
  }
})();

app.get("/", async (_, res) => {
  try {
    const db = client.db("CliniqueAppDB");
    const collection = db.collection("patients");

    const results = await collection.find().toArray();

    console.log(results);

    res.status(200).send(results);
    await db.command({ ping: 1 });
  } catch (err) {
    console.dir(err);
  }
});

// const obj = { title: "title", content: "content" };

app.post("/insert", async (req, res) => {
  try {
    const db = client.db("CliniqueAppDB");
    const collection = db.collection("patients");

    const results = await collection.insertOne(req.body);

    res.status(200).send(results);
    await db.command({ ping: 1 });
  } catch (err) {
    console.dir(err);
  }
});


app.delete('/delete/:id', async (req, res) => {
  try {
    const db = client.db('CliniqueAppDB');
    const collection = db.collection('patients');

    const id = new ObjectId(req.params.id); // Utilisation de 'new' pour créer une instance d'ObjectId
    const results = await collection.deleteOne({ _id: id });

    res.status(200).send(results);
    await db.command({ ping: 1 });
  } catch (err) {
    console.dir(err);
  }
});




app.listen(port, () => {
  console.log("Serveur démarré avec succès sur le port " + port + " !");
});
