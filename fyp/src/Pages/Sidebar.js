import React from 'react'
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div>
         <div class="wrapper">
         <input type="checkbox" id="btn" hidden />
         <label for="btn" class="menu-btn">
         <i class="fas fa-bars"></i>
         <i class="fas fa-times"></i>
         </label>
         <nav id="sidebar">
            <div class="title">
               Side Menu
            </div>
            <ul class="list-items">
               <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
               <li><a href="#"><i class="fas fa-sliders-h"></i>Clients</a></li>
               <li><a href="#"><i class="fas fa-address-book"></i>Services</a></li>
               <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
               <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>
               <li><a href="#"><i class="fas fa-user"></i>About us</a></li>
               <li><a href="#"><i class="fas fa-globe-asia"></i>Languages</a></li>
               <li><a href="#"><i class="fas fa-envelope"></i>Contact us</a></li>
               <div class="icons">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
               </div>
            </ul>
         </nav>
      </div>
      <div class="content">
         <div class="header">
            Animated Side Navigation Menu
         </div>
         <p>
            using only HTML and CSS
         </p>
      </div>
    </div>
  )
}

export default Sidebar