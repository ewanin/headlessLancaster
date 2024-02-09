import React from 'react'
import newData from './../../public/Data/SectionData/Data'


const Section = () => {
    return (
        <div>

            <div className='relative text-center'>

                {/* Image */}
                <div>
                    {newData.imageData.map((item) => (
                        <div key={item.id}>
                            <img src={item.icon} alt={item.alt} className='w-full lg:h-[300px] md:h-[250px] h-[200px] bg-blue-200' />
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <div className=' absolute top-[15%] xl:left-[27%] lg:left-[20%] md:left-[20%] left-[15%]'>
                    {newData.imageData1.map((item) => (
                        <div key={item.id}>
                            <div className='text-[16px] w-[85%]'>{item.name}</div>
                        </div>
                    ))}
                </div>

                {/* Section */}
                <div className='md:flex hidden flex-wrap bg-red-40 justify-center gap-4 absolute top-[47%]'>
                    {newData.imageData2.map((item) => (
                        <div key={item.id} >
                            <div className=' text-[13px] text-primary hover:text-white font-bold bg-white hover:bg-primary w-fit h-fit px-[12px] py-[6px] rounded-md cursor-pointer'>{item.name}</div>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default Section
