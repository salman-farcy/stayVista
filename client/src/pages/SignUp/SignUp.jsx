import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
// import Button from '../../components/Button/Button'
import { useState } from 'react'
// import axios from 'axios'
import { imageUpload } from '../../api/utils'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/auth'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [image, setImage] = useState(' ')


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //uplode image
      const imageData = await imageUpload(image)

      //User Registration
      const result = await createUser(email, password)
      console.log(result);

      //save user name & profile photo
      await updateUserProfile(name, imageData?.data?.display_url)


      //Save user data in Database 
      const dbReaponse = await saveUser(result?.user)
      console.log(dbReaponse);


      //get token
      await getToken(result?.user?.email)
      navigate('/')
      toast.success('Signup Successful')

    }
    catch (err) {
      toast.error(err?.message)
    }
  }


  //Handle Google signIn
  const handleGoogleSignIn = async () => {
    try {
      //User Registration Using Google
      const result = await signInWithGoogle()
      console.log(result);

      //Save user data in Database 
      const dbReaponse = await saveUser(result?.user)
      console.log(dbReaponse);

      //get token
      await getToken(result?.user?.email)
      navigate('/')
      toast.success('Signup Successful')
    }
    catch (err) {
      toast.error(err?.message)
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to StayVista</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                onBlur={(e) => setName(e.target.value)}
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                onBlur={(e) => setImage(e.target.files[0])}
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className='animate-spin m-auto' />
                : "Continue"}
            </button>
            {/* <Button label={'Continue'}></Button> */}
          </div>
        </form>

        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>

        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
