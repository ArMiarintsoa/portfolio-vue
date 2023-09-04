<template>
    <div class="home" id="home">
        <div class="home-content">
            <h1>Hi, I'm <span>Miarintsoa <span class="second-name" >Itokiana</span></span></h1>
            <div class="text-animate">
                <h3>Web Developper</h3>
                <p>Student and junior IT developper, freshly graduated from "Institut Superieur Polytechnique de Madagascar" also called ISPM</p>
    
                <div class="btn-box">
                    <a href="" class="btn">Contact Me</a>                        
                </div>                
            </div>
        </div>
    
        <div class="home-sci">
            <a href="#"><i class='bx bxl-facebook' ></i></a>
            <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
            <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
        </div>
    
        <div class="home-img">
            <!-- <img src="../../public/fond.png" /> -->
            <lottie></lottie>
        </div>  
    </div>
</template>
  
<script lang="ts">
    import { defineComponent, onMounted, } from 'vue';      
    import Lottie from './Lottie.vue';
    export default defineComponent({
        name: 'Home',        
        components: {
            Lottie,
        }
    });
</script>

<style lang="scss">
    @import  "../assets/scss/variables";
    .home {        
        display: flex;
        align-items: center;
        padding: 0 9%;
        background-color: $light-color;
        /* background: url('/img/home.jpeg') no-repeat; */        
        background-size: cover;
        background-position: center;
        .home-content {
            max-width: 50rem;
            h1 {
                font-size: 3rem;
                font-weight: 700;
                line-height: 1.3;
                color: $dark-color;
                span {
                    color: $secondary-color;
                    font-size: 4rem;
                    .second-name {
                        color: $primary-color;
                        font-size: 4rem;
                    }
                }
            }
            .text-animate {
                position: relative;
                width: 32.8rem;

                h3 {
                    font-size: 3.2rem;
                    font-weight:700;
                    color: transparent;
                    -webkit-text-stroke: 2px $dark-color;                    
                }
                p {
                    font-size: 1.3rem;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    color: $dark-color;
                }
            }
            .btn-box {
                position: relative;
                display: flex;
                justify-content: space-between;
                width: 34.5rem;
                height: 5rem;
                .btn {
                    position: relative;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 15rem;
                    height: 100%;
                    background-color: $primary-color;                    
                    border-radius:.8rem;
                    font-size: 1.5rem;
                    font-weight: 600;
                    letter-spacing: .1rem;
                    color: $light-color;
                    z-index: 1;
                    overflow: hidden;
                    transition: .5s;
                    &:hover {
                        color: $primary-color;
                        border: 1px solid $primary-color;
                    }
                    &::before {
                        content: "";
                        position:absolute;
                        top: 0;
                        left:0;
                        width: 0;
                        height: 100%;
                        background-color: $light-color;
                        z-index: -1;
                        transition: .3s;
                    }
                    &:hover::before {
                        width: 100%;
                    }
                }

            }
        }
        .home-img {
            max-width: 530px;
        }
    }

</style>
