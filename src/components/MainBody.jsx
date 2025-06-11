import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown as faArrowDownSolid } from '@fortawesome/free-solid-svg-icons'; // 화살표 아이콘
import { Link } from 'react-scroll';


function MainBody() {
    const [text] = useTypewriter({
        words: ['경험과 성장을 차곡차곡 쌓아가고 있는 신입 개발자 백종혁 입니다.'],
        loop: 1,
        typeSpeed: 50,
        delaySpeed: 2000,
        // deleteSpeed: 0,
    });

    return (
        <div className='text-white h-screen flex flex-col items-center justify-center gradient-bg gap-6'>

            <div className=' text-white text-6xl md:text-8xl tracking-wide'>
                안녕하세요 !
            </div>
            <div className=' text-white text-xl md:text-3xl '>
                {text}
                <Cursor />
            </div>

            <div className='flex flex-col items-center gap-10 animate-fade-in-up absolute bottom-20'>

                <a href="https://github.com/pvekxx">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>

                <div className='flex flex-col items-center gap-6'>
                    <Link
                        to="aboutMe"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:bg-white hover:text-gray-500 transition duration-300 py-2
                    px-4 rounded-lg text-white border-white border text-xl"
                    >
                        More about me
                    </Link>

                    <div className='animate-bounce'>
                        <FontAwesomeIcon icon={faArrowDownSolid} size="1x" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBody;