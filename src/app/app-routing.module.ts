import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ObjectListComponent } from './views/object-list/object-list.component';
import { IndividualMonsterListComponent } from './views/list/individual-monster-list/individual-monster-list.component';


const routes: Routes = [ { path: 'list', component: ListComponent },
{ path: 'us', component: AboutUsComponent },
{ path: '', redirectTo: '/list', pathMatch:'full'},
{ path: 'object-list', component:ObjectListComponent},
{ path: 'monster-information', component:IndividualMonsterListComponent},
{ path:'**', component:PageNotFoundComponent} 
];

@NgModule({
  declarations: [],
  exports: [RouterModule], 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
