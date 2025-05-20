import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__substitle">6+ Projects</span>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__substitle">Online 24*7</span>
        </div>

        {/* in case you get any just add over here */}
        {/* <div className="about__box">
            <h3 className="about__title"></h3>
            <span className="about__substitle"></span>
        </div> */}
    </div>
  )
}

export default info
