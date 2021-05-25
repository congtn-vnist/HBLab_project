import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'List requests',
    path: '/',
    icon: <FaIcons.FaClipboardList />,
    cName: 'nav-text'
  },
  {
    title: 'Create request',
    path: '/create',
    icon: <IoIcons.IoMdCreate />,
    cName: 'nav-text'
  },
  {
    title: 'Update request',
    path: '/update',
    icon: <MdIcons.MdUpdate />,
    cName: 'nav-text'
  },
 

];
