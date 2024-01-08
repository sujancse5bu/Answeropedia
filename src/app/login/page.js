'use client'
import React, { useState } from 'react';

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const loginHandler =() => {
            alert(username +"------->"+password)
    }
    return (
        <div>
           <div className='login-wrapper flex flex-col items-center justify-center w-10% mx-auto py-8 px-2 rounded-xl border border-gray-200'>
<h4 className='text-center text-balance text-3xl font-mono my-4'>Login</h4>
<div className='h-2'></div>
<div className='login-form'>
<div className='username-wrapper my-2 flex flex-col items-center justify-center'>
<label className='my-2 text-left' >Username</label>
<input onChange={(e)=>{setUsername(e.target.value)}} type='text' name='username' value={username} className='px-2 py-2 border border-gray-400 rounded-xl' placeholder='rahatcse5bu'></input>
</div>
<div className='password-wrapper my-2 flex flex-col items-center justify-center'>
<label className='my-2 text-left' >Password</label>
<input onChange={(e)=>{setPassword(e.target.value)}} type='password' name='password' value={password} className='px-2 py-2 border border-gray-400 rounded-xl' placeholder=''></input>
</div>
<div className='login-btn-wrapper my-2'>
<div onClick={loginHandler} className='text-center px-4 py-2 border bg-slate-700 font-semibold text-white border-gray-200 rounded-2xl'>Login</div>
</div>
</div>
           </div>
        </div>
    );
};

export default page;