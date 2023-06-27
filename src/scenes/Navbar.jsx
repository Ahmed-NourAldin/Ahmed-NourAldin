/* eslint-disable no-unreachable */
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) =>
{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={ `${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500` }
            href={ `#${lowerCasePage}` }
            onClick={ () => setSelectedPage(lowerCasePage) }
        >
            { page }
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) =>
{
    // console.log(isTopOfPage)
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navBarBackground = isTopOfPage ? "" : "bg-gradient-rainblue";


    // console.log(isAboveSmallScreens);
    return (
        <nav className={`${navBarBackground} fixed top-0 z-40 w-full py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">
                    AN
                </h4>
                {/* Desktop Nav */ }
                { isAboveSmallScreens ?
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold ">
                        <Link page="Home" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Skills" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Projects" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Webflow" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Shopify" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Testimonials" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        <Link page="Contact" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                    </div>
                    : (<button className='rounded-full w-12 h-12 p-0 flex items-center bg-gradient-rainbow '
                        onClick={ () => setIsMenuToggled(!isMenuToggled) }>
                        <img src="src/assets/logo.png"  alt="menu-icon" />
                    </button>) }

                {/* Mobile Menu Pop up */ }
                { !isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-gradient-to-br  from-yellow  to-fuchsia-500 w-[300px] '>
                        {/* Close Menu Icon */ }
                        <div className='flex justify-end p-12 '>
                            <button
                                onClick={ () => setIsMenuToggled(!isMenuToggled) }>
                                <img src="src/assets/close-icon.svg" alt="menu-icon" width={ 20 } height={ 20 } />
                            </button>
                        </div>

                        {/* Menu Items */ }
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Link page="Home" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Skills" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Projects" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Webflow" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Shopify" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Testimonials" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                            <Link page="Contact" selectedPage={ selectedPage } setSelectedPage={ setSelectedPage } />
                        </div>

                    </div>
                ) }
            </div>

        </nav>
    );
};

export default Navbar;
