import React from 'react'
import frontend from '../Img/frontendlogo.png'
import cp from '../Img/cplogo.png'
import devtool from '../Img/devtool.png'
import html_logo from '../Img/htmllogo.png'
import css_logo from '../Img/csslogo.png'
import reactjs_logo from '../Img/reactjslogo.png'
import js_logo from '../Img/jslogo.png'
import c_logo from '../Img/clogo.png'
import cpp_logo from '../Img/cpplogo.png'
import btstrap from '../Img/btstrap.png'
import gitbash from '../Img/gitbash.png'
import skill from '../Img/skills1.png'
import skill_style from './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Skills() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div>
            <div className="loc">
                <p>Skills</p>
            </div>
            <div className="front_skill">
                <div className="skill_lef" style={skill_style}>
                    <img src={skill} alt="" srcset="" />
                </div>
                <div className="skill_rig" data-aos="fade-up">
                    <h1>Skills</h1>
                    <p>"Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft."
                    </p>
                    <p>– Will Smith</p>
                </div>
            </div>
            <section className="skills">
                
                <div className="skill_tag" data-aos="fade-up">
                    <div className="img_skill">
                    <img src={frontend} alt="" srcset="" />
                    </div>
                    <div className="skill_det">
                    <h1>Frontend Web Development</h1>
                    <hr className="hrdet"/>
                    <p>Experienced with: HTML/CSS, JavaScript
                    , ReactJS</p>
                    </div>
               </div>
               <div className="skill_tag" data-aos="fade-up">
                    <div className="img_skill">
                    <img src={cp} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Competitive Programming</h1>
                    <hr className="hrdet"/>
                    <p>Languages: C++ , C</p>
                    <p><span>1711 </span>(max. rating) on Codechef</p>
                    <p><span>1103 </span>(max. rating) on Codeforces</p>
                    </div>
               </div>
               <div className="skill_tag" data-aos="fade-up">
                    <div className="img_skill">
                    <img src={devtool} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Other Developer Tools</h1>
                    <hr className="hrdet"/>
                    <p>VS Code, GitHub</p>
                    </div>
               </div>
               <div className="lang_edu" data-aos="fade-up">
                <h1>Familiar with..</h1>
                <div className="lang_box">
                    <img src={html_logo} alt="" srcset="" />
                    <img src={css_logo} alt="" srcset="" />
                    <img src={js_logo} alt="" srcset="" />
                    <img src={reactjs_logo} alt="" srcset="" />
                    <img src={c_logo} alt="" srcset="" />
                    <img src={cpp_logo} alt="" srcset="" />
                    <img src={gitbash} alt="" srcset="" />
                    <img src={btstrap} alt="" srcset="" />
                </div>
            </div>
            </section>
        </div>
    )
}