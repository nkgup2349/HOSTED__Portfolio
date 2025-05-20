import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nikhil Kumar gupta</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="" className="footer__link">Kuch mila nahi</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/nikhil_gupta002/" className="footer__social-link" target='_blank'>
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/nkgup2349" className="footer__social-link" target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="footer__social-link" target='_blank'>
                        <i class="uil uil-envelope"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; Nikhil_portfolio. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer
