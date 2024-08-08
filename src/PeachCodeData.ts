const address = 'Brasil, São Paulo | SP'
const email = 'contato.peachcode@gmail.com' // contato@peachcode.com.br
const phone = '+55 (11) 9 6600-4795' // David Pantaleão

const rootUrl = 'https://peach-code-rouge.vercel.app' // peach-code(.dev; .tech; .app; .com; .com.br;)
const linkedinUrl = 'https://www.linkedin.com/company/peach-code'
const instagramUrl = 'https://www.instagram.com/peach-code'
const whatsappUrl = 'https://wa.me/+' + phone.replace(/\D/g, '')

const appRoutesAbsolutePath = [
    '/#home',
    '/#services',
    '/#projects',
    '/#about-us',
    '/#mvv-company',
]

export {
    rootUrl,
    linkedinUrl,
    instagramUrl,
    whatsappUrl,
    address,
    email,
    phone,
    appRoutesAbsolutePath
}