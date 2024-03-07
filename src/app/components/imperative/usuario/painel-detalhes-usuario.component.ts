import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-painel-detalhes-usuario',
    templateUrl: 'painel-detalhes-usuario.component.html'
})

export class PainelDetalhesUsuarioComponent implements OnInit, OnDestroy {

    private _subscription$: Subscription[] = [];
    usuario: any;
    alteracoes: any[] = [];

    constructor(private _route: ActivatedRoute, private _usuarioService: UsuarioService) {}

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            const usuarioId = params['id'] || 1;
            this._subscription$.push(
                this._usuarioService.getUsuario(usuarioId).subscribe(usuario => {
                    this.usuario = usuario;
                })
            );
            this._subscription$.push(
                this._usuarioService.getPrivilegios(usuarioId).subscribe(privilegios => {
                    if (this._temPrivilegioControle(privilegios)) {
                        this._subscription$.push(
                            this._usuarioService.getUltimoLogin(usuarioId).subscribe(ultimoLogin => {
                                this._subscription$.push(
                                    this._usuarioService.getAlteracoesNaData(usuarioId, ultimoLogin.data).subscribe(alteracoes => {
                                        this.alteracoes = alteracoes;
                                    })
                                );
                            })
                        );
                    }
                })
            );
        });
    }

    ngOnDestroy(): void {
        this._subscription$.forEach(s => s.unsubscribe());
    }

    private _temPrivilegioControle(privilegios: any[]) {
        return !!privilegios.find(p => p.id === 'CONTROLE');
    }
}