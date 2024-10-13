import express from 'express';
import "dotenv/config";
import { loadControllers, scopePerRequest } from "awilix-express";
import container from './src/container';

const app = express();

app.use(express.json());
app.use(scopePerRequest(container));
app.use(loadControllers('src/controllers/*.ts', { cwd: __dirname }));
app.use(loadControllers('src/controllers/*.js', { cwd: __dirname }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await container.resolve('dbInstance').sync({ force: false });
  console.log(`Server started. Port: ${PORT}`);
});
