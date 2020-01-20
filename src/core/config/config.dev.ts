import * as path from 'path';
import { IConfig } from 'src/interfaces/IConfig';

const config: IConfig = {
  log: {
    level: 'debug',
    filename: 'log.txt',
    filedir: path.join(__dirname, '../../log'),
  },
  server: {
    host: 'localhost',
    port: 1234,
  },
};

export default config;
