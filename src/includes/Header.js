import React from 'react';
import { Link } from 'react-router-dom';
   
const Header = () => {  
   // Menu close button animation
   let hamburgerEvent = (event)=>{
      event.currentTarget.classList.toggle('outer_fixed');
      event.currentTarget.classList.toggle('container');
   }


   // To close menu
   const toggleMenu = (e) => {
      document.getElementById("toggleMenu").click();
      if(e.target.id === 'toServiceSection'){
         setTimeout(() => {
            window.scrollTo(0,620);
         }, 200);
      }

      let isChecked = document.getElementById('toggleMenu').checked;
      let outer_menu_class_list = document.getElementById("outer-menu").classList;
      if(isChecked){
         outer_menu_class_list.remove('outer_fixed');
         outer_menu_class_list.remove('container');
      }else{
         outer_menu_class_list.add('outer_fixed');
         outer_menu_class_list.add('container');
      }
   }

   // To service section 
   const toggleServiceSection = () =>{
      setTimeout(() => {
         window.scrollTo(0,620);
      }, 200);
   }
   
  return (
    <>
      <header id="header">
      <div className="container">
         <div className="header_section">
            <div className="logo_container typewriter">
               <div className="main-logo"><Link to="/"><img src="images/codelink-main.svg" alt="Logo"/></Link>
               </div>
            </div>
            <div className="right-part">
               <ul className="menu-desktop">
                  <li className="link">
                     <Link to="/" className="hire_us_link">Home</Link>
                  </li>
                  <li className="link">
                     <Link to='/' onClick={()=>toggleServiceSection()} id = 'toMenuServiceSection' className="hire_us_link">Services</Link>
                  </li>
                  <li className="link">
                     <Link to="/company" className="hire_us_link">Company</Link>
                  </li>
                  <li className="link">
                     <a href={void(0)} className="hire_us_link" data-toggle="modal"
                        data-target=".hire-us-modal"  id='openHireComponent' >HIRE US</a>
                  </li>
               </ul>
               <div className="outer-menu" id='outer-menu' onClick={hamburgerEvent}>
                  <div>
                     <input className="checkbox-toggle" type="checkbox" id='toggleMenu'/>
                     <div className="hamburger">
                        <div></div>
                     </div>
                     <div className="menu">
                        <span className="teal_logo_container container">
                           <Link to="/"><img className="teal_logo" src="images/logo_teal.svg" alt="Logo" onClick={(e)=>toggleMenu(e)} /></Link>
                        </span>
                        <div>
                           <div className="container">
                              <ul>
                                 <li><Link to="/" className='mobileView' style={{display : 'none'}} onClick={(e)=>toggleMenu(e)}>HOME</Link></li>
                                 <li><Link to="/company" className='mobileView'  style={{display : 'none'}} onClick={(e)=>toggleMenu(e)}>COMPANY</Link></li>
                                 <li className="active"><Link to="/" onClick={(e)=>toggleMenu(e)} id="toServiceSection">OUR SERVICES</Link></li>
                                 <li><Link to="our-process" onClick={(e)=>toggleMenu(e)}>OUR PROCESS</Link></li>
                                 <li><Link to="our-cases" onClick={(e)=>toggleMenu(e)}>CASES</Link></li>
                                 <li className="link"><a href={void(0)} style={{display : 'none'}}  className="hire_us_link mobileView" data-toggle="modal" data-target=".hire-us-modal">HIRE US</a></li>
                                 <li><Link to="contact-us" onClick={(e)=>toggleMenu(e)}>CONTACT</Link></li>
                                 <li className="dl_btn_container" ><Link to="careers" className="dl_pdf_btn hvr-rectangle-out"  onClick={(e)=>toggleMenu(e)}>CAREERS</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
    </>
  )
}

export default Header
