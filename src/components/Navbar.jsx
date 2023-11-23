import React, {useEffect, useState} from 'react';
import avatar from '../data/avatar6.png'
import { useStateContext } from '../contexts/ContextProvider';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';






const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize,setScreenSize} = useStateContext();

  const [profileVisible, setProfileVisible ] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  useEffect(() => {
    if(screenSize <= 900) { setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize]);

  

  return (
    <div className='flex justify-between p-1 md:mx-6 '>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          className='p-5'
          onClick={() => setActiveMenu( (prevActiveMenu) => !prevActiveMenu)}
        >
          <MenuIcon />
        </IconButton>

        <div className='flex'>


          <div className='flex items-center gap-2 cursor-pointer p-2 sm:hover:bg-light-gray   rounded-lg ml-2'
          onClick={() => {
            setProfileVisible( () => setProfileVisible( (prev) => !prev))
          }}>
            
            <img src = {avatar}  className='rounded-full w-8 h-8' />
            <p>
              <span className='text-poly-green  font-semibold ml-1 text-14'> User </span>
            </p>
            <KeyboardArrowDownIcon className='text-gray-400 text-12'/>
          </div>
        </div>

        
    </div>
  )
}


export default Navbar