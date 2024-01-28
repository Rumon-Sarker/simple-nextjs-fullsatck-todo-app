import React from 'react';

const Navbar = () => {
    return (
        <div className='flex py-3 flex-wrap justify-around'>
            <h1 className='text-lg font-semibold'>Todo App</h1>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Todo</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;