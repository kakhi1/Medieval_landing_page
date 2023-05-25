import sec3 from "../assets/sec3.png"
import sec31 from "../assets/sec3-1.png"
import sec32 from "../assets/sec3-2.png"
import sec33 from "../assets/sec3-3.png"
import sec34 from "../assets/sec3-4.png"
const Section3 = () => {
  return (
    <div className="md:h-[811px] h-[1100px] bg-[#15181F] flex flex-col items-center md:pt-20 pt-10">
        <h1 className="text-[60px] font-bold text-[#E2A23B] ">Medieval Metaverse</h1>
        <div className="md:mt-16 mt-6"><img src={sec3} alt="sec3" /></div>
        <div className="md:mt-16 mt-6 md:flex justify-around gap-6 lg:gap-16 grid grid-cols-2 grid-rows-2 w-[85%]">
            <div className="md:w-[251px] w-[180px] h-[364px] bg-black border-2 border-[#E2A23B] flex flex-col justify-around items-center 
                 lg:hover:-translate-y-5 duration-300 lg:hover:shadow-lg lg:hover:shadow-[#E2A23B]">
                <div><img src={sec31} alt="sec3-1" /></div>
                <h1 className="text-[#E2A23B] text-2xl font-bold">Wallet</h1>
                <span className="text-[#E9DEC3] text-sm font-medium">Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus </span>
            </div>
            <div className="md:w-[251px] w-[180px] h-[364px] bg-black border-2 border-[#E2A23B] flex flex-col justify-around items-center lg:hover:-translate-y-5 duration-300 lg:hover:shadow-lg lg:hover:shadow-[#E2A23B]">
                <div><img src={sec32} alt="sec3-2" /></div>
                <h1 className="text-[#E2A23B] text-2xl font-bold">List them for sale</h1>
                <span className="text-[#E9DEC3] text-sm font-medium">Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus </span>
            </div>
            <div className="md:w-[251px] w-[180px] h-[364px] bg-black border-2 border-[#E2A23B] flex flex-col justify-around items-center lg:hover:-translate-y-5 duration-300 lg:hover:shadow-lg lg:hover:shadow-[#E2A23B]">
                <div><img src={sec33} alt="sec3-3" /></div>
                <h1 className="text-[#E2A23B] text-2xl font-bold">Add your NFTs</h1>
                <span className="text-[#E9DEC3] text-sm font-medium">Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus </span>
            </div>
            <div className="md:w-[251px] w-[180px] h-[364px] bg-black border-2 border-[#E2A23B] flex flex-col justify-around items-center lg:hover:-translate-y-5 duration-300 lg:hover:shadow-lg lg:hover:shadow-[#E2A23B]">
                <div><img src={sec34} alt="sec3-4" /></div>
                <h1 className="text-[#E2A23B] text-2xl font-bold">Collection</h1>
                <span className="text-[#E9DEC3] text-sm font-medium">Cursus imperdiet posuere dictum quam eleifend varius pellentesque lectus </span>
            </div>
        </div>

    </div>
  )
}

export default Section3