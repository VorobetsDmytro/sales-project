import express from 'express';
import "dotenv/config";
import { loadControllers, scopePerRequest } from "awilix-express";
import container from './src/container';
import { httpExceptionMiddleware } from './src/middlewares/http-exception.middleware';

const app = express();

app.use(express.json());
app.use(scopePerRequest(container));
app.use(loadControllers('src/controllers/*.ts', { cwd: __dirname }));
app.use(loadControllers('src/controllers/*.js', { cwd: __dirname }));
app.use(httpExceptionMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server started. Port: ${PORT}`);
});
