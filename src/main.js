import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
createApp(App).mount('#app')

//header toggle button animation
const menuBtn  = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
          if(!menuOpen){
              menuBtn.classList.add('open');
              menuOpen = true;

              
          } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
          } 
        });
