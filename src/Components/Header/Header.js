import React from 'react';

const Header = () => {
    return (
        <header class="flex justify-between items-center">
            <div class="pl-20 w-2/5 animate__animated animate__jackInTheBox">
                <h1 class="text-4xl">Welcome to
		<span class="text-green-600 font-bold"> Fruitopia </span>Website</h1>
                <p>
                    I’ve written a few thousand words
                    on why traditional “semantic class names” are the reason
                    CSS is hard to maintain, but the truth is you’re never going
</p>
                <button class="bg-green-600 px-2 py-2 text-white rounded">Subscribe</button>
                <button class="bg-gray-300 px-2 py-2 mt-4 ml-4 rounded">Connect with us!</button>
                <br />
                <img src="img/icon.png" width="100" class="mt-4" />
            </div>
            <div class="w-3/5 animate__animated animate__fadeIn  animate__delay-1s">
                <img src="img/img2.png" alt="" />
            </div>
        </header>
    );
};

export default Header;