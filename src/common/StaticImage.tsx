import { Box, Image, Loader } from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface StaticImageProps {
    src: string
    width?: string
    height?: string | number
}

// TODO zmianic wszystkie wystapienia Image na StaticImage (obrazek zwykly) albo DynamicImage (obrazek z funkcja najechania i wyswietlenia innego)
// width nie trzeba podawac jesli ma byc 100% (to jest wartosc domyslna)
// przyklady obydwu sa w DolinaPradnika
export function StaticImage(props: StaticImageProps) {
    return (
        <Image width={ props.width ? props.width : "100%" } height={props.height} src={props.src} withPlaceholder placeholder={<Loader/>}/>
    );
}