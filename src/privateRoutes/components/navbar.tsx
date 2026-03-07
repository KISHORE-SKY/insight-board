
import Typography from '@mui/material/Typography';
import SideBarMenu from './sidebar'
import profifleimage from '../../assets/image/profile.jpg';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import GroupAvatars from '../components/notifyavatars'
import { logout } from '../authendicationSlice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate=useNavigate();
    const dispatch=useDispatch();


    function logoutHandler(){
        dispatch(logout());
        navigate("/");
    }

    return(
        <>
            <nav className='flex items-center justify-between p-4 w-[100%] bg-main-cart lg:px-6 shadow-[0px_2px_19px_0px_rgba(0,0,0,0.3)]'>
                <div className='flex items-center gap-2 lg:gap-3'>
                    <div className='hidden md:flex md:items-center md:gap-1'>
                        <DashboardCustomizeIcon sx={{color:'blue'}}/>
                        <Typography variant='h6' component='h6' sx={{fontSize:'16px'}}>
                            Insight Admin
                        </Typography>
                    </div>
                    <aside>
                        <SideBarMenu />
                    </aside>
                </div>

                <div className='flex items-center gap-2 md:gap-4 lg:gap-6'>
                    <div>
                        <GroupAvatars />
                    </div>
                    <div className='flex items-center gap-[2px] cursor-pointer' onClick={logoutHandler}>
                        <LogoutIcon sx={{fontSize:'20px'}} />
                        <Typography variant='h6' component='h6' sx={{fontSize:'15px'}} className='hidden sm:inline-block'>
                            logout
                        </Typography>
                    </div>
                    <div className='flex items-center gap-[3px]'>
                        <img src={profifleimage} alt='profile admin' className='rounded-full w-[30px]' />
                        <p className='text-[15px]'>Admin</p>
                        <VerifiedOutlinedIcon />
                    </div>

                </div>
            </nav>
        </>
    );
}


export default Navbar;