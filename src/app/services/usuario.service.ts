import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioService {
    
    constructor() { }

    getUsuario(usuarioId: number): Observable<any> {
        if (!usuarioId) return throwError(() => new Error('ID do usuário não informado'))
        return of(
            {
                id: usuarioId,
                nome: 'João da Silva',
                email: 'joaodasilva@mail.com',
                admin: true
            }
        );
    }

    getPrivilegios(usuarioId: number): Observable<any> {
        if (!usuarioId) return throwError(() => new Error('ID do usuário não informado'))
        return of(
            [
                {
                    id: 'CONTROLE',
                    nome: 'Acesso ao painel de controle'
                },
                {
                    id: 'FAVORITOS',
                    nome: 'Acesso aos favoritos'
                }
            ]
        );
    }

    getUltimoLogin(usuarioId: number): Observable<any> {
        if (!usuarioId) return throwError(() => new Error('ID do usuário não informado'))
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return of(
            {
                id: usuarioId,
                data: date
            }
        );
    }

    getAlteracoesNaData(usuarioId: number, data: any): Observable<any> {
        if (!usuarioId) return throwError(() => new Error('ID do usuário não informado'))
        if (!data) return throwError(() => new Error('Data não informada'));
        return of(
            [
                {
                    id: 1,
                    alteracao: 'Nome alterado para João da Silva',
                    data: data
                },
                {
                    id: 2,
                    alteracao: 'Email alterado para joaodasilva@mail.com',
                    data: data
                }
            ]
        );
    }
    

}