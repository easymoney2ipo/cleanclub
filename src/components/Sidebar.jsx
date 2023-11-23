import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/rawData';
import CloseIcon from '@mui/icons-material/Close';
import { useStateContext } from '../contexts/ContextProvider';
import { IconButton } from '@mui/material';
import CleanClub from '../../src/data/CleanClub.jpeg';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg	font-medium bg-light-blue text-md m-2";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-md text-gray-700 hover:bg-light-gray m-2";


  return (
    <div className=' ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 '>
      {activeMenu && (<>
        <div className='flex justify-between items-center '>

          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <img src={CleanClub} alt='' className='h-8 w-8' /> <span>Clean Club</span>
          </Link>

          <IconButton
            aria-label="close"
            onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }}
            size="medium"
          >
            <CloseIcon />
          </IconButton>

        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={item.name}
                  onClick={handleCloseSideBar}
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>

      </>)}

    </div>
  )
}

export default Sidebar