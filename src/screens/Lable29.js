import React from "react";
import {BsClock} from 'react-icons/bs';
import {AiOutlineArrowLeft} from 'react-icons/ai';
// import {ImCheckboxUnchecked} from 'react-icons/im';
import {MdOutlineRadioButtonUnchecked} from 'react-icons/md';
const Lable29=()=>{
    return(
        <div>
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
      <div class="border-b-2 mt-10"></div>
      <div class="text-stone-500 text-2xl pl-24 pt-5"><p>Question: 1</p></div>
      <div class="text-black font-bold ml-24"><p>A front-end developer works with languages like</p></div><br></br>
      <div class="border  w-96 h-10 ml-24"><p class="pl-10 pt-2">HTML,CSS and PHP</p><MdOutlineRadioButtonUnchecked style={{marginTop:'-5%',marginLeft:'3%'}}></MdOutlineRadioButtonUnchecked></div><br></br>
      <div class="border w-96 h-10 ml-24"><p class="pl-10 pt-2">HTML,CSS and Swipt</p><MdOutlineRadioButtonUnchecked style={{marginTop:'-5%',marginLeft:'3%'}}></MdOutlineRadioButtonUnchecked></div><br></br>
      <div class="border w-96 h-10 ml-24"><p class="pl-10 pt-2">HTML,CSS and Java script</p><MdOutlineRadioButtonUnchecked style={{marginTop:'-5%',marginLeft:'3%',backgroundColor:'blue'}}></MdOutlineRadioButtonUnchecked></div>
      <div class="w-10 h-8  bg-blue-600 rounded-sm text-zinc-50 pt-2 pl-1 ml-96 relative mt-10 left-96"><u>Next</u></div>
      <div class="text-zinc-600 ml-96 relative left-52 text-xl -mt-9"><p>Skip Question</p></div>
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
                   
                   <h1 class="text-gray-500 ml-96 relative left-48 bottom-4"></h1>
                   
                   
                   
               </div>
               <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-14 left-32" style={{marginLeft:904}}>Have a doubt ? Rise a query</button>
                   <img src="./assets/dot.jpg" class="w-12 pr-6 relative bottom-20 left-32" style={{marginLeft:900}}></img>
        </div></div>

    );

}
export default Lable29;