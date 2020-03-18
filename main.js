import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Precios from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Cliente from "./cliente.js"
import ClienteFrecuente from "./clienteFrecuente.js"

import Pedido from "./pedido.js"

class Main {
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    testTiempo() {
        let tiempo = new Tiempo(13, 0, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    
    testClienteFrecuente() {
        let informacionCliente1 = {nombre: "Vanessa Covarrubias Nava", 
            direccion: new Direccion("Gral. Pablo Gonzalez", 473, 0, "Loma Bonita", 28984, "Villa de Alvarez", "Colima"), 
            telefono: 3122739451,
            numero: 2,
            fecha: new Fecha(7,3,2018)}
        let cliente = new ClienteFrecuente(informacionCliente1)
        console.log(cliente.getPerfil())
    }

    testDireccion() {
        let direccion1 = new Direccion("Gral. Pablo Gonzalez", 473, 0, "Loma Bonita", 28984, "Villa de Alvarez", "Colima")
        let direccion2 = new Direccion("Gral. Andrade", 478, 0, "Loma Buena", 28984, "Villa de Alvarez", "Colima")
        console.log(direccion1.getFormatoCorto())
        console.log(direccion1.getFormatoLargo())
        console.log(direccion2.getFormatoCorto())
        console.log(direccion2.getFormatoLargo())
    }

    testPrecios(){
        let precio1 = new Precios(200.44)
        console.log(precio1.getPrecio())
    }

    testProducto() {
        let producto1 = new Producto("Pizza Hawaiana", new Precios(600.50))
        console.log(producto1.getDescripcion())
    }

    testElementoPedido(){
        let pedido1 = new ElementoPedido(new Producto("Pizza mexicana grande", new Precios (289.45)), 3)
        console.log(pedido1.getDescripcion())
    }

    testCliente(){
        let informacionCliente1 = {nombre: "Vanessa Covarrubias Nava", 
        direccion: new Direccion("Gral. Pablo Gonzalez", 473, 0, "Loma Bonita", 28984, "Villa de Alvarez", "Colima"),
        telefono: 3121434929}
        let cliente = new Cliente(informacionCliente1)
        console.log(cliente.getPerfil())
    }
    testPedido(){
        let elemento1 = new ElementoPedido(new Producto("Pizza mexicana grande", new Precio (289.45)), 3)
        this.pedido.agregarElemento(elemento1)
        console.log(this.pedido.listarElementos())
    }
}

let app = new Main
app.testFecha()
app.testTiempo()
app.testDireccion()
app.testPrecios()
app.testProducto()
app.testElementoPedido()
app.testCliente()
app.testClienteFrecuente()