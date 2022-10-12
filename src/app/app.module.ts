import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjectListComponent } from './views/object-list/object-list.component';
import { ObjectEntreeComponent } from './views/object-list/object-entree/object-entree.component';
import { IndividualMonsterListComponent } from './views/list/individual-monster-list/individual-monster-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    ObjectListComponent,
    EntreeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ObjectListComponent,
    ObjectEntreeComponent,
    IndividualMonsterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
