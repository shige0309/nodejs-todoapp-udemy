const express = require('express');
const app = express();
const PORT = 5000;
const taskRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());
app.use(express.static('./public'));

//ルーティング設計
app.use('/api/v1/tasks', taskRouter);

//データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(
      process.env.PORT || PORT,
      console.log('サーバーが起動しました。')
    );
  } catch (err) {
    console.log(err);
  }
};

start();
