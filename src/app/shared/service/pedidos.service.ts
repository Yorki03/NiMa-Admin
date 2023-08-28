import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Pedidos } from 'src/app/pages/control/models/pedidios';
import { handleError } from '../functions/http-error';
import { Producto } from 'src/app/pages/control/models/producto';
import { SelecPedido, SelecProduct } from 'src/app/pages/control/interface/interface';

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

  getProductoPedido(filtro: SelecProduct): Observable<Producto[]>{
    return this.http.get<Producto[]>(`http://localhost:3100/producto/${filtro.id_producto}`).pipe(
      map((res) => res.map((producto) => new Producto(producto))),
      catchError(handleError)
    );
  }

  deletePerdidpUser(filtro: SelecPedido): Observable<Pedidos[]>{
    return this.http.delete<Pedidos[]>(`http://localhost:3100/borrar-pedido/${filtro.id_pedido}`).pipe(
      map((res) => res.map((pedido) => new Pedidos(pedido))),
      catchError(handleError)
    )
  }
}
