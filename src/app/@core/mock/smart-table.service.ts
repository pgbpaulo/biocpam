import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 3,
    nome: 'Paulo',
  }];

  getData() {
    return this.data;
  }
}
