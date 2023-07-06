// import React ,{useState}from "react";
// import './style.css'
// import { Link,useNavigate } from "react-router-dom";


// const Login= () =>{
//     const[username,setUsername]=useState('');
//     console.log({username});
//     const[password,setPassword]=useState('')
//     console.log({password});

//     const handleSubmit = async(e)=>{
//        e.preventDefault()
//        const data ={
//         username:username,
//         password:password
//        }
//        try{
//         const response =await fetch('https://dummyjson.com/auth/login',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(data),
//        });
//        const result=await response.json();
//        console.log({result});
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
//     return(
//         <div>
//             <form className="form" onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <input placeholder="Enter your username" type="text" required
//                 onChange={(e)=>{setUsername(e.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <input placeholder="Enter password" type="password" required
//                 onChange={(a)=>{setPassword(a.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <Link to={'/Products'}>
//                 <button>Login</button>
//                 </Link>
//             </form>
//         </div>
//     )
// }
// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
const Login = () => {
  const[isSubmitted , setIssubmitted]=useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[message ,setmessage] = useState('');
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmitted(true)
    setmessage("Successfully logged in")
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    if(setmessage){
    }
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setLoginSuccess(true);
        setTimeout(() => {
          navigate('/products');
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1 className='login'>Login</h1>
      {loginSuccess && <p>Login successful!</p>}
      <form className='form' onSubmit={handleSubmit}>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter username'
          />
           <br/>
           <br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Enter password'
          />
          <br/>
          <br/>
        <button className="btn" type="submit">
          <Link to="/products">Login</Link>
          set
        </button>
      </form>
      {isSubmitted && <p>{message}</p>}
    </div>
  );
};
export default Login;