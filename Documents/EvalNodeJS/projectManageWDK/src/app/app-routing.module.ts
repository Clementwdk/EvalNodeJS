import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { HomealariesComponent } from './pages/homealaries/homealaries.component';

const routes: Routes =[
	
	{
		path:'',
		component: HomealariesComponent,
	},
	{
		path: 'clients',
		component: ClientsComponent,
	},
	{
		path: 'projets',
		component : ProjetsComponent,
	},
	{
		path : 'salaries',
		component : SalariesComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


