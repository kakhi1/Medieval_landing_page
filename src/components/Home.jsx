import sun from "../assets/sun.png"
import { GiCrossedSwords } from 'react-icons/gi';
const Home = () => {
  return (
    <div className='max-w-full  md:h-[768px] h-[900px] bg-hero bg-cover bg-center'>
      <div className='h-full bg-gradient-to-t from-transparent to-black w-full'>
        {/* Header */}
        <div className="md:w-full h-[20%] flex flex-row justify-between items-center md:px-[100px] px-[10px]">
             
            <div className="md:w-20 md:h-20 w-10 h-10"> <img src={sun} alt="image" /></div> 
            <div className="flex md:hidden cursor-pointer"><GiCrossedSwords size={30} color="#E2A23B"/></div>     
            <div className="lg:gap-2 hidden md:flex">
                <span className="font-medium text-base md:mx-4 text-[#B1A79C] lg:hover:text-white cursor-pointer duration-300">Home</span>
                <span className="font-medium text-base text-[#B1A79C] lg:hover:text-white cursor-pointer duration-300">About</span>
                <span className="font-medium text-base md:mx-4
                 text-[#B1A79C] lg:hover:text-white cursor-pointer duration-300">Discover</span>
                <span className="font-medium text-base text-[#B1A79C] lg:hover:text-white cursor-pointer duration-300">Creator</span>
                <span className="font-medium text-base md:mx-4 text-[#B1A79C] lg:hover:text-white cursor-pointer duration-300">Collectors</span>
            </div>
            <div><button className="font-medium text-base bg-[#E2A23B]  md:w-[190px] w-[120px] md:h-[50px] h-[40px] rounded-sm lg:hover:bg-[#FFBF00] duration-300">Lounch app</button></div>
        </div>
        {/* body */}
        <div className="flex flex-col md:items-start items-center justify-center md:ml-[100px] gap-6  md:mt-10 mt-5" >
          <h1 className="text-[35px] text-white font-semibold">Explorer</h1>
          <h1 className="text-[60px] text-[#E2A23B] font-extrabold uppercase ">middle earth protocol</h1>
          <span className="text-[#E9DEC3] text-xl font-medium w-[60%] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa lacus ac et, semper pellentesque. At eget purus eget semper elementum porttitor. </span>
          <button className="w-[219px] h-[50px] bg-[#E9DEC3] rounded-sm lg:hover:bg-[#FFBF00] duration-300">View more</button>
        </div>
      </div>
    </div>
  )
}

export default Home