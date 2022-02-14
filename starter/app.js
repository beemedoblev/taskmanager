const connectdb = require("./starter/db/connect");
const express = require("express");
const app = express();
const tasks = require("./starter/routes/tasks");
require('dotenv').config();

// middleware

app.use(express.json());

//routes
app.get("/", async (req, res) => {
  await res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

//app.get('/api/v1/tasks')          - get all the task
//app.post('/api/v1/tasks')         - create a new task
//app.get('/api/v1/tasks'/:id)      - get single task
//app.patch('/api/v1/tasks/:id')    - update task
//app.delete('/api/v1/tasks/:id')   - delete task

const port = 3000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}..`));
  } catch (err) {
    console.log(err);
  }
};

start();
