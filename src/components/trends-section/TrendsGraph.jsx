import images from "../../constants/images";

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Des'
]
 
const TrendsGraph = () => {
    return (
        <div className="w-[1500px] h-[374px] relative bg-white rounded-[14px] w-full border gap-5 border-slate-100">
            <div className="w-full left-[20px] top-[16px] absolute justify-between items-end inline-flex">
                <div className="text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">Sales Trends</div>
                <div className="w-[210px] justify-end items-center gap-2.5 mr-[45px] flex">
                    <div className="text-gray-700 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">Short by : </div>
                    <div className="px-3 py-1.5 bg-white rounded-[20px] border border-neutral-200 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-2.5 inline-flex">
                            <div className="text-gray-700 text-xs font-normal font-['Plus Jakarta Sans'] leading-none">Weekly</div>
                            <div className="w-5 h-5 relative bg-black bg-opacity-0">
                                <img src={images.ArrowDown} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1024px] h-[55px] left-[89px] top-[74px] absolute flex-col justify-between items-start inline-flex">
                <hr className="w-[890px] mt-[8px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[17px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[17px] h-[1px]" />
                <hr className="w-[890px] mt-[20px] h-[1px]" />
                <hr className="w-[890px] mt-[17px] h-[1px]" />
                <hr className="w-[890px] mt-[22px] h-[1px]" />
                {/* <hr className="w-[890px] mt-[20px] h-[1px]" /> */}
            
            </div>
            <div className="w-[860px] left-[98px] top-[320px] absolute opacity-60 justify-start items-start gap-[30px] inline-flex">
                {months.map(mon => (
                    <div className="grow shrink basis-0 text-center text-neutral-600 text-sm font-semibold font-['Plus Jakarta Sans'] leading-snug">{mon}</div>
                ))}
                
            </div>
            <div className="w-[47px]  left-[20px] top-[79px] absolute opacity-60 flex-col justify-between items-start inline-flex">
                <div className="text-neutral-600 text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">50.000</div>
                <div className="text-neutral-600 pt-[28px] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">40.000</div>
                <div className="text-neutral-600 pt-[28px] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">30.000</div>
                <div className="text-neutral-600 pt-[28px] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">20.000</div>
                <div className="text-neutral-600 pt-[28px] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">10.000</div>
                <div className="self-stretch text-neutral-600 text-xs pt-[28px] font-semibold font-['Plus Jakarta Sans'] leading-none">5.000</div>
                <div className="w-6 text-center text-neutral-600 pt-[28px] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">0</div>
            </div>
            <div className="w-[860px] left-[99px] top-[108px] absolute justify-between items-end inline-flex">
                <div className="w-[30px] h-[68px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[120px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-10 bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[161px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[81px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[200px] bg-gradient-to-b from-emerald-400 to-emerald-45 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[81px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[131px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[182px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[51px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[171px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
                <div className="w-[30px] h-[151px] bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px]" />
            </div>
            <div className="w-20 h-8 left-[452px] top-[76px] absolute">
                <img className="w-20 h-8 left-0 top-0 absolute" src={images.Combined} />
                <div className="left-[15px] top-[5px] absolute text-white text-xs font-small">$45.000</div>
            </div>
        </div>
    );
}

export default TrendsGraph;

