import { Text, Image, createStyles, Grid, Center, Stack, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { DynamicImage } from "../common/DynamicImage";
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
                <Center sx={{height: "100%", width: "70%"}}>
                <DynamicImage src="images/AboutMe/obrazek.jpg" hoverSrc="images/AboutMe/foto2.jpg" hoverDescription=""/>
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
            <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
        </Grid>
    )
}