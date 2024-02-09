import React from 'react'
import newData from './../../public/Data/PreNavData/Data'


const PreNav = () => {
    return (
        <div className=''>

            <div className=' bg-primary w-full overflow-hidden h-fit xl:px-[7%] px-[3%] py-[6px] flex items-center justify-between md:visible invisible '>
                <div className='flex '>
                    {/* Social Ions */}
                    <div className='flex justify-between w-[100px] h-fit pr-4 py-[3px] border-r-[1px]'>
                        {newData.socialData.map((item) => (
                            <div key={item.id}>
                                <img src={item.icon} alt={item.alt} className="w-[14px] h-[14px] cursor-pointer" />
                            </div>
                        ))}
                    </div>

                    {/* Weather */}
                    <div className='w-[320px] h-fit py-[3px] ml-[10px] lg:inline hidden'>
                        {newData.weatherData.map((item) => (
                            <div key={item.id} className='flex items-center justify-between text-[12px] text-white'>
                                <div className=' font-semibold underline cursor-pointer'>{item.title}</div>
                                <div className='cursor-pointer'>{item.day}</div>
                                <div className='cursor-pointer'>{item.date}</div>
                                <div className='cursor-pointer'>{item.temp}</div>
                                <img src={item.icon} alt={item.alt} className="w-[14px] h-[14px] cursor-pointer" />
                                <div className='cursor-pointer'>{item.visibility}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex'>
                    {/* Links */}
                    <div className='flex text-[13px] w-[450px] text-white justify-between pr-4 border-r-[1px]'>
                        {newData.linkData.map((item) => (
                            <div key={item.id}>
                                <div className='cursor-pointer hover:opacity-80'>{item.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Language */}
                    <select className='bg-transparent items-center w-fit text-white text-[14px] font-bold ml-[10px] cursor-pointer'>
                        {newData.langData.map((item) => (
                            <option value={item.value} key={item.id} className='text-black'>{item.name}</option>
                        ))}
                    </select>
                </div>

            </div>

        </div>
    )
}

export default PreNav