import React from 'react';
import { BsClock} from 'react-icons/bs';
import {AiFillCheckCircle, AiFillCiCircle, AiFillAmazonCircle} from 'react-icons/ai';
import {AiFillPlayCircle} from 'react-icons/ai';


export default function Screen15() {
    return (
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
                <p class="ml-20 text-sm">Recorded Classes</p>
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
                   <hr class="border-2 border-blue-500 w-24  relative left-16 top-4"></hr>
                   <hr class="mt-4"></hr>
               </div><br></br><br></br> 
               <div>
                   <h1 class="text-black-500 ml-20 mt-3 relative  font-bold text-1xl">About this Course</h1>
                   <u class="text-gray-500 ml-16  ">Course Name:UI/UX</u><br></br><br></br>
                  
                   
                   <u class="ml-20 text-gray-500 relative bottom-4">Start Course:</u><br></br>
                   <u class=" text-gray-500 relative bottom-35 left-16 ">Duration:20hrs</u><br></br>
                   <u class="text-gray-500  ml-16">Modules:10</u><br></br>
                   <u class="text-gray-500 ml-16">Prerequisites:No</u><br></br>
                   <u class="text-gray-500 ml-16">Skill Level:Beginner</u>
               </div>
               <div class="mt-10">
                   <h1 class="text-gray-500 ml-20 mt-4 relative top-2 border-b-2 "></h1>
                   <h1 class="text-gray-500 ml-96 relative left-48 bottom-4"></h1>
                   
                   <hr class="ml-20 relative bottom-6" style={{width:660}}></hr>
                   <h1 class="ml-20 text-gray-500 relative bottom-4"></h1>
                   <h1 class="ml-96 text-gray-500 relative bottom-10 left-20"></h1>
               </div>
               <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-14 left-32" style={{marginLeft:904}}>Have a doubt?Rise a query</button>
                   <img src="./assets/dot.jpg" class="w-12 pr-6 relative bottom-20 left-32" style={{marginLeft:900}}></img>
        </div>
        </div>
    )
}