
import { createStyles, Box, Text } from '@mantine/core';


export const FOOTER_HEIGHT = 30;

const useStyles = createStyles((theme) => ({
    footer: {
        height: FOOTER_HEIGHT
    }
}));

export function Footer() {
    const { classes, cx } = useStyles();

    return (
        <Box className={classes.footer}>
            <Text align="center">© Zuzanna Majcherczyk {new Date().getFullYear()} (Mateusz Czesław Kulpa - tworzenie, projketowanie, testowanie, wdrażanie i implementacja oprogramowania, sieci oraz systemów komputerowych w praktyce i w teorii)</Text>
        </Box>
    );
}