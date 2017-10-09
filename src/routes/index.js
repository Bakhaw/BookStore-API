import express from 'express';
import config from '../config';

import initializeDb from '../db';
import middleware from '../middleware';

import bookstore from '../controller/bookstore';

let router = express();

initializeDb(db => {
  router.use(middleware({ config, db }));

  router.use('/', bookstore({ config, db }));
})


export default router;
