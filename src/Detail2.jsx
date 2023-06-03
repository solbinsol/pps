import React from "react";
import './Detail2.css';
import  { useEffect, useState } from "react";
import {useMediaQuery} from 'react-responsive';
import './Pps.css';

const Detail = () =>{
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
        <div className={`ReedMe ${isScrolled ? "scrolled" : ""}`}>
            <div className="Rheader">
                <h1 className="logo">KSB's      ReedME!</h1>

            </div>
            <div className="RMname">
                <h1>대림듀스 원어원</h1>
            </div>
                <div className="Summary">
                    <h2>📌 Summary</h2>
                    <div className="IF">
                        <h3>대림대 학교 재학생들의 사진을 월드컵 게임으로 1등을 정하고 소개팅 매칭을 해주는 웹사이트 입니다</h3>
                        <p>
 <br/> 배포는 하지 못해서 사진으로 설명하도록 하겠습니다.
 Firebase를 통해 회원가입 로그인 기능을 구현하였고 firebase Database에 등록된 사진을 가져오도록 구현했습니다

                        </p>
                        <div className="KeyFeatures">
                            <h4>
                                * 주요 기능
                            </h4>
                            <ul>
                                <li> 로그인 , 회원가입</li>
                                <li> 월드컵 게임</li>
                                <li> 소개팅</li>
                                <li> GitHub 링크</li>
                                <li>FireBase</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="🤔 Background">
                    <div className="IF">
                        <p>                        팀 프로젝트 중 어떤 웹 프로젝트를 만들까  ? 하는 고민중에 "에브리타임" 이라는 어플에서 이성을 찾는 사람들을 보고 아이디어를 얻어 만들게 되었습니다.
                        </p>


                    <p>
                        아이디어 자체를 너무 무겁게 생각하지 않고 가벼운 마음으로 정해 프로젝트에 대한 부담을 느끼기 보다는 재밌게 진행할 수 있었습니다
                    </p>



                    </div>
                </div>
                <div className="Meaning">
                    <h2>🔍 Meaning</h2>
                    <div className="IF">
                        <p>
                            프로젝트를 진행하며 DataBase나 Server를 어떻게 구현할지 고민하던중 FireBase에 대해 알게 되었습니다.
                        </p>
                        <p>
                            조금 더 간단하게 데이터베이스를 구현 할 수 있었지만 여태 공부해온 서버구현 코딩과 많은 차이가 있었고 FireBase전용 코드를 사용해야 했습니다.
                        </p>
                        <p>
                            이로 인해 처음에는 어려움을 느꼈으나
                            새로 배워가는게 재미있어 의미있는 프로젝트 였습니다.
                        </p>
                    </div>
                </div>
                <div className="🔨 Technology Stack(s)">
                    <ul>
                        <li>FrontEnd : Node.js, TypeScript, css</li>
                    </ul>
                </div>
                <div className="Referencephoto">
                    <h2>
                    Reference photo
                    </h2>
                    <div className="all">
                    <h3>회원가입 </h3>
                        <div className="allImg"> 
                        <img className="Shortimg" src="images/signupPNG.Png" />

                        
                        <img className="Longimg" src="images/signupTWo.png" />
                        <p>ID는 학교 이메일로만 받아 학교인증을 하였고
                            Passward는 영문 + 숫자 + 특수문자 예외 처리를 했습니다.
                        </p>
                        <p>
                            회원가입의 조건이 만족하면 FireBase 데이터베이스에 등록이 되는걸 볼 수 있습니다.
                        </p>
                        </div>
                    </div>
                    <div className="Ban">
                        <h3>웹사이트 반 (1040px)</h3>
                        <div className="allImg"> 
                        <img src="images/ban.Png" />
                        <img src="images/banTwo.png" />

                        </div>
                    </div>
                    <div className="Ban">
                        <h3>모바일 (768px)</h3>
                        <div className="allImg"> 
                        <img src="images/mb.png" />
                        <img src="images/mbTwo.png" />

                        </div>
                    </div>

                </div>
                <div className="Bin"></div>

        </div>
    )
} 

export default Detail