import { Box, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface DynamicImageProps {
    src: string
    hoverSrc: string
}

export function DynamicImage(props: DynamicImageProps) {
    const { hovered, ref } = useHover();

    return (
        <Box ref={ref}>
            { hovered ? <Image width="100%" src={props.src} /> : <Image width="100%" src={props.hoverSrc} /> }
        </Box>
    );
}