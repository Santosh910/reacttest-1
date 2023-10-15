import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


const SingleProduct = () =>{
    const[product, setProduct] = useState([])

    const {id} = useParams([])

    useEffect(() => {
        async function singlepro(){
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(data)
            setProduct(data)
        }
        singlepro()
    },[id])

    return(
        <div>
            <div>
                <img src={product.image} alt="imh" />
            </div>
            <div></div>
        </div>
    )
}

export default SingleProduct