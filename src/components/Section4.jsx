

const Section4 = () => {
  return (
    <div className="sm:h-[1100px] h-[1600px] bg-black ">
      <div className="sm:h-[50%] h-[40%] flex sm:flex-row flex-col text-left">
         < div className="sm:w-[50%] w-full flex flex-col justify-center sm:gap-10 gap-6 md:ml-[100px] ml-[10px]"> 
            <h1 className="text-[#E2A23B] text-5xl font-bold">Nunc arcu dapibus sit pellentesque ipsum</h1>
            <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            <button className="font-medium text-base bg-[#E2A23B] w-[190px] h-[50px] rounded-sm lg:hover:bg-[#FFBF00] duration-300">View more</button>
         </div> 
         <div className="sm:w-[50%] w-full flex gap-2 sm:gap-0 flex-row sm:items-center ml-[10px] sm:ml-4 mt-4 sm:mt-0 relative">
           <div className="lg:w-[231px] w-[150px] h-[233px] bg-sec4 bg-cover rounded-sm shadow-md shadow-[#E2A23B]" ></div>
           <div className="lg:w-[231px] w-[150px] h-[233px] bg-sec42 bg-no-repeat bg-cover rounded-sm shadow-md shadow-[#E2A23B] sm:absolute top-[10%] right-[18%]" ></div>
           <div className="w-[146px] h-[146px] bg-sec41 bg-no-repeat  rounded-sm shadow-md shadow-[#E2A23B] sm:absolute bottom-[17%] left-[38%]" ></div>
         </div>

      </div>
      <div className="h-[50%] flex sm:flex-row flex-col text-left">
        <div className="sm:w-[50%] w-full sm:flex flex-row md:ml-[100px] ml-[10px] gap-4 grid grid-cols-2 grid-rows-2 ">
          <div className="md:w-[230px] w-[180px] md:h-[300px] h-[240px] bg-sec43 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] md:mt-20"></div>
          <div className="md:w-[230px] w-[180px] md:h-[300px] h-[240px] bg-sec45 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] md:mt-28"></div>
          <div className="md:w-[230px] w-[180px] md:h-[300px] h-[240px] bg-sec43 bg-cover bg-center bg-no-repeat rounded-md shadow-md shadow-[#E2A23B] md:mt-[60px]"></div>
        </div>
        < div className="md:w-[50%] w-full flex flex-col justify-start md:mx-[50px] mx-[10px] md:mt-16 mt-6 md:gap-10 gap-6"> 
            <h1 className="text-[#E2A23B] text-5xl font-bold">Nunc arcu dapibus sit pellentesque ipsum</h1>
            <span className="text-[#E9DEC3] text-xl font-medium">Orci imperdiet facilisi velit massa etiam nunc. Dis ullamcorper erat fermentum dolor. </span>
            <button className="font-medium text-base bg-[#E2A23B] w-[190px] h-[50px] rounded-sm lg:hover:bg-[#FFBF00] duration-300">View more</button>
         </div> 
      </div>
    </div>
  )
}

export default Section4