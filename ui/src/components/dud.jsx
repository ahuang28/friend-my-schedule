function Login() {
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white [background:conic-gradient(from_180deg_at_50%_50%,rgba(64,139,252,0.8)_55.75deg,rgb(254,205,249)_110.41deg,rgb(251,152,4)_250.38deg,rgb(247,252,242)_306.02deg)] w-screen h-screen relative">
                <div className="w-[601px] h-[681px]">
                    <img className="absolute w-[390px] h-[692px] left-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                </div>
                <div className="w-[601px] h-[681px]">
                    <img className="absolute w-[390px] h-[692px] left-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                </div>
                <div className="w-[601px] h-[681px]">
                    <img className="absolute w-[390px] h-[692px] left-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                </div>

                {/* Title */}
                <div flex >
                    <div className="text-center [font-family:'Inter-Bold', Helvetica] font-bold text-[#00274c] text-[32px] tracking-[0] leading-[normal]">
                        Welcome back!
                    </div>
                    <div className="text-center [font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Friend My Schedule
                    </div>
                </div>

                <div className="absolute w-[390px] h-[700px] top-[157px] left-0">
                    <div className="absolute w-[325px] h-[399px] top-[65px] left-[30px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]" />
                    
                    <div className="absolute w-[274px] h-[41px] top-[184px] left-[58px] bg-[#ffffffb2] rounded-[32px]" />
                    <div className="absolute w-[274px] h-[41px] top-[235px] left-[58px] bg-[#ffffffb2] rounded-[32px]" />
                    <div className="absolute w-[274px] h-[41px] top-[325px] left-[58px] bg-[#00284c] rounded-[32px]" />
                    <div className="absolute w-[18px] h-[51px] top-[117px] left-[173px] bg-[#00284c] rounded-[0px_20.51px_20.51px_0px] rotate-90" />
                    <div className="absolute w-[18px] h-[51px] top-[95px] left-[199px] bg-[#00284c] rounded-[0px_0px_0px_20.51px] rotate-90" />
                    <div className="absolute top-[196px] left-[75px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
                        Username
                    </div>
                    <div className="absolute top-[247px] left-[75px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
                        Password
                    </div>
                    <div className="absolute top-[337px] left-[179px] opacity-70 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[normal]">
                        Login
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Login