import * as path from 'path';
import { IConfig } from 'src/interfaces/IConfig';

const config: IConfig = {
  server: {
    port: 4000,
  },
  httpServer: {
    host: 'localhost',
    isPortDirected: true,
    port: 3434,
  },
  log: {
    level: 'info',
    filename: 'log.txt',
    filedir: path.join(__dirname, '../../log'),
  },
};

export default config;
