import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import { Dashboard, Login, Profile, Settings } from './pages';
import { Navbar, Sidebar, HourPicker } from './components';
import { useStateContext } from './contexts/ContextProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const cache = createCache({
  key: 'css',
  prepend: true, // Ensure Emotion's styles are injected first
});


const App = () => {

  const {activeMenu} = useStateContext();



  return (
  <CacheProvider value={cache}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
       <div className="flex relative">

          {activeMenu ? (
          <div className= "w-full sm:w-72 fixed sidebar bg-white z-50 transition-all duration-200">
              <Sidebar />
          </div>
          ) :(
          <div className="w-0 transition-all duration-600">
              <Sidebar />
          </div>
          )}

          <div className={ ` bg-main-bg min-h-screen  w-full  ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="md:sticky top-0 bg-main-bg navbar w-full" >
                <Navbar/>
            </div>

            <div>
              <Routes>
                  {/* */}
                  <Route path="/" element= {<Dashboard/>} />
                  <Route path="/Pregled" element= {<Dashboard/>}  />
                  <Route path="/Profil" element= {<Profile/>}  />
                  <Route path="/Postavke" element= {<Settings/>}  />
                  <Route path="/Login" element= {<Login/>}  />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  </CacheProvider>

  )
}

export default App