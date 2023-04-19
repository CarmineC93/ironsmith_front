<script>
export default{
  name:"AppHeader",
    data(){

    },

  }
</script>

<template>
 
<header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../assets/pngwing.com.png" alt="" style="max-width: 80px;">
            <!-- <img src="../assets/logo-white.png" alt="" style="max-width: 80px;"> -->

          </a>

          <div class="menu-btn navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false" 
           aria-label="Toggle navigation">
           
            
            <div class="menu-btn__burger toggler-icon"> </div>

          </div>

          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Who i am</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header> 
</template>

<style lang="scss" scoped>

header{
  padding:0 2rem;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.507);
}

.menu-btn{
  background: black;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all .4s ease-in-out;
}

.menu-btn__burger{
  width: 50px;
  height: 6px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .4s ease-in-out;
}

.menu-btn__burger::before, 
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .4s ease-in-out;
}

.menu-btn__burger::before{
  transform: translateY(-16px);
} 

.menu-btn__burger::after{
  transform: translateY(16px);
}
 
/* ANIMATION */

.menu-btn.open .menu-btn__burger{
  transform: translateX(-50px);
  background:transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn__burger::before{
  transform: rotate(45deg) translate(35px, -35px);
  border-radius: 100px  10px  10px 0px;

}

.menu-btn.open .menu-btn__burger::after{
  transform: rotate(-45deg) translate(35px, 35px);
  border-radius: 0 100px 10px 10px;
} 
.nav-link{
  font-size: 1.7rem;
}

.menu-btn.open .menu-btn__burger::after{
  background: linear-gradient( -263deg, rgba(252,74,74,1) 0%, rgb(199, 200, 200) 100% );
}
.menu-btn.open .menu-btn__burger::before{
    background: linear-gradient( 263deg, rgba(252,74,74,1) 0%, rgb(199, 200, 200) 100% );
}
</style>
