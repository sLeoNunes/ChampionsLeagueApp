import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'lista', component: ListaComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  {
    path: '**',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
