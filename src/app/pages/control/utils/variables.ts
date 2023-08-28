import { SelecPedido, SelecProduct } from "../interface/interface";
import { Pedidos } from "../models/pedidios";
import { Producto } from "../models/producto";

export class Variable{
    filtoPedido!: SelecPedido;
    filtroProducto!: SelecProduct;
    pedidos: Pedidos[] = [];
    producto: Producto[] = [];

    bandera: boolean = false;
}