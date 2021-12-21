import React from "react";

const Lable9 =()=>{
    return(
        <div class="bg-blue-100 w-screen h-screen">
        <div class="-mb-8"><img src="assets/1.png" alt='logo' style={{marginLeft:'42%',width:'18%',paddingTop:'2%'}}></img></div>
        <div class=" bg-white ml-96" style={{height:500,width:670,marginTop:'6%'}}>
            <div class=" h-16 bg-gray-500"><div class="font-bold text-white ml-9 pt-5"><p>ORDER DETAILS</p></div>
            <div class="bg-gray-100 mt-12 h-12 text-neutral-500 ml-12 pl-12 pt-3 mr-12"><p>COURSE</p></div>
            <div class="text-neutral-500 "><p style={{marginLeft:'75%',marginTop:'-5%'}}>PRICE</p></div></div>
            <div class="w-28 h-12 mt-24 ml-20"><img src="/assets/aws.png"></img><div class="ml-36 -mt-12 text-neutral-400"><h1>AWS</h1></div>
            <div class="-mt-2 ml-96 "><input type="text" placeholder="$ 34,999.00"></input></div></div>
            <div class="border-b-2 mt-10"></div>
            <div><input type="text"placeholder="Total:$ 34,999.00" style={{paddingLeft:'70%'}}></input></div>
            <div class="h-6 bg-gray-300 font-sm  w-12 ml-96" ><div class="mt-12"><p>Apply</p></div>
            <div class="-mt-6 ml-16 border-b-4"><input type="text" placeholder="Coupon"></input></div></div>
            <div ><input type="text" placeholder="Grand Total: $ 34,999.00" style={{marginLeft:'65%',marginTop:'5%'}}></input></div>
            <div class="w-64 h-8 bg-blue-600 rounded-sm pl-10 pt-1 text-stone-50 ml-96 mt-8"><p>PROCEED FOR PAYMENT</p></div>
        </div>
        </div>
    );
}

export default Lable9;