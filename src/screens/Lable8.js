import React from "react";
const Lable8 =()=>{
    return(
        <div class="bg-blue-100 w-screen h-screen">
           <div class="-mb-8"><img src="assets/1.png" alt='logo' style={{marginLeft:'35%',width:'20%',paddingTop:'2%'}}></img></div>
            <div><img src="/assets/10.png"style={{width:'50%',marginLeft:'23%',marginTop:'3%'}}></img>
            <div class=" bg-white ml-96" style={{height:400,width:500,marginTop:'-35%'}}>
            <div class="font-bold text-gray-500 text-lg ml-36 pt-12"><h1>RESET YOUR PASSWORD</h1></div>
            <div class="text-gray-500 pl-6 pt-6"><h3>Please Provide the Email address you used when you signed up<br></br>
            <div class="pl-36"> for your OSAcad account</div></h3></div>
            <div class="text-gray-700 mt-24 ml-6 border-b-2"><input type="text" placeholder="EMAIL ADDRESS"></input></div>
            <div class="w-52 h-8 rounded-2xl bg-blue-600 pl-12 pt-1 text-white ml-36 mt-20"><p>SEND EMAIL</p></div></div></div>
        </div>
    );


}
export default Lable8;