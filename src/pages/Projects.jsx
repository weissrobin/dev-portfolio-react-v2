import ProjectItem from "./ProjectItem";
import { useState } from "react";

const Projects = () => {

    const [revealed, setRevealed] = useState(true);

    return (
        <div className={`text-right overflow-auto flex flex-col gap-10 no-scrollbar mt-auto opacity-0 ${revealed ? 'animate-reveal' : ''}`}>
            <ProjectItem name='MstyleStudio' purpose='Bachelor Project' url='https://mstylestudio.000webhostapp.com/' technologies='Webpack / SCSS / JS,JQ / SQL' />
            <ProjectItem name='Weather App' purpose='Odin Project' url='https://wefutu.netlify.app' technologies='React / API / SCSS' />
            <ProjectItem name='CV Generator' purpose='Odin Project' url='https://profilifyq.netlify.app' technologies='React / SCSS' />
            <ProjectItem name='Memory Game' purpose='Odin Project' url='https://memo-game-pokemon.netlify.app' technologies='React / Tailwind / API' />
            <ProjectItem name='Restaurant' purpose='Odin Project' url='https://sakuratei.netlify.app/' technologies='Only Desktop / Webpack / SCSS' />
            <ProjectItem name='Signup & Login System' purpose='PHP Self-learn' url='https://github.com/WeissRobin/sign-up-login-system' technologies='PHP / SCSS / CHART-JS' />
            <ProjectItem name='Future Studio' purpose='Hiring Project' url='https://future-studio-hiring-project.netlify.app' technologies='HTML / JS / Bootstrap' />
            <ProjectItem name='More Here' purpose='GitHub' url='https://github.com/WeissRobin?tab=repositories' technologies='' />
        </div>
    );
};

export default Projects;
