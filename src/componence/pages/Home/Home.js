import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
function Home() {
  return (
   <section>
    <div className="container">
        <div className="home-container">
            <div className="home-content">
                <h2 className='section_title'>
                    Learn Everything For Free
                </h2>
                <p>Master Trending Techhnologies With Techflix AI.Invest Your Time and return skills</p>
                   <div className="home-btns">
                    <button className='register-btn'>Get started</button>
                    <button className='register-btn'>watch now</button>
                   </div>
            </div> 
              <div className="home-img">
                <div className="home-img-wrapper">
                    <div className="box-01">
                        <div className="box-img">
                            <img src={meta} alt=''/>
                        </div>
                    </div>
                    <div className="whatsapp-container">
                        <h5>500 + students</h5>
                        <AiOutlineWhatsApp color="green"/>
                    </div>
                    <h5>ActiveSupport</h5>

                </div>

               </div>
            
        </div>
    </div>
   </section>
  )
}

export default Home