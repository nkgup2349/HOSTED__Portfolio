import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name">Expres js</h3>
                            <span className="skills__level">basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">

                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name">Next Js</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    
                    {/* in case of any other add here */}
                    {/* <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name"></h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div >
                            <h3 className="skills__name"></h3>
                            <span className="skills__level"></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
  )
}

export default Backend
