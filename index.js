const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const id = snapshot.docs.map((doc) => doc.id);
  console.log(id);

  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  await User.add(data);
  /*
  await User.add({
    name: "Ali Yilmaz",
    age: 23,
    Collage: "YU",
  });
  */
  res.send({ msg: "User Added" });
});
app.post("/update", async (req, res) => {
  const id = req.body.id;
  console.log("Before deleting id", req.body);
  delete req.body.id;
  const data = req.body;
  console.log("After deleting id", req.body);
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});

app.listen(4000, () => console.log("Up & Running at 4000 "));
