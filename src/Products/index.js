import React,{useEffect,useState} from "react";
import './style.css'
const Product=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()
    },[]);
    console.log({products});
    const getProducts=async ()=>{
        try{
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProducts(result.products)
            setLoading(false)
        }
          catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>loading...</h2>
    }
    return(
        <div>
        <h2 className="lists" >List of Products</h2>
            <div className="images">
            {products.map(item=>(
                
                
                <div key={item.id} className = "placecolor" >
                    <img className="img" src= {item.thumbnail}/>
                    <h3>{item.title}</h3>
                    {/* <p className="description" >{item.description}</p> */}
                    <h3 className="price">{item.price}</h3>

                    <p className="discount">{item.discountPercentage}</p>


                    </div>
                    
            ))}
        </div>
        </div>
    )
}
export default Product;