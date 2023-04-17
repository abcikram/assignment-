import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'About',
        path: '/about',
        icon: <MdIcons.MdRoundaboutLeft />,
        cName: 'nav-text',
    }, 
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <MdIcons.MdContacts />,
        cName: 'nav-text',
    },
    {
        title: 'Admin Login',
        path: '/admin',
        icon: <MdIcons.MdOutlineAdminPanelSettings />,
        cName: 'nav-text',
    },
    // {
    //     title: 'Admin Register',
    //     path: '/adminregister',
    //     icon: <MdIcons.MdOutlineAdminPanelSettings />,
    //     cName: 'nav-text',
    // },
]