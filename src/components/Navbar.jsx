import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className='w-full py-5"sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt='Apple' width={14} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, i) => (
                    <div key={nav}>
                        {nav}
                    </div>
                ))}
            </div>
            <div>
                <img src={searchImg} alt='Search' width={18} height={18}/>
                <img src={bagImg} alt='Bags' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar