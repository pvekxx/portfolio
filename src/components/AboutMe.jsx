import React from 'react'
import profile from '../assets/profile.jpeg'

const AboutMe = () => {
    return (
        <div className='bg-gray-200'>
            <div className='flex px-52 py-28'>
                <div className='w-1/2 flex justify-center'>
                    <img src={profile} alt="" className="rounded-full" />
                </div>

                <div className="w-1/2 pl-8 flex items-center">
                    <div>
                        <div className='text-5xl font-extralight'>
                            About Me
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className='py-10 text-gray-500'>
                                안녕하세요.
                            </div>
                            <div className='flex gap-12'>
                                <div className='font-bold flex flex-col gap-4'>
                                    <div>Name:</div>
                                    <div>Address:</div>
                                    <div>Email:</div>
                                    <div>Phone:</div>
                                    <div>Github:</div>
                                </div>
                                <div className='flex flex-col gap-4 text-gray-500'>
                                    <div>백종혁</div>
                                    <div>경기도 하남시</div>
                                    <div>jonghyuk0186@gmail.com</div>
                                    <div>010-8368-0186</div>
                                    <div>https://github.com/pvekxx</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
