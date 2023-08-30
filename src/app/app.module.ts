import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlComponent } from './pages/control/control.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from '@angular/forms';

import { PimengModule } from './shared/pimeng/pimeng.module'
import { FiltroPipe } from './pages/control/pipe/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    HomeComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    PimengModule
  ],
  providers: [],
  exports:[ControlComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
