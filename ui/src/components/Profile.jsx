import { useState } from "react";
import NavBar from "./NavBar"
import {Input, Button, Autocomplete, AutocompleteItem} from "@nextui-org/react";

function Profile() {

    const available_courses = ["Comp 202", "Comp 206", "Comp 208", "Comp 250", "Comp 251"]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        year: "",
        major: "",
        courses: "",
        interests: ""
    });

    const { name, email, year, major, courses, interests } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    return (
        <>
            <div className="bg-white [background:linear-gradient(180deg,rgb(64,139,252)_10.95%,rgb(248,243,237)_35.73%,rgb(252.2,182.9,79.3)_67.33%,rgb(254,205,249)_100%)] w-screen h-screen">
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />

                <div className="w-full h-full flex flex-col items-center">
                    {/* Form */}
                    <div className="py-8 mt-12 flex flex-col items-center w-[350px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00274c] text-[24px] tracking-[0] leading-[normal]">
                            Profile
                        </div>                        
                        <form className="flex flex-col items-center">
                            <Input onChange={handleChange} className="mt-5 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Name" id="name" value={name}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="email" label="Email" id="email" value={email}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Year" id="year" value={year}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Year" id="year" value={year}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Major" id="major" value={major}/>
                            <Autocomplete label="Select your courses" className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]">
                                {available_courses.map((item, index) => (
                                    <AutocompleteItem key={index} value={item}>
                                        {item}
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Interests" id="interests" value={interests}/>
                            <Button onClick={handleSubmit} radius="md" className="mt-12 w-[320px] h-[41px] bg-[#00284c] opacity-1 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[normal]">
                                Save & Generate
                            </Button>
                        </form>
                        
                    </div>   

                    {/* Logout */}
                    <Button onClick={handleSubmit} radius="md" variant="bordered" className="mt-12 w-[150px] h-[41px] opacity-100 border-[#00274c] [font-family:'Inter-Bold',Helvetica] font-normal text-[#00274c] text-[12px] tracking-[0] leading-[normal]">
                        Logout
                    </Button>
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Profile