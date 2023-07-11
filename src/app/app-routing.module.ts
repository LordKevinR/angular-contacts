import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { EditComponent } from './View/edit/edit.component';
import { NewComponent } from './View/new/new.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'new', component:NewComponent},
  { path: 'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, NewComponent, EditComponent]
