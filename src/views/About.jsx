import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              저는 경일게임아카데미에서 블록체인5기 전문 교육과정을 통해서 배운
              신입 개발자입니다. 전반적으로 HTML/CSS와 같은 기초적인 부분부터
              시작해서 Node.js 기반의 백엔드, React를 활용한 프론트엔드, MySQL을
              활용한 데이터베이스 등을 배우며 웹 프로그래밍에 관한 교육을
              받았고, 전반적인 블록체인 생태계를 이해했으며, Solidity를 활용한
              스마트 컨트랙트 작성 및 배포 등을 배우면서 지식을 쌓았습니다.
              그리고 교육과정 중 4번의 팀 프로젝트를 통해서 팀워크와 협업에 대한
              경험을 쌓았고, 그 중 한번은 기업 협약 프로젝트를 통해 회사와의
              협업으로 프로젝트를 진행했습니다. 이를 통해 팀 단위 협업을 배우고
              터득할 수 있었습니다.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              아래의 기술들을 활용함으로써 프로젝트에 진행했습니다.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
