import { Component, OnInit } from '@angular/core';
import { FunctionPedido } from './functions/get-pedido';
import { PedidosService } from 'src/app/shared/service/pedidos.service';
import { Variable } from './utils/variables';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {

  variables = new Variable
  page: number = 0;
  search: string = '';
  
  constructor(
    private pedidoService: PedidosService,
    ){}
  
  ngOnInit(): void {
    FunctionPedido.getAll(
      this.pedidoService,
      this.variables
    );
  }

  nextPage(){
    this.page += 10;
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 10;
    }
  }


  deleteSelectedProducts(){
    
  }

  deleteProduct(id: number){
    this.pedidoService.deletePerdidpUser(id).subscribe();
  }
  
}
