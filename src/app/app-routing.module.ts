import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vagas',
    pathMatch: 'full'
  },
  {
    path: 'vagas',
    loadChildren: () => import('./pages/vagas/vagas.module').then(m => m.VagasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
