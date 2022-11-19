import { Text, Image, createStyles, Grid, Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

const useStyles = createStyles((theme) => ({

}));

export function AboutMe() {
    const { classes, cx } = useStyles();
    const { t } = useTranslation(); //TODO to samo na innych stronach + wykorzystanie slownika jak ponizej - {t("aboutMeTitle")}
    // TODO przyklad responsywnosci ponizej - span={6} zamieniony na lg={6} md={12} (na srednim ekranie zajmie caly wiersz, na duzym pol)
    // pobawic sie szerokoscia na innych stronach i dopasowac pod telefon wedle uznania (F12 w przegladarce i kliknac w ikone telefonu w lewym gornym rogu)
    return (
        <Grid>
            <Grid.Col lg={6} md={12}>
                <Center sx={{height: "100%"}}>
                    <Image
                        width="70%"
                        radius="md"
                        src="images/AboutMe/foto2.jpg"
                        alt="me"
                    />
                </Center>
            </Grid.Col>
            <Grid.Col lg={6} md={12}>
                <Stack justify="center" sx={{height: "100%"}}>
                    <Text align="justify" size="xl" weight="bold">
                    {t("aboutMeTitle")} 
                    </Text>
                    <Text align="justify" style={{ whiteSpace: "pre-line" }}>
                    {t("aboutMeDescription")}
                    </Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}