import React from "react";
import { BsClock} from 'react-icons/bs';
import {AiFillCheckCircle, AiFillCiCircle, AiFillAmazonCircle} from 'react-icons/ai';
import {AiFillPlayCircle} from 'react-icons/ai';

const Lable28=()=>{
    return(
        <div>

            <div class="w-screen h-screen bg-white">
        <div><img src="/assets/1.png" alt="logo"  style={{width:'20%',marginLeft:100,paddingTop:'1%'}}></img></div>
      <div class="font-bold pl-96 ml-96 -mt-12"><p>My Class Room</p></div>
      <div><img src="/assets/5.jpg" alt="logo" style={{width:55,marginLeft:'75%',marginTop:-50}}></img></div>
      <div><img src="/assets/bell.png" style={{width:55,marginLeft:'68%',marginTop:-56}}></img></div>
            
            <div class=" relative bottom-10 bg-gray-100 mt-24 pl-6">
            <BsClock class="ml-20 relative top-4" style={{fontSize:30}} color="gray"/>
            <p class="ml-32 relative bottom-2 text-gray-500">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
            <button class="w-36 p-1 relative bottom-10 bg-blue-500" style={{marginLeft:900}}>Join Class</button>
            </div>
            <div>
                <p class="ml-20 text-sm font-bold">Recorded Classes</p>
                </div>
                <div class="border-2 drop-shadow-2xl float-left border-gray-300 ml-20 mt-6 rounded-xl" style={{width:450}}>
                <p class="ml-12 mt-4">Module 1: UI Design</p>
               <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="mt-4 p-1 pl-12 bg-gray-300">Module 2: UX Design</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               </div>
               <div class="float-left mt-20 ml-24">
               <img src="./assets/9.png"></img>
               </div>
               <div class="clear-left relative top-8">
                   <ul class="flex ml-20">
                       <li class="text-gray-500">Courses Info</li>
                       <li class="text-gray-500 ml-10">Resources</li>
                       <li class="text-gray-500 ml-10">Assisments</li>
                       <li class="text-gray-500 ml-10">Projects</li>
                       <li class="text-gray-500 ml-10">Discuss</li>
                       <li class="text-gray-500 ml-10">Feedback</li>
                   </ul>
                   <hr class="border-2 border-blue-500 w-24 ml-12 relative left-64 top-4"></hr>
                   <hr class="mt-4"></hr>
               </div><br></br><br></br> 
               <div>
                  <div class="text-black font-bold ml-20"><p>Module 1</p></div>
                   <p class="text-black ml-20  text-2xl font-bold">Programing Assessment:Linear Regression</p>
                   <p class="text-gray-500  relative text-sm ml-24 mt-6">Dead Line : Pass this assignment by May 5, 12:00pm IST</p>
                   
                   <hr class="border-2 border-blue-500 w-24 relative left-72 top-12 h-1 rounded-lg"></hr>
                   <h1 class="ml-36 text-gray-500 relative top-5 border-b-2">Instructions</h1>
                   <h1 class="ml-72 text-gray-500 relative ">View Solutions</h1><br></br>
                  <div class="text-black ml-36"><p>Answer:</p></div><br></br>
                   <p class="text-sm ml-36 text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br></br>
                       eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br></br>
                        At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,<br></br>
                       consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p><br></br>
                    <div class="w-12 ml-36"><img src="/assets/down.png"></img></div>
                  <div class="text-zinc-500 ml-52 -mt-7"><p>Download Solution</p></div>
               </div>
               <div class="mt-10">
                  
               </div>
               <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-1 left-24" style={{marginLeft:904}}>Have a doubt?Rise a query</button>
                   <img src="./assets/dot.jpg" class="w-12 pr-6 relative bottom-20 left-32" style={{marginLeft:900}}></img>
        </div>
        </div>
    );

}
export default Lable28;