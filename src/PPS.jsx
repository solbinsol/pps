import React from "react";
import  { useEffect, useState } from "react";
import {useMediaQuery} from 'react-responsive';
import './Pps.css';

const PPS = () =>{



    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isMoniter = useMediaQuery({ maxWidth: 1040 });
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return(
        <div  className={`Container ${isScrolled ? "scrolled" : ""}`}>
            

            <div className="header">
                <h1 className="logo">KSB's Portfolio</h1>
                <ul className="Menu">
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Archiving</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="Intro">
                <div className="NameBox">
                <h1 className="name">-김솔빈-<br/>웹 개발자 포트폴리오</h1>
                </div>
                <div className="line">___________________________________________</div>
                <div className="IntroText">
                <p>안녕하세요.<br/>
                공부가 취미인 풀 스택 웹 개발자입니다.<br/>
                매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.</p>
                </div>
            </div>
            <div className={`AboutMe ${isMobile ? "mobile" : ""}${isMoniter ? "Moniter" : ""}`}>
                <div className="AboutHeader">
                    <h1 >ABOUT ME</h1>
                </div>
                <div className={`AboutItem ${isMobile ? "mobile" : ""}${isMoniter ? "Moniter" : ""}`}>
                    <ul className="TT">
                        <ul>이름  &nbsp; 
 
                        
                        <li><span>김솔빈</span></li>
                        </ul>
                        <ul>생년월일
                        <li><span>1999.12.29</span></li>
                        </ul>
                        <ul>주소지
                        <li><span>경기도 수원시</span></li>
                        </ul>
                        <ul>연락처  &nbsp;
                        <li><span>010-6286-7011</span></li>
                        </ul>
                        <ul>이메일
                        <li><span>qkaejwnj@naver.com</span></li>
                        </ul>
                        <ul>학력  &nbsp;   &nbsp; 
                        <li>
                            <span>대림대학교                            </span>
                                <p>컴퓨터정보학부</p>

                        </li>
                        </ul>
                    </ul>
                </div>
                <div className="Aboutfooter">
                    
                    <p className="AFP">* 채용 제의 또는 / 문의는 위 연락처 / 이메일로 부탁드립니다.</p>
                </div>
            </div>
            <div className={`Skills ${isMobile ? "mobile" : ""}
            ${isMoniter ? "Moniter" : ""}`}>
            <div className="AboutHeader">
                    <h1 className="SkillName">SKILLS</h1>
                    </div>
                <div className={`SkillsItem ${isMobile ? "mobile" : ""}
                ${isMoniter ? "Moniter" : ""}`}>

                    <div className="FrontEnd">
                        <h1 className="Sname">Front-End</h1>
                    </div>
                    <div className="BackEnd">
                        <h1 className="Sname">Back-End</h1>
                    </div>
                    <div className="VersionControl">
                        <h1 className="Sname">Version Control</h1>
                    </div>
                </div>
            </div>
            <div className="ARCHIVING">
                <h1 className="ARname">ARCHIVING</h1>
                <div className="ARbox">

                    <div className="TBox">
                    <h1>GitHub</h1>
                    <p className="Gitlink">https://github.com/solbinsol/</p>
                    <p>소스 코드 저장소 입니다.</p>
                    <li>과거 프로젝트 , 프로그램 , 앱의 소스 코드</li>
                    <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                    </div>
                </div>
            </div>
            <div className={`project ${isMobile ? "mobile" : ""} ${isMoniter ? "Moniter" : ""}`}>
                <h1 className="PJname">PROJECTS</h1>
                <div className="PJ1">
                <h1 className="PJNAME">포트폴리오 웹사이트</h1>
                <p className="PJp">2023.5.29 </p>
                    <div className="PJLeft">

                        <img src="./images/poplo.jpg" alt="" />
                    </div>
                    <div className="PJRight">
                        <p>
                        포트폴리오 용도로 제작한 웹사이트입니다.<br/> 지금 보고 있는 바로 이 웹사이트에 해당합니다.<br/><br/>
                        한눈에 들어오고 보기 쉬울 수 있도록 고민하여 <br/>스스로 디자인 하였습니다.
                        <br/><br/>
                        간단한 자기소개 , 인적 사항 , 사용가능한 기술을 작성했습니다.<br>
                        </br>웹 페이지 전체화면과 모바일에서의 화면을 <br/> 반응형으로 구현 했습니다.
                        </p>
                        <input type="submit" className="DetailView"
                        value="ReadME!"/>


                    </div>
                    <div className="PJOP">
                        <ul>
                            <li>주요기능 &nbsp; <span>간단한 자기소개, 인적 사항, 기술 스택, <p>&nbsp;&nbsp;  GitHub 및 티스토리 링크, 프로젝트 경험,</p> <p>&nbsp; &nbsp; 업무 경력</p></span>     </li>
                            <li>URL&nbsp; &nbsp; &nbsp; &nbsp; <span>ksb-portfolio.com</span></li>
                            <li>Fontend<span className="TLine">React , Node.js , css , JS</span></li>
                        </ul>
                    </div>
                </div>
                <div className="PJ1">
                <h1 className="PJNAME">대림듀스 원어원</h1>
                <p className="PJp">2023.3.20 </p>
                    <div className="PJLeft">

                        <img src="./images/pj2.jpg" alt="" />
                    </div>
                    <div className="PJRight">
                        <p>
                        학교에서 진행하는 캡스톤 프로젝트 입니다<br/> 대림대학교 재학생들의 사진을 월드컵 게임으로 1등을 정하고 <br/>소개팅도 매칭해주는 웹사이트 입니다.<br/><br/>
                        인터페이스 UI를 최대한 단순하게 디자인해
                        사용자가 <br/>부담을 느끼지 않고 이용할 수 있도록 만들었습니다
                        <br/>
                        Firebase를 통해 회원가입 로그인 기능을 구현하였고 firebase Database에 등록된 사진을 가져오도록 구현했습니다<br>
                        </br>
                        </p>
                        <input type="submit" className="DetailView"
                        value="ReadME!"/>
                    </div>
                    <div className="PJOP">
                        <ul>
                            <li>주요기능 &nbsp; <span>로그인/회원가입 , 월드컵 게임,소개팅 <p>&nbsp;&nbsp;  </p></span>     </li>
                            <li>BackEnd<span>FireBase</span></li>
                            <li>Fontend<span className="TLine">React , Node.js , css , JS</span></li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>

    )
}

export default PPS;