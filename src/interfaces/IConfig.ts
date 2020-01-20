export interface IConfig {
  server: IServerConfig;
  log: ILoggerConfig;
}

interface IServerConfig {
  host: string;
  port: number;
}

interface ILoggerConfig {
  level: string;
  filename: string;
  filedir: string;
}
