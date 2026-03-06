import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function GroupAvatars() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>

     <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{minWidth:'auto',width:'auto',padding:'0px'}}
        >
            <div className='flex flex-col'>
                <div className='h-[6px] w-[6px] rounded-full bg-green-500 self-end'></div>
                <NotificationsIcon sx={{fontSize:'19px',color:'black'}} />
            </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }} sx={{marginTop:'20px',borderRadius:'20px'}}
      >
        <MenuItem onClick={handleClose} className='flex items-center gap-2'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{backgroundColor:'blue',width:'35px',height:'35px'}} />
            <Typography sx={{fontSize:'13px'}}>remy seen your repository</Typography>  
        </MenuItem>
        <MenuItem onClick={handleClose} className='menuItems'>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'blue',width:'35px',height:'35px'}} />
            <Typography sx={{fontSize:'13px'}}>travis seen your repository</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menuItems'>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{backgroundColor:'blue',width:'35px',height:'35px'}} />
            <Typography sx={{fontSize:'13px'}}>clindy seen your repository</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} className='menuItems'>
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{backgroundColor:'blue',width:'35px',height:'35px'}} />
            <Typography sx={{fontSize:'13px'}}>agnes seen your repository</Typography>
        </MenuItem>
      </Menu>
    </div>
    
    </>

  );
}