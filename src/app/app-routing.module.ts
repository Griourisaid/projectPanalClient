import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './compenents/addclient/addclient.component';
import { DasbordComponent } from './compenents/dasbord/dasbord.component';
import { DetailclientComponent } from './compenents/detailclient/detailclient.component';
import { EditClientComponent } from './compenents/edit-client/edit-client.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { AuthgrawdGuard } from './goird/authgrawd.guard';

const routes: Routes = [
{path:'' , component: DasbordComponent , canActivate :[AuthgrawdGuard ]},
{path:'client' , component:AddclientComponent ,canActivate :[AuthgrawdGuard ]},
{path:'client/:id' , component:DetailclientComponent ,canActivate :[AuthgrawdGuard ]},
{path:'client/edit/:id' ,component:EditClientComponent ,canActivate :[AuthgrawdGuard ]},
{path:'login' ,component:LoginComponent},
{path:'regester' ,component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
