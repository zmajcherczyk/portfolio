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
        <Overlay opacity={1.0} color="rgba(0, 0, 0, 0.0)" sx={{padding: "10px"}}>
            <Stack hidden={!props.description} justify="flex-end" sx={{ height: "100%"}}>
                <Box  sx={{background: "rgba(0, 0, 0, 0.3)", width: "50%", padding: "10px"}}>
                    <Text size={14} color="white" weight={700}>{props.description}</Text>
                </Box>
            </Stack>
        </Overlay>
    );
}

function useStyles(): { classes: any; cx: any; } {
    throw new Error('Function not implemented.');
}
