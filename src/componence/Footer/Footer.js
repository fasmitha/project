import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer-box'>
            <div className='logo'>
              <div className='logo-img'>
                <img src={footer} alt="" />
              </div>
              <h2>Textflix AI</h2>
            </div>
            <p>
              Embrance the futur of innovation and technology with  our cutting-edge tech business solutions </p>
          </div>
          <div className='footer-box'>
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>
                <a href=''>  our programs</a>
              </li>
              <li>
                <a href=''>  our plan</a>
              </li>
              <li>
                <a href=''> Become a member</a>
              </li>
            </ul>
          </div>
          <div className='footer-box'>
            <h4 className='footer_title'>Quick links</h4>
            <ul className='footer_links'>
              <li>  <a href=''>
                About us</a>
              </li>
              <li>  <a href=''>
                Contact us</a>
              </li>
              <li>  <a href=''>
                Support us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer