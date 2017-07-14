import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MultifilterTableComponent } from './multifilter-table/multifilter-table.component';
import { DataServiceService } from './multifilter-table/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MultifilterTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
