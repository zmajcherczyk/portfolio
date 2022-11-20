import { Box, Stack, Overlay, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { StaticImage } from './StaticImage';

interface DynamicImageProps {
    src: string
    hoverSrc: string
    hoverDescription: string
}

export function DynamicImage(props: DynamicImageProps) {
    const { hovered, ref } = useHover();

    return (
        <Box ref={ref} sx={{ position: 'relative' }}>
            { hovered ? <><DescriptionOverlay description={props.hoverDescription}/><StaticImage src={props.hoverSrc} /></> : <StaticImage src={props.src} /> }
        </Box>
    );
}

interface DescriptionOverlayProps {
    description: string
}

function DescriptionOverlay(props: DescriptionOverlayProps) {
    return (
        <Overlay opacity={1.0} color="rgba(0,0,0,0.0)">
            <Stack justify="flex-end" sx={{ height: "100%", marginLeft: "10px" }}>
                <Text size={30}>{props.description}</Text>
            </Stack>
        </Overlay>
    );
}