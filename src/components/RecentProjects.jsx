import React from 'react'
import projectImg from '../assets/dummy.jpg'
import donutmain from '../assets/donutmain.gif'
import donutboard from '../assets/donutboard.png'
import project3 from '../assets/project3.gif'
import project2 from '../assets/project2.gif'
import project2list from '../assets/project2list.png'
import project2mystore from '../assets/project2mystore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const RecentProjects = () => {
    return (
        <div className='bg-gray-100 flex flex-col items-center py-16 px-4'>
            <div className='text-5xl font-extralight flex justify-center py-8'>
                Recent Projects
            </div>
            <div className='flex flex-col max-w-4xl w-full gap-14 py-8'>
                {/* 프로젝트 1 */}
                <div className='flex gap-10'>
                    <div className='w-[50%] text-sm flex flex-col gap-3'>
                        <img src={project3} alt="" className='' />
                        <div>팀 프로젝트(3인)</div>
                        <div className='text-xs'>2024/09/24 ~ 2024/10/24 (23일)</div>
                        <div className='text-xs'>프론트엔드 및 백엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <div className='font-bold text-2xl'>
                                복약 알람 앱 - 삐약삐약
                            </div>
                            <a href="https://github.com/pvekxx/Devops_Project_03_bbiyakbbiyak" className='flex items-center'>
                                <FontAwesomeIcon icon={faGithub} size="2x" className='hover:text-gray-500 transition duration-200' />
                            </a>
                        </div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            Buttersoft사의 요구사항에 맞춰 진행된 기업 협약 프로젝트로, 사용자가 설정한 시간에 맞춰 주기적으로 푸시 알람을 받을 수 있는 Android 어플리케이션을 개발.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            Javascript, TypeScript, React-Native, Expo, Node.js, Nest.js, Mysql, Sequelize, React-Query, Docker, AWS(EC2, ECR)
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-2 pl-4 text-gray-700 leading-8'>
                            <div>
                                <div className='font-bold'>1. 알람 관리 시스템 구현</div>
                                <div className='pl-2'>
                                    <div>- React, React Native, Expo를 활용하여 직관적인 사용자 중심의 UI 설계 및 구현</div>
                                    <div>- TypeScript를 사용하여 안정성과 유지보수성을 고려한 코드 작성</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>2. 주기적인 푸시 알람 전송</div>
                                <div className='pl-2'>
                                    <div>- Nest.js의 Cron모듈을 활용하여 사용자가 설정한 시간에 맞춰 푸시 알람을 전송하는 백엔드 로직 구현</div>
                                    <div>- Expo의 expo-notifications API를 통한 푸시 알람 전송 시스템 설계</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>3. 상태 관리 및 데이터 페칭</div>
                                <div className='pl-2'>
                                    <div>- React-Query를 이용한 데이터 상태 관리, 애플리케이션 성능 최적화 및 원활한 사용자 경험 제공</div></div>
                            </div>
                            <div>
                                <div className='font-bold'>4. 컨테이너화 및 배포</div>
                                <div className='pl-2'>
                                    <div>- Expo와 React Native로 APK파일 빌드</div>
                                    <div>- Docker 이미지를 AWS ECR을 통해 컨테이너로 실행하여 안정적인 백엔드 서버 환경 구축</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full border-b border-gray-300'></div>
                {/* 프로젝트 2 */}
                <div className='flex gap-10'>
                    <div className='w-[50%] text-sm flex flex-col gap-3'>
                        <img src={project2} alt="" className='' />
                        <img src={project2mystore} alt="" className='' />
                        <div>팀 프로젝트(3인)</div>
                        <div className='text-xs'>2024/07/19 ~ 2024/08/07 (14일)</div>
                        <div className='text-xs'>백엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <div className='font-bold text-2xl'>
                                중고 거래 마켓 - Rehand
                            </div>
                            <a href="https://github.com/pvekxx/project2-h3" className='flex items-center'>
                                <FontAwesomeIcon icon={faGithub} size="2x" className='hover:text-gray-500 transition duration-200' />
                            </a>
                        </div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            Handlebars(hbs)를 활용한 서버 사이드 렌더링으로 사용자 간 중고 거래가 가능한 웹페이지를 구현.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            HTML, CSS, JavaScript, TypeScript, Node.js, Nest.js, Mysql, Sequelize, Swagger, GitHub-actions, AWS(EC2)
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-3 pl-4 text-gray-700 leading-8'>
                            <div>
                                <div className='font-bold'>1. 소셜 로그인 및 일반 로그인 구현</div>
                                <div className='pl-2'>
                                    <div>- OAuth 2.0 및 카카오, 구글의 Passport를 활용하여 소셜 로그인 시스템 구축</div>
                                    <div>- 일반 로그인 기능을 추가하여 다양한 사용자 인증 방식 제공</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>2. 유저 및 아이템 관리 API 개발</div>
                                <div className='pl-2'>
                                    <div>- Nest.js와 MySQL을 활용하여 사용자 정보 및 중고 아이템 데이터 관리 API 개발</div>
                                    <div>- Swagger를 사용한 API 문서화로 프론트엔드와의 원활한 협업 및 테스트 지원</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>3. CI/CD 자동화 및 서버 배포</div>
                                <div className='pl-2'>
                                    <div>- GitHub Actions를 활용하여 빌드 및 배포 자동화</div>
                                    <div>- AWS EC2를 이용하여 안정적인 서버 환경 구축, 개발 생산성 향상</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full border-b border-gray-300'></div>
                {/* 프로젝트 3 */}
                <div className='flex gap-10'>
                    <div className='w-[50%] text-sm flex flex-col gap-3 '>
                        <img src={donutmain} alt="" className='' />
                        <img src={donutboard} alt="" className='' />
                        <div>팀 프로젝트(4인)</div>
                        <div className='text-xs'>2024/05/14 ~ 2024/05/28 (11일)</div>
                        <div className='text-xs'>프론트엔드</div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <div className='font-bold text-2xl'>
                                게시판 - Donut Shop
                            </div>
                            <a href="https://github.com/pvekxx/project1-songpa" className='flex items-center'>
                                <FontAwesomeIcon icon={faGithub} size="2x" className='hover:text-gray-500 transition duration-200' />
                            </a>
                        </div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            브라우저의 스토리지를 활용한 간단한 게시판을 구현.
                        </div>
                        <div className='font-bold text-lg'>사용 기술</div>
                        <div className='pl-4 text-gray-700 leading-8'>
                            HTML, CSS, JavaScript, TypeScript
                        </div>
                        <div className='font-bold text-lg'>담당한 기능</div>
                        <div className='flex flex-col gap-3 pl-4 text-gray-700 leading-8'>
                            <div>
                                <div className='font-bold'>1. 게시글 및 댓글 기능 구현</div>
                                <div className='pl-2'>
                                    <div>- HTML, CSS, JavaScript, TypeScript를 활용하여 게시글, 댓글, 대댓글 작성 및 관리 기능 구현</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>2. 고유 인덱스 기반 게시글 관리</div>
                                <div className='pl-2'>
                                    <div>- 게시글 작성 시 고유 인덱스를 URL 파라미터로 활용하여 게시글 조회 및 관리 기능 구현</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'>3. TypeScript를 통한 데이터 구조 안정성 확보</div>
                                <div className='pl-2'>
                                    <div>- TypeScript의 정적 타입 검사를 이용해 게시글 및 댓글 데이터 처리 시 일관된 데이터 구조 유지 및 오류 예방</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjects
