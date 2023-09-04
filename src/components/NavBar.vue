<template>
    <nav class="navbar">
        <router-link to="/">
            <div class="logo">
                <!-- <img src="../assets/vue.svg" alt="Logo" srcset=""> -->
                <p>Miari<span>.IT</span></p>
            </div>
        </router-link>
        <div class="nav-list">
            <li class="nav-link">
                <a v-scroll-to="'#home'">Home</a>
            </li>
            <li class="nav-link">
                <!-- <router-link to="/product">About</router-link> -->
                <a v-scroll-to="'#about'">About</a>
            </li>
            <li class="nav-link">
                <!-- <router-link to="/product">Educations</router-link> -->
                <a v-scroll-to="'#education'">Educations</a>
            </li>
            <li class="nav-link">
                <!-- <router-link to="/product">Skills</router-link> -->
                <a v-scroll-to="'#skills'">Skills</a>
            </li>
            <li class="nav-link">
                <!-- <router-link to="/product">Contact</router-link> -->
                <a v-scroll-to="'#contact'">Contact</a>
            </li>
        </div>
        <div class="nav-other">            
            <div class="social-list">
                <a href="http://">
                    <li>Facebook</li>
                </a>
                <a href="http://">
                    <li>GitHub</li>
                </a>
                <a href="http://">
                    <li>Email</li>
                </a>
            </div>
            <div class="mode">
                <button>Click mode</button>
            </div>
        </div>
    </nav>
</template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style lang="scss" >
  @import "./src/assets/scss/variables";
    .navbar {        
        height: 90px;
        background-color: rgba($color: #ffffff, $alpha: .2);
        backdrop-filter: blur(10px);
        padding: 0 40px 0 40px;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 4px $secondary-color;
        position: sticky;
        top:1px;
        z-index: 999;

        a {
            text-decoration: none;
        }
        .logo {
            display: flex;
            flex-direction: row;            
            align-items: center;
            width: auto;            
            .img {
                width: 40px;
                height: 40px;
            }

            p {
                margin: 0px;
                padding-left: 10px;
                font-size: 1.5rem;
                font-family: sans-serif;
                font-weight: 700;
                color: $secondary-color;
            }

            span {
                color: $primary-color;                                 
            }
        }

        .nav-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            .nav-link {
                margin-left: 20px;
                list-style: none;
                a {
                    font-size: 1.3rem;
                    font-family: sans-serif;
                    color: $secondary-color;
                    text-decoration: none;
                    transition: .3s;
                    position: relative;

                    &::before {
                        content: '';
                        background-color: $primary-color;       
                        position: absolute;    
                        top: 100%;
                        left: 0;
                        width: 0%;             
                        height: 2px;
                        transition: .3s;
                    }
                    &:hover {
                        color: $primary-color;
                    }
                    &:hover::before {
                        width: 100%;
                    }

                }
                
            }
        }
        .nav-other {
            display: flex;
            flex-direction: row;
            .mode {

            }
            .social-list {
                display: flex;
                flex-direction: row;
                a {
                    // text-decoration: none;
                    li {
                        list-style: none;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
  </style>
  