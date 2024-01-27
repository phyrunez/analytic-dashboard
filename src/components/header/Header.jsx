import images from "../../constants/images"

const Header = () => {
  return (
    <section className='flex items-center flex-row w-[1608px] absolute py-[16.5px] gap-5 border ml-[80px]'>
        <div className="w-[64.5%] flex items-center justify-between  flex-row">
            <div className="font-poppins text-lg not-italic font-semibold leading-7 text-[#26282C]">
                <p className="ml-[30px]">Dashboard</p>
            </div>
            
            <form>   
                <div className="w-[349px] h-10 pl-4 bg-white rounded-3xl border border-zinc-300 justify-start items-center gap-2 inline-flex">
                    <div className="w-[18px] h-[18px] relative ">
                        <img src={images.Search} alt="search-icon" />
                    </div>
                    <input className="text-neutral-400 text-base focus:outline-none font-normal font-poppins leading-normal" placeholder="Search..." />
                </div>
            </form>
        </div>

        <div className="w-[30%] ml-[50px] flex items-center justify-evenly flex-row">    
            <div className="items-center gap-2.5 flex">
                <div className="w-5 h-5 relative">
                    <div className="w-4 h-4 left-[2px] top-[2px] ">
                        <img src={images.Calendar} alt="calendar" />
                    </div>
                </div>
                <div className="text-zinc-800 text-sm font-medium font-poppins leading-snug">November 15, 2023</div>
            </div>

            <div className="w-10 h-10 p-[11px] rounded-[27px] border border-zinc-300 justify-center items-center gap-1.5 inline-flex">
                <div className="w-5 h-5 relative">
                    <img src={images.Bell} alt="bell" />
                </div>
            </div>

            <div className="w-[200px] h-[50px] px-2 py-1.5 rounded-[28px] border border-zinc-300 justify-center items-center gap-3 inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <img className="w-[38px] h-[38px] rounded-[19px]" src={images.Justin} />
                    <div className="flex-col justify-start items-end gap-1 inline-flex">
                        <div className="text-right text-zinc-800 text-base font-normal font-['Inter']">Justin Bergson</div>
                        <div className="text-right text-zinc-500 text-sm font-normal font-['Inter']">Justin@gmail.com</div>
                    </div>
                </div>
                <div className="w-5 h-5 relative">
                    <img src={images.ArrowDown} alt="arrow-down" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header
