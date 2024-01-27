import {orderData} from '../../data/data'

const Order = () => {
  return (
    
    <>
        {orderData.map(data => (
            <div className="w-[239px] h-[179px] p-4 bg-white rounded-[14px] border border-slate-100 justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start pb-4 items-start gap-1.5 inline-flex">
                <div className="w-[207px] justify-between items-center inline-flex">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute rounded-full border border-neutral-200" />
                    <div className="w-6 h-6 left-[8px] top-[8px] absolute justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative">
                        <img src={data.icon} alt="icon" />
                    </div>
                    </div>
                </div>
                <div className="origin-top-left  w-[104px] h-8 relative">
                    <img src={data.semigraph} alt="semigraph" />
                </div>
                </div>
                <div className="flex-col justify-start items-start gap-[5px] flex">
                <div className="text-zinc-500 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">{ data.title }</div>
                <div className="text-gray-700 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-loose">{ data.amount }</div>
                </div>
                <div className="justify-start items-center w-full gap-2.5 inline-flex">
                    <div className={`px-2 py-1 ${data.bgColor === "#34CAA5" ? "bg-[#34CAA5]" : "bg-[#ED544E]" } bg-opacity-10 rounded-full justify-center items-center gap-1 flex`}>
                        <div className="w-3 h-3 px-[1.50px] py-[3.50px] justify-center items-center flex">
                            <div className="w-[9px] h-[5px] relative">
                                <img src={data.progressIcon} alt="progress" />
                            </div>
                        </div>
                        <div className={`${data.bgColor === "#34CAA5" ? "text-[#34CAA5]" : "text-[#ED544E]" } text-xs font-medium font-['Plus Jakarta Sans'] leading-none`}>23.5%</div>
                    </div>
                    <div className="text-zinc-600 text-base font-normal font-['Inter']">vs. previous month</div>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}

export default Order