import AbstractLogger from 'src/core/logger/AbstractLogger';
import HttpConnector from 'src/data/connector/HttpConnector';
import { ActionRequest, ActionResponse } from 'src/interfaces/types.d';

export default class HttpManager {
  constructor(private logger: AbstractLogger, private connector: HttpConnector) {}

  public async doHttp(request: ActionRequest): Promise<ActionResponse> {
    return this.connector.performHttpRequest(request);
  }
}
