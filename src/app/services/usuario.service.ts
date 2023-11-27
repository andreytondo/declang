import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioService {
    
    constructor() { }
    
    getUsuario(usuarioId: number): Observable<any> {
        // throw new Error('Method not implemented.');
        
        return of({
            id: 1,
            nome: 'João',
            idade: 20,
        });
    }

    getPrivilegios(usuarioId: number, tela: string): Observable<any> {
        return of({
            usuario: {
                id: 1,
            },
            tela: tela,
            privilegios: ['VISUALIZAR', 'EDITAR', 'EXCLUIR']
        });
    }

    getAtendimentos(usuarioId: number): Observable<any> {
        return of([
            {
                id: 1,
                usuario: {
                    id: 1,
                },
                data: '2019-01-01',
                hora: '10:00',
                observacao: 'Atendimento 1'
            },
            {
                id: 2,
                usuario: {
                    id: usuarioId,
                },
                data: '2019-01-02',
                hora: '11:00',
                observacao: 'Atendimento 2'
            },
            {
                id: 3,
                usuario: {
                    id: usuarioId,
                },
                data: '2019-01-03',
                hora: '12:00',
                observacao: 'Atendimento 3'
            }
        ]);
    }

}