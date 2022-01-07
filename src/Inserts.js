//El campo fechaRepuesto se refiere al día que se volverá a reponer en tienda el producto
/*El campo grandesEmpresas es un boolean que cuando sea true significa que el producto 
esta dirigido para cualquier público, pequeñas empresas y grandes empresas, si es false 
es que solo será para venta al público y pequeñas empresas*/
//El campo precioUnidad es lo que le cuesta a la drogueria comprar el producto
db.drogueria.drop()
db.drogueria.insertMany([
    {   id:1,
        articulo: "Papel Higiénico",
        marca: "Foxy",
        compuesto: "Seda",
        vendedor:"Antonio José",
        precioUnidad:0.70,
        precioBase: 2.94,
        precioRebaja: 1.70,
        mesesOferta:["febrero","marzo","septiembre","diciembre"],
        fechaRepuesto: new Date("2022-03-12"),
        grandesEmpresas: true,
        clienteHabitual:"Supermercado S.L",
        unidades: 3000,
        tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 5}]
    },
    {   id:2, articulo: "Papel Higiénico", marca: "Foxy", compuesto: "Seda", vendedor:"Antonio José", precioUnidad: 1.50, precioBase: 3.25, precioRebaja: 2.00, mesesOferta:["enero","marzo","agosto"], fechaRepuesto: new Date("2021-12-30"), grandesEmpresas: true, clienteHabitual:"Supermercado S.L", unidades: 7000 , tiempoReparto: [{comprador:"empresa", dias: 1},{comprador: "cliente", dias: 3}]},
    {   id:3, articulo: "Papel Higiénico", marca: "Foxy", compuesto: "Fibra", vendedor:"María Fernández", precioUnidad: 0.85, precioBase: 2.65, precioRebaja: 1.95, mesesOferta:["marzo","abril","septiembre"], fechaRepuesto: new Date("2022-01-23"), grandesEmpresas: true, clienteHabitual:"Bar Pepe", unidades: 4500, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 4}]},
    {   id:4, articulo: "Papel Higiénico", marca: "Colhogar", compuesto: "Fibra", vendedor:"Antonio José", precioUnidad: 1.25, precioBase: 2.99, precioRebaja: 2.50, mesesOferta:["mazo","mayo"], fechaRepuesto: new Date("2022-04-01"), grandesEmpresas: false, clienteHabitual:"Bar Pepe", unidades: 1000, tiempoReparto: [{comprador:"empresa", dias: 3},{comprador: "cliente", dias: 5}]},
    {   id:5, articulo: "Lejía", marca: "Estrella", compuesto: "limón", vendedor:"Antonio José", precioUnidad: 0.25, precioBase: 1.50, precioRebaja: 0.80, mesesOferta:["diciembre"], fechaRepuesto: new Date("2022-02-15"), grandesEmpresas: true, clienteHabitual:"Supermercado S.L", unidades: 9000, tiempoReparto: [{comprador:"empresa", dias: 1},{comprador: "cliente", dias: 3}]},
    {   id:6, articulo: "Desinfectante", marca: "Sanytol", compuesto: "lavanda", vendedor:"Antonio José", precioUnidad: 0.95, precioBase: 2.89, precioRebaja: 2.00, mesesOferta:["enero","abril","noviembre"], fechaRepuesto: new Date("2022-01-02"), grandesEmpresas: true, clienteHabitual:"Limpiatodo Company", unidades: 5500, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 5}]},
    {   id:7, articulo: "Lejía", marca: "Neutrex", compuesto: "neutro", vendedor:"María Fernández", precioUnidad: 0.30, precioBase: 1.89, precioRebaja: 1.20, mesesOferta:["marzo"], mesesOferta:[""], fechaRepuesto: new Date("2022-02-09"), grandesEmpresas: false, clienteHabitual:"Limpiatodo Company", unidades: 2700, tiempoReparto: [{comprador:"empresa", dias: 3},{comprador: "cliente", dias: 5}]},
    {   id:8, articulo: "Desinfectante", marca: "Disiclin", compuesto: "limón", vendedor:"Antonio José", precioUnidad: 0.17, precioBase: 1.99, precioRebaja: 1.00, mesesOferta:["agosto","septiembre","octubre"], fechaRepuesto: new Date("2022-05-10"), grandesEmpresas: false, clienteHabitual:"Supermercado S.L", unidades: 3000, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 5}]},
    {   id:9, articulo: "Gel de Baño", marca: "Lactovit", compuesto: "almendra", vendedor:"Francisco Aguilar", precioUnidad: 0.90, precioBase: 2.69, precioRebaja: 2.10, mesesOferta:["junio","julio"], fechaRepuesto: new Date("2022-10-30"), grandesEmpresas: false, clienteHabitual:"Limpiatodo Company", unidades: 15000, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 4}]},
    {   id:10, articulo: "Gel de Baño", marca: "Babaria", compuesto: "leche", vendedor:"Antonio José", precioUnidad: 1.20, precioBase: 2.55, precioRebaja: 2.05, mesesOferta:["febrero","marzo"], fechaRepuesto: new Date("2022-05-20"), grandesEmpresas: true, clienteHabitual:"Farmacia Nala", unidades: 12000, tiempoReparto: [{comprador:"empresa", dias: 1},{comprador: "cliente", dias: 2}]},
    {   id:11, articulo: "Shampoo", marca: "Johnsons", compuesto: "limón", vendedor:"Antonio José", precioUnidad: 0.40, precioBase: 1.38, precioRebaja: 1.00, mesesOferta:["enero","marzo","octubre"], fechaRepuesto: new Date("2022-11-03"), grandesEmpresas: false, clienteHabitual:"Supermercado S.L", unidades: 8000, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 3}]},
    {   id:12, articulo: "Shampoo", marca: "Johnsons", compuesto: "neutro", vendedor:"Daniel Díaz", precioUnidad: 1.10, precioBase: 3.39, precioRebaja: 2.25, mesesOferta:["junio","septiembre"], fechaRepuesto: new Date("2022-04-20"), grandesEmpresas: true, clienteHabitual:"Farmacia Nala", unidades: 11550, tiempoReparto: [{comprador:"empresa", dias: 1},{comprador: "cliente", dias: 1}]},
    {   id:13, articulo: "Suavizante", marca: "Mimosin", compuesto: "jazmín", vendedor:"Francisco Aguilar", precioUnidad: 1.25, precioBase: 2.49, precioRebaja: 2.08, mesesOferta:["marzo","abril","mayo"], fechaRepuesto: new Date("2022-06-06"), grandesEmpresas: true, clienteHabitual:"Limpiatodo Company", unidades: 3700, tiempoReparto: [{comprador:"empresa", dias: 2},{comprador: "cliente", dias: 7}]},
    {   id:14, articulo: "Suavizante", marca: "Vernel", compuesto: "flores", vendedor:"Daniel Díaz", precioUnidad: 0.75, precioBase: 2.29, precioRebaja: 1.98, mesesOferta:["enero", "diciembre"], fechaRepuesto: new Date("2022-07-11"), grandesEmpresas: false, clienteHabitual:"Limpiatodo Company", unidades: 2100, tiempoReparto: [{comprador:"empresa", dias: 3},{comprador: "cliente", dias: 5}]},
    {   id:15, articulo: "Detergente", marca: "Dixan", compuesto: "polvo", vendedor:"María Fernández", precioUnidad: 3.00, precioBase: 7.99, precioRebaja: 6.89, mesesOferta:["marzo","junio","julio","agosto"], fechaRepuesto: new Date("2022-03-27"), grandesEmpresas: true, clienteHabitual:"Limpiatodo Company", unidades: 3200, tiempoReparto: [{comprador:"empresa", dias: 1},{comprador: "cliente", dias: 4}]}
])