'use client'

import { ProjectsDataType } from '@types'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'

export const CarouselProjectImages = ({ project }: { project: ProjectsDataType }) =>
    <Carousel
        className='max-w-[1000px] mx-auto shadow-2xl rounded-2xl overflow-hidden'
        autoplay
        autoplayInterval={5000}
        scrollDistance='slide'
        showArrows='hover'
        wrapMode='wrap'
        showDots
        swiping
    >
        { project.images.map((image, index) =>
            <Image
                key={index}
                src={image}
                width='1000'
                height='500'
                placeholder='blur'
                priority={true}
                quality={90}
                alt={project.genericAlt}
            />
        ) }
    </Carousel>