import fetch, { Response } from 'node-fetch';
import AbstractLogger from 'src/core/logger/AbstractLogger';
import AbstractSetting from 'src/core/config/AbstractSetting';
import { ActionRequest, ActionResponse } from 'src/interfaces/types.d';

export default class HttpConnector {
  constructor(private logger: AbstractLogger, private setting: AbstractSetting) {
    this.logger.info('Setting connection to http server');
  }

  public async performHttpRequest(request: ActionRequest): Promise<ActionResponse> {
    const URL = `http://${this.setting.config.server.host}:${this.setting.config.server.port}/${request.url}`;
    const headers = {
      'Content-Type': 'applications/json; charset=utf-8',
      Connection: 'keep-alive',
    };
    let response: Response;
    let result: ActionResponse;
    try {
      response = await fetch(URL, {
        method: 'POST',
        body: request.body,
        timeout: request.timeout,
        headers,
      });

      result = await response.json();

      return {
        status: result.status,
        message: result.message,
        result: JSON.stringify(result.result),
      };
    } catch (error) {
      this.logger.debug(`User action failed, message is - ${error.message}`);
      return { status: error.status, message: error.message };
    } finally {
      this.logger.info(`got mutation action to url: ${request.url}`);
    }
  }
}
