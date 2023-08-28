import { PedidosService } from "src/app/shared/service/pedidos.service";
import { Variable } from "../utils/variables";

export module FunctionPedido{
    export function getAll(
        service: PedidosService,
        variable: Variable
    ){
        service.getPedidosUser().subscribe({
            next:(pedidos)=>{
                variable!.pedidos = pedidos;
            }, error:(error)=>{
                console.log(error);                
            }
        });
    }
}