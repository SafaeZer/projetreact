import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
   {
    title: 'IMC',
    path: '/imc',
    icon: <AiIcons.AiTwotoneCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'Comments',
    path: '/Comments',
    icon: <AiIcons.AiOutlineComment />,
    cName: 'nav-text'
  },
  {
    title: 'Git',
    path: '/git',
    icon: <AiIcons.AiFillGithub />,
    cName: 'nav-text'
  },
  {
    title: 'Todo',
    path: '/Todo',
    icon: <FaIcons.FaClipboardList />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];