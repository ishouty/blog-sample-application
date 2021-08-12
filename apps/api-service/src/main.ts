import * as express from 'express';
import { Request, Response } from 'express';
import router from './app/router/blogRouter';
import * as status from './app/constant/response';
import { environment } from './environments/environment';
import * as cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (req: Request, res: Response): Response => {
  return res.status(200).send(status.success);
});

app.use('/api/blog', router);

app.use((req: Request, res: Response): Response => {
  return res.status(404).send(status.notFound);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next): Response => {
  return res.status(500).send(error);
});

const server = app.listen(environment.port, () => {
  console.log(`Listening at ${environment.baseUrl}`);
});
server.on('error', console.error);
