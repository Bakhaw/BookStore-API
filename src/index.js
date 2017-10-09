import express    from 'express';
import http       from 'http';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import config     from './config';
import routes     from './routes';

let app = express();
app.server = http.createServer(app);

app.use (bodyParser.json({
  limit: config.bodyLimit
}));

app.use('/', routes);
app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
