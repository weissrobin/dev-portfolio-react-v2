import { useState } from "react";

const About = () => {

    const [revealed, setRevealed] = useState(true);

    return (
        <div className={`text-left text-sm font-neue overflow-auto no-scrollbar xl:text-left xl:m-auto xl:text-[14px] md:w-[700px]  ${revealed ? 'animate-reveal' : ''}`}>
            <p className=" ml-auto mb-5">Hey there! I'm a self-taught React developer with four years of experience in web technologies. 
            My journey into web development began during my college years, where I earned my Bachelor's degree. 
            Since then, I’ve been passionately honing my skills through free courses such as 
            The Odin Project and freeCodeCamp.</p>

            <p className="ml-auto mb-5">On this website, you'll find a showcase of the work I've completed, reflecting my dedication 
            and passion for web development. I aim to demonstrate my expertise and seek opportunities to collaborate 
            on exciting projects.</p>

            <div>
                <p className="ml-auto">My journey:</p>
                <ul classname="">
                    <li className="underline text-2xl"><a href="https://czechproject.cz/">CzechProject s.r.o (2024 - current)</a></li>
                </ul>
            </div>

            <div className='text-left font-neueBold py-5 text-xl'>
                <span> HTML // CSS, SCSS // JS,JQ // Bootstrap //</span>
                <span> React // Tailwind // </span>
                <span> NPM // SQL // PHP </span>
            </div>
        </div>
    )
}

export default About