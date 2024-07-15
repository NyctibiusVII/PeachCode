'use client'

import { PopoverMenu } from './popover-menu'

import { useHeaderLinks } from '@/hooks/useHeaderLinks'
import { Pacifico } from '@app/fonts'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
    const router = usePathname()
    const headerLinks = useHeaderLinks

    const handleSearchBar = () => {
        const formContainer = document.getElementById('search-container') as HTMLFormElement
        const searchBar = document.getElementById('search-bar') as HTMLInputElement
        const openCloseSearch = document.getElementById('open-close-search') as HTMLButtonElement
        const searchButton = document.getElementById('search-button') as HTMLButtonElement

        const addStretchAnimate = () => {
            formContainer.classList.add('stretch-box-animate')
            setTimeout(() => {
                formContainer.classList.remove('w-10')
                formContainer.classList.add('w-[calc(10rem_+_1.5rem_+_2.25rem)]')

                formContainer.classList.remove('stretch-box-animate')
            }, 500)
        }
        const removeStretchAnimate = () => {
            formContainer.classList.add('tighten-box-animate')
            setTimeout(() => {
                formContainer.classList.remove('w-[calc(10rem_+_1.5rem_+_2.25rem)]')
                formContainer.classList.add('w-10')

                formContainer.classList.remove('tighten-box-animate')
            }, 500)
        }

        if (searchBar.classList.contains('hidden')) {
            formContainer.classList.remove('rounded-full')
            formContainer.classList.add('rounded-md')

            searchBar.classList.remove('hidden')
            searchBar.classList.add('inline-block')
            searchButton.classList.remove('hidden')
            searchButton.classList.add('inline-block')

            formContainer.classList.remove('bg-transparent')
            formContainer.classList.add('bg-dark-night')

            openCloseSearch.classList.remove('w-9')
            openCloseSearch.classList.add('w-6')
            openCloseSearch.classList.remove('bg-zinnia')
            openCloseSearch.classList.add('bg-azure')
            openCloseSearch.classList.remove('bg-[url("/assets/icons/search.svg")]')
            openCloseSearch.classList.add('rotate-180')
            openCloseSearch.classList.add('bg-[url("/assets/icons/chevron.svg")]')

            addStretchAnimate()
            searchBar.focus() // Add focus on input
        } else {
            removeStretchAnimate()

            setTimeout(() => {
                formContainer.classList.remove('rounded-md')
                formContainer.classList.add('rounded-full')

                searchBar.classList.remove('inline-block')
                searchBar.classList.add('hidden')
                searchButton.classList.remove('inline-block')
                searchButton.classList.add('hidden')

                openCloseSearch.classList.remove('w-6')
                openCloseSearch.classList.add('w-9')
                openCloseSearch.classList.remove('bg-azure')
                openCloseSearch.classList.add('bg-zinnia')
                openCloseSearch.classList.remove('bg-[url("/assets/icons/chevron.svg")]')
                openCloseSearch.classList.remove('rotate-180')
                openCloseSearch.classList.add('bg-[url("/assets/icons/search.svg")]')
                openCloseSearch.blur() // Remove focus on button

                formContainer.classList.remove('bg-dark-night')
                formContainer.classList.add('bg-transparent')
            }, 500)
        }
    }

    return (
        <header>
            <div className='flex-center gap-2 select-none pointer-events-none'>
                <span className='w-6 h-6 bg-[url("favicon.ico")] bg-no-repeat bg-center bg-cover hidden sm:inline-block' />
                <p className={`${Pacifico.className} text-zinnia text-2xl sm:hidden md:inline-block`}>
                    PeachCode
                </p>
            </div>

            <PopoverMenu routerPath={router} headerLinks={headerLinks} />

            <nav className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                    { headerLinks.map((menuRouter, index) => {
                        const activeRouter = menuRouter.href === router ? 'text-zinnia underline' : 'glacier-white hover:underline'
                        return (
                            <li key={index}>
                                <Link href={menuRouter.href} className={`${activeRouter} text-lg lg:text-xl text-nowrap underline-offset-4`}>
                                    {menuRouter.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <form id='search-container' className='w-10 h-10 min-w-10 max-w-[calc(10rem_+_1.5rem_+_2.25rem)] bg-transparent border-2 border-zinnia hidden sm:flex md:hidden lg:flex justify-end rounded-full overflow-hidden'>
                <input
                    id='search-bar'
                    name='search'
                    type='search'
                    className='w-40 h-9 bg-dark-night text-white/50 placeholder:text-white/20 px-2 hidden'
                    placeholder='Pesquisar'
                    pattern='.*\S.*'
                    required
                />

                <button
                    id='open-close-search'
                    onClick={handleSearchBar}
                    title='Botão abrir/fechar barra de pesquisa'
                    type='button'
                    className='w-9 h-9 bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:bg-transparent focus:bg-transparent hover:filter-zinnia focus:filter-zinnia'
                />
                <button
                    id='search-button'
                    title='Pesquisar'
                    type='submit'
                    className='w-9 h-w-9 bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:brightness-125 hidden'
                />
            </form>
        </header>
    )
}