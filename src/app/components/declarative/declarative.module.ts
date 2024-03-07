import { NgModule } from '@angular/core';

import { DeclarativeComponent } from './declarative.component';
import { PainelDetalhesUsuarioComponent } from './usuario/painel-detalhes-usuario.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: DeclarativeComponent,
    },
  ];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [
        DeclarativeComponent,
        PainelDetalhesUsuarioComponent
    ],
    providers: [],
})
export class DeclarativeModule { }
