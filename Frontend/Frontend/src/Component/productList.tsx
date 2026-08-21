import { useMemo } from "react";


interface Product{
    id:number;
    price:number;
}

const ProductList = ({product}: {product:Product[]}) => {

    const total = useMemo(() => {
        console.log("Recalculating total price...")
        return product.reduce((sum, p) => sum + p.price, 0);
    }, [product]);
    
    return (
        <div>
            <h1>Total: {total}</h1>
        </div>
    );
}


export default ProductList