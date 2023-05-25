
import sec51 from "../assets/sec5-1.png"
import sec52 from "../assets/sec5-2.png"
import sec53 from "../assets/sec5-3.png"
import sec54 from "../assets/sec5-4.png"
const Section5 = () => {
  return (
    <div>
      <div className="md:h-[1014px] h-[1900px] bg-sec5 bg-cover md:bg-center bg-left-top">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[15%] items-center justify-center  mt-2  md:h-[50%] h-[35%]">
         <div className="md:w-[40%] w-[98%] flex md:justify-betweeen justify-around md:items-center items-start  md:ml-[100px] ml-[10px]">
            <div className= "w-full md:h-[60%] rounded-lg bg-black opacity-70 flex flex-col  justify-center p-4 items-center text-left gap-4">
              <h1 className="text-[#E2A23B] text-5xl font-bold text-left">NFT & Token Deflation System </h1>
              <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            </div>
         </div>
         <div className="max-w-full"> 
            <div className="bg-gradient-to-t from-transparent to-[#A06930]  relative ml-[10px] md:ml-0 sm:w-[78%]  w-[380px]  h-[350px] flex flex-col justify-end items-center ">
              <img src={sec51} alt="sec51 " className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center md:gap-2 gap-1 opacity-60 ">
                <h1 className=" text-[21px] md:text-[18px] text-[#E2A23B] font-bold">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] md:text-[14px] text-[#E9DEC3] font-normal" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
         </div>
       </div>
       {/*--------------2------------------ */}
          <div className="w-[88%] md:flex-row flex flex-col items-center  gap-10 md:ml-[100px] ml-[25px]">
          <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[370px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec52} alt="sec52 " className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold md:text-[18px]">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal md:text-[14px]" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
            <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[370px]  h-[350px] flex flex-col justify-end items-center ">
              <img src={sec53} alt="sec53" className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold md:text-[18px]">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal md:text-[14px]" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
            <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[370px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec54} alt="sec54" className="absolute bottom-[35%] w-[200px] h-[300px]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold md:text-[18px]">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal md:text-[14px]" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section5