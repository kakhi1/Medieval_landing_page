import sun from "../assets/sun.png"
const Home = () => {
  return (
    <div className='max-w-full  max-h-[768px] bg-hero '>
        {/* Header */}
        <div className="w-full h-[20%] flex flex-row justify-between items-center px-[100px]">
            <div className="w-20 h-20" > <img src={sun} alt="image" /></div>
            <div>
                <span className="font-medium text-base text-white">Home</span>
                <span className="font-medium text-base text-white">About</span>
                <span className="font-medium text-base text-white">Discover</span>
                <span className="font-medium text-base text-white">Creator</span>
                <span className="font-medium text-base text-white">Collectors</span>
            </div>
        </div>
    </div>
  )
}

export default Home