import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { ClientsService } from './clients.service';

const environment = {
  apiKey: "AIzaSyCT0x4-Sp2c67NxyOYMvwUuqDaJbkE-1oM",
  authDomain: "cpam-47c43.firebaseapp.com",
  databaseURL: "https://cpam-47c43.firebaseio.com",
  projectId: "cpam-47c43",
  storageBucket: "cpam-47c43.appspot.com",
  messagingSenderId: "150021454322",
  appId: "1:150021454322:web:43ca2c7aebf42d36"
};

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    AngularFireModule.initializeApp(environment),
 	  AngularFirestoreModule,
  ],
  providers: [ClientsService],
  declarations: [
    ...routedComponents,
  ],
})
export class TablesModule { }
