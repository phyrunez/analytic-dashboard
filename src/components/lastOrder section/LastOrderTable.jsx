import { LastOrderData } from "../../data/data"

const LastOrderTable = () => {
  return (

<div className="w-[1045px] h-[422px] relative bg-white mt-[285px] ml-[7px] rounded-[14px] border border-slate-100">
  <div className="w-[956px] left-[20px] top-[18px] absolute justify-between items-center inline-flex">
     <div className="text-zinc-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-relaxed">Last Orders</div>
     <div className="text-center text-emerald-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">See All</div>
   </div>
   
   <table className="ml-[20px] top-[58px] absolute justify-center items-start">
        <thead className="top-[58px] justify-between items-start">
            <tr>
                <th scope="col" className="pr-[158px] items-start text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                    Name
                </th>
                <th scope="col" className="pl-[50px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                    Date
                </th>
                <th scope="col" className="pl-[100px]  text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                    Amount
                </th>
                <th scope="col" className="pl-[120px]  text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                    Status
                </th>
                <th scope="col" className="pl-[120px] text-gray-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                    Invoice
                </th>
            </tr>
           
        </thead>
        <tbody className='w-[1000px] '>
            {LastOrderData.map(data => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="">
                    <div className="ml-[2px] my-[15px] justify-start items-center flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <img className="w-8 h-8 rounded-[33.33px]" src={data.nameIcon} />
                        <div className="text-gray-700 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{data.name}</div>
                    </div>
                    </div>
                    </th>
                    <td className="pl-[110px]">
                    <div className="text-neutral-500  font-[20px] font-['Plus Jakarta Sans'] leading-normal">{data.date}</div>
                    </td>
                    <td className="pl-[100px]">
                    <div className=" text-slate-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{data.amount}</div> 
                    </td>
                    <td className="pl-[120px]">
                    <div className={`${data.status === 'Paid' ? 'text-emerald-400' : 'text-[#ED544E]' } text-base font-normal font-['Plus Jakarta Sans'] leading-normal`}>{data.status}</div>
                    </td>
                    <td className="pl-[120px]">
                    <div className="h-[22px] justify-start items-center gap-1.5 flex">
                    <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 relative">
                            <img src={data.invoiceIcon} alt="" />
                        </div>
                    </div>
                    <div className="text-slate-900 text-sm font-normal font-['Plus Jakarta Sans'] leading-snug">View</div>
                    </div>
                    </td>
                </tr>
            ))}
            
        </tbody>
    </table>
   
</div>
  )
}

export default LastOrderTable