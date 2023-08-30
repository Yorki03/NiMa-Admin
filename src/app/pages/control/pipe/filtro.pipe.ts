import { Pipe, PipeTransform } from '@angular/core';
import { Pedidos } from '../models/pedidios';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pedidos: Pedidos[], page: number = 0): Pedidos[] {

    return pedidos.slice(page, page + 10);       

  }

}
