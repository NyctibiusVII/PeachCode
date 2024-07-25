import type { MenuItensType } from '@types'

import Link from 'next/link'

export const PopoverMenu = ({ headerLinks }: { headerLinks: Array<MenuItensType> }) => {
    const handleMenu = () => {
        const openCloseMenu = document.getElementById('open-close-menu') as HTMLButtonElement
        const overlay = document.getElementById('menu-overlay') as HTMLSpanElement
        const container = document.getElementById('menu-container') as HTMLDivElement
        const content = document.getElementById('menu-content') as HTMLMenuElement

        const clickControl = () => {
            openCloseMenu.disabled = true
            openCloseMenu.classList.remove('cursor-pointer')
            openCloseMenu.classList.add('cursor-not-allowed')
            setTimeout(() => {
                openCloseMenu.disabled = false
                openCloseMenu.classList.remove('cursor-not-allowed')
                openCloseMenu.classList.add('cursor-pointer')
            }, 100)
        }

        if (content.classList.contains('hidden') && overlay.classList.contains('hidden')) {
            clickControl()

            overlay.classList.remove('hidden')
            overlay.classList.add('flex')

            container.classList.add('rounded-b-none')

            content.classList.remove('hidden')
            content.classList.add('flex')
        } else {
            clickControl()

            overlay.classList.remove('flex')
            overlay.classList.add('hidden')

            container.classList.remove('rounded-b-none')

            content.classList.remove('flex')
            content.classList.add('hidden')

            openCloseMenu.blur() // Remove focus on button
        }
    }

    return (
        <>
            <span id='menu-overlay' onClick={handleMenu} className='w-screen h-screen bg-[#0000004d] backdrop-blur-[3px] fixed top-0 left-0 hidden z-40' />

            <div id='menu-container' className='w-fit border-2 border-zinnia flex items-center sm:hidden md:flex lg:hidden rounded-md relative selection:bg-clover-green selection:text-white transition-all z-50'>
                <button id='open-close-menu' onClick={handleMenu} title='Botão abrir/fechar menu de links de navegação' className='w-12 h-[2.33rem] bg-[url("/assets/icons/menu.svg")] bg-no-repeat bg-center bg-auto border-r-2 border-zinnia flex items-center justify-center focus:rounded-tl-[0.063rem] hover:bg-zinnia focus:bg-zinnia filter-zinnia hover:filter-none focus:filter-none transition-all' />

                <nav id='menu-content' className='w-[calc(100%_+_4px)] hidden absolute top-[2.45rem] -left-[2px] overflow-hidden z-[60]'>
                    <ul className='w-full flex flex-col'>
                        { headerLinks.map((menuRouter, index) => {
                            const activeRouter_container = index === headerLinks.length -1 ?
                                'border-b-2 rounded-b-md pb-2' // Last
                                :
                                index === 0 ?
                                    'pt-2' // First
                                    :
                                    '' // Rest
                            return (
                                <li id={`li-a-${menuRouter.name}`} key={`${index}-popover`} className={`bg-[#001116] hover:bg-dark-cyan text-zinnia/75 border-x-2 border-zinnia ${activeRouter_container} flex`}>
                                    <Link id={`a-${menuRouter.name}`} href={menuRouter.href} onClick={handleMenu} className='w-full text-center text-xl text-nowrap py-1'>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <Link
                    href='#contact'
                    title='Ver contatos'
                    className='w-24 h-[2.33rem] font-medium text-[1.33rem] leading-tight text-zinnia flex-center transition-all hover:bg-zinnia hover:text-dark-night'
                >
                    Contato
                </Link>
            </div>
        </>
    )
}