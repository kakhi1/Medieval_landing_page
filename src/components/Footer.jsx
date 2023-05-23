import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"

const Footer = () => {
  return (
    <div>
        {/* --------------1------------- */}
        <div className="h-[447px]  flex justify-end items-center bg-footer bg-cover bg-left">
            <div className="w-[40%] " >
              <h1 className="text-[#E2A23B] text-3xl font-bold text-left">Felis, molestie ac ipsum, vivamus nec aliquam sed porttitor quis ac</h1>
               <div className="w-full flex justify-start pt-6"> 
                 <input type="text" className="w-[60%] bg-[#E9DEC3]" /> 
                 <button className="w-[150px] h-[50px] uppercase bg-[#E2A23B] text-base font-normal rounded-sm">sign up </button></div>
            </div>
        </div>
        {/* --------------2------------- */}
        <div className="h-[563px] w-full bg-[#15181F] pl-[100px] flex justify-between">
         <div className="w-[30%] h-full flex flex-col justify-around items-start"> 
          <div className="w-[133px] h-[133px] bg-sun bg-cover bg-center">
          </div>
          <div> <span className="text-[#E9DEC3] flex text-left font-normal text-base">Maecenas luctus volutpat tellus risus, aliquet tellus eu vel risus. Massa parturient imperdiet pellentesque sapien ornare est, congue turpis. </span></div>
          <div> <span className="text-[#E9DEC3] font-medium text-base"> Sed urna, at dictums</span></div>
          <div className=" flex gap-6">
            <img src={logo1} alt="facebook" />
            <img src={logo2} alt="d" />
            <img src={logo3} alt="instagram" />
            <img src={logo4} alt="telegram" />
            <img src={logo5} alt="youtube" />
            <img src={logo6} alt="discord" />
            
             </div>
        </div>
        <div className="w-[60%] flex  justify-around mt-16">
         <div className="flex  flex-col gap-4">
            <h1 className="text-[#E2A23B] font-bold text-xl pb-4">Protocol</h1>
            <span className="text-[#E9DEC3] font-medium text-base">About us</span>
            <span className="text-[#E9DEC3] font-medium text-base">Create NFTs</span>
            <span className="text-[#E9DEC3] font-medium text-base">Chat With us</span>
         </div>
         <div className="flex  flex-col gap-4">
            <h1 className="text-[#E2A23B] font-bold text-xl pb-4">Marketplace</h1>
            <span className="text-[#E9DEC3] font-medium text-base">Displaying Eneftys</span>
            <span className="text-[#E9DEC3] font-medium text-base">report Security Issue</span>
            <span className="text-[#E9DEC3] font-medium text-base">Careers </span>
         </div>
         <div className="flex  flex-col gap-4">
            <h1 className="text-[#E2A23B] font-bold text-xl pb-4">Community</h1>
            <span className="text-[#E9DEC3] font-medium text-base">Get Help</span>
            <span className="text-[#E9DEC3] font-medium text-base">Term of Use</span>
            <span className="text-[#E9DEC3] font-medium text-base">Privacy Policy</span>
         </div>
        </div>
      </div>
        {/* --------------2------------- */}
        <div className="h-[137px] bg-[#121314] flex items-center pl-[100px] ">
            <span className="text-[#919094] text-base font-normal">Copyright © 2021 Middle Earth. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer