import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useLogout from '../hooks/useLogout'
import useLogin from '../hooks/useLogin'
import pb from '../lib/pocketbase'


function Auth( {children} ) {

    const { register, handleSubmit, reset } = useForm()
    const [loginState, setLoginState] = useState(pb.authStore.isValid)

    const logout = useLogout()
    const { mutate: login, isLoading, error } = useLogin()

    async function onSubmit(data) {
        login(data);
        reset();
    }

    useEffect(() => {
      setLoginState(pb.authStore.isValid)
    }, [login, logout])
    

    if(loginState) {
        return(
                <>
                    {children}
                </> 
        )
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {!pb.authStore.isValid &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" className='text-black flex mt-1 rounded-md p-1' />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <input {...register('password')} type="password" className='text-black flex mt-1 rounded-md p-1' />
                        </div>


                    </fieldset>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className='mt-4 border border-white hover:bg-white hover:text-black'>
                        {isLoading ? 'Loading' : 'Login'}
                    </button>
                </form>
            }
        </div>
    )
}


function Login() {
    return (
        <div></div>
    )
}
function Register() {
    
}


export default Auth