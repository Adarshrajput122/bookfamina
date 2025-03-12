import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div className="w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to ="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg ">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span> 
        <br />
        <input type="text" placeholder='Enter Your Full Nme' className='w-80 py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white ' 
        {...register("name", { required: true })}/>
        {errors.name && <p className="text-red-500">Email is required</p>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span> 
        <br />
        <input type="email" placeholder='Enter Your Email' className='w-80 py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("email", { required: true })} />
        {errors.email && <p className="text-red-500">Email is required</p>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span> 
        <br />
        <input type="text" placeholder='Enter Your Password' className='w-80 py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("password", { required: true })} />
        {errors.password && <p className="text-red-500">Password is required</p>}

    </div>

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
       <p className='texl-xl'>Have account?{" "}
        <button className='underline text-blue-500 cursor-pointer'
        onClick={()=>
                document.getElementById("my_modal_3").showModal()

        }> 
        Login
        </button>{" "}
        <Login />
       </p> 
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default signup
