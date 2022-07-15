import express from "express";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("ok");
// });

// app.post("/messages", (req, res) => {
//   // ...
// });

// app.put("/messages/:id", (req, res) => {
//   // ...
// });

// app.delete("/messages/:id", (req, res) => {
//   // ...
// });

app.listen(8000, () => {
  console.log("server listen");
});
