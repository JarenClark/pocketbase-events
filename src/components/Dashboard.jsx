import React from 'react'
import pb from '../lib/pocketbase'
import { Bell, Bolt, Calendar, Group, Hamburger, SearchIcon } from './SVG'

function Dashboard() {
    return (
        <div className='flex overflow-x-hidden bg-[#181818] text-gray-400 w-screen min-h-screen'>
            <div className="flex w-full max-w-screen">
                <Sidebar>
                </Sidebar>
                <div
                    className='block'
                    style={{ width: '-webkit-fill-available' }}>
                    <Searchbar />
                    <Main>
                        <h1 className=''>Dashboard</h1>
                    </Main>
                </div>
            </div>
        </div>
    )
}


export default Dashboard

function Searchbar() {
    return (
        <div className='flex shadow-2xl items-center lg:px-16 px-8 h-20 justify-between'>
            <div className="inline-flex items-center space-x-4">
                <SearchIcon />
                <form>
                    <input type="text" placeholder="Search..." className='p-1 rounded-none bg-transparent' />
                </form>
            </div>
            <div>
                <Hamburger />
            </div>

        </div>
    )
}

function Sidebar() {

    let navItems = [
        { icon: <Bolt />, title: 'Home', link: '/' },
        { icon: <Group />, title: 'Groups', link: '' },
        { icon: <Bell />, title: 'Events', link: '' },
        { icon: <Calendar />, title: 'Calendar', link: '' },
    ]

    return (
        <div className='h-screen flex flex-col justify-between w-80 shadow-2xl'>
            <div>
                <div className="h-20 bg-black px-8 p-4 flex items-center text-indigo-500">
                    <Bolt />
                </div>
                <div className="p-8">
                    <ul className='space-y-4'>
                        {navItems.map((item, i) => (
                            <li key={i} className="cursor-pointer hover:text-white flex items-center space-x-4">
                                {item.icon}
                                <span className=' text-lg'>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-8">
                Logged in as:{' '}
                {pb.authStore.model.username}
            </div>
        </div>
    )
}

function Main({ children }) {
    return (
        <div className='p-8 lg:px-16'>
            <main>{children}</main>
        </div>
    )
}