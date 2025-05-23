import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Presonal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>{setToggleState(1)}} > */}
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)} >
                        <i className="uil uil-graduation-cap qualification__icon"  ></i>Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}   onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil- qualification__icon"></i>
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* <div className={"qualification__content qualification__content-active"}> */}
                    <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
                        {/*  -- ## qualication 1 ## ------------------------------------------------ */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">National Institute of Technology Agartala , Tripura</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__router"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*   ## qualification 2 ## ------------------------------------------------ */}
                        <div className="qualification__data">
                            {/* responsible for make it right side */}
                            <div></div>
                            <div>
                                <span className="qualification__router"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intermediate(12th)</h3>
                                <span className="qualification__subtitle">Hanumat intermediate College Kalakaker , Pratapgrah , UP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className={"qualification__content qualification__content-active"}> */}
                    <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
                        {/*  -- ## qualification 2 ka 1 = Education ## ------------------------------------------------ */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intership</h3>
                                <span className="qualification__subtitle">BlueStock Fintech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb_2025 - Mar_2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__router"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*   ## qualification 2 ka 2 = Education ## ## ------------------------------------------------ */}
                        <div className="qualification__data">
                            {/* responsible for make it right side */}
                            <div></div>
                            <div>
                                <span className="qualification__router"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Teaching of ROS [Robot Operating System]</h3>
                                <span className="qualification__subtitle"> To the 1st Year Students</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2023 - Jan 2023
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
