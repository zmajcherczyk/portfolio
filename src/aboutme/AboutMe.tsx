import { Text, Image, createStyles, Grid, Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { StaticImage } from "../common/StaticImage";

const useStyles = createStyles((theme) => ({

}));

export function AboutMe() {
    const { classes, cx } = useStyles();
    const { t } = useTranslation(); //TODO to samo na innych stronach + wykorzystanie slownika jak ponizej - {t("aboutMeTitle")} - tlumaczenia sa w public/locales/...
    // pamietac o style={{ whiteSpace: "pre-line" }} dla dlugich tekstow z lamaniem linii (\n)
    // TODO przyklad responsywnosci ponizej - span={6} zamieniony na lg={6} md={12} (na srednim ekranie zajmie caly wiersz, na duzym pol)
    // pobawic sie szerokoscia na innych stronach i dopasowac pod telefon wedle uznania (F12 w przegladarce i kliknac w ikone telefonu w lewym gornym rogu)
    return (
        <Grid>
            <Grid.Col lg={6} md={12}>
                <Center sx={{height: "100%"}}>
                    <StaticImage width="70%" src="images/AboutMe/foto2.jpg"/>
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