import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [ { path: 'list', component: ListComponent },
{ path: 'us', component: AboutUsComponent },
{ path: '', redirectTo: '/list', pathMatch:'full'},
{ path: 'list-items', redirectTo: '/list-items', pathMatch:'full'},
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
