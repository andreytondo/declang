import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-painel-detalhes-usuario',
    templateUrl: 'painel-detalhes-usuario.component.html'
})

export class PainelDetalhesUsuarioComponent {


    constructor(private _route: ActivatedRoute, private _usuarioService: UsuarioService) { }


}