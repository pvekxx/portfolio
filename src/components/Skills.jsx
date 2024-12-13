import React, { useState } from 'react'

const Skills = () => {
    const [select, setSelect] = useState("ALL")
    const categories = ["ALL", "Language", "FrontEnd", "BackEnd", "Deploy"];

    const skillsData = [
        { id: 3, url: 'https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white', category: 'Language', sub: 'ES6 문법을 활용하고 동적인 웹 기능을 구현 할 수 있습니다.' },
        { id: 2, url: 'https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white', category: 'Language', sub: '정적 타입을 활용하여 코드의 안정성을 높일 수 있습니다.' },
        { id: 1, url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white', category: 'FrontEnd', sub: '웹페이지의 구조를 설계할 수 있습니다.' },
        { id: 4, url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white', category: 'FrontEnd', sub: '반응형 디자인을 적용하여 다양한 디바이스에서 레이아웃을 구현할 수 있습니다.' },
        { id: 5, url: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white', category: 'FrontEnd', sub: '컴포넌트 기반으로 재사용 가능한 UI요소를 구현 할 수 있습니다.' },
        { id: 6, url: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white', category: 'FrontEnd', sub: '서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하여 사용할 수 있고 App 라우팅으로 페이지를 관리할 수 있습니다.' },
        { id: 9, url: 'https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white', category: 'FrontEnd', sub: '다양한 스타일을 적용 할 수 있습니다.' },
        { id: 7, url: 'https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white', category: 'FrontEnd', sub: 'Expo SDK의 기능을 사용하여 개발 할 수 있고 자율적으로 학습하여 프로젝트를 진행한 경험이 있습니다.' },
        { id: 10, url: 'https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white', category: 'BackEnd', sub: 'Express 프레임워크를 사용하여 라우팅과 미들웨어를 설정할 수 있습니다.' },
        { id: 11, url: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white', category: 'BackEnd', sub: '서버 사이드 렌더링 기반의 웹 페이지를 개발 할 수 있습니다.' },
        { id: 12, url: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white', category: 'BackEnd', sub: '인덱싱을 통해 쿼리성능을 높일 수 있습니다.' },
        { id: 13, url: 'https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white', category: 'Deploy', sub: '프로젝트의 자동화 작업을 관리 할 수 있습니다.' },
        { id: 14, url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white', category: 'Deploy', sub: 'Dockerfile을 작성하여 애플리케이션의 컨테이너 이미지를 생성할 수 있습니다.' },
        { id: 15, url: 'https://img.shields.io/badge/Amazon Web Services-232F3E?style=for-the-badge&logo=Amazon Web Services&logoColor=white', category: 'Deploy', sub: 'EC2 인스턴스를 설정하여 애플리케이션을 배포하고 호스팅 할 수 있고 ECR을 사용해 Docker이미지를 관리할 수 있습니다.' },
    ];


    const filteredSkills = select === "ALL"
        ? skillsData
        : skillsData.filter(el => el.category === select);

    return (
        <div className='bg-gray-50 flex flex-col px-16 py-24 gap-8'>
            <div className='text-5xl font-extralight flex justify-center'>
                Skills
            </div>

            <div className='w-full flex gap-2 bg-gray-300 justify-center p-2 rounded-lg'>
                {categories.map((el) => (
                    <button
                        key={el}
                        onClick={() => setSelect(el)}
                        className={`px-4 py-2 rounded-lg transition duration-300 ${select === el
                            ? 'bg-white text-black'
                            : ' text-white hover:bg-white hover:text-black'
                            }`}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {filteredSkills.map(el => (
                    <div key={el.id} className='bg-white shadow rounded-xl px-4 py-2 flex gap-2'>
                        <img src={el.url} alt="" />
                        <div className='text-gray-500 text-sm flex items-center'>
                            {el.sub}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Skills
