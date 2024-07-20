import type { MenuItensType } from '@types'

import Link from 'next/link'

export const PopoverMenu = ({ routerPath, headerLinks }: { routerPath: string, headerLinks: Array<MenuItensType> }) => {
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
                            const activeRouter_link = menuRouter.href === routerPath ? 'text-dark-night font-medium' : 'text-zinnia'
                            const activeRouter_container = menuRouter.href === routerPath ?
                                index === headerLinks.length -1 ?
                                    'bg-zinnia border-zinnia hover:brightness-90 rounded-b-md' // Last active
                                    :
                                    'bg-zinnia border-zinnia hover:brightness-90' // Active
                                :
                                index === headerLinks.length -1 ?
                                    'bg-dark-cyan/50 border-b-2 border-zinnia hover:bg-dark-night rounded-b-md pb-2' // Last inactive
                                    :
                                    index === 0 ?
                                        'bg-dark-cyan/50 border-zinnia hover:bg-dark-night pt-2' // First inactive
                                        :
                                        'bg-dark-cyan/50 border-zinnia hover:bg-dark-night' // Inactive

                            return (
                                <li key={index} className={`border-x-2 ${activeRouter_container} flex`}>
                                    <Link href={menuRouter.href} className={`w-full ${activeRouter_link} text-center text-xl text-nowrap py-1`}>
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