import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-painel-detalhes-usuario',
    templateUrl: 'painel-detalhes-usuario.component.html'
})

export class PainelDetalhesUsuarioComponent implements OnInit, OnDestroy {

    usuarioId: number;
    usuario: any;
    atendimentosUsuario: any[];
    privilegiosUsuario: any;
    subscriptions: Subscription[] = [];

    constructor(private _route: ActivatedRoute, private _usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuarioId = this._route.snapshot.params['id'];
        const usuario$ = this._usuarioService.getUsuario(this.usuarioId).subscribe(usuario => {
            this.usuario = usuario
            const privilegios$ = this._usuarioService.getPrivilegios(this.usuarioId, 'atendimento').subscribe(privilegios => {
                this.privilegiosUsuario = privilegios;
                if (this._podeVisualizar()) {
                    const atendimentos$ = this._usuarioService.getAtendimentos(this.usuarioId).subscribe(atendimentos => {
                        this.atendimentosUsuario = atendimentos;
                    });
                    this.subscriptions.push(atendimentos$);
                } else {
                    this.atendimentosUsuario = [];
                }
            });
            this.subscriptions.push(privilegios$);
        });
        this.subscriptions.push(usuario$);
    }

    private _podeVisualizar(): boolean {
        return this.privilegiosUsuario.privilegios.includes('VISUALIZAR');
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}