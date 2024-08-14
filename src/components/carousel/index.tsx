'use client'

import {
    ComponentPropsWithRef,
    useState,
    useCallback,
    useEffect
} from 'react'
import { ProjectsDataType } from '@types'

import {
    EmblaCarouselType,
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image, { StaticImageData } from 'next/image'

export const CarouselProjectImages = ({ project }: { project: ProjectsDataType }) => {
    const options: EmblaOptionsType = {
        loop: true,
        align: 'center',
        skipSnaps: true,
        inViewThreshold: 0.7
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])
    const {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    } = useDotButton(emblaApi, onNavButtonClick)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    const [slidesInView, setSlidesInView] = useState<number[]>([])
    const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
                .slidesInView()
                .filter((index) => !slidesInView.includes(index))
            return slidesInView.concat(inView)
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        updateSlidesInView(emblaApi)
        emblaApi.on('slidesInView', updateSlidesInView)
        emblaApi.on('reInit', updateSlidesInView)
    }, [emblaApi, updateSlidesInView])

    return (
        <div className='embla max-w-[1000px] mx-auto'>
            <div className='embla__viewport' ref={emblaRef}>
                <div className='embla__container'>
                    { project.images.map((image, index) =>
                        <LazyLoadImage
                            key={index}
                            imgId={`img-${project.title}-${index}`}
                            imgSrc={image}
                            imgAlt={project.genericAlt}
                            inView={slidesInView.indexOf(index) > -1}
                        />
                    ) }
                </div>

                <div className='embla__controls'>
                    <div className='embla__buttons'>
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className='embla__dots'>
                        { scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                title={`Ver imagem ${index+1}`}
                                onClick={() => onDotButtonClick(index)}
                                className={'embla__dot'.concat(
                                    index === selectedIndex ? ' embla__dot--selected' : ' after:hover:shadow-[inset_0_0_0_0.1rem_#37555f]'
                                )}
                            />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}
export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}
export const PrevButton = (props: ComponentPropsWithRef<'button'>) => {
    const { children, ...restProps } = props

    return (
        <button
            title='Ver imagem anterior'
            className='embla__button embla__button--prev'
            type='button'
            {...restProps}
        >
            <svg className='embla__button__svg' viewBox='0 0 532 532'>
                <path
                    fill='currentColor'
                    d='M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z'
                />
            </svg>
            {children}
        </button>
    )
}
export const NextButton = (props: ComponentPropsWithRef<'button'>) => {
    const { children, ...restProps } = props

    return (
        <button
            title='Ver proxima imagem'
            className='embla__button embla__button--next'
            type='button'
            {...restProps}
        >
            <svg className='embla__button__svg' viewBox='0 0 532 532'>
                <path
                    fill='currentColor'
                    d='M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z'
                />
            </svg>
            {children}
        </button>
    )
}

type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}
export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
        },
        [emblaApi, onButtonClick]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}
export const DotButton = (props: ComponentPropsWithRef<'button'>) => {
    const { children, ...restProps } = props

    return (
        <button type='button' {...restProps}>
            {children}
        </button>
    )
}

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`
const LazyLoadImage = (props:
    {
        imgSrc: StaticImageData,
        imgAlt: string,
        inView: boolean,
        imgId:  string
    }
) => {
    const { imgSrc, imgAlt, inView, imgId } = props
    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className='embla__slide mx-4'>
            <div
                className={'embla__lazy-load'.concat(
                    hasLoaded ? ' embla__lazy-load--has-loaded' : ''
                )}
            >
                { !hasLoaded && <span className='embla__lazy-load__spinner' /> }
                <Image
                    id={imgId}
                    src={inView ? imgSrc : PLACEHOLDER_SRC}
                    onLoad={setLoaded}
                    width='1000'
                    height='500'
                    className='embla__slide__img embla__lazy-load__img rounded-2xl'
                    priority={true}
                    quality={100}
                    alt={imgAlt}
                />
            </div>
        </div>
    )
}
