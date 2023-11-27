import { NgModule } from '@angular/core';

import { DeclarativeComponent } from './declarative.component';
import { PainelDetalhesUsuarioComponent } from './usuario/painel-detalhes-usuario.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        DeclarativeComponent,
        PainelDetalhesUsuarioComponent
    ],
    providers: [],
})
export class DeclarativeModule { }
