
import sec51 from "../assets/sec5-1.png"
import sec52 from "../assets/sec5-2.png"
import sec53 from "../assets/sec5-3.png"
import sec54 from "../assets/sec5-4.png"
const Section5 = () => {
  return (
    <div>
      <div className="h-[1014px]  bg-sec5 bg-cover bg-center">
        <div className="flex flex-row items-center justify-start h-[50%]">
         <div className=" w-[50%] flex justify-betweeen items-center ml-[100px] ">
            <div className= "w-full h-[60%] rounded-lg bg-black opacity-70 flex flex-col justify-center p-4 items-center text-left gap-4">
              <h1 className="text-[#E2A23B] text-5xl font-bold text-left">NFT & Token Deflation System </h1>
              <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            </div>
         </div>
         <div>
            <div className="bg-gradient-to-t from-transparent to-[#A06930] ml-[120px] relative w-[380px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec51} alt="sec51 " className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
         </div>
       </div>
       {/*--------------2------------------ */}
          <div className="w-full flex gap-10 ml-[100px] ">
          <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[380px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec52} alt="sec52 " className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
            <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[380px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec53} alt="sec53" className="absolute bottom-[35%]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
            <div className="bg-gradient-to-t from-transparent to-[#A06930] relative w-[380px] h-[350px] flex flex-col justify-end items-center ">
              <img src={sec54} alt="sec54" className="absolute bottom-[35%] w-[200px] h-[300px]" />
              <div className="w-full h-[35%] bg-[#000000] flex flex-col justify-center items-center gap-2 opacity-60 ">
                
                <h1 className=" text-[21px] text-[#E2A23B] font-bold">Eget amet fermentum dui</h1>
                 <span className="w-full flex text-[16px] text-[#E9DEC3] font-normal" >Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus. </span></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section5