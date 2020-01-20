import * as path from 'path';
import { IConfig } from 'src/interfaces/IConfig';

const config: IConfig = {
  log: {
    level: 'info',
    filename: 'log.txt',
    filedir: path.join(__dirname, '../../log'),
  },
  server: {
    host: 'localhost',
    port: 4000,
  },
};

export default config;
