import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiamanteComponent } from './diamante/diamante.component';
import { EsmeraldaPipe } from './libs/pipes/esmeralda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiamanteComponent,
    EsmeraldaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
