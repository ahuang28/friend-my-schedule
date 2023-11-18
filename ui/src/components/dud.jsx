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


import React from "react";

export const MatchesDetails = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white [background:linear-gradient(180deg,rgb(254,205,249)_6.36%,rgb(248,243,237)_26.77%,rgb(251,152,4)_48.51%,rgba(64,139,252,0.7)_80.81%)] w-[390px] h-[844px] relative">
        <div className="absolute w-[390px] h-[732px] top-[112px] left-0">
          <img className="absolute w-[390px] h-[679px] top-[53px] left-0" alt="Ellipse" src="ellipse-13.svg" />
          <div className="absolute w-[351px] h-[540px] top-[120px] left-[21px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]" />
          {/* <img
            className="absolute w-[35px] h-[35px] top-[210px] left-[203px]"
            alt="Ic baseline facebook"
            src="ic-baseline-facebook.svg"
          /> */}
          <div className="absolute w-[156px] h-[156px] top-0 left-[118px] bg-[#918e8e] rounded-[78px]" />
          {/* <img className="absolute w-[30px] h-[30px] top-[213px] left-[152px]" alt="Vector" src="vector.svg" /> */}
          {/* <div className="top-[175px] left-[117px] [font-family:'Inter-Bold',Helvetica] font-bold text-[20px] absolute text-black tracking-[0] leading-[normal] whitespace-nowrap">
            Brandon Wonga
          </div> */}
          <div className="absolute top-[269px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Year
          </div>
          <div className="absolute top-[269px] left-[316px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            U4
          </div>
          <div className="top-[305px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] absolute text-black tracking-[0] leading-[normal] whitespace-nowrap">
            Major
          </div>
          <div className="absolute top-[305px] left-[177px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Software Engineering
          </div>
          <div className="absolute top-[341px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Courses
          </div>
          <div className="absolute top-[474px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Interests
          </div>
          <div className="absolute w-[103px] h-[36px] top-[371px] left-[51px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[103px] h-[36px] top-[371px] left-[163px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[83px] h-[36px] top-[371px] left-[276px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[134px] h-[36px] top-[419px] left-[51px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[134px] h-[36px] top-[419px] left-[199px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[103px] h-[36px] top-[504px] left-[51px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[103px] h-[36px] top-[504px] left-[163px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[83px] h-[36px] top-[504px] left-[276px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[134px] h-[36px] top-[552px] left-[51px] bg-[#918e8e] rounded-[32px]" />
          <div className="absolute w-[134px] h-[36px] top-[552px] left-[199px] bg-[#918e8e] rounded-[32px]" />
        </div>
        {/* <img className="absolute w-[10px] h-[11px] top-[92px] left-[35px]" alt="Vector" src="vector-1.svg" /> */}
        {/* <div className="absolute top-[87px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
          Back
        </div> */}
      </div>
    </div>
  );
};