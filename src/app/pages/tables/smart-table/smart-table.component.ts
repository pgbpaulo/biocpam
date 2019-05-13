import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      end: {
        title: 'Endereço',
        type: 'string',
      },
      bairro: {
        title: 'Bairro',
        type: 'string',
      },
      cidade: {
        title: 'Cidade',
        type: 'string',
      },
      estado: {
        title: 'Estado',
        type: 'string',
      },
      cep: {
        title: 'CEP',
        type: 'string',
      },
      fone1: {
        title: 'Fone 1',
        type: 'string',
      },
      fone2: {
        title: 'Fone 2',
        type: 'string',
      },
      CPF: {
        title: 'CPF',
        type: 'string',
      },
      IE: {
        title: 'IE',
        type: 'string',
      },
      hist: {
        title: 'Histórico',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
