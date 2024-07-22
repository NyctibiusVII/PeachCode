type MarkTextColorsType = 'transparent' | 'current' | 'white' | 'light-green' | 'green' | 'yellow' | 'light-orange' | 'orange' | 'light-red' | 'red' | 'black'
interface MarkTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: MarkTextColorsType
    underline?: boolean
}

/**
 * MarkText - Component to highlight text with a specific color and underline it.
 *
 * @param {React.ReactNode} children
 * @param {string} color
 * @param {boolean} underline
 * @returns {JSX.Element}
 * @example
 * <MarkText color='orange' underline>Hello World</MarkText>
 *
 * return <span className='text-orange underline'>Hello World</span>
 **/
export const MarkText = ({ color='orange', underline=false, ...spanProps }: MarkTextProps): JSX.Element => {
    const { className, ...props } = spanProps

    const colorClass: Record<MarkTextColorsType, string> = {
        'transparent': 'text-transparent',
        'current': 'text-current',
        'white': 'text-white',
        'light-green': 'text-creepy-green',
        'green': 'text-clover-green',
        'yellow': 'text-verdure-yellow',
        'light-orange': 'text-paw-paw',
        'orange': 'text-zinnia',
        'light-red': 'text-peach',
        'red': 'text-swift-red',
        'black': 'text-black'
    }

    const underlineClass = underline ? 'underline' : ''

    let classNameList = ''
    if (className) classNameList = [colorClass[color], underlineClass, className].join(' ')
    else classNameList = [colorClass[color], underlineClass].join(' ')

    return <span className={classNameList} {...props} />
}