import sec21 from "../assets/sec2-1.png" 
import sec22 from "../assets/sec2-2.png"
import sec23 from "../assets/sec2-3.png"
import sec24 from "../assets/sec2-4.png"

const Section2 = () => {
  return (
    <div className="w-full md:h-[300px] h-[400px] bg-black items-center justify-center ">
      <div className="w-full h-full md:flex grid grid-rows-2 grid-cols-2 flex-row items-center justify-center md:pt-20">
        <div className="md:flex items-center justify-center"><img src={sec21} alt="sec2-1" /></div>
        <div className="md:flex items-center justify-center"><img src={sec22} alt="sec2-2" /></div>
        <div className="md:flex items-center justify-center"><img src={sec23} alt="sec2-3" /></div>
        <div className="md:flex items-center justify-center"><img src={sec24} alt="sec2-4" /></div>
      </div>
    </div>
  )
}

export default Section2