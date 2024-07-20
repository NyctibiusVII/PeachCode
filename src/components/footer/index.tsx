import {
    address,
    email,
    phone,
    instagramUrl,
    linkedinUrl,
    whatsappUrl
} from '@PeachCodeData'

import { useHeaderLinks } from '@hooks/useHeaderLinks'
import { Pacifico } from '@app/fonts'

import Link from 'next/link'

export const Footer = () => {
    const headerLinks = useHeaderLinks

    return (
        <footer>
            <div className='content py-12 sm:py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-y-16'>
                <div className='w-fit mx-auto lg:mx-0 flex flex-col gap-8'>
                    <div className='w-full flex-center sm:justify-start md:justify-center lg:justify-start gap-1 select-none pointer-events-none'>
                        <span className='w-5 h-5 bg-[url("/assets/icons/logo/peach-solid.svg")] bg-no-repeat bg-center bg-cover' />
                        <p className={`${Pacifico.className} text-xl`}>PeachCode</p>
                    </div>

                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/phone.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Telefone</p>
                                <p>{phone}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/email.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Email</p>
                                <p>{email}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/map-pointer.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Endereço</p>
                                <p>{address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-fit h-fit mx-auto flex flex-col gap-8'>
                    <p className='w-full text-center sm:text-start md:text-center lg:text-start text-lg lg:text-xl'>Links</p>

                    <nav className='w-full'>
                        <ul className='flex flex-col items-center sm:items-start md:items-center lg:items-start gap-2'>
                            { headerLinks.map((menuRouter, index) =>
                                <li key={index}>
                                    <Link href={menuRouter.href} className='text-glacier-white/80 text-sm text-nowrap hover:underline underline-offset-4'>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>

                <div className='h-fit my-auto flex-center flex-col gap-4 sm:col-span-2 md:col-span-1'>
                    <div id='contact' className='flex gap-2'>
                        <Link href={whatsappUrl} title='Entrar em contato via Whatsapp' className='bg-[url("/assets/icons/social/whatsapp.svg")] social-link-button' />
                        <Link href={linkedinUrl} title='Ir para Linkedin da PeachCode' className='bg-[url("/assets/icons/social/linkedin.svg")] social-link-button' />
                        <Link href={instagramUrl} title='Ir para Instagram da PeachCode' className='bg-[url("/assets/icons/social/instagram.svg")] social-link-button' />
                    </div>

                    <small className='w-full text-center text-sm'>© Copyright Peach Code | Todos os direitos reservados.</small>
                </div>
            </div>
        </footer>
    )
}