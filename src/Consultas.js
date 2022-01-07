//Agrupa las catergorias, muestra las unidades totales y el número de categorias que existen

db.drogueria.aggregate([{
    $group:{_id: "$articulo", cantidadDeArticulo: {$sum: "$unidades"},
    cantidadDeCategorias:{$sum:1}}
}])

//Agrupa los articulos y multiplica el dinero por las unidades, para ver el dinero total que se debe recaudar (importe total de ventas)

db.drogueria.aggregate([{
    $group:{_id:"$articulo", cantidadDinero:{$sum:{$multiply:["$precioBase", "$unidades"]}}}
}])

//Beneficios totales en la drogueria por unidad

db.drogueria.aggregate([
    {$group:{ _id: "$articulo",
    dineroRecaudado:{$sum:{$multiply:["$precioBase", "$unidades"]}},
    dineroGastado:{$sum:{$multiply:["$precioUnidad", "$unidades"]}}
}},
    {
    $project:{
        beneficios:{$subtract:["$dineroRecaudado","$dineroGastado"] }
    }
}])



//Hace la media de los articulos que suele haber en stock de Lejía

db.drogueria.aggregate( [
    { $match: { articulo: "Lejía"} },
    { $group: { _id: "$articulo", cantidadUnidades: { $avg: "$unidades" },
   } }
] )

//Divide los articulos entre 5 y muestra la cantidad que esta destinada a las grandes empresas

db.drogueria.aggregate([
    {$group: { _id: "$articulo", cantidadUnidades: { $sum: "$unidades" }}}, 
    {$project:{unidadesGrandesEmpresas:{$divide:["$cantidadUnidades", 5]}}}
])

//Agrupa los articulos y muestra el dinero que se debe recaudar y la unidad maxima de cada producto

db.drogueria.aggregate([{
    $group:{_id:"$articulo",
            totalDinero:{$max: {$multiply:["$precioBase", "$unidades"]}},
            maximaCantidad:{$max: "$unidades"}
        }
}])

//Unidades totales repuestas en el 2022

db.drogueria.aggregate(
    [
        { $match: { $expr: { $gt: [{ $year: "$fechaRepuesto" }, 2021] } } },
        {
            $group:
            {
                _id: { $year: "$fechaRepuesto" },
                unidadesRepuestas: { $sum: { $multiply: [1.5, "$unidades"] } }
            }
        }
    ]
)


//Mejores vendedores (que ha generado más dinero a la empresa) El primero es el que más ha generado

db.drogueria.aggregate([{
    $group:{
    _id:{$max:"$vendedor"},
    totalDineroGenerado:{$sum:{$multiply:["$precioBase", "$unidades"]}}
            }
}])


//Mejores articulos ordenado por mas dinero generado a menos

db.drogueria.aggregate([{
    $group:{
        _id: {$max:"$articulo"},
        dineroArticulos:{$sum: {$multiply:["$precioBase", "$unidades"]}},
        
    }
}])






// OPERADOR para añadir un campo nuevo

db.drogueria.aggregate([{
    $addFields:{empleadosTienda:[10,15]}
}]).pretty()


// Articulos que superan las 3500 unidades respondiendo con true o false

db.drogueria.aggregate([{
    $project:{
        articulo:1,
        masde3500Unidades:{$gt:["$unidades",3500]},
        _id:0
    }
}])



