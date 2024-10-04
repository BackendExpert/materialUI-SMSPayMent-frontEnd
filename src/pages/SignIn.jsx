import React from 'react'
import SchoolIMG from '../assets/SchoolLogin.png'
import FormButton from '../components/FormButton'
import TextFeildInput from '../components/TextFeildInput'

const SignIn = () => {
  return (
    <div className='bg-gray-200/50 w-full min-h-screen md:py-[10%] py-[20%]'>
        <div className="md:grid grid-cols-3 gap-3">
            <div className=""></div>
            <div className="bg-white py-8 px-4 shadow-md rounded md:mx-0 mx-4">
                <center>
                    <img src={SchoolIMG} alt="" className='h-40 w-auto'/>
                    <p className="text-[#6C63FF] uppercase text-xl font-semibold">Signin Here</p>
                </center>

                <form action="" method="post" className='my-6 mx-4'>
                    <div className="my-4">
                        <TextFeildInput InputType={"email"} PlaceText={"Email Address"} TextColor={"#6C63FF"} BorderColor={"#6C63FF"}/>
                    </div>
                    <div className="my-4">
                        <TextFeildInput InputType={"password"} PlaceText={"Password"} TextColor={"#6C63FF"} BorderColor={"#6C63FF"}/>
                    </div>

                    <FormButton ButtonText={"SignIn"} TypeButton={"submit"}/>                    
                </form>
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignIn