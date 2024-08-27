const ProjectItem = ({name, url, purpose, technologies}) => {
    return (
        <a href={url} className='transition-opacity hover:opacity-[0.3]'>
            <span className="text-[14px] font-neue text-gray-300 xl:text-[1.8rem]">{purpose}</span>
            <span className='text-xl px-2 xl:text-[2.2rem]'>//</span>
            <span className='text-3xl font-neueThin xl:text-[3rem]'>{name}</span>
            <p className="font-neueBold text-sm">{technologies}</p>
        </a>
    )
}

export default ProjectItem