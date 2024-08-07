import { ProjectsDataType } from '@types'

import ImageAtenas1 from '@../public/assets/images/projects/atenas/img1.png'
import ImageAtenas2 from '@../public/assets/images/projects/atenas/img2.png'
import ImageAtenas3 from '@../public/assets/images/projects/atenas/img3.png'
import LogoImageAtenas from '@../public/assets/images/projects/atenas/logo.png'

import ImageBiocube1 from '@../public/assets/images/projects/biocube/img1.png'
import ImageBiocube2 from '@../public/assets/images/projects/biocube/img2.png'
import ImageBiocube3 from '@../public/assets/images/projects/biocube/img3.png'
import ImageBiocube4 from '@../public/assets/images/projects/biocube/img4.png'
import ImageBiocube5 from '@../public/assets/images/projects/biocube/img5.png'
import ImageBiocube6 from '@../public/assets/images/projects/biocube/img6.png'
import ImageBiocube7 from '@../public/assets/images/projects/biocube/img7.png'
import LogoImageBiocube from '@../public/assets/images/projects/biocube/logo.png'

import ImageBoletim1 from '@../public/assets/images/projects/boletim/img1.png'
import ImageBoletim2 from '@../public/assets/images/projects/boletim/img2.png'
import ImageBoletim3 from '@../public/assets/images/projects/boletim/img3.png'
import ImageBoletim4 from '@../public/assets/images/projects/boletim/img4.png'
import ImageBoletim5 from '@../public/assets/images/projects/boletim/img5.png'
import LogoImageBoletim from '@../public/assets/images/projects/boletim/logo.png'

import ImageFinances1 from '@../public/assets/images/projects/finances/img1.png'
import ImageFinances2 from '@../public/assets/images/projects/finances/img2.png'
import ImageFinances3 from '@../public/assets/images/projects/finances/img3.png'
import ImageFinances4 from '@../public/assets/images/projects/finances/img4.png'
import LogoImageFinances from '@../public/assets/images/projects/finances/logo.png'

import ImageOccurrences1 from '@../public/assets/images/projects/occurrences/img1.png'
import ImageOccurrences2 from '@../public/assets/images/projects/occurrences/img2.png'
import ImageOccurrences3 from '@../public/assets/images/projects/occurrences/img3.png'
import ImageOccurrences4 from '@../public/assets/images/projects/occurrences/img4.png'
import ImageOccurrences5 from '@../public/assets/images/projects/occurrences/img5.png'
import ImageOccurrences6 from '@../public/assets/images/projects/occurrences/img6.png'
import LogoImageOccurrences from '@../public/assets/images/projects/occurrences/logo.png'

/**
 * ProcessText - Function that processes text to highlight words with a specific color and/or underline it based on specific characters surrounding it.
 *
 * @param {string} text
 * @template underline (_)
 * @template italic (|)
 * @template green (&)
 * @template lightOrange (^)
 * @template orange (*)
 * @template red (°)
 * @template lineBreak (\n)
 * @template lineBreak2x (\t)
 *
 * @param {undefined | string} personalizedColor
 * @template text '#fedcba'
 *
 * @returns {JSX.Element}
 * @example
 * <p>Hello *World*</p>
 *
 * return <p>Hello <span style="color: #FD7752; text-wrap: wrap;">World</span></p>
 **/
export const processText = ({ text, personalizedColor='#fedcba' }: { text:string, personalizedColor?: string }) => {
    const processedText = text
    .replace(/_([^_]+)_/g, '<span style="text-decoration: underline; text-wrap: wrap;">$1</span>')
    .replace(/\|([^|]+)\|/g, '<span style="font-style: italic; text-wrap: wrap;">$1</span>')
    .replace(/\&([^&]+)\&/g, '<span style="color: #187238; text-wrap: wrap;">$1</span>')
    .replace(/\^([^^]+)\^/g, '<span style="color: #FBD099; text-wrap: wrap;">$1</span>')
    .replace(/\*([^*]+)\*/g, '<span style="color: #FD7752; text-wrap: wrap;">$1</span>')
    .replace(/\°([^°]+)\°/g, '<span style="color: #C32731; text-wrap: wrap;">$1</span>')
    .replace(/\~([^~]+)\~/g, `<span style="color: ${personalizedColor}; text-wrap: wrap;">$1</span>`)
    .replace(/\n/g, '<br />')
    .replace(/\t/g, '<br /><br />')

    return processedText
}

export const projectsDataList: Array<ProjectsDataType> = [
    {
        title: 'Atenas',
        description: processText({ text: '~Lorem Ipsum~ is simply dummy text of the printing and typesetting industry. ~Lorem Ipsum~ has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ~Lorem Ipsum~ passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ~Lorem Ipsum~.', personalizedColor: '#6746A4' }),
        images: [ImageAtenas1, ImageAtenas2, ImageAtenas3],
        genericAlt: 'Imagem(ns) do projeto Atenas - Ceap, feito pela PeachCode.',
        logo: {
            src: LogoImageAtenas,
            alt: 'Logomarca da (ONG) Centro Educacional Assistencial Profissionalizante (Ceap).',
            width: 132,
            height: 61
        }
    }, {
        title: 'Biocube',
        description: processText({ text: 'O portal da Biocube oferece uma ~visão abrangente da empresa~, apresentando sua ~história~, ~missão~ e ~equipe~. A _loja online_ permite aos clientes adquirir produtos da marca com facilidade. \n Além disso, o portal destaca os ~projetos sociais~ da Biocube com uma página dedicada aos ~atletas patrocinados (cubistas)~. Essa página integra dados da ~WCA~ (World Cube Association) para exibir tabelas detalhadas de resultados e recordes pessoais. Essa integração permite que os visitantes acompanhem o progresso dos atletas e celebrem suas conquistas.', personalizedColor: '#00FF72cc' }),
        images: [ImageBiocube1, ImageBiocube2, ImageBiocube3, ImageBiocube4, ImageBiocube5, ImageBiocube6, ImageBiocube7],
        genericAlt: 'Imagem(ns) do projeto Biocube Blog - Biocube, feito pela PeachCode.',
        logo: {
            src: LogoImageBiocube,
            alt: 'Logomarca da empresa Biocube.',
            width: 172,
            height: 36
        }
    }, {
        title: 'Boletim',
        description: processText({ text: 'Implementamos um ~gerador de boletins escolares~ online que oferece aos usuários uma ~solução fácil~ e ~personalizável~ para criar boletins de alunos. A personalização aprimorada resultou em maior engajamento dos alunos e motivação para os estudos. \n O gerador de boletins escolares serve como uma alternativa valiosa, especialmente quando os principais sistemas estaduais enfrentam congestionamentos. Isso _libera os professores da tarefa demorada de criar boletins manualmente_, permitindo que se concentrem em suas funções principais de ensino. Além disso, o gerador oferece ~eficiência~, ~personalização~ e ~engajamento~, tornando-se uma ferramenta essencial para professores e alunos.', personalizedColor: '#E2E8F0' }),
        images: [ImageBoletim1, ImageBoletim2, ImageBoletim3, ImageBoletim4, ImageBoletim5],
        genericAlt: 'Imagem(ns) do projeto Boletim - GovSP, feito pela PeachCode.',
        logo: {
            src: LogoImageBoletim,
            alt: 'Logomarca do Governo do Estado de São Paulo.',
            width: 648,
            height: 56
        }
    }, {
        title: 'Finances',
        description: processText({ text: 'O Finances é um aplicativo de ~gerenciamento de finanças~ pessoais que ajuda os usuários a controlar suas finanças com facilidade e eficiência. Construído e aprimorado a partir de um projeto existente, o Finances permite que os usuários ~gerenciem~ suas transações financeiras, categorizando-as e marcando-as como pagas ou pendentes. Isso ajuda os usuários a manter um registro preciso de seu fluxo de caixa e ~identificar áreas de melhoria~. Uma ferramenta abrangente com sua ~interface amigável~ e ~recursos poderosos~.', personalizedColor: '#50956D' }),
        images: [ImageFinances1, ImageFinances2, ImageFinances3, ImageFinances4],
        genericAlt: 'Imagem(ns) do projeto Finances - Multiplica Informática, feito pela PeachCode.',
        logo: {
            src: LogoImageFinances,
            alt: 'Logomarca da empresa Multiplica Informática.',
            width: 205,
            height: 57
        }
    }, {
        title: 'Occurrences',
        description: processText({ text: 'Implementamos um formulário para ~registro~, ~gerenciamento~ e ~análise de ocorrências de transporte de carga~ para a empresa M. Dias Branco. Esse formulário automatiza o processo de registro e resolução de problemas de remessa, como avarias, pedidos de devolução e entregas ausentes. \n Com a implementação do formulário, a ~M. Dias Branco obteve um aumento de 22% na precisão do registro de ocorrências~, melhorando significativamente a qualidade dos dados coletados. Além disso, a automatização do processo de resolução de problemas resultou em uma maior satisfação do cliente, pois as ocorrências passaram a ser tratadas com mais ~rapidez~ e ~eficiência~.', personalizedColor: '#A6BBFA' }),
        images: [ImageOccurrences1, ImageOccurrences2, ImageOccurrences3, ImageOccurrences4, ImageOccurrences5, ImageOccurrences6],
        genericAlt: 'Imagem(ns) do projeto Occurrences - M. Dias Branco, feito pela PeachCode.',
        logo: {
            src: LogoImageOccurrences,
            alt: 'Logomarca da empresa M. Dias Branco',
            width: 196,
            height: 79
        }
    }
]