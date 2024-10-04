import React, { useState } from 'react'
import SchoolIMG from '../assets/SchoolLogin.png'
import FormButton from '../components/FormButton'
import TextFeildInput from '../components/TextFeildInput'

const SignIn = () => {
    const [SignInData, SetSignInData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetSignInData({
          ...SignInData,
          [name]: value,
        });
    };

      
    const headleSignIn = (e) => {
        e.preventDefault()

        console.log('Form Data:', SignInData);
    }
  return (
    <div className='bg-[#6C63FF] w-full min-h-screen md:py-[10%] py-[20%]'>
        <div className="md:grid grid-cols-3 gap-3">
            <div className=""></div>
            <div className="">
                <div className="bg-white py-8 px-4 shadow-md rounded md:mx-0 mx-4">
                    <center>
                        <img src={SchoolIMG} alt="" className='h-40 w-auto'/>
                        <p className="text-[#6C63FF] uppercase text-xl font-semibold">Signin Here</p>
                    </center>

                    <form onSubmit={headleSignIn} method="post" className='my-6 mx-4'>
                        <div className="my-4">
                            <TextFeildInput name={'email'} InputType={"email"} PlaceText={"Email Address"} TextColor={"#6C63FF"} BorderColor={"#6C63FF"} value={SignInData.email} onChange={handleChange}/>
                        </div>
                        <div className="my-4">
                            <TextFeildInput name={'password'} InputType={"password"} PlaceText={"Password"} TextColor={"#6C63FF"} BorderColor={"#6C63FF"} value={SignInData.password} onChange={handleChange}/>
                        </div>

                        <FormButton ButtonText={"SignIn"} TypeButton={"submit"}/>                    
                    </form>                 
                </div>
                <h1 className="text-center pt-2 font-semibold text-white uppercase text-sm">&copy; Developed and Design by JehnaKandy</h1>
            </div>
            <div className=""></div>
        </div>
        
    </div>
  )
}

export default SignIn