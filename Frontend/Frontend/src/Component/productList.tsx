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
        <section className="w-100" aria-labelledby="product-list-heading">
            <h2 id="product-list-heading">Products</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col" className="text-end">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map(({ id, price }) => (
                            <tr key={id}>
                                <th scope="row">Product {id}</th>
                                <td className="text-end">{price.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">Total</th>
                            <td className="text-end fw-bold">{total.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    );
}


export default ProductList