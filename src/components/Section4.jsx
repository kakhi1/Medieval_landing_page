

const Section4 = () => {
  return (
    <div className="h-[1100px] bg-black ">
      <div className="h-[50%] md:flex text-left">
         < div className="md:w-[50%] w-full flex flex-col justify-center gap-10 ml-[100px]"> 
            <h1 className="text-[#E2A23B] text-5xl font-bold">Nunc arcu dapibus sit pellentesque ipsum</h1>
            <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            <button className="font-medium text-base bg-[#E2A23B] w-[190px] h-[50px] rounded-sm">View more</button>
         </div> 
         <div className="md:w-[50%] w-full flex  flex-row items-center relative">
           <div className="lg:w-[231px] w-[150px] md:h-[233px] h-[152px] bg-sec4 bg-cover rounded-sm shadow-md shadow-[#E2A23B]" ></div>
           <div className="lg:w-[231px] w-[150px] lg:h-[233px] h-[152px] bg-sec42 bg-no-repeat bg-cover rounded-sm shadow-md shadow-[#E2A23B] absolute top-[10%] right-[18%]" ></div>
           <div className="w-[146px] h-[146px] bg-sec41 bg-no-repeat  rounded-sm shadow-md shadow-[#E2A23B] absolute bottom-[17%] left-[38%]" ></div>
         </div>

      </div>
      <div className="h-[50%] md:flex text-left">
        <div className="w-[50%] flex flex-row ml-[100px] gap-4">
          <div className="w-[230px] h-[300px] bg-sec43 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] mt-20"></div>
          <div className="w-[230px] h-[300px] bg-sec45 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] mt-28"></div>
          <div className="w-[230px] h-[300px] bg-sec43 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] mt-[60px]"></div>
        </div>
        < div className="md:w-[50%] w-full flex flex-col justify-start mx-[50px] mt-16 gap-10 "> 
            <h1 className="text-[#E2A23B] text-5xl font-bold">Nunc arcu dapibus sit pellentesque ipsum</h1>
            <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            <button className="font-medium text-base bg-[#E2A23B] w-[190px] h-[50px] rounded-sm">View more</button>
         </div> 
      </div>
    </div>
  )
}

export default Section4