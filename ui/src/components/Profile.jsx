import { useState } from "react";
import NavBar from "./NavBar"
import {Input, Button, Autocomplete, AutocompleteItem, Select, SelectItem, Chip} from "@nextui-org/react";
import courses_data from "../../../python/data/courses.json";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Profile() {

    const navigate = useNavigate();

    const available_courses = new Set();

    console.log(courses_data)

    for (const department in courses_data) {
        if (jsonData.hasOwnProperty(department)) {
          const departmentCourses = courses_data[department];
    
          // Concatenate department code with course numbers and add to the set
          departmentCourses.forEach(course => {
            available_courses.add(`${department}${course}`);
          });
        }
      }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        year: "",
        major: "",
    });

    const { name, email, year, major } = formData;

    const [inputInterest, setInputInterest] = useState("");

    const [interests, setInterests] = useState([]);

    const [inputCourse, setInputCourse] = useState("");

    const [courses, setCourses] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.courses = courses;
        formData.interests = interests;
        console.log(formData);

        const api = axios.create({
            baseURL: "http://localhost:3000",
        });

        api.patch("/users/655832f0bca351dad91dd112", formData).then(() => {
            navigate("/matches", { replace: true })
            return
        }).catch(() => {
            console.log("Error")
        })

    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "interests") {
            setInputInterest(value);
            return;
        }
        if (id === "courses") {
            setInputCourse(value);
            return;
        }
        setFormData({ ...formData, [id]: value });
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputInterest.length > 0) {
            interests.push(inputInterest);
            setInputInterest("");
        }
    }

    const handleCourseKeyDown = (e) => {
        if (e.key === "Enter" && inputCourse.length > 0) {
            // check if the course exists lol 

            if (available_courses.has(inputCourse.trim())) {
                const outputCourse = inputCourse.replace(/([A-Za-z]+)([0-9]+)/, '$1 $2');
                courses.push(outputCourse);
                setInputCourse("");
            
        }   else { 
                alert("Course does not exist");
            }
        }
    }

    const deleteCourse = (index) => {
        if (index > -1) {
            courses.splice(index, 1);
            setCourses([...courses]);
        }
    }

    const deleteInterest = (index) => {
        if (index > -1) {
            interests.splice(index, 1);
            setInterests([...interests]);
        }
        
    }

    return (
        <>
            <div className="bg-white [background:linear-gradient(180deg,rgb(64,139,252)_10.95%,rgb(248,243,237)_35.73%,rgb(252.2,182.9,79.3)_67.33%,rgb(254,205,249)_100%)] w-screen h-screen">
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />

                <div className="w-full h-full flex flex-col items-center">
                    <div className="mt-20 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
                        Profile
                    </div> 
                    
                    {/* Form */}
                    <div className="py-5 mt-5 px-4 flex flex-col items-center w-[360px] rounded-[16px] shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">                       
                        <form className="w-full h-full flex flex-col items-center max-h-[450px] overflow-y-scroll overflow-x-hidden">
                            <Input onChange={handleChange} className="w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Name" id="name" value={name}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="email" label="Email" id="email" value={email}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Year" id="year" value={year}/>
                            <Input onChange={handleChange} className="mt-4 w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Major" id="major" value={major}/>
                            <div>
                                <Input onChange={handleChange} onKeyDown={handleCourseKeyDown} className="mt-4 w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Courses" id="courses" value={inputCourse}/>
                                <div className="flex flex-row flex-wrap gap-x-2">
                                    {courses.map((course, index) => (
                                        <Chip onClose={() => deleteCourse(index)} key={index} className="mt-2 opacity-70 bg-[#408BFC] text-white">{course}</Chip>
                                    ))}
                                </div>

                                <Input onChange={handleChange} onKeyDown={handleKeyDown} className="mt-4 w-[320px] h-[50px] bg-[#ffffffb2] rounded-[32px] opacity-70 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000a6] text-[12px] tracking-[0] leading-[normal]" type="text" label="Interests" id="interests" value={inputInterest}/>
                                <div className="flex flex-row flex-wrap gap-x-2">
                                    {interests.map((interest, index) => (
                                        <Chip onClose={() => deleteInterest(index)} key={index} className="mt-2 opacity-70 bg-[#408BFC] text-white">{interest}</Chip>
                                    
                                    ))}
                                </div>
                            </div>
                            
                        </form>
                        <Button onClick={handleSubmit} radius="md" className="mt-5 w-[320px] h-[50px] bg-[#00284c] opacity-1 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[normal]">
                            Save & Generate
                        </Button>
                    </div>   

                    {/* Logout */}
                    <Button onClick={handleSubmit} radius="md" variant="bordered" className="mt-5 w-[150px] h-[50px] opacity-100 border-[#00274c] [font-family:'Inter-Bold',Helvetica] font-normal text-[#00274c] text-[12px] tracking-[0] leading-[normal]">
                        Logout
                    </Button>
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Profile