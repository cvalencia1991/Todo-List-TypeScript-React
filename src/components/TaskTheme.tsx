import React,{useState, useEffect} from "react";
import Iconsun from "../icons/icon-sun";
import IconMoon from "../icons/icon-moon";

function TaskTheme() {

    const [theme, setTheme] = useState<string>("dark");
    const body = document.querySelector("body") as HTMLBodyElement;

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if(theme === "dark"){
            body.classList.add("dark");
            body.classList.add("bg-[#161722]");
        }else{
            body.classList.remove("dark");
            body.classList.remove("bg-[#161722]");
        }
    }, [theme]);

  return(

    <div className="flex justify-center  gap-4 flex-col desktop:w-[40em] mobile:w-80">
        <div className='flex justify-between items-center'>
            <h1 className=" text-[30px] tracking-[0.5em] font-bold text-[--very-light-gray] dark:text-[--grayish-blue] font-josefin">TODO</h1>
            <button
                aria-label="Change Theme"
                onClick={handleTheme}>
                {theme == "light" ? <IconMoon/> : <Iconsun/>}
            </button>
        </div>
    </div>
  );
}


export default TaskTheme;