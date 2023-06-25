import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { useEffect, useState } from 'react'
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='text-white app bg-deep-blue flex flex-col flex-wrap'>
      <Navbar isTopOfPage={isTopOfPage} selectPage={selectedPage} setSelectedPage={setSelectedPage} />
      {/* Above Medium Screens */}
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={selectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
    </div>
  )
}

export default App