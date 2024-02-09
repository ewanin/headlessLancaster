import React, { useEffect, useState } from 'react';
import axios from 'axios';
import newData from '../../../public/Data/CardData/Data'


const HelicopterFlightTraining = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://uat.lancasterairport.com/wp-json/wp/v2/business-directory?_embed&per_page=35';
                const response = await axios.get(url);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const targetIdsHFT = [10915];
    const filteredPostsHFT = posts.filter(post => targetIdsHFT.includes(post.id));

    return (
        <div className='bg-[#bfdbfe]'>

            {/* Aircraft Charter */}
            <div className='md:mx-[5%] ml-[5%]'>
                {newData.headData[0].HFT.map((item) => (
                    <div key={item.id}>
                        <div className='text-[30px] text-[#1e293b] font-bold mb-4'>{item.name}</div>
                    </div>
                ))}

                <div className=' flex flex-wrap lg:justify-between md:justify-evenly justify-center'>
                    {
                        filteredPostsHFT.map((post) => (
                            <div className='mr-2 mb-10 w-fit' key={''}>

                                {/* Box */}
                                {newData.detailsData.map((item) => (
                                    <div key={item.id}>

                                        <div className=' xl:w-[300px] w-[280px] h-[340px] border border-[#71a4f1] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] bg-no-repeat bg-bottom bg-clouds'>
                                            {/* Icon */}
                                            <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                                <img src={item.iconArrow} alt={item.alt} className='w-[26px] h-[26px]' />
                                            </div>

                                            {/* Card */}
                                            <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                                {/* Image */}
                                                <div className=' w-full h-[50px] py-4'>
                                                    {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                        <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className='mt-8'>

                                                    {/* Title */}
                                                    <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                                    {/* Contact */}
                                                    <div className=' mb-2'>
                                                        <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                            <img src={item.iconCall} alt={item.alt} className='w-[16px] h-[16px]' />
                                                            <div className='text-[14px]'>{item.contact}</div>
                                                        </div>
                                                        <div className='text-[16px] cursor-pointer' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                                    </div>

                                                    {/* Location */}
                                                    <div className=' mb-6'>
                                                        <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                            <img src={item.iconLocation} alt={item.alt} className='w-[16px] h-[16px]' />
                                                            <div className='text-[14px]'>{item.location}</div>
                                                        </div>
                                                        <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                                    </div>
                                                </div>

                                                {/* View Detail */}
                                                <div className='flex items-center'>
                                                    <div className=' underline text-[14px] font-semibold hover:cursor-pointer'>{item.view}</div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                ))}


                            </div>
                        )
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default HelicopterFlightTraining;
