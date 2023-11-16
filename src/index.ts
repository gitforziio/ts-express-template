import express, { Express, Request as ExRequest, Response as ExResponse } from "express";
import cors from "cors";



const app: Express = express();
const port: number = 3003;

app.use(express.json());
app.use(cors({
  origin: /http:\/\/localhost.*/,
}));



app.get('/', (req: ExRequest, res: ExResponse) => {
  // console.log({req, res});
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
