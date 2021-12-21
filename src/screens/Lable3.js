import React from "react";

const Lable3=()=>{
    return(

<div class="w-screen h-screen bg-blue-200 pl-24">
            <img src="assets/1.png" alt='logo' style={{marginLeft:380}}></img>
            <div class=" flex justify-center " >
            <div class="mt-44 w-96 h-max -mr-72"><img src="/assets/bg1.png"></img></div>&nbsp;
               
               <div class=" bg-white mb-96 mr-52" style={{height:450,width:500}}>
               <div class="mt-12">
                   <div class="ml-20 mt-6 text-lg font-light " >SignUp</div>
                   <div class="ml-72 text-lg -mt-7 font-bold" >SignIn</div><br></br>
                 
                 <div class="border-b-2 pt-5"><input type="text"placeholder='Email' style={{paddingLeft:'9%'}}></input><br></br></div>

                 <div class="border-b-2 pt-5 mt-2">  <input type="text"placeholder='Password' style={{paddingLeft:'9%'}}></input></div>
                 <div class=" rounded-lg w-36 h-6 bg-gray-400 ml-44 pl-4 mt-8">ForgetPassword?</div>
                 <div class="pl-56">OR</div>
                   <div class="bg-blue-900 w-36 h-10 rounded-lg ml-44 pl-11 pt-2 mt-3 font-bold"><button type="submit" style={{width:'10%',height:'10%'}}>SignIn</button><br></br></div>
                   
                   <div class="ml-64"><img src="/assets/3.png"></img></div>
                   <div class="-mt-12 ml-44"><img src="/assets/2.png"></img></div>
                </div>
                  </div>
             </div>
           
           
         </div>  




    );
};
export default Lable3;