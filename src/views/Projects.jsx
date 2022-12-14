import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full"
                src="https://ifh.cc/g/X2CNZt.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  NFT 마켓플레이스 사이트 제작
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                기업과의 협업 프로젝트를 통해서 NFT 동영상 마켓플레이스인
                DappTube 웹사이트를 제작하였습니다.
                <p class="text-white mt-3">주요 기능 :</p>
                <p class="test-gray-400">
                  동영상 업로드함과 동시에 NFT민팅, 구독권, 경매 시스템, NFT
                  구매/판매, IPFS, 동영상 플레이
                </p>
                <p class="text-white mt-3">담당 역할 :</p>
                <p class="text-gray-400">
                  동영상 업로드(FFmpeg), NFT민팅, IPFS, GCP
                  <br />
                  <br />
                  <p>
                    * 소스코드는 협업회사의 요청으로 인해 깃허브 레포지스토리가
                    비공개로 처리되어있습니다.
                  </p>
                </p>
              </p>
              <a
                href="https://www.youtube.com/watch?v=LilR9tOKSMs"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                시연&발표 영상
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://dapptube.vercel.app/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-5"
              >
                DappTube
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full"
                src="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Block Explorer 사이트 제작
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Geth를 사용해 private 블록체인 네트워크를 구축하였으며 web3
                라이브러리를 사용해 블록 정보, 계정 정보, 트랜잭션 정보 등을
                실시간으로 조회할 수 있는 블록 익스플로러 사이트를
                제작하였습니다.
                <p class="text-white mt-3">주요 기능 :</p>
                <p class="test-gray-400">Geth, Web3, React, Node.js Express</p>
                <p class="text-white mt-3">담당 역할 :</p>
                <p class="text-gray-400">
                  private 블록체인 네트워크로 구축,web3 라이브러리를 사용해
                  작업하였으며 계정 주소로 검색시 해당 계정으로 마이닝한 블록
                  내용 조회, 해당 계정으로 발생시킨 트랜잭션 조회 가능합니다{" "}
                </p>
              </p>
              <a
                href="https://github.com/J-Chan96/EtherScan_clone"
                class="inline-flex items-center py-2 px-3 mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Github
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg m-auto"
                src="https://user-images.githubusercontent.com/69417234/171119815-4e429b01-602d-431e-8bff-abc780c993f8.gif"
                alt=""
              />
            </a>
            <div class="p-5 mt-8">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Android / Ios 앱 개발 및 배포
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
                Expo 기반의 android / ios 앱을 제작하여 구글플레이스토어 및
                앱스토어에 배포하였습니다. 많은 기술 스텍을 사용하지는 않았지만
                React-Native를 경험해 볼 수 있는 기회였습니다.
                <p class="text-white mt-3">주요 기능 :</p>
                <p class="test-gray-400">
                  술자리 분위기에 따른 건배사 랜덤 추천, 다양한 술게임 설명서
                  제공
                </p>
                <p class="text-white mt-3">담당 역할 :</p>
                <p class="text-gray-400">UI 디자인, react-navigation 작업</p>
              </p>
              <a
                href="https://github.com/J-Chan96/Project_Drunken_Korean"
                class="inline-flex items-center mt-12 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Github
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.jjlee.drunkenKorean"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-5"
              >
                Google Play Store
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full"
                src="https://ifh.cc/g/3o87Ma.gif"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  경일 커뮤니티 사이트 제작
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                경일 게임 아카데미의 커뮤니티 사이트로 사용자들이 소통할 수 있는
                서비스로 제작하였습니다.
                <p class="text-white mt-3">주요 기능 :</p>
                <p class="test-gray-400">
                  회원가입,로그인,게시판,듀오매치,채팅,관리자 기능을 포함한
                  웹사이트를 제작하였습니다.
                </p>
                <p class="text-white mt-3">담당 역할 :</p>
                <p class="text-gray-400">
                  회원가입, 파일업로드, OAuth2.0 카카오 로그인 구현, 구글 API
                  활용
                </p>
              </p>
              <a
                href="https://github.com/J-Chan96/community_teample"
                class="inline-flex items-center  mt-10 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Github
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <a href="hello">
              <img
                class="rounded-t-lg w-full"
                src="https://ifh.cc/g/GwdLdo.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="helo">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  게시판 기능을 포함한 웹페이지 제작
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                첫 팀플 협업으로 제작한 프로젝트로 로그인과 게시판 기능이
                구현되어있는 웹페이지를 제작하였습니다.
                <p class="text-white mt-3">주요 기능 :</p>
                <p class="test-gray-400">
                  회원가입, 로그인, 로그아웃, 회원탈퇴, 프로필 수정
                  ,게시판,관리자 기능을 포함한 웹페이지
                </p>
                <p class="text-white mt-3">담당 역할 :</p>
                <p class="text-gray-400">
                  커넥션 풀과 프로미스를 활용해서 데이터베이스와 연결 및 작업
                  진행, 사용자 회원가입과 로그인 기능 작업
                </p>
              </p>
              <a
                href="https://github.com/J-Chan96/Teample"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Github
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
