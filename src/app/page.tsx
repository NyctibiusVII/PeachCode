import { MarkText } from '@components/mark-text'

import {
    processText,
    projectsDataList
} from '@utils'
import { Pacifico } from './fonts'
import { homeMetadata } from '@PeachCodeSEO'

import GenericImage1 from '@../public/assets/images/generic-image-1.png'
import GenericImage2 from '@../public/assets/images/generic-image-2.png'
import GenericImage3 from '@../public/assets/images/generic-image-3.png'

import Image from 'next/image'
import Link from 'next/link'

export const metadata = homeMetadata

export default function Home() {
    return (
        <main>
            <div className='-z-10'>
                <div className='content sm:py-14 lg:py-20 lg:mb-6 relative bg-[url("/assets/icons/logo/peach-colored.svg")] bg-no-repeat bg-center bg-[length:30%] sm:bg-[length:25%] lg:bg-[length:23%] italic font-extrabold text-white text-sm md:text-lg lg:text-xl select-none'>
                    <h1 className='sr-only'>Peach Code! Seu site, nossa criação!</h1>

                    <p className='sm:pl-20 md:pl-2 xl:pl-20 2xl:pl-36'>SEU SITE...</p>
                    <p className={`${Pacifico.className} text-center text-7xl md:text-8xl lg:text-9xl mix-blend-screen bg-gradient-to-r from-swift-red via-zinnia to-paw-paw via-50% bg-clip-text text-transparent p-4 xs:py-8 sm:py-10 lg:py-12`}>Peach Code</p>
                    <p className='sm:pr-20 md:pr-2 xl:pr-20 2xl:pr-36 text-end'>...NOSSA CRIAÇÃO</p>

                    <svg className='w-9 h-9 hidden sm:inline md:hidden lg:inline absolute inset-x-0 mx-auto bottom-0 animate-[float_3s_ease-in-out_infinite]' xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' fill='white'>
                        <path d='M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z' />
                        <path d='M11 6h2v6h-2z' />
                    </svg>
                </div>
            </div>

            <section id='home' className='bg-[linear-gradient(175deg,var(--tw-gradient-stops))] from-50% via-50% from-dark-cyan via-paw-paw to-zinnia'>
                <div className='content py-16 flex flex-col gap-4 lg:gap-8'>
                    <Heading2Description
                        title='O que nós fazemos'
                        description='A Peach Code é uma renomada empresa de consultoria em tecnologia de informação, especializada em proporcionar soluções inovadoras e eficientes para as necessidades tecnológicas atuais. Com um histórico sólido e uma equipe de profissionais altamente qualificados, estamos comprometidos em elevar os padrões da indústria por meio de nossos serviços de desenvolvimento.'
                    />

                    <div className='w-full h-fit flex flex-col gap-4 items-center sm:flex-row md:flex-col lg:flex-row'>
                        <div className='w-fit h-fit bg-gradient-to-tl from-transparent from-60% to-paw-paw/50 p-1 rounded-2xl md:rounded-[20px] flex items-center'>
                            <div className='sm:max-w-[25rem] md:max-w-full lg:max-w-[33rem] xl:max-w-[39rem] 2xl:max-w-[50rem] bg-dark-cyan p-6 flex flex-col gap-2 md:gap-4 text-glacier-white/80 leading-5 md:text-xl md:leading-6 rounded-xl md:rounded-2xl'>
                                <h3 className='text-glacier-white text-xl md:text-2xl'>Porque escolher a Peach Code?</h3>
                                <p className='md:-mt-3'>Possuímos TRÊS pilares principais para o nosso trabalho:</p>
                                <ul>
                                    <li className='my-0.5'><MarkText color='light-orange'>Foco no Cliente:</MarkText> Colocamos nossos clientes em primeiro lugar, adaptando nossos serviços para atender às suas necessidades exclusivas e objetivos de negócios.</li>
                                    <li className='my-0.5'><MarkText color='light-orange'>Inovação Constante:</MarkText> Mantemo-nos atualizados com as últimas tendências tecnológicas e metodologias de desenvolvimento, garantindo soluções inovadoras e relevantes.</li>
                                    <li className='my-0.5'><MarkText color='light-orange'>Parceria Estratégica:</MarkText> Acreditamos em estabelecer parcerias de longo prazo, auxiliando nossos clientes em sua jornada tecnológica em evolução.</li>
                                </ul>
                                <p className='italic text-glacier-white/50 text-sm lg:text-base'>Acreditamos que a tecnologia é a chave para transformar desafios em oportunidades.</p>
                            </div>
                        </div>

                        <Image
                            className='w-40 h-auto sm:w-44 md:w-48 lg:w-60 xl:w-72 mx-auto'
                            src='/favicon.svg'
                            width={16}
                            height={16}
                            priority={false}
                            alt='Ícone da PeachCode company.'
                        />
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 sm:gap-2 xl:gap-8 2xl:gap-12'>
                        <div className='bg-dark-cyan p-2 xs:p-4 rounded-tl-xl sm:rounded-xl md:rounded-2xl'>
                            <div className='flex items-center sm:gap-1 lg:gap-2'>
                                <span className='w-8 h-8 bg-[url("/assets/icons/code-alt.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-2xl lg:text-3xl'>14161</h3>
                            </div>

                            <p className='leading-5 sm:text-lg lg:text-xl mt-2 lg:mt-4'>Nossas horas de desenvolvimento</p>
                        </div>
                        <div className='bg-dark-cyan border-l-2 border-dark-night sm:border-none p-2 xs:p-4 rounded-tr-xl sm:rounded-xl md:rounded-2xl'>
                            <div className='flex items-center sm:gap-1 lg:gap-2'>
                                <span className='w-8 h-8 bg-[url("/assets/icons/smile.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-2xl lg:text-3xl'>25</h3>
                            </div>

                            <p className='leading-5 sm:text-lg lg:text-xl mt-2 lg:mt-4'>Clientes muito satisfeitos e felizes</p>
                        </div>
                        <div className='bg-dark-cyan border-t-2 border-dark-night sm:border-none p-2 xs:p-4 rounded-bl-xl sm:rounded-xl md:rounded-2xl'>
                            <div className='flex items-center sm:gap-1 lg:gap-2'>
                                <span className='w-8 h-8 bg-[url("/assets/icons/spreadsheet.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-2xl lg:text-3xl'>64</h3>
                            </div>

                            <p className='leading-5 sm:text-lg lg:text-xl mt-2 lg:mt-4'>Projetos concluídos com sucesso</p>
                        </div>
                        <div className='bg-dark-cyan border-t-2 border-l-2 border-dark-night sm:border-none p-2 xs:p-4 rounded-br-xl sm:rounded-xl md:rounded-2xl'>
                            <div className='flex items-center sm:gap-1 lg:gap-2'>
                                <span className='w-8 h-8 bg-[url("/assets/icons/group.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-2xl lg:text-3xl'>12</h3>
                            </div>

                            <p className='leading-5 sm:text-lg lg:text-xl mt-2 lg:mt-4'>Membros engajados e em atividade</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='services'>
                <div className='content py-16 flex flex-col gap-4 lg:gap-8'>
                    <Heading2Description
                        title='Como dar ^upgrade^ no seu negócio'
                        description='Impulsione seu negócio com nossos serviços tecnológicos! Da criação de software à consultoria estratégica, ajudamos você a alcançar o sucesso. Descubra a inovação que transforma o seu negócio.'
                    />

                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:gap-4 lg:gap-12 xl:gap-16'>
                        <div className='w-full md:max-w-[550px] lg:max-w-full md:mx-auto lg:mx-0 border-2 border-paw-paw text-paw-paw p-4 rounded-2xl'>
                            <div className='flex items-center gap-1 lg:gap-2'>
                                <span className='w-6 h-6 bg-[url("/assets/icons/desktop.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-lg sm:text-xl lg:text-2xl'>Desenvolvimento Web</h3>
                            </div>

                            <p className='sm:text-lg lg:text-xl mt-2 lg:mt-4'>Aplicações web personalizadas para potencializar sua marca e seus resultados online.</p>
                        </div>

                        <div className='w-full md:max-w-[550px] lg:max-w-full md:mx-auto lg:mx-0 border-2 border-paw-paw text-paw-paw p-4 rounded-2xl'>
                            <div className='flex items-center gap-1 lg:gap-2'>
                                <span className='w-6 h-6 bg-[url("/assets/icons/bulb.svg")] bg-no-repeat bg-center bg-[length:70%] sm:bg-[length:80%] lg:bg-[length:100%]' />

                                <h3 className='text-lg sm:text-xl lg:text-2xl'>Soluções Inovadoras</h3>
                            </div>

                            <p className='sm:text-lg lg:text-xl mt-2 lg:mt-4'>Inovação em soluções que transformam seu negócio e impulsionam o sucesso.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='projects' className='bg-dark-night'>
                <div className='content py-16 flex flex-col gap-4 lg:gap-8'>
                    <Heading2Description
                        title='Projetos Concluídos'
                        description='Explore nossa seleção de Projetos Concluídos na Peach Code! Aqui, demonstramos nossa dedicação à inovação tecnológica. Cada projeto é uma história de sucesso que reflete nosso compromisso com o progresso. Descubra como transformamos ideias em realidade.'
                    />

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-y-9 md:gap-y-6 lg:gap-y-12 xl:gap-y-8'>
                        { projectsDataList.map((project, index) =>
                            <Link
                                key={index}
                                href={`/projects#${project.title.toLocaleLowerCase()}`}
                                title={`Ver o projeto ${project.title}`}
                            >
                                <Image
                                    key={index}
                                    className='w-[288px] h-[140px] md:w-80 md:h-40 hover:scale-105 mx-auto border-2 border-azure rounded-2xl transition-transform'
                                    src={project.images[0]}
                                    width={320}
                                    height={160}
                                    placeholder='blur'
                                    priority={false}
                                    alt={project.genericAlt}
                                />
                            </Link>
                        ) }

                        <Link href='/projects' className='w-[288px] h-[140px] md:w-80 md:h-40 bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-[top_left_35%] hover:shadow-[inset_0_0_3rem_0_rgb(0_25_32_/_20%)] mx-auto flex-center text-[#415B64]  md:text-lg lg:text-xl hover:underline underline-offset-4 border-2 border-azure rounded-2xl overflow-hidden transition-all'>
                            <p className='bg-dark-night px-4 py-1 border-2 border-azure rounded-lg'>Ver mais projetos</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section id='about-us' className='bg-dark-night'>
                <div className='content py-16 flex flex-col gap-4 lg:gap-8'>
                    <Heading2Description
                        title='Sobre Nós'
                        description='Somos uma equipe apaixonada e dedicada de profissionais de tecnologia, impulsionados pela visão de transformar o cenário empresarial por meio de soluções inovadoras e inteligentes. Como consultoria em tecnologia de informação, nossa missão é fornecer resultados excepcionais, aproveitando ao máximo nosso conhecimento especializado em desenvolvimento.'
                    />

                    <div className='w-full h-fit flex flex-col gap-4 items-center sm:flex-row md:flex-col lg:flex-row'>
                        <Image
                            className='w-40 h-auto sm:w-44 md:w-48 lg:w-60 xl:w-72 mx-auto'
                            src='/assets/icons/logo/peach-alter.svg'
                            width={16}
                            height={16}
                            priority={false}
                            alt='Ícone da PeachCode company.'
                        />

                        <div className='w-fit h-fit bg-gradient-to-br from-transparent from-60% to-zinnia/50 p-1 rounded-2xl md:rounded-[20px] flex items-center'>
                            <div className='sm:max-w-[25rem] md:max-w-full lg:max-w-[33rem] xl:max-w-[39rem] 2xl:max-w-[50rem] bg-dark-night p-6 flex flex-col gap-2 md:gap-4 text-glacier-white/80 leading-5 md:text-xl md:leading-6 rounded-xl md:rounded-2xl'>
                                <h3 className='text-glacier-white text-xl md:text-2xl'>Nossa abordagem para criação de soluções</h3>
                                <p className='md:-mt-3'>Acreditamos que cada desafio tecnológico oferece uma oportunidade única de crescimento, envolvendo uma combinação de:</p>
                                <ul>
                                    <li className='my-0.5'><MarkText>Criatividade.</MarkText></li>
                                    <li className='my-0.5'><MarkText>Experiência técnica.</MarkText></li>
                                    <li className='my-0.5'><MarkText>Compreensão profunda</MarkText> da demanda de nossos clientes e confiança para suas necessidades tecnológicas.</li>
                                </ul>
                                <p>Trabalhamos lado a lado com as empresas para identificar soluções personalizadas que abordem suas necessidades específicas e ofereçam resultados tangíveis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='mvv-company'>
                <div className='content py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-8 md:gap-y-16 xl:gap-8'>
                    <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                        <Image
                            className='w-full h-auto'
                            src={GenericImage1}
                            width={333}
                            height={222}
                            placeholder='blur'
                            priority={false}
                            alt='Imagem ilustrativa para descrever nossa Missão como empresa.'
                        />

                        <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                            <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/book-reader.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                            <h3 className='text-xl xl:text-2xl'>Missão</h3>
                            <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center sm:text-start md:text-center lg:text-start'>Capacitar nossos clientes a prosperar em um mundo cada vez mais digital. Buscamos constantemente inovar, explorar as últimas tendências tecnológicas e entregar resultados excepcionais que impulsionem o crescimento e a eficiência. Acreditamos que o sucesso de nossos clientes é o nosso sucesso.</p>
                        </div>
                    </div>

                    <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                        <Image
                            className='w-full h-auto'
                            src={GenericImage2}
                            width={333}
                            height={222}
                            placeholder='blur'
                            priority={false}
                            alt='Imagem ilustrativa para descrever nossa Visão como empresa.'
                        />

                        <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                            <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/bullseye.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                            <h3 className='text-xl xl:text-2xl'>Visão</h3>
                            <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center sm:text-end md:text-center lg:text-end xl:text-center'>Estamos comprometidos em ser mais do que apenas uma consultoria em tecnologia; somos parceiros que conduzem o sucesso de nossos clientes por meio da excelência tecnológica.</p>
                        </div>
                    </div>

                    <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                        <Image
                            className='w-full h-auto'
                            src={GenericImage3}
                            width={333}
                            height={222}
                            placeholder='blur'
                            priority={false}
                            alt='Imagem ilustrativa para descrever nossa Valores como empresa.'
                        />

                        <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                            <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/landscape.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                            <h3 className='text-xl xl:text-2xl'>Valores</h3>
                            <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center xl:text-end'>Buscamos inovação e colaboração para impulsionar soluções sólidas, comprometendo-nos a superar expectativas e alcançar a excelência em todos os aspectos, proporcionando resultados de qualidade superior aos nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

const Heading2Description = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='flex flex-col items-center gap-2 lg:gap-4'>
            <h2 className='uppercase text-center text-2xl md:text-3xl lg:text-4xl' dangerouslySetInnerHTML={{ __html: processText({ text: title }) }} />
            <p className='text-glacier-white/80 text-center leading-5 md:text-xl md:leading-6' dangerouslySetInnerHTML={{ __html: processText({ text: description }) }} />
        </div>
    )
}