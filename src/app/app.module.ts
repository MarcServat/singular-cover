import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

import { InsuranceModel } from './models/insurance.model';
import { ApiService } from './components/services/api.service';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';

import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    RouterModule.forRoot(routes)
],
  providers: [ApiService, InsuranceModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
