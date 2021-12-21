import React from "react";

const Lable19=()=>{
    return(
          <div class="w-screen h-screen bg-white">
              <div><img src="/assets/1.png" style={{width:'20%',marginLeft:100,paddingTop:'1%'}}></img></div>
            <div class="font-bold pl-96 ml-96 -mt-12"><p>My Class Room</p></div>
            <div><img src="/assets/5.jpg" style={{width:55,marginLeft:'75%',marginTop:-50}}></img></div>
            <div><img src="/assets/bell.png" style={{width:55,marginLeft:'68%',marginTop:-56}}></img></div>
            <div class="border-b-2 mt-6"></div>
            <div class="bg-white rounded-lg drop-shadow-2xl "style={{width:'15%',height:'42%',marginTop:'1%',marginLeft:'5%'}}>
                <div><ul><li style={{paddingTop:'21%',paddingLeft:'25%'}}>Edit Profile</li><li style={{paddingTop:'17%',paddingLeft:'15%'}}>change Password</li><li style={{marginTop:'20%',paddingLeft:'30%'}}>Invoices</li><li style={{paddingTop:'18%',paddingLeft:'26%'}}>Certificate</li></ul>
                <div class="bg-blue-700 w-1 h-8 -mt-52"></div></div>
                <div><img src="/assets/lay1.png" style={{marginTop:'100%'}}></img></div>
                <div class="bg-white rounded-lg drop-shadow-2xl "style={{width:'300%',height:'182%',marginTop:'-251%',marginLeft:'225%'}}>
                    <div><img src="/assets/5.jpg"style={{width:'15%',paddingTop:'4%',paddingLeft:'4%'}}></img>
                    <div class="text-lg text-slate-600 pl-36 -mt-12 "><p>Change Photo</p></div></div>
                    <div class="mt-10 ml-6 border-b-2"><input type="text" placeholder="FullName"></input></div>
                    <div class="mt-8 ml-6 border-b-2"><input type="text" placeholder="UserName"></input></div>
                    <div class="mt-8 ml-7 border-b-2"><input type="text"placeholder="Email"></input></div>
                    <div class="mt-8 ml-7 border-b-2"><input type="text"placeholder="Phone"></input></div>
                    <div class="mt-8 ml-7 border-b-2"><input type="text" placeholder="Location"></input></div>
                    <div class="mt-5 ml-7"><input type="text"placeholder="Gender:"></input></div>
                    <div class="ml-24 -mt-5"><input type="radio" name="Male"></input><span>Male</span>&nbsp;&nbsp;
                    <input type="radio" name="Female"></input><span>Female</span>&nbsp;&nbsp;
                    <input type="radio" name="other"></input><span>other</span></div>
                    <div class="w-36 h-8 bg-blue-700 text-gray-50 pl-10 pt-1 mt-4 ml-7 rounded-2xl"><p>Submit</p></div></div>
            </div>
          </div>
    );
}
export default Lable19;  