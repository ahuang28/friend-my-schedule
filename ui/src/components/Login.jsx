import { useState } from "react";
import {Input, Button} from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const api = axios.create({
            baseURL: "http://localhost:3000",
        });

        api.post("/login", formData).then(() => {
            navigate("/profile", { replace: true })
            return
        }).catch(() => {
            console.log("Error")
        })
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }


    return (
        <>
            <div className="absolute top-0 left-0 bg-white [background:conic-gradient(from_180deg_at_50%_50%,rgba(64,139,252,0.8)_55.75deg,rgb(254,205,249)_110.41deg,rgb(251,152,4)_250.38deg,rgb(247,252,242)_306.02deg)] w-screen h-screen">


                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />

                <div className="flex flex-col items-center">
                    <div className="pt-[127px]">
                        <div className="text-center [font-family:'Inter'] font-normal text-[#00274c] text-[20px] tracking-wide leading-[normal] whitespace-nowrap">
                            Friend My Schedule
                        </div>
                        <div className="text-center [font-family:'Inter', Helvetica] font-bold text-[#00274c] text-[32px] tracking-wide leading-[normal]">
                            Welcome back!
                        </div>
                    </div>

                    <div className="mt-[32px] py-[39px] flex flex-col items-center w-[325px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                        <img className="w-[76px] h-[40px]" alt="Logo" src="/src/assets/logo.svg" />
                        
                        <form>
                            <Input onChange={handleChange} className="mt-[33px] w-[274px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter'] font-normal text-[#000000a6] text-[12px] tracking-wide leading-[normal]" type="email" label="Email" id="email" value={email}/>
                            <Input onChange={handleChange} className="mt-[10px] w-[274px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter'] font-normal text-[#000000a6] text-[12px] tracking-wide leading-[normal]" type="password" label="Password" id="password" value={password}/>
                            <Button onClick={handleSubmit} radius="md" className="mt-12 w-[274px] h-[50px] bg-[#00284c] opacity-1 [font-family:'Inter'] font-bold text-white text-[12px] tracking-wide leading-[normal]">
                                Login
                            </Button>
                        </form>
                        
                    </div>    
                    
                </div>

            </div>
        </>
      );
}

export default Login