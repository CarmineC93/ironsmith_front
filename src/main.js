import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

const menuBtn  = document.querySelector('.menu-btn');
        const navBarCollapse  = document.querySelector('.navbar-collapse');
  
  
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
          if(!menuOpen){
              menuBtn.classList.add('open');
              menuOpen = true;

              setTimeout(removeCollapse, 300);
              function removeCollapse() {
                  navBarCollapse.classList.remove('collapse')
              }
          } else {
            menuBtn.classList.remove('open');
            menuOpen = false;

            setTimeout(addCollapse, 300);
            function addCollapse() {
                navBarCollapse.classList.add('collapse')
            }
          } 
        });

