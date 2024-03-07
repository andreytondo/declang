import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, combineLatest, forkJoin, map, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-painel-detalhes-usuario',
    templateUrl: 'painel-detalhes-usuario.component.html'
})

export class PainelDetalhesUsuarioComponent implements OnInit {

    info$: Observable<any>;

    constructor(private _route: ActivatedRoute, private _usuarioService: UsuarioService) {}

    /**
     * Inicializa o componente
     * primeiro busca o id do usuário na rota
     * depois busca as informações do usuário e suas alterações simultaneamente
     * para buscar as alterações, verifica se o usuário tem o privilégio de controle
     * se tiver, busca o último login e as alterações na data do último login
     */
    ngOnInit() {
        this.info$ = this._route.params.pipe(
            switchMap(params => {
                const usuarioId = params['id'] || 1;
                return forkJoin({
                    usuario: this._usuarioService.getUsuario(usuarioId),
                    alteracoes: 
                        this._usuarioService.getPrivilegios(usuarioId).pipe(
                            switchMap(privilegios => {
                                if (this._temPrivilegioControle(privilegios)) {
                                    return this._usuarioService.getUltimoLogin(usuarioId).pipe(
                                        switchMap(ultimoLogin => {
                                            return this._usuarioService.getAlteracoesNaData(usuarioId, ultimoLogin.data);
                                        })
                                    )
                                }
                                return of(null);
                            })
                        )
                });
            })
        )
    }

    private _temPrivilegioControle(privilegios: any[]) {
        return !!privilegios.find(p => p.id === 'CONTROLE');
    }
}