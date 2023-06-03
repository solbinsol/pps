import React from "react";
import './Detail.css';
import  { useEffect, useState } from "react";
// import {useMediaQuery} from 'react-responsive';
import './Pps.css';

const Detail = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    // const isMobile = useMediaQuery({ maxWidth: 768 });
    // const isMoniter = useMediaQuery({ maxWidth: 1040 });
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
                <h1>포트폴리오 웹사이트</h1>
            </div>
                <div className="Summary">
                    <h2>📌 Summary</h2>
                    <div className="IF">
                        <h3>포트폴리오 용도로 제작한 웹사이트<span> 입니다</span></h3>
                        <p>
 <br/> 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                            한눈에 들어오고 보기 쉬울 수 있도록 고민하여 <br/>스스로 디자인 하였습니다.
                            <br/><br/>
                            간단한 자기소개 , 인적 사항 , 사용가능한 기술을 작성했습니다.<br>
                            </br>웹 페이지 전체화면과 웹사이트의 반 (1040px)모바일(768px)에서의 화면을 <br/> 반응형으로 구현 했습니다.
                        </p>
                        <div className="KeyFeatures">
                            <h4>
                                * 주요 기능
                            </h4>
                            <ul>
                                <li> 간단한 자기소개</li>
                                <li> 인적 사항</li>
                                <li> 기술 스택</li>
                                <li> GitHub 링크</li>
                                <li>프로젝트 경험</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="🤔 Background">
                    <div className="IF">
                    React , Html , css 능력을 향상 시키려고 학습하려고 만든 프로젝트입니다.
                    <br></br>
                    어떤 웹사이트를 만들어 볼까 고민하던중 보는 사람으로 하여금
                    개발자로서의 제가 어느 정도의 기술 능력이 있는지 파악할 수 있고 , 내 자신의 수준을 바로 파악할 수 있는 웹사이트가 포트폴리오라고 생각이 들어 진행하게 되었습니다.
                    <br>
                    </br>
                    후에 돌아봐 미흡한 부분을 더 고치고 능력을 키우고 싶습니다.
                    </div>
                </div>
                <div className="Meaning">
                    <h2>🔍 Meaning</h2>
                    <div className="IF">
                        <p>
                            React를 이용해 처음으로 혼자 진행한 프로젝트였기 떄문에, React (Node.js)에 대한 이해를 넓히는데 많은 도움이 되었습니다. 처음에는 React에 많은 기능들을 사용하고 이해하기 힘들었지만 , 이해하고 나니 스스로 많이 발전했다고 생각이 들었습니다. 
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
                    <h3>전체화면</h3>
                        <div className="allImg"> 
                        <img src="images/all.Png" alt="ss"/>
                        <img src="images/allTwo.png" alt="ss"/>

                        </div>
                    </div>
                    <div className="Ban">
                        <h3>웹사이트 반 (1040px)</h3>
                        <div className="allImg"> 
                        <img src="images/ban.Png" alt="ss"/>
                        <img src="images/banTwo.png" alt="ss"/>

                        </div>
                    </div>
                    <div className="Ban">
                        <h3>모바일 (768px)</h3>
                        <div className="allImg"> 
                        <img src="images/mb.png" alt="ss"/>
                        <img src="images/mbTwo.png" alt="ss"/>

                        </div>
                    </div>

                </div>
                <div className="Bin"></div>

        </div>
    )
} 

export default Detail