import '../src/styles/index.css';
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import ParticlesComponent from './particles/ParticlesComponent';

function App() {

  return (
    <main className='h-screen p-5 xl:p-10'>
      <ParticlesComponent className='fixed -z-10 pointer-events-none'></ParticlesComponent>
        <div className='fixed left-0 top-0 w-full h-full bg-black z-20 pointer-events-none animate-fadeOut'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 gap-1 font-neue text-[17px] flex lg:text-2xl lg:gap-5'><span className='animate-intro'>Robin Hubáček</span><span className='font-neueThin animate-introDelay opacity-0'>Portfolio</span></div>
        </div>
        <div className='h-full p-5 border border-gray-500 flex flex-col overflow-hidden xl:p-8 xl:flex-row relative z-10'>
          <header className='flex-1'>
            <h1 className='font-neueThin text-3xl xl:text-6xl'>Robin Hubáček</h1>
            <h2 className='font-neue text-[12px] pl-[1px] xl:pl-1'>Developer & Designer</h2>
            <nav className='relative z-50 w-fit pl-1.5 flex xl:gap-3 flex-col font-bold font-neueBold text-[12px] py-10'>
            <NavLink
                className={({ isActive }) =>
                  `relative z-50 py-1 transition-opacity hover:opacity-[0.3]`
                }
                to='/'
              >
                {({ isActive }) =>
                  isActive ? (
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                  ) : (
                    'Home'
                  )
                }
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative z-50 py-1 transition-opacity hover:opacity-[0.3]`
                }
                to='projects'
              >
                {({ isActive }) =>
                  isActive ? (
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                  ) : (
                    'Projects'
                  )
                }
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative z-50 py-1 transition-opacity hover:opacity-[0.3]`
                }
                to='about'
              >
                {({ isActive }) =>
                  isActive ? (
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                  ) : (
                    'About me'
                  )
                }
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative z-50 py-1 transition-opacity hover:opacity-[0.3]`
                }
                to='contact'
              >
                {({ isActive }) =>
                  isActive ? (
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                  ) : (
                    'Contact me'
                  )
                }
              </NavLink>
              <a className='py-1' href='./assets/cv.pdf'>Curriculum Vitae</a>
            </nav>
          </header>
          <Outlet/>
        </div>
    </main>
  )
}

export default App
