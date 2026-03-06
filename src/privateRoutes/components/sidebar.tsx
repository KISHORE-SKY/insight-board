import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import profifleimage from '../../assets/image/profile.jpg';




function SideBarMenu(){

     const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height:'100vh',position:'relative' }} role="presentation" onClick={toggleDrawer(false)} className='bg-main-cart'>
      <List>
        <div className='flex items-center px-4 gap-1 py-6'>
            <DashboardCustomizeIcon sx={{color:'blue'}}/>
            <Typography variant='h6' component='h6' sx={{fontSize:'16px'}}>
                Insight Admin
            </Typography>
        </div>
        {['Repositories', 'Languages', 'Contributions', 'Commit Streak'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SpaceDashboardIcon /> : <DashboardIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
        
        <div className='bg-main-cart mt-4 flex flex-col items-center w-full justify-center absolute bottom-0 left-0'>
            <div className='flex items-center  gap-[4px] p-2 px-6'>
                <img src={profifleimage} alt='profile admin' className='w-[40px] rounded-[50%] border-[1px] border-[rgba(0,0,0,0.4)]' />
                <div className='flex flex-col'>
                   <p className='text-lg'>Kishore sk</p>
                   <p className=' text-sm'>Admin</p>
                </div>
                
            </div>
            <div className='flex items-center  gap-1 pb-4'>
                <Typography variant='h6' component='h6' sx={{fontSize:'18px'}}>
                    Logout
                </Typography>
                <LogoutIcon sx={{fontSize:'20px'}} />
            </div>
        </div>
    </Box>
  );

    return(
        <>
            <div>

                <div>
                    <Button onClick={toggleDrawer(true)} sx={{padding:'0px',width:'auto',minWidth:'auto'}} size='small'>
                        <MenuIcon sx={{color:'rgba(0,0,0,0.5)'}}/>
                    </Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>    
                </div>    

            </div>
        </>
    );
}

export default SideBarMenu;