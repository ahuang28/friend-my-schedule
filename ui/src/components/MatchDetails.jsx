import { useParams } from "react-router-dom"
import './Matches.css'
import { Avatar, Button, Chip } from "@nextui-org/react"
import { ChevronLeftIcon, InstagramLogoIcon } from "@radix-ui/react-icons"

export function MatchDetails() {
    const { id } = useParams()
    const courses = ["Comp 350000000000", "Comp 370", "Math 423", "Comp 424"]
    return (
        <>
            <div className="w-screen h-screen gradient">
                <div className="w-full h-full flex flex-col items-center">
                    <div className="py-[72px] px-2">
                        {/* Back */}
                        <div className="flex flex-row items-center">
                            <Button variant="light" className="[font-family:'Inter-Regular',Helvetica] text-[#00274c] font-bold" startContent={<ChevronLeftIcon/>}>
                                Back
                            </Button>
                        </div>

                        <div className="flex flex-col items-center">
                            
                            {/* Profile pic */}
                            <Avatar className=" translate-y-6 w-[156px] h-[156px] z-10"></Avatar>

                            {/* Rectangle */}
                            <div className=" z-0 py-10 px-6 flex flex-col items-center w-[325px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                                <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-[20px] text-[#00274c] tracking-[0] leading-[normal] whitespace-nowrap">
                                    Brandon Wonga
                                </div>
                                <div className="mt-3 flex flex-row items-center gap-5">
                                    <img className="w-[30px] h-[30px]" alt="Instagram" src="/src/assets/instagram.svg" /> 
                                    <img className="w-[30px] h-[30px]" alt="Facebook" src="/src/assets/facebook.svg" />
                                    {/* <InstagramLogoIcon className="w-[30px] h-[30px] fill=#00274c"/> */}
                                </div>
                                <div className="mt-5 w-full flex flex-row justify-between">
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        Year
                                    </div>
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-bold text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        U4
                                    </div>
                                </div>
                                <div className="mt-5 w-full flex flex-row justify-between">
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        Major
                                    </div>
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-bold text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        Software Engineering
                                    </div>
                                </div>
                                {/* Courses */}
                                <div className="mt-5 w-full h-full flex flex-col items-start">
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        Courses
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-x-2">
                                        {courses.map((course, index) => (
                                            <Chip key={index} className="mt-2 opacity-70 bg-[#408BFC] text-white">{course}</Chip>
                                        
                                        ))}
                                    </div>
                                </div>

                                {/* Interests */}
                                <div className="mt-5 w-full h-full flex flex-col items-start">
                                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        Interests
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-x-2">
                                        {courses.map((course, index) => (
                                            <Chip key={index} className="mt-2 opacity-70 bg-[#408BFC] text-white">{course}</Chip>
                                        
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default MatchDetails