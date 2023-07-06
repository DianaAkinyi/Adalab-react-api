import React,{useState,useEffect} from "react";


const Products = () => {
    const [products,setProduct]=useState([])
    const[loading,setLoading]=useState([false])
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()

    },[])
    console.log({products});
    const getProducts=async()=>{
        try{
            setLoading(true)
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProduct(result.products)
            setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>loading....</h2>    
    }
    
    return(
        <div>
            <h1>All products</h1>
            {products.map(item =>(
                <div key={item.id}>
                 <img src={item.images[0]} alt="images"/>
                <h2>{item.title}</h2>
                <p> {item.price}</p>
                <p>{item.discountPercentage}</p>
                </div>
            ))}
        </div>
    )
}
export default Products