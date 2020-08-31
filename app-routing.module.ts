import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EditarComponent } from './components/editar/editar.component'
import { ValidarComponent } from './components/validar/validar.component';

const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"formulario", component:FormularioComponent},
    {path:"tabla", component:TablaComponent},
    {path:"editar", component:EditarComponent},
    {path:"validar", component:ValidarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
