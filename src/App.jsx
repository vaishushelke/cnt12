import { useEffect, useState } from "react";
import Cardlist from "./Cardlist";

function App(){

    const[product,setProduct]=useState([]);

    // const getData = ()=>{
    //     fetch ("https://Localhost:3000/products")
    //     .then(data=>data.json())
    //     .then(data1=>setProduct(data1))
    // }
    // getData();

    const [cnt,setCnt] = useState(0);

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then(data=>data.json())
        .then(data1=>setProduct(data1))
    },[cnt])
    console.log(product);
    // })

    return(
        <>
        <p>this is parent component</p>
        <h1>E-products</h1>
        <button onClick={()=>setCnt(cnt+1)}>CallAPI</button>
        <Cardlist product1={product} />
        </>
    )
}
export default App;