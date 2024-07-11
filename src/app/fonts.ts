import localFont from 'next/font/local'

const NotoSans = localFont({ src: '../../public/fonts/NotoSans-VariableFont_wdth,wght.ttf' })
const Pacifico = localFont({ src: [
    {
        path: '../../public/fonts/Pacifico-Regular.ttf',
        weight: '400',
        style: 'normal'
    }
]})

export {
    NotoSans,
    Pacifico
}