import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                {/* Column 1 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* logo */}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        DK Store
                    </div>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Home
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        About us
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Contact us
                    </a>
                </div>

                {/* Column 2 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Categories
                    </div>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Men
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Women
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Kids
                    </a>
                </div>

                {/* Column 3 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Support
                    </div>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Documentation
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Tutorials
                    </a>
                    <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        FAQ
                    </a>
                </div>

                {/* Column 4 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Contact us
                    </div>
                    <div className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        <i className="fa fa-envelope mr-2"></i> info@dkstore.com
                    </div>
                    <div className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        <i className="fa fa-phone mr-2"></i> +1 555 123456
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        © 2022 DK Store —
                        <a href="/" className="text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">@dkstore</a>
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="/" className="w-6 mx-1">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="/" className="w-6 mx-1">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/" className="w-6 mx-1">
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a href="/" className="w-6 mx-1">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="/" className="w-6 mx-1">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
