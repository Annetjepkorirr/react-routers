import React, {useState} from "react";
import './style.css'
const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassward]=useState('')
    const handleSubmit=async(e) =>{
        e.preventDefault();
        const data ={
            username:username,
            password:password
        }
        try{
            const response =await  fetch  ('https://dummyjson.com/auth/login',{
               method:'POST',
               headers:{
                'content-Type':'application/json'
               } ,
               body:JSON.stringify(data)
            } )
            const result= await response.json()
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="forms">
                <h1>Login</h1>
                <div></div>
                <input placeholder="Enter username" type="text" className="user"
                onChange={(e)=>{setUsername(e.target.value)}} />
                <br/>
                <br/>
                <input placeholder="Enter password" type="password" className="user1"
                onChange={(e)=>{setPassward(e.target.value)}}/>
                
                <br/>
              <br/>
                <button className="button1">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;