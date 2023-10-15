import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    const router = useNavigate()

    useEffect(() => {
        async function addProduct() {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            console.log(data)
            setProducts(data)
        }
           
                addProduct()
            
        

        
    },[])
    return (
        <div>{products?.length ? 
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>{products.map((pro) => (
            <div style={{width:"20%", height:"400px"}} onClick={() => router(`/singleProduct/${pro.id}`)}>
                <img style={{width:"100%",height:"300px"}} src={pro.image} alt="img"/>
                <h1>name:{pro.title}</h1>
            </div>
        ))}</div> :
            <div>loading.....</div>}
        </div>
    )
}

export default Products