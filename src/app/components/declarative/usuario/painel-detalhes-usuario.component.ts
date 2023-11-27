import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, combineLatest, forkJoin, map, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-painel-detalhes-usuario',
    templateUrl: 'painel-detalhes-usuario.component.html'
})

export class PainelDetalhesUsuarioComponent implements OnInit {

    usuarioId: any;
    usuario: any;
    atendimentos$: Observable<any>;

    constructor(private _route: ActivatedRoute, private _usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuarioId = this._route.snapshot.params['id'];
        forkJoin([
            this._usuarioService.getUsuario(this.usuarioId).pipe(catchError(() => of(null))),
            this._usuarioService.getPrivilegios(this.usuarioId, 'atendimento'),
        ]).subscribe(([usuario, privilegios]) => {
            this.usuario = usuario;
            if (privilegios.privilegios.includes('VISUALIZAR')) {
                this.atendimentos$ = this._usuarioService.getAtendimentos(this.usuarioId);
            }
        });
    }
}