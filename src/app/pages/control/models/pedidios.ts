export class Pedidos{
    id_pedido: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    id_producto: string;
    imagen: string;

    constructor(data: any){
        this.id_pedido = data.id_pedido;
        this.nombre = data.nombre;
        this.email = data.email;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.id_producto = data.id_producto;
        this.imagen = data.imagen
    }

    get idPedidio(){ return this.id_pedido; }
    get Nombre(){ return this.nombre; }
    get Email(){ return this.email; }
    get Telefono(){ return this.telefono; }
    get Direccion(){ return this.direccion; }
    get idProducto(){ return this.id_producto; }
    get url(){return '../../../assets/productos/'+ this.imagen + '.jpg'}

}