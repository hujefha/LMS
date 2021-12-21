import React from "react";
import {BsClock} from 'react-icons/bs';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {BsFillCheckCircleFill} from 'react-icons/bs';


const Lable26=()=>{
    return(

<div class="w-screen h-screen bg-white">
        <div><img src="/assets/1.png" alt="logo"  style={{width:'20%',marginLeft:100,paddingTop:'1%'}}></img></div>
      <div class="font-bold pl-96 ml-96 -mt-12"><u>My Class Room</u></div>
      <div><img src="/assets/5.jpg" alt="logo" style={{width:55,marginLeft:'75%',marginTop:-50}}></img></div>
      <div><img src="/assets/bell.png" style={{width:55,marginLeft:'68%',marginTop:-56}}></img></div>
      <div class="mt-12 pl-36  h-24 bg-blue-100 pt-5"><BsClock size={50}></BsClock>
      <div class="ml-24 -mt-10 font-bold text-zinc-400"><p>Your UpComing Class at 28-04-20 IST 5:30pm</p></div>
      <button class="bg-blue-500 w-40 text-stone-50 h-8 " style={{marginLeft:'75%'}}>Join Class</button></div>
      <div class="mt-12 ml-16 "><AiOutlineArrowLeft size={40}></AiOutlineArrowLeft>
      <div class="text-neutral-500 text-2xl pl-12 -mt-10"><p>Assissments</p></div></div>
      <div class="border-b-2 mt-10"></div><br></br>
      <div class="ml-24 relative mb-3 text-neutral-400"><p>Results</p></div>
      <div class="text-stone-500 text-2xl pl-24 pt-5"><p>Question: 1</p></div>
      <div class="text-gray-400 font-bold ml-24"><p>A front-end developer works with languages and framework</p></div><br></br>
    <div class="ml-28 mt-5"><BsFillCheckCircleFill style={{backgroundColor:'green'}}></BsFillCheckCircleFill></div>
      <div class="text-neutral-500  ml-24 pl-10 -mt-5 "><p>HTML,CSS and Javascript</p></div>
      <div class="border-b-2 ml-28"></div>

      <div class="text-stone-500 text-2xl pl-24 pt-5"><p>Question: 2</p></div>
      <div class="text-gray-400 font-bold ml-24"><p>A front-end developer works with languages and framework</p></div><br></br>
    <div class="ml-28 mt-5"><BsFillCheckCircleFill style={{backgroundColor:'red'}}></BsFillCheckCircleFill></div>
      <div class="text-neutral-500  ml-24 pl-10 -mt-5 "><p>HTML,CSS and Javascript</p></div>&nbsp;
      <div class="ml-28 mt-5"><BsFillCheckCircleFill style={{backgroundColor:'green'}}></BsFillCheckCircleFill></div>
      <div class="text-neutral-500  ml-24 pl-10 -mt-5 "><p>HTML,CSS and Bootstrap</p></div>
      <div class="border w-36 h-10 bg-blue-600 text-slate-100 pl-6 pt-2 ml-96 relative left-96"><p>Retry Again</p></div>
      <div class="text-slate-600 ml-96 relative left-64 -mt-6"><p>I'll Try it later</p></div>

      <div class="clear-left relative top-8">
                   <ul class="flex ml-20">
                       <li class="text-gray-500 ">Courses Info</li>
                       <li class="text-gray-500 ml-10">Resources</li>
                       <li class="text-gray-500 ml-10">Assisments</li>
                       <li class="text-gray-500 ml-10">Projects</li>
                       <li class="text-gray-500 ml-10">Discuss</li>
                       <li class="text-gray-500 ml-10">Feedback</li>
                   </ul>
                   <hr class="border-2 border-blue-500 w-24  relative left-16 top-4 ml-3"></hr>
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
      
</div>
    );
}
export default Lable26;