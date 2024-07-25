'use client'

import { PopoverMenu } from './popover-menu'
import { useHeaderLinks } from '@/hooks/useHeaderLinks'
import { Pacifico } from '@app/fonts'

import { useEffect } from 'react'
import Link from 'next/link'

export const Header = () => {
    const headerLinks = useHeaderLinks

    useEffect(() => {
        const addShadow = () => {
            if (window.pageYOffset > 0) document.querySelector('header')?.classList.add('shadow-xl')
            else document.querySelector('header')?.classList.remove('shadow-xl')
        }

        const handleScroll = () => {
            addShadow()

            const sections = document.querySelectorAll('section')

            const firstSection = sections[0]
            const lastSection = sections[sections.length - 1]

            let activeSectionId = ''

            if (window.pageYOffset < firstSection.offsetTop) {
                activeSectionId = firstSection.id
            } else if (window.pageYOffset + window.innerHeight > lastSection.offsetTop + lastSection.offsetHeight) {
                activeSectionId = lastSection.id
            } else {
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = section.offsetTop + section.offsetHeight

                    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                        activeSectionId = section.id
                    }
                })
            }

            const applyActiveLink = (parent: HTMLElement, activeId: string) => {
                const links = parent.querySelectorAll('a')

                links.forEach((link: HTMLAnchorElement) => {
                    if (link.href.includes(`#${activeId}`)) {
                        if (parent.id === 'menu-content') document.getElementById(`li-${link.id}`)?.classList.add('active-link')
                        else link.classList.add('active-link')
                    }
                    else {
                        if (parent.id === 'menu-content') document.getElementById(`li-${link.id}`)?.classList.remove('active-link')
                        else link.classList.remove('active-link')
                    }
                })
            }

            applyActiveLink(document.getElementById('navigation-header') as HTMLElement, activeSectionId)
            if (document.getElementById('menu-container')) {
                applyActiveLink(document.getElementById('menu-content') as HTMLElement, activeSectionId)
            }
            // applyActiveLink(document.getElementById('navigation-footer') as HTMLElement, activeSectionId)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <div className='content flex justify-between'>
                <div className='w-fit flex-center gap-2 select-none pointer-events-none'>
                    <span className='w-6 h-6 bg-[url("favicon.ico")] bg-no-repeat bg-center bg-cover hidden sm:inline-block' />
                    <p className={`${Pacifico.className} text-zinnia text-2xl sm:hidden md:inline-block`}>PeachCode</p>
                </div>

                <PopoverMenu headerLinks={headerLinks} />

                <nav id='navigation-header' className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                    <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                        { headerLinks.map((menuRouter, index) =>
                            <li key={`${index}-header`} className='my-auto'>
                                <Link href={menuRouter.href} className='text-lg lg:text-xl text-nowrap hover:underline underline-offset-4'>
                                    {menuRouter.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>

                <Link
                    href='#contact'
                    className='bg-gradient-to-tr from-zinnia from-20% to-paw-paw to-90% hover:brightness-110 hover:scale-[1.03] text-white text-lg lg:text-xl leading-8 lg:leading-9 xl:leading-[2.688rem] px-4 lg:px-5 xl:px-6 hidden sm:inline-flex md:hidden lg:inline-flex rounded-lg xl:rounded-xl hover:rounded-md xl:hover:rounded-lg transition-all'
                >
                    Contato
                </Link>
            </div>
        </header>
    )
}