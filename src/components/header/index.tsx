'use client'

import { PopoverMenu } from './popover-menu'
import { useHeaderLinks } from '@/hooks/useHeaderLinks'
import { Pacifico } from '@app/fonts'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
    const router = usePathname()
    const headerLinks = useHeaderLinks

    return (
        <header>
            <div className='content flex justify-between'>
                <div className='w-fit flex-center gap-2 select-none pointer-events-none'>
                    <span className='w-6 h-6 bg-[url("favicon.ico")] bg-no-repeat bg-center bg-cover hidden sm:inline-block' />
                    <p className={`${Pacifico.className} text-zinnia text-2xl sm:hidden md:inline-block`}>PeachCode</p>
                </div>

                <PopoverMenu routerPath={router} headerLinks={headerLinks} />

                <nav className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                    <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                        { headerLinks.map((menuRouter, index) => {
                            const activeRouter = menuRouter.href === router ? 'text-zinnia underline' : 'glacier-white hover:underline'
                            return (
                                <li key={index} className='my-auto'>
                                    <Link href={menuRouter.href} className={`${activeRouter} text-lg lg:text-xl text-nowrap underline-offset-4`}>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )
                        })}
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