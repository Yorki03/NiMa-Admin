import { Component, OnInit } from '@angular/core';
import { FunctionPedido } from './functions/get-pedido';
import { PedidosService } from 'src/app/shared/service/pedidos.service';
import { Variable } from './utils/variables';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  
  variable = new Variable
  idProducto:any = { 
    id:''
  }
  
  constructor(private pedidoService: PedidosService){}
  
  ngOnInit(): void {
    FunctionPedido.getAll(
      this.pedidoService,
      this.variable
    );
    
  }

  actualizar(){
    FunctionPedido.getAll(
      this.pedidoService,
      this.variable
    );
    
  }

  verProducto(){
    const {id} = this.idProducto 
    if (id != 0) {
      this.pedidoService.getProductoPedido(id).subscribe({
        next:(prod) => {
          this.variable.producto = prod;
        },error:(err) => {
          console.log(err);        
        },
      });

      this.variable.bandera = true;
      console.log(id);

    } else {
      this.variable.bandera = false;
      console.log(this.variable.bandera);
      
    } 
    
  }
  
}
