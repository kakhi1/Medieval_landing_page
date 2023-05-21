import sun from "../assets/sun.png"
const Home = () => {
  return (
    <div className='max-w-full  h-[768px] bg-hero bg-cover bg-center'>
      <div className='h-full bg-gradient-to-t from-transparent to-black '>
        {/* Header */}
        <div className="w-full h-[20%] flex flex-row justify-between items-center px-[100px]">
            <div className="w-20 h-20" > <img src={sun} alt="image" /></div>
            <div className="gap-2">
                <span className="font-medium text-base mx-4 text-[#B1A79C]">Home</span>
                <span className="font-medium text-base text-[#B1A79C]">About</span>
                <span className="font-medium text-base mx-4
                 text-[#B1A79C]">Discover</span>
                <span className="font-medium text-base text-[#B1A79C]">Creator</span>
                <span className="font-medium text-base mx-4 text-[#B1A79C]">Collectors</span>
            </div>
            <div><button className="font-medium text-base bg-[#E2A23B] w-[190px] h-[50px] rounded-sm">Lounch app</button></div>
        </div>
        {/* body */}
        <div className="flex flex-col items-start justify-center ml-[100px] gap-6 mt-10" >
          <h1 className="text-[35px] text-white font-semibold">Explorer</h1>
          <h1 className="text-[60px] text-[#E2A23B] font-extrabold uppercase ">middle earth protocol</h1>
          <span className="text-[#E9DEC3] text-xl font-medium w-[60%] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa lacus ac et, semper pellentesque. At eget purus eget semper elementum porttitor. </span>
          <button className="w-[219px] h-[50px] bg-[#E9DEC3] rounded-sm">View more</button>
        </div>
      </div>
    </div>
  )
}

export default Home