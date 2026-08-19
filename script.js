let products = [
    { Product: "Mouse", Price: 50000 },
    { Product: "Teclado", Price: 80000 },
    { Product: "Audifonos", Price: 60000 },
    { Product: "Cargador", Price: 70000},
    { Product: "Celular", Price: 1200000}
];

const list = document.getElementById("list-products");

// Acá en el forEach estamos listando los productos, 1 por 1 para mostrarlos en tabla de lista-productos
products.forEach((p, index) => {
    let price = new Intl.NumberFormat('es-CO', { 
        maximumFractionDigits: 0 
    }).format(p.Price);


    const li = document.createElement("li");
    
    li.textContent = `${index + 1}. ${p.Product} $${price}`;
    
    list.appendChild(li);
});
