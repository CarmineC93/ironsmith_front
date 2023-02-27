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
          <a class="navbar-brand" href="#">Navbar</a>

<div class="menu-btn navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false" 
           aria-label="Toggle navigation"
           >
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
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header> 
</template>

<style lang="scss" scoped>


*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

header{
  // background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
}

.menu-btn{
  background: black;
  position: relative;
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
}

.menu-btn.open .menu-btn__burger::after{
  transform: rotate(-45deg) translate(35px, 35px);
} 

</style>
