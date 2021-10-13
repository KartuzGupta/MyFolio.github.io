import React from 'react'
import education from './Img/education_rb.png'
import education_styles from './Education.css'
import Edu from './Edu'
import drvsec_logo from './Img/drvseclogo.png'
import iitp_logo from './Img/iitplogo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

//import Perspective from './Perspective'
export default function Education() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div style={education_styles}>
            <div className="loc">
                <p>Education</p>
            </div>
            <div className="front_e">
                <div className="left_e">
                    <img src={education} alt="" srcset="" />
                </div>
                <div className="right_e"  data-aos="fade-up">
                    <h1>Education</h1>
                    <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                    </p>
                    <p>– Malcolm X</p>
                </div>
            </div>
            <div className="educate_tag"  data-aos="fade-up">
                <div className="img_ed">
                <img src={iitp_logo} alt="" srcset="" />
                </div>
                <Edu title='Indian Institute of Technology , Patna' time='2020-Present' degree='B.Tech in Mechanical Engineering' marks='9.39 CPI in 1st Year'/>
            </div>
            <div className="educate_tag"  data-aos="fade-up">
                <div className="img_ed">
                <img src={drvsec_logo} alt="" srcset="" />
                </div>
                <Edu title='Dr. Virendra Swarup Education Centre' time='2018-2020' degree='12th CISCE Board' marks='96.5% PCM'/>
            </div>
            <div className="educate_tag" data-aos="fade-up"> 
                <div className="img_ed">
                <img src={drvsec_logo} alt="" srcset="" />
                </div>
                <Edu title='Dr. Virendra Swarup Education Centre' time='2016-2018' degree='10th CISCE Board' marks='95%'/>
            </div>
            <br/>
        </div>
    )
}
