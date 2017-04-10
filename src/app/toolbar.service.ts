import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { buttonsList } from './mock-toolbar-buttons-list';
import * as _ from 'lodash';

@Injectable()
export class ToolbarService {

  constructor() {}

  getButtonsList(): Promise<any[]> {
    let filteredButtonsList = _.filter(buttonsList, {"isVisible": true});
    return Promise.resolve(filteredButtonsList);
  }
}
