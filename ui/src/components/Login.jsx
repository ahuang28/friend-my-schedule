import { useState } from "react";
import {Input, Button} from "@nextui-org/react";
import axios from "axios";
// import api from "../api";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const { username, password } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const api = axios.create({
        baseURL: "http://localhost:3000",
    });

    const UserService = {}

    UserService.register = async (user) => {
        try {
            const { data } = await api.post("/register", user);
            return data;
        } catch(error) {
            throw error;
        }
    }

    UserService.getUser = async (id) => {
        try {
            const { data } = await api.get(`/user/${id}`);
            return data;
        } catch(error) {
            throw error;
        }
    }

    return (
        <>
            <div className="absolute top-0 left-0 bg-white [background:conic-gradient(from_180deg_at_50%_50%,rgba(64,139,252,0.8)_55.75deg,rgb(254,205,249)_110.41deg,rgb(251,152,4)_250.38deg,rgb(247,252,242)_306.02deg)] w-screen h-screen">


                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />

                <div className="flex flex-col items-center">
                    <div className="pt-[127px]">
                        <div className="text-center [font-family:'Inter-Regular', Helvetica] font-normal text-[#00274c] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Friend My Schedule
                        </div>
                        <div className="text-center [font-family:'Inter-Bold', Helvetica] font-bold text-[#00274c] text-[32px] tracking-[0] leading-[normal]">
                            Welcome back!
                        </div>
                    </div>

                    <div className="mt-[32px] py-[39px] flex flex-col items-center w-[325px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                        <img className="w-[76px] h-[40px]" alt="Logo" src="/src/assets/logo.svg" />
                        
                        <form>
                            <Input onChange={handleChange} className="mt-[33px] w-[274px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Username" id="username" value={username}/>
                            <Input onChange={handleChange} className="mt-[10px] w-[274px] h-[41px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="password" label="Password" id="password" value={password}/>
                            <Button onClick={handleSubmit} radius="md" className="mt-12 w-[274px] h-[41px] bg-[#00284c] opacity-1 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[normal]">
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