import React,{useState, useEffect} from "react";
import Iconsun from "../icons/icon-sun";
import IconMoon from "../icons/icon-moon";

const  TaskTheme = () => {

    const [theme, setTheme] = useState<string>("dark");
    const body = document.querySelector("body") as HTMLBodyElement;

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if(theme === "dark"){
            body.classList.add("dark");
            body.classList.add("bg-dark");
        }else{
            body.classList.remove("dark");
            body.classList.remove("bg-dark");
        }
    }, [theme]);

  return(
    <div className='flex justify-between items-center w-full'>
        <h1 className="flex justify-start text-4xl tracking-[0.5em] font-bold text-[--very-light-gray] dark:text-[--grayish-blue] font-josefin">TODO</h1>
        <button aria-label="Change Theme" onClick={handleTheme}> {theme == "light" ? <IconMoon/> : <Iconsun/>} </button>
    </div>
  );
};


export default TaskTheme;