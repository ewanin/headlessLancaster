import React from 'react'
import newData from './../../public/Data/NavData/Data'


const Nav = () => {
    return (
        <div>
            <div className='flex xl:px-[7%] px-[3%] py-3 justify-between items-center shadow-[0px_6.0px_8.0px_rgba(0,0,0,0.2)]'>

                {/* Logo */}
                <div>
                    {newData.logoData.map((item) => (
                        <div key={item.id}>
                            <img src={item.icon} alt={item.alt} className='lg:w-[90px] w-[60px] lg:h-[60px] h-[40px] cursor-pointer' />
                        </div>
                    ))}
                </div>
                
                <div className='flex items-center'>
                    {/* Link */}
                    <div className='xl:w-[900px] lg:w-[800px] w-[700px] text-[15px] font-medium justify-between lg:flex hidden'>
                        {newData.linkData.map((item) => (
                            <div key={item.id}>
                                <div className='cursor-pointer hover:text-primary'>{item.name}</div>
                            </div>
                        ))}
                    </div>
                    {/* Search */}
                    <div className='lg:block hidden'>
                        {newData.searchData.map((item) => (
                            <div key={item.id} className=' border-[1.5px] border-black rounded-full p-2 cursor-pointer'>
                                <img src={item.icon} alt={item.alt} className='w-[16px] h-[16px]' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
