const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <form className='border flex flex-col w-96 items-center gap-5'>
                <h2 className='font-bold text-2xl'>Login</h2>
                <label htmlFor="">email</label>
                <input placeholder='email address' className='border' type="text" />
                <label htmlFor="">password</label>
                <input placeholder='password' className='border' type="password" /></form>

        </div>
    )
}

export default Login