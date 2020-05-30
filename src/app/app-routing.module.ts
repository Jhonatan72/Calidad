import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { LoginComponent } from './login/login/login.component';
import { HotelesComponent } from './hoteles/hoteles.component';


const routes: Routes = [
{
  path: 'empleado',
component: EmpleadoComponent

},
{
  path: 'empresa',
  component: EmpresaComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'hoteles',
  component: HotelesComponent
},
{ 
  path: '**', redirectTo: 'login' 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
