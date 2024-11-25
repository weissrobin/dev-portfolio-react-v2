import { useState } from "react";

const Home = () => {

    const [revealed, setRevealed] = useState(true);

    return (
        <div className='mt-auto'>
            <p className={`leading-5 ml-auto font-neueBold opacity-0 text-[12px] w-[12ch] ${revealed ? 'animate-reveal' : ''}`}>
                Welcome to the space 
                where less is more.
                Every pixel has a purpose 
                and every project has a soul. 
                Discover the elegance in my portfolio.
            </p>
        </div>
    )
}

export default Home