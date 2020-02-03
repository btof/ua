import * as path from 'path';
import { IConfig } from 'src/interfaces/IConfig';

const config: IConfig = {
  server: {
    port: 4000,
  },
  httpServer: {
    host: 'localhost',
    isPortDirected: true,
    port: 1234,
  },
  log: {
    level: 'debug',
    filename: 'log.txt',
    filedir: path.join(__dirname, '../../log'),
  },
};

export default config;
