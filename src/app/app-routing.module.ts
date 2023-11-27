import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'declarative', loadChildren: () => import('./components/declarative/declarative.module').then(m => m.DeclarativeModule) },
  { path: 'imperative', loadChildren: () => import('./components/imperative/imperative.module').then(m => m.ImperativeModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
