const express = require("express");
//router
const playerRoutes = require("./routes/player.routes");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/players", playerRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
