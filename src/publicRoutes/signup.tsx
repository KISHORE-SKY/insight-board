import Typography from "@mui/material/Typography";
import secureImage from "../assets/image/signup-secure.jpg";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import {Link, useNavigate} from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../privateRoutes/authendicationSlice/authSlice";




function Signup() {

        const [username,setUsername]=useState<string>('');
        const [email,setEmail]=useState<string>('');
        const [password,setPassword]=useState<string>('');
        const [confirm,setConfirm]=useState<string>('');
        const [showPassword,setShowPassword]=useState<boolean>(false);
        const [showConfirm,setShowConfirm]=useState<boolean>(false);
        const [correctDetails,setCorrectDetails]=useState<string>('');
        const dispatch=useDispatch();
        const navigate=useNavigate();

        const namePattern:string='demoUser';
        const emailPattern:string='demouser456@gmail.com';
        const passwordPattern:string='demoPassword';

        function usernameHandler(event:React.ChangeEvent<HTMLInputElement>){
            setUsername(event.target.value);
        }
        function emailHandler(event:React.ChangeEvent<HTMLInputElement>) {
            setEmail(event.target.value);
        }
        function passwordHandler(event:React.ChangeEvent<HTMLInputElement>) {
            setPassword(event.target.value);
        }
        function confirmHandler(event:React.ChangeEvent<HTMLInputElement>){
            setConfirm(event.target.value);
        }
        function submitHandler(event:React.FormEvent<HTMLFormElement>) {
            event.preventDefault();

            if(username.trim() !== namePattern || email.trim() !== emailPattern || 
            password.trim() !== passwordPattern || username.trim()==="" || email.trim()==="" || password.trim()==="" || confirm.trim()===""){
                setCorrectDetails("wrong");
            }
            else if(password.trim() !== confirm.trim()){
                setCorrectDetails("passwordwrong")
            }
            else{
                setTimeout(()=>{
                    setCorrectDetails("right");
                },900);
                
                setTimeout(()=>{
                    dispatch(signup({adminname:username,adminemail:email}))
                    navigate("/adminsight")
                },1200)
            }
        }

        function passwordVissible() {
            setShowPassword(true);
        }
        function hidePassword(){
            setShowPassword(false);
        }
        function confirmVissible() {
            setShowConfirm(true);
        }
        function hideConfirm(){
            setShowConfirm(false);
        }
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-3 relative z-[100] w-[310px] py-[50px] 
            before:content-[''] before:w-[115px] before:h-[100px] before:bg-[#6A0DAD] before:absolute before:top-[45px]
             before:right-[-5px] before:z-[2] before:rounded-[25%_75%_75%_25%_/_74%_41%_26%_26%]
             after:content-[''] after:w-[125px] after:h-[100px] after:bg-[#00C896] after:absolute after:bottom-[9px]
             after:left-[-3px] after:z-[2] after:rounded-[25%_75%_75%_25%_/_74%_41%_26%_26%] sm:w-[425px] md:w-[600px] lg:w-[950px]
             md:after:left-[-45px] md:before:right-[-45px] md:before:top-[55px] lg:after:left-[40px] lg:before:right-[60px] ">

                <div>
                    <Typography variant="h4" component="h3">Signup</Typography>
                </div>

                <section className="grid grid-cols-[minmax(250px,290px)] justify-center z-[100000] bg-main-bg
                text-main-text border-[1px] border-[rgba(0,0,0,0.4)] rounded-2xl sm:grid-cols-[minmax(325px,375px)]
                md:grid-cols-[minmax(310px,335px)_minmax(325px,350px)] lg:grid-cols-[minmax(350px,375px)_minmax(360px,400px)]">
                    <div className="z-[1000] rounded-[10px_10px_0px_0px] h-[220px] md:h-full">
                        <img src={secureImage} alt="security image" className="rounded-[16px_16px_0px_0px] w-full md:h-full 
                        md:rounded-[16px_0px_0px_16px]" />
                    </div>

                    <form className="flex flex-col items-center gap-4 py-6 z-[10000] rounded-2xl bg-main-bg" onSubmit={submitHandler}>
                        <div className="text-center h-[79px] px-1">
                            <Typography variant="h5" component="h5" sx={{fontSize:'20px',textAlign:'center'}}>welcome to Insight Board</Typography>
                            <p className="bg-green-300 text-main-text w-fit p-1 
                            rounded-lg text-[12px] text-center">use username as: demoUser, use email as: demouser456@gmail.com, use password as: demoPassword</p>
                        </div>
                        <div className="inputs">
                            <TextField type="text" placeholder="username" size="small" required value={username} onChange={usernameHandler}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                width:"240px",
                            }}/>
                            <PersonIcon sx={{fontSize:'21px'}}/>
                        </div>
                        <div className="inputs">
                            <TextField type="email" placeholder="email" required size="small" value={email} onChange={emailHandler}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                width:"240px",
                            }}/>
                            <EmailIcon sx={{fontSize:'21px'}}/>
                        </div>
                        <div className="inputs">
                            <TextField type={showPassword ? "text" : "password"} placeholder="password" required size="small" value={password} onChange={passwordHandler}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                width:"240px",
                            }}/>
                            {showPassword ? <VisibilityOff sx={{fontSize:'21px'}} onClick={hidePassword}/> :
                            <Visibility sx={{fontSize:'21px'}} onClick={passwordVissible}/>}
                        </div>
                        <div className="inputs">
                            <TextField type={showConfirm ? "text" : "password"} placeholder="confirm password" required size="small" value={confirm} onChange={confirmHandler}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                width:"240px",
                            }}/>
                            {showConfirm ? <VisibilityOff sx={{fontSize:'21px'}} onClick={hideConfirm}/> :
                            <Visibility sx={{fontSize:'21px'}} onClick={confirmVissible}/>}
                        </div>
                        <div className="flex items-center gap-[2px] h-[30px]">
                            {correctDetails==="right" && <>
                               <GppGoodIcon sx={{color:'green',fontSize:'21px'}}/>
                                <p className="text-main-text text-sm">you create a account successful</p>
                            </>}

                            {correctDetails==="passwordwrong" && <>
                               <GppMaybeIcon sx={{color:'red',fontSize:'21px'}}/>
                                <p className="text-main-text text-sm">password is mismatch!</p>
                            </>}

                            {correctDetails==="wrong" && <>
                                <GppMaybeIcon sx={{color:'red',fontSize:'21px'}}/>
                                <p className="text-main-text text-sm">please enter the valid credentials</p>
                            </>}
                        </div>
                        <div>
                            <Button variant="contained" type="submit" sx={{padding:'5px',borderRadius:'8px',textTransform:'none'}}>Signup</Button>
                        </div>
                        <div>
                            <Typography variant="h6" component="h6" sx={{fontSize:'16px'}}>you are not new 
                                <Link to="/" className="text-blue-500 text-[18px]"> login</Link>
                            </Typography>
                        </div>
                    </form>

                </section>
                
            </div>
        </>
    );
}



export default Signup;