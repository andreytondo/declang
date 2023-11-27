import { NgModule } from '@angular/core';
import { ImperativeComponent } from './imperative.component';
import { CommonModule } from '@angular/common';
import { PainelDetalhesUsuarioComponent } from './usuario/painel-detalhes-usuario.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        ImperativeComponent,
        PainelDetalhesUsuarioComponent
    ],
    providers: [],
})
export class ImperativeModule { }
