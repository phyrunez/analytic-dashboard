import images from "../../constants/images"

const Sidebar = () => {
  return (
    <div className="w-20 h-[876px] py-5 bg-gray-50 border-r border-slate-200 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch h-[488px] flex-col justify-start items-center gap-64 flex">
            <div className="self-stretch h-[488px] flex-col justify-start items-center gap-5 flex">
                <div className="self-stretch h-[428px] flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 p-2 justify-center items-center flex">
                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                <div className="w-10 h-10 relative">
                                    <img src={images.Vector} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 p-2 justify-center items-center flex">
                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                <div className="w-6 h-6 flex w-full justify-between">
                                    <img src={images.Category} alt="" />
                                    <img className="ml-6" src={images.Side} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 p-2 justify-center items-center flex">
                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.TrendUp} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <div className="w-[19.23px] h-5 left-[2.39px] top-[2px] absolute">
                                        <div className="w-[17.60px] h-[14.17px] left-[0.78px] top-[5.44px] absolute">
                                            <img src={images.Profile} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.Box} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.Discount} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.Info} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 px-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="p-2 bg-white rounded-[100px] flex-col justify-start items-center gap-2 inline-flex">
                            <div className="flex-col justify-center items-center gap-4 flex">
                                <div className="h-[30px] px-[7.50px] py-[6.56px] bg-emerald-400 rounded-[94px] flex-col justify-center items-center gap-[9.38px] flex">
                                    <div className="justify-start items-center gap-[5.27px] inline-flex">
                                        <div className="w-[16.88px] h-[16.88px] relative">
                                            <div className="w-[16.88px] h-[16.88px] left-0 top-0 absolute">
                                                <img src={images.Brightness} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[30px] h-[30px] relative">
                                    <img src={images.Moon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="h-[152px] flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.ArrowRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.Setting} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-10 h-10 rounded-[20px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <img src={images.Logout} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar