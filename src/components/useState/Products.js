import Product from "./Product";
import {useEffect} from "react";

export default function Products({name, products}){

    function handleRow(){

    }

    return (
        <>
            <div className="products-container container-sm">
                <h1 scope="col">{name}</h1>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Negotiation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products?.map(product => <Product key={product.id} product={product}/>)}
                    </tbody>

                </table>
                <div>
                    {name === "My Products" && <h5>Select products you want to make public:</h5> }
                    {name === "My Products" && <button type="submit" className="btn btn-primary">Make public</button>}
                </div>

            </div>

        </>
    )
}