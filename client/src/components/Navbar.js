import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar)

  const showSidebar = async () => {
    await setSidebar(!sidebar);
    
    if(sidebar){
      
      props.showSidebar('100%')
    }else{
      
      props.showSidebar('85%')
    }
  }

  console.log(sidebar)

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='#' className='user'>
            <MdIcons.MdAccountCircle />
          </Link>


        </div>
        <div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose  onClick={showSidebar}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
         </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Navbar;
