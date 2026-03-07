import { useState } from "react";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import secureImage from ".././assets/image/Data-security.jpg";
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login } from "../privateRoutes/authendicationSlice/authSlice";


function Login() {
    
    const [username,setUsername]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const [showPassword,setShowPassword]=useState<boolean>(false);
    const [correctDetails,setCorrectDetails]=useState<string>('');
    const namePattern:string='demoUser';
    const passwordPattern:string='demoPassword'
    const dispatch=useDispatch();
    const navigate=useNavigate();


    function usernameHandler(event:React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function passwordHandler(event:React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }

    function passwordVissible() {
        setShowPassword(true);
    }
    const passwordHide=()=>{
        setShowPassword(false);
    }
    

    function submitHandler(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(username.trim() !== namePattern || password.trim() !== passwordPattern){
            setCorrectDetails("wrong");
        }
        else{
            setTimeout(()=>{
                setCorrectDetails("correct");
            },900);


            setTimeout(()=>{
                dispatch(login({adminname:username}))
                navigate("/adminsight")
            },1200)
        }
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-2 relative z-[100] w-[320px] py-[50px] 
            before:content-[''] before:w-[115px] before:h-[100px] before:bg-[#6A0DAD] before:absolute before:top-[45px]
             before:right-[-5px] before:z-[2] before:rounded-[25%_75%_75%_25%_/_74%_41%_26%_26%]
             after:content-[''] after:w-[125px] after:h-[100px] after:bg-[#00C896] after:absolute after:bottom-[9px]
             after:left-[-3px] after:z-[2] after:rounded-[25%_75%_75%_25%_/_74%_41%_26%_26%] sm:w-[425px] md:w-[600px] lg:w-[950px]
             md:after:left-[-25px] md:before:right-[-25px] lg:after:left-[100px] lg:before:right-[100px] ">
                <div>
                    <Typography variant="h2" component="h3" sx={{fontSize:'30px'}}>Login</Typography>
                </div>
                <section className=" border-[1px] border-[rgba(0,0,0,0.4)] grid grid-cols-[minmax(280px,290px)] justify-center
                rounded-2xl z-[10000] bg-main-bg sm:grid-cols-[minmax(350px,375px)] md:grid-cols-[minmax(270px,295px)_minmax(300px,325px)]
                md:h-[375px] md:items-center lg:grid-cols-[minmax(320px,350px)_minmax(325px,345px)]">
                    <div className="z-[1000] rounded-[10px_10px_0px_0px] h-[220px] md:h-full">
                        <img src={secureImage} alt="security image" className="rounded-[16px_16px_0px_0px] w-full md:h-full 
                        md:rounded-[16px_0px_0px_16px]" />
                    </div>

                    <form className="flex flex-col items-center gap-3 z-[10000]
                     rounded-2xl p-4 py-6 bg-main-bg "  onSubmit={submitHandler}>
                        <div>
                            <Typography variant="h6" component="h6" sx={{fontSize:'20px',textAlign:'center'}}>welcome to Insight Board</Typography>
                            <p className="bg-green-300 text-main-text p-1 rounded-lg text-sm text-center">use username as: demoUser, use password as: demoPassword</p>
                        </div>
                        <div className="flex items-center gap-[2px] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[25px] pr-2 w-[270px] ">
                            <TextField required id="outlined-required" placeholder="username"
                            value={username} onChange={usernameHandler} 
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                width:"240px",
                            }} size="small"/>
                            <PersonIcon sx={{fontSize:'21px'}}/>
                        </div>

                        <div className="flex items-center gap-[2px] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[25px] pr-2 w-[270px]">
                            <TextField required id="outlined-required" placeholder="password"
                            value={password} onChange={passwordHandler} type={showPassword ? "text" : "password"} sx={{
                                "& .MuiOutlinedInput-notchedOutline":{
                                    border:'none',  
                                },
                                width:"240px", 
                             }} size="small"/>
                            {!showPassword ? <Visibility sx={{fontSize:'21px'}} onClick={passwordVissible} /> :
                            <VisibilityOff sx={{fontSize:'21px'}} onClick={passwordHide} />}
                        </div>

                        <div className="flex items-center h-[25px]">
                            {correctDetails==="wrong" && 
                            <>
                                <GppMaybeIcon sx={{color:'red',fontSize:'19px'}}/>
                                <p className="text-main-text text-sm">please enter valid credentials</p>
                            </>
                            }
                             
                            {correctDetails==="correct" &&
                            <>
                                <GppGoodIcon sx={{color:'green',fontSize:'19px'}}/>
                                <p className="text-main-text text-sm">your login is successful</p>
                            </>
                            }
                        </div>
                        <div>
                            <Button variant="contained" type="submit" sx={{textTransform:'none',padding:'5px',borderRadius:'8px'}}>Login</Button>
                        </div>
                        <div>
                            <Typography variant="h6" component="h6" sx={{fontSize:'16px'}}>new to Insight Board?
                                <Link to="/signup" className="text-blue-500 text-[18px]" > signup</Link> </Typography>
                        </div>

                    
                    </form>
                </section>
            </div>
        </>
    );
}

export default Login;