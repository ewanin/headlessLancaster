import React from 'react'
import newData from './../../public/Data/BannerData/Data'

const Banner = () => {
    return (
        <div>

            <div className='relative text-center'>

                {/* Image */}
                <div>
                    {newData.imageData.map((item) => (
                        <div key={item.id}>
                            <img src={item.icon} alt={item.alt} className='w-full lg:h-[300px] md:h-[250px] h-[200px] rounded-b-[50px] bg-blue-200' />
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <div className=' absolute top-[30%] xl:left-[30%] lg:left-[25%] md:left-[25%] left-[15%]'>
                    {newData.imageData1.map((item) => (
                        <div key={item.id}>
                            <div className='lg:text-[64px] md:text-[45px] text-[28px] font-bold'>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>           

        </div>
    )
}

export default Banner
