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

import React from "react";

export const Profile = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white [background:linear-gradient(180deg,rgb(64,139,252)_10.95%,rgb(248,243,237)_35.73%,rgb(252.2,182.9,79.3)_67.33%,rgb(254,205,249)_100%)] w-[390px] h-[918px]">
        <div className="relative h-[866px] top-[52px]">
          <img className="absolute w-[390px] h-[753px] top-[113px] left-0" alt="Ellipse" src="ellipse-13.svg" />
          <div className="absolute w-[185px] h-[56px] top-[720px] left-[102px] rounded-[32px] border border-solid border-[#00284c]" />
          <div className="absolute w-[357px] h-[680px] top-0 left-[17px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]" />
          <div className="absolute w-[390px] h-[74px] top-[792px] left-0 bg-[#e2ceb599]" />
          <div className="absolute top-[21px] left-[159px] [font-family:'Inter-Regular',Helvetica] font-normal text-text text-[24px] tracking-[0] leading-[normal]">
            Profile
          </div>
          <div className="absolute w-[328px] h-[52px] top-[71px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute top-[88px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Name
          </div>
          <div className="absolute w-[328px] h-[52px] top-[143px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute w-[328px] h-[52px] top-[215px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute w-[328px] h-[52px] top-[287px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute w-[328px] h-[52px] top-[359px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute w-[328px] h-[44px] top-[620px] left-[31px] bg-[#00284c] rounded-[32px]" />
          <div className="absolute top-[632px] left-[122px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Save &amp; Generate
          </div>
          <div className="absolute w-[328px] h-[52px] top-[431px] left-[31px] bg-[#ffffffb2] rounded-[32px]" />
          <div className="absolute w-[71px] h-[36px] top-[503px] left-[31px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute w-[71px] h-[36px] top-[503px] left-[114px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute w-[71px] h-[36px] top-[503px] left-[197px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute w-[71px] h-[36px] top-[503px] left-[280px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute w-[71px] h-[36px] top-[555px] left-[32px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute w-[142px] h-[36px] top-[555px] left-[114px] bg-[#408bfcb2] rounded-[32px]" />
          <div className="absolute top-[160px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Email
          </div>
          <div className="absolute top-[232px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Year
          </div>
          <div className="absolute top-[304px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Major
          </div>
          <div className="absolute top-[376px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Visual Studio Builder Link
          </div>
          <div className="absolute top-[448px] left-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
            Interests
          </div>
          <img
            className="absolute w-[24px] h-[24px] top-[445px] left-[315px]"
            alt="Iconamoon search"
            src="iconamoon-search-bold.svg"
          />
          <div className="absolute w-[21px] h-[21px] top-[562px] left-[222px] bg-white rounded-[10.5px]" />
          <img className="absolute w-[20px] h-[20px] top-[563px] left-[223px]" alt="Bi x" src="bi-x.svg" />
          <div className="absolute top-[739px] left-[169px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00284c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Logout
          </div>
          <div className="absolute top-[511px] left-[54px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00284c] text-[14px] tracking-[0] leading-[normal]">
            Ball
          </div>
          <div className="inline-flex items-center justify-center gap-[84px] absolute top-[813px] left-[59px]">
            <img className="h-[32.14px] relative w-[35px]" alt="Vector" src="vector.svg" />
            <img className="relative w-[39px] h-[33.75px]" alt="Mask group" src="mask-group.svg" />
            <img className="h-[35px] relative w-[35px]" alt="Vector" src="image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const Chat = () => {
  return (
    <div className="bg-[#f8f3ed] flex flex-row justify-center w-full">
      <div className="bg-[#f8f3ed] w-[390px] h-[844px]">
        <div className="relative h-[844px]">
          <img className="w-[390px] h-[591px] top-0 absolute left-0" alt="Ellipse" src="ellipse-14.svg" />
          <img className="w-[390px] h-[679px] top-[165px] absolute left-0" alt="Ellipse" src="ellipse-13.svg" />
          <div className="absolute w-[390px] h-[74px] top-[770px] left-0 bg-[#e2ceb599]" />
          <img className="absolute w-[288px] h-[40px] top-[788px] left-[51px]" alt="Frame" src="frame-11.svg" />
          <div className="absolute top-[84px] left-[161px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
            Chats
          </div>
          <div className="top-[152px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="line-3.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
          <div className="top-[232px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="image.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
          <div className="top-[312px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="line-3-2.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
          <div className="top-[392px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="line-3-3.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
          <div className="top-[472px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="line-3-4.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
          <div className="top-[552px] absolute w-[324px] h-[64px] left-[35px]">
            <div className="w-[56px] h-[56px] top-0 bg-[#d9d9d9] rounded-[28px] absolute left-0" />
            <img className="absolute w-[239px] h-[2px] top-[62px] left-[81px]" alt="Line" src="line-3-5.svg" />
            <div className="absolute top-[9px] left-[81px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Brandon Wonga
            </div>
            <div className="absolute top-[34px] left-[81px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              U4 Software Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};