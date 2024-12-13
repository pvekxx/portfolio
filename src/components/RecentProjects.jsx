import React from 'react'
import projectImg from '../assets/dummy.jpg'

const RecentProjects = () => {
    return (
        <div className='bg-gray-100 flex flex-col px-52 py-16'>
            <div className='text-5xl font-extralight flex justify-center py-8'>
                Recent Projects
            </div>
            <div className='flex flex-col gap-20 py-8'>
                {/* 프로젝트 1 */}
                <div className='flex gap-6'>
                    <div className='w-[33%] text-sm flex flex-col gap-3'>
                        <img src={projectImg} alt="" className='' />
                        <div>팀 프로젝트(3인)</div>
                        <div className='text-xs'>2024/09/24 ~ 2024/10/24 (23일)</div>
                        <div className='text-xs'>프론트엔드 및 백엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <div className='font-bold text-2xl'>
                            복약 알람 앱 - 삐약삐약
                        </div>
                        <div className='pl-4 text-gray-500'>
                            Buttersoft사의 요구사항에 맞춰 진행된 기업 협약 프로젝트로, 사용자가 설정한 시간에 맞춰 주기적으로 푸시 알람을 받을 수 있는 Android 어플리케이션을 개발.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-500'>
                            Javascript, TypeScript, React-Native, Expo, Node.js, Nest.js, Mysql, Sequelize, React-Query, Docker, AWS(EC2, ECR)
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-2 pl-4 text-gray-500'>
                            <div>- 알람 관리 시스템 : React와 React-Native, Expo를 활용하여 사용자 인터페이스를 설계하고 구현하였습니다. TypeScript를 사용하여 코드의 안정성을 높였으며, 사용자가 직관적으로 알람을 설정, 수정, 삭제할 수 있도록 구현하였습니다.</div>
                            <div>- 주기적인 푸시 알람 전송 기능 : Nest.js의 Cron모듈을 활용하여 사용자가 설정한 시간에 맞춰 푸시 알람을 전송하는 백엔드 로직을 구현하였습니다. Expo의 expo-notifications API를 사용하여  푸시 알람 시스템을 설계하였으며, 이를 통해 사용자가 설정한 시간에 정확하게 알람을 받을 수 있도록 하였습니다.</div>
                            <div>- 상태 관리 및 데이터 페칭 : React-Query를 활용하여 데이터 상태 관리를 하였습니다. 이를 통해 애플리케이션의 성능을 향상시키고, 사용자가 원활한 앱 사용성을 가질 수 있도록 하였습니다.</div>
                            <div>- 컨테이너화 및 배포 : React Native와 Expo를 사용하여 애플리케이션을 APK 파일로 빌드하였으며, 백엔드 서버는 Docker를 활용하여 이미지를 AWS ECR을 통해 컨테이너로 실행해 안정적인 서버 환경을 설정하였습니다.</div>
                        </div>
                    </div>
                </div>
                {/* 프로젝트 2 */}
                <div className='flex  '>
                    <div className='w-[33%] text-sm flex flex-col gap-3'>
                        <img src={projectImg} alt="" className='' />
                        <div>팀 프로젝트(3인)</div>
                        <div className='text-xs'>2024/07/19 ~ 2024/08/07 (14일)</div>
                        <div className='text-xs'>백엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <div className='font-bold text-2xl'>
                            중고 거래 마켓 - Rehand
                        </div>
                        <div className='pl-4 text-gray-500'>
                            Handlebars(hbs)를 활용한 서버 사이드 렌더링으로 사용자 간 중고 거래가 가능한 웹페이지를 구현.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-500'>
                            HTML, CSS, JavaScript, TypeScript, Node.js, Nest.js, Mysql, Sequelize, GitHub-actions, AWS(EC2)
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-3 pl-4 text-gray-500'>
                            <div>- 소셜 로그인 및 일반 로그인 : Oauth2.0과 카카오와 구글의 Passport를 활용하여 소셜 로그인 기능을 구현하였으며, 일반 로그인을 지원하여 다양한 사용자 인증 방식을 구현하였습니다.</div>
                            <div>- 유저 및 아이템 관리 시스템 : Nest.js와 Mysql을 사용하여 사용자의 정보와 중고 아이템 데이터를 관리할 수 있는 백엔드 로직을 구현하였습니다. RESTful API를 설계하여 프론트엔드와의 원활한 데이터 통신을 가능하게 하였습니다.</div>
                            <div>- CI/CD : GitHub-Actions를 사용하여 빌드 및 배포를 자동화 하였으며, AWS EC2를 활용하여 안정적인 서버 환경을 설정하였습니다. 이를 통해 개발 생산성을 향상하였습니다.</div>
                        </div>
                    </div>
                </div>
                {/* 프로젝트 3 */}
                <div className='flex  '>
                    <div className='w-[33%] text-sm flex flex-col gap-3'>
                        <img src={projectImg} alt="" className='' />
                        <div>팀 프로젝트(4인)</div>
                        <div className='text-xs'>2024/05/14 ~ 2024/05/28 (11일)</div>
                        <div className='text-xs'>프론트엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <div className='font-bold text-2xl'>
                            게시판 - Donut Shop
                        </div>
                        <div className='pl-4 text-gray-500'>
                            브라우저의 스토리지를 활용한 간단한 게시판을 구현.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-500'>
                            HTML, CSS, JavaScript, TypeScript
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-3 pl-4 text-gray-500'>
                            <div>- 게시글 및 댓글 기능 : 게시판의 글, 댓글, 대댓글에 대한 전체적인 기능을 HTML, CSS, JavaScript, TypeScript를 활용하여 구현하였습니다.</div>
                            <div>- 고유 인덱스 기반 게시글 관리 : 게시글 작성 시 고유 인덱스를 할당하여 URL 파라미터로 활용함으로써 게시글 조회 및 관리를 하였습니다.</div>
                            <div>- TypeScript를 통한 데이터 구조 안정성 확보 : 게시글 및 댓글 데이터를 처리하는 과정에서 TypeScript의 정적 타입 검사를 통해 일관된 데이터 구조 유지와 오류 예방을 하였습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjects