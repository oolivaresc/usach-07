const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];
  

const productosDescuentos = products => {
    return products.filter(prod => prod.discount > 0);
}

console.log('\nProductos con descuentos: ', productosDescuentos(products));

const precioFinal = (products) => {
    return products.map(prod => {
        if(prod.price > prod.discount){
            prod.priceAfterDiscount = prod.price - prod.discount;
        }else{
            prod.priceAfterDiscount= prod.price;
        }
        return prod;
    });
}

console.log('\nProductos con precio final: ', precioFinal(products));

const stockBajo = products => {
    return products.filter(prod => prod.stock < 5);
}
console.log('\nProductos con stock bajo: ', stockBajo(products));


const actualizarProducto = (name, quantity) => {
    try{
        const prod = products.find(prod => prod.name === name);
        if(prod){
            prod.stock += quantity;
            console.log(`\nProducto ${prod.name} actualizado con nuevo stock ${prod.stock}`);
        }else{
            throw Error(`\nNo se puede actualizar el stock, el producto ${name} no existe!!!`);
        }
    }catch(e){
        console.error(e);
    }
}

actualizarProducto('Leche', 1000);

const resumenCategorias = (products) => {
    const categorias = [];
    categorias.push({'categoría': 'electrónica', 'total': products.filter(prod => prod.category === 'electrónica').length})
    categorias.push({'categoría': 'hogar', 'total': products.filter(prod => prod.category === 'hogar').length})
    categorias.push({'categoría': 'alimentos', 'total': products.filter(prod => prod.category === 'alimentos').length})
    return categorias
}

const categorias = resumenCategorias(products);
console.log('\nResumen categorías: ', categorias)