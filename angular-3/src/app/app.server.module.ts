import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {StorageService} from './storage.service';
import {ServerStorageService} from './server-storage.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: StorageService,
      useClass: ServerStorageService
    }
  ]
})
export class AppServerModule {}
