import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MdOutlineArrowOutward, MdLocalPhone, MdLocationOn } from "react-icons/md";




const Test = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://lancasterairport.com/wp-json/wp/v2/business-directory?_embed&per_page=35';
                const response = await axios.get(url);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const targetIdsAC = [10727, 10772, 10749, 10743];
    const filteredPostsAC = posts.filter(post => targetIdsAC.includes(post.id));

    const targetIdsAM = [10757, 10763, 10740, 10780, 10768];
    const filteredPostsAM = posts.filter(post => targetIdsAM.includes(post.id));

    const targetIdsASS = [10803, 10785, 10795, 10929];
    const filteredPostsASS = posts.filter(post => targetIdsASS.includes(post.id));

    const targetIdsCR = [886, 4642, 1016, 4639];
    const filteredPostsCR = posts.filter(post => targetIdsCR.includes(post.id));

    const targetIdsCA = [10882, 10884];
    const filteredPostsCA = posts.filter(post => targetIdsCA.includes(post.id));

    const targetIdsD = [10886, 10890, 10893];
    const filteredPostsD = posts.filter(post => targetIdsD.includes(post.id));

    const targetIdsE = [10899];
    const filteredPostsE = posts.filter(post => targetIdsE.includes(post.id));

    const targetIdsFS = [13799];
    const filteredPostsFS = posts.filter(post => targetIdsFS.includes(post.id));

    const targetIdsFTR = [10915, 10926, 10788];
    const filteredPostsFTR = posts.filter(post => targetIdsFTR.includes(post.id));

    const targetIdsFSF = [10943, 10918];
    const filteredPostsFSF = posts.filter(post => targetIdsFSF.includes(post.id));

    const targetIdsHFT = [10915];
    const filteredPostsHFT = posts.filter(post => targetIdsHFT.includes(post.id));

    const targetIdsNH = [1094, 1096, 1058, 1091, 13534];
    const filteredPostsNH = posts.filter(post => targetIdsNH.includes(post.id));

    const targetIdsPS = [10984];
    const filteredPostsPS = posts.filter(post => targetIdsPS.includes(post.id));

    return (
        <div className='bg-[#E2EDFF]'>

            {/* Aircraft Charter */}
            <div className='mx-[5%] pt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Aircraft Charter</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsAC.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Aircraft Maintenance */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Aircraft Maintenance</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsAM.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Aircraft Sales & Services */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Aircraft Sales & Services</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsASS.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Car Rentals */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Car Rentals</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsCR.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-fit pb-8 border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>

                                            {/* Hours of Operation */}
                                            {/* <div className=' mb-2'>
                                                <div className='text-[#5376ac] font-semibold'>
                                                    <div className='text-[14px]'>Hours of Operation</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['hours'] }}></div>
                                            </div> */}
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Commercial Airlines */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Commercial Airlines</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsCA.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Dining */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Dining</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsD.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Entertainment */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Entertainment</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsE.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Flight Schools */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Flight Schools</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsFS.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Flight Training & Rental */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Flight Training & Rental</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsFTR.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Fuel Services/FBO */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Fuel Services/FBO</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsFSF.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Helicopter Flight Training | Scenic Flights */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Helicopter Flight Training | Scenic Flights</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsHFT.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Nearby Hotels */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Nearby Hotels</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsNH.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


            {/* Pilot Supplies */}
            <div className='mx-[5%] mt-8'>
                <div className='text-[30px] text-[#1e293b] font-bold mb-4'>Pilot Supplies</div>
                <div className='grid flex-wrap grid-cols-4'>
                    {
                        filteredPostsPS.map((post) => (
                            <div className='mr-4 mb-10 w-fit' key={post.id}>

                                {/* Box */}
                                <div className=' w-[300px] h-[350px] border border-[#3e7cdb] bg-white rounded-tr-[50px] hover:shadow-[-8.0px_8.0px_1px_rgb(62,124,219)] '>

                                    {/* Icon */}
                                    <div className="w-[50px] h-[50px] bg-[#34b976] hover:bg-[#3e7cdb] float-end rounded-tr-[50px] p-[11px] justify-self-end">
                                        <MdOutlineArrowOutward className='text-white w-[26px] h-[26px]' />
                                    </div>

                                    {/* Card */}
                                    <div className=' bg-yellow-40 px-[10%] mt-[40px]'>

                                        {/* Image */}
                                        <div className=' w-full h-[50px] py-2'>
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                                <img src={post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium && post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Not Available" className='w-fit h-[50px]' />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='mt-6'>

                                            {/* Title */}
                                            <div className='mb-4 text-[16px] font-bold text-[#212529]' dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }}></div>

                                            {/* Contact */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocalPhone />
                                                    <div className='text-[14px]'>Contact</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['contact_number'] }}></div>
                                            </div>

                                            {/* Location */}
                                            <div className=' mb-2'>
                                                <div className='flex items-center text-[#5376ac] font-semibold gap-2'>
                                                    <MdLocationOn />
                                                    <div className='text-[14px]'>Location</div>
                                                </div>
                                                <div className='text-[16px]' dangerouslySetInnerHTML={{ __html: post['acf']['location'] }}></div>
                                            </div>
                                        </div>

                                        {/* View Detail */}
                                        <div className='flex items-center gap-'>
                                            <div className=' underline text-[14px] font-medium hover:cursor-pointer'>View Detail</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Test;
