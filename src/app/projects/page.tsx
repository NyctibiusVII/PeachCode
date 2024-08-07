import {
    processText,
    projectsDataList
} from '@utils'
import { CarouselProjectImages } from '@components/carousel'
import Image from 'next/image'

export default function Projects() {
    return (
        <main>
            { projectsDataList.map((project, index) => {
                const animateColorClassName = [
                    'from-[#6746A4] from-10% via-[#A3FE47] to-[#6746A4] to-90% text-your-color-animate',
                    'from-[#01F26D] from-10% via-[#07361C] to-[#01F26D] to-90% text-your-color-animate',
                    'from-[#F1F5F9] from-10% via-[#111827] to-[#F1F5F9] to-90% text-your-color-animate',
                    'from-[#50946C] from-10% via-[#294D38] to-[#50946C] to-90% text-your-color-animate',
                    'from-[#B2C0EA] from-10% via-[#1E2A50] to-[#B2C0EA] to-90% text-your-color-animate',
                ]

                return (
                    <section id={project.title.toLocaleLowerCase()} key={index}>
                        <div className='content py-24 flex flex-col gap-4 lg:gap-8'>
                            <div className='flex flex-col items-center gap-2 lg:gap-4'>
                                <h2 className={`${animateColorClassName[index]} uppercase font-semibold text-center text-3xl md:text-4xl lg:text-5xl`}>{project.title}</h2>
                                <p className='text-glacier-white/75 text-center leading-5 md:text-xl md:leading-6' dangerouslySetInnerHTML={{ __html: processText({ text: project.description }) }} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <CarouselProjectImages project={project} />

                                <Image
                                    className='w-24 sm:w-fit h-fit mx-auto'
                                    src={project.logo.src}
                                    width={project.logo.width}
                                    height={project.logo.height}
                                    placeholder='blur'
                                    priority={false}
                                    alt={project.logo.alt}
                                />
                            </div>
                        </div>
                    </section>
                )
            }) }
        </main>
    )
}