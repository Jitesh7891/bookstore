import React, { useRef,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { setUser } from '../state/action-creator';
import { useDispatch } from 'react-redux';
import { actioncreators } from '../state';

export default function Login(){
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
    // navigate("/")
  }
},[])

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
      

  const handleSubmit = async(e) => {

    e.preventDefault()
          const username = usernameRef.current.value;
          const password = passwordRef.current.value;

          const response=await fetch("https://bookstore-api-n7i3.onrender.com/api/login",{
            method:"POST",
            headers: {
              'Content-Type':
                  'application/json;charset=utf-8'
          },
          body:JSON.stringify({username,password})
          }) 
          const jsonresponse=await response.json()
          console.log(jsonresponse)
          if(jsonresponse.success){
            const token=jsonresponse.authtoken
            sessionStorage.setItem('token',token);
            
            const userdata=await fetch('https://bookstore-api-n7i3.onrender.com/api/getuser'
            ,{
              method:"POST",
              headers:{
                'Content-Type':'application/json;charset=utf-8',
                'authtoken':token
              }
            }
            )
            const response=await userdata.json()
            console.log(response.username,response.email)
            try{
            dispatch(actioncreators.setUser(response.username,response.email))
            }catch(error){
              console.log(error.message)
            }
            navigate("/")
          }
        }

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-200 to-white">
    <form className="flex-col justify-around items-center  w-[50vw] h-[47vh] bg-white p-10 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-5xl font-bold mb-4">Login</h2>
      <div className="mt-8 mb-4 ">
        <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600 text-xl"
        >
          Log in
        </button>
      </div>
    </form>
  </div>
);

}
