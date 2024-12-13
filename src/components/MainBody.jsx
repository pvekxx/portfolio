import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown as faArrowDownSolid } from '@fortawesome/free-solid-svg-icons'; // Solid 화살표 아이콘
import { Link } from 'react-scroll';


function MainBody() {
    const [text] = useTypewriter({
        words: ['백종혁의 포트폴리오 입니다.'],
        loop: 1,
        delaySpeed: 2000, // 대기 시간
        deleteSpeed: 0,
    });

    return (
        <div className='text-white h-screen
                flex
                flex-col
                items-center
                justify-center
                gradient-bg
                gap-44'>

            <div className=' text-white text-7xl'>
                {text}
                <Cursor />
            </div>

            <div className='flex flex-col items-center gap-10 animate-fade-in-up'>

                <a
                    href="https://github.com/pvekxx"
                >
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>

                <div className='flex flex-col items-center gap-6'>
                    <Link
                        to="aboutMe"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:bg-white hover:text-black transition duration-300 py-2
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