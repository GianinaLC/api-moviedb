import {BsSearch}  from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="w-full sm:h-20 flex flex-col sm:flex-row items-center sm:justify-between m-0 p-2">
            <div className="w-20 m-3 ">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"/>
            </div>
            <div className='bg-a-2 max-w-md  flex rounded m-2' >
                <input className='rounded p-2' />
                <span className='p-2 '><BsSearch  className='text-2xl text-a-1' /></span>
            </div>
        </div>
    )
}

export default Navbar