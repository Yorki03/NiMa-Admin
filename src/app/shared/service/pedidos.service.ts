import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Pedidos } from 'src/app/pages/control/models/pedidios';
import { handleError } from '../functions/http-error';

import { SelecPedido } from 'src/app/pages/control/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  getPedidosUser(): Observable<Pedidos[]>{
    return this.http.get<Pedidos[]>('http://localhost:3100/pedidos').pipe(
      map((res) => res.map((pedidos) => new Pedidos(pedidos))),
      catchError(handleError)
    );
  }

  deletePerdidpUser(filtro: number){
    return this.http.delete<SelecPedido>(`http://localhost:3100/borrar-pedido/${filtro}`).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }
}
