import {useState, useEffect} from "react";
import Products from "./Products";
import {getMyProducts} from "../../services/products";
import {getPublicProducts} from "../../services/products";
import {publishMyProduct} from "../../services/products";

export default function Exchange(){

    const [myProducts, setMyProducts] = useState([]);
    const [publicProducts, setPublicProducts] = useState([]);
    const [product, setProduct] = useState({
        id: myProducts.length+1,
        name: 'Name',
        price: 'Price',
        description: 'Description',
        negotiation: false
    });
    let negotiationEl = document.getElementById('negotiation');
    // useEffect for loading my products
    useEffect( () => {
        let mounted = true;
        getMyProducts()
            .then(items => {
               if(mounted){
                   setMyProducts(items);
               }
            });
        return () => mounted = false;
    },[product]);

    // useEffect for loading public products
    useEffect( () => {
        let mounted = true;
        getPublicProducts()
            .then(items => {
                if(mounted){
                    setPublicProducts(items);
                }
            });
        return () => mounted = false;
    },[product]);

    function handleChange(e){

        console.log("check working"+ e.target.checked);

        if(e.target.id === "negotiation" && e.target.checked === true){
            setProduct({
                ...product,
                negotiation: !negotiation})
            console.log("check working"+ product.negotiation);
        }
        console.log("check working"+ e.target.checked);
        //
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        // console.log(product);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        publishMyProduct(product);

    };

    return(
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input name="name" type="text" className="form-control" placeholder="name"
                                   aria-label="name" onChange={handleChange} value={product.name}/>
                        </div>
                        <div className="col">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input name="price" type="text" className="form-control" placeholder="price"
                                   aria-label="price" onChange={handleChange} value={product.price}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input name="description" type="description" className="form-control" id="description"
                               aria-describedby="description" onChange={handleChange} value={product.description}/>
                            <div id="description" className="form-text">We'll never share your email with anyone else.
                            </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input name="negotiation" type="checkbox" className="form-check-input" id="negotiation"
                               onChange={handleChange} value={product.negotiation}/>
                            <label className="form-check-label" htmlFor="negotiation">Open to negotiate</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Publish</button>
                </form>
            </div>

            <div className="exchange-container">
                <Products name="My Products" products={myProducts}/>
                <Products name="Public Products" products={publicProducts}/>
            </div>

        </>
    )
}