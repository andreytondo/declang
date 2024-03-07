import { NgModule } from '@angular/core';
import { ImperativeComponent } from './imperative.component';
import { CommonModule } from '@angular/common';
import { PainelDetalhesUsuarioComponent } from './usuario/painel-detalhes-usuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: ImperativeComponent,
    },
  ];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [
        ImperativeComponent,
        PainelDetalhesUsuarioComponent
    ],
    providers: [],
})
export class ImperativeModule { }
