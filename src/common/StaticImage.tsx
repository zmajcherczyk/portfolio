import { Box, Image, Loader, Skeleton } from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface StaticImageProps {
    src: string
    width?: string
    height?: string | number
}

// TODO zmianic wszystkie wystapienia Image na StaticImage (obrazek zwykly) albo DynamicImage (obrazek z funkcja najechania i wyswietlenia innego)
// width nie trzeba podawac jesli ma byc 100% (to jest wartosc domyslna)
// TODO to co sie wyswietla jak obrazek sie jeszcze laduje (widec w about me i glownych karuzelach) mozna zmienic w polu placeholder (obecnie Loader)
export function StaticImage(props: StaticImageProps) {
    return (
        <Image width={ props.width ? props.width : "100%" } height={props.height} src={props.src} withPlaceholder placeholder={<Skeleton/>}/>
    );
}