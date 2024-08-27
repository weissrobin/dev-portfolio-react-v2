import { useState } from "react";

const Contact = () => {

    const [revealed, setRevealed] = useState(true);

    return (
        <div className={`font-neueBold flex flex-col text-[13px] w-1/3 my-auto ${revealed ? 'animate-reveal' : ''}`}>
            <a className='transition-opacity hover:opacity-[0.3]' href="https://www.instagram.com/robiwei/">Instagram ↗</a>
            <a className='transition-opacity hover:opacity-[0.3]' href="https://x.com/HubacekRobin">X(Twitter) ↗</a>
            <a className='transition-opacity hover:opacity-[0.3]' href="https://github.com/WeissRobin">GitHub ↗</a>
            <a className='transition-opacity hover:opacity-[0.3]' href="https://www.linkedin.com/in/robin-hubáček-5512ba26a/">Linkedin ↗</a>
            <a className='transition-opacity hover:opacity-[0.3]' href="mailto:robin.hubacek@post.cz">Email</a>
        </div>   
    )
}

export default Contact