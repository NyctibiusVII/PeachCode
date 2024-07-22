import { Header } from '@components/header'
import { Footer } from '@components/footer'

import GenericImage1 from '@../public/assets/images/generic-image-1.png'
import GenericImage2 from '@../public/assets/images/generic-image-2.png'
import GenericImage3 from '@../public/assets/images/generic-image-3.png'

import Image from 'next/image'
import { MarkText } from '@components/mark-text'
import { processText, projectImages } from '@utils'

export default function Home() {
    return (
        <>
            <Header />

            <main>
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
                            { projectImages.map((project, index) =>
                                <Image
                                    key={index}
                                    className='w-[288px] h-[140px] md:w-80 md:h-40 hover:scale-105 sm:hover:scale-110 mx-auto border-2 border-azure rounded-2xl transition-transform'
                                    src={project.src}
                                    width={320}
                                    height={160}
                                    placeholder='blur'
                                    priority={false}
                                    alt={project.alt}
                                />
                            ) }

                            <span className='hidden sm:block md:hidden lg:block w-[288px] h-[140px] md:w-80 md:h-40 bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-[top_left_35%] mx-auto border-2 border-azure rounded-2xl transition-transform' />
                        </div>
                    </div>
                </section>

                <section id='about-us' className='bg-dark-night'>
                    <div className='content py-16 flex flex-col gap-4 lg:gap-8'>
                        <Heading2Description
                            title='Sobre Nós'
                            description='Somos uma equipe apaixonada e dedicada de profissionais de tecnologia, impulsionados pela visão de transformar o cenário empresarial por meio de soluções inovadoras e inteligentes. Como consultoria em tecnologia de informação, nossa missão é fornecer resultados excepcionais, aproveitando ao máximo nosso conhecimento especializado em desenvolvimento.'
                        />

                        <div className='w-fit h-fit mx-auto bg-gradient-to-br from-transparent from-60% to-zinnia/50 p-1 rounded-2xl flex items-center'>
                            <div className='bg-dark-night p-6 rounded-xl flex flex-col gap-4 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center sm:flex-row md:flex-col lg:flex-row'>
                                <Image
                                    className='w-40 h-auto sm:w-32 md:w-48 lg:w-60 xl:w-72'
                                    src='/assets/icons/logo/peach-alter.svg'
                                    width={16}
                                    height={16}
                                    priority={false}
                                    alt='Ícone da PeachCode company.'
                                />

                                <div className='sm:max-w-96 md:max-w-full lg:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[40rem] flex flex-col gap-2 md:gap-4 text-glacier-white/80 leading-5 md:text-xl md:leading-6'>
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

            <Footer />
        </>
    )
}

const Heading2Description = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='flex flex-col items-center gap-2 lg:gap-4'>
            <h2 className='uppercase text-center text-2xl md:text-3xl lg:text-4xl' dangerouslySetInnerHTML={{ __html: processText(title) }} />
            <p className='text-glacier-white/80 text-center leading-5 md:text-xl md:leading-6' dangerouslySetInnerHTML={{ __html: processText(description) }} />
        </div>
    )
}