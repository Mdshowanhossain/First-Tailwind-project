import React from 'react';

const NavBar = () => {
    return (
        <nav class=" flex justify-between px-24 h-16 items-center">
            <div class="text-3xl">
                <img src="img/flogo.png" alt="" />
            </div>
            <div>
                <a href="#" class="text-xl px-4">Home</a>
                <a href="#" class="text-xl px-4">About</a>
                <a href="#" class="text-xl px-4">Blog</a>
                <a href="#" class="text-xl px-4">Contact</a>
                <a href="#" class="text-xl px-4 bg-green-600 py-2 text-white hover:bg-green-800">Login</a>
            </div>
        </nav>
    );
};

export default NavBar;