import { Box, Image, createStyles, Grid, Skeleton, Text, Center, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconCaretLeft, IconCaretRight } from "@tabler/icons";
import { MainImageTitle } from "../common/MainImageTitle";
import { useTranslation } from "react-i18next";

const child = <Skeleton height={400} animate={false} />;
const useStyles = createStyles((theme) => ({

}));

export function ProjectOsrodekTerapii() {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();

    return (
        <Box> 
            <Grid>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col xs={12}>
                    <MainImageTitle title={t("projectOsrodekTerapiiTitle1")} description1={t("projectOsrodekTerapiiTitle2")} 
                    subtitle={t("projectOsrodekTerapiiTitle3")} image="images/projects/osrodek_terapii/mainViz.jpg" 
                    description2={t("projectOsrodekTerapiiTitle4")}></MainImageTitle>
                </Grid.Col>   
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={12}> 
                    <Text align="justify">
                    {t("projectOsrodekTerapiiDescription1")}
                    </Text>
                </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={5}>
                    <Carousel
                        withIndicators
                        slideSize="80%"
                        slideGap={20}
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/analizaFunkcjonalna.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/analizaHalasu.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/analizaZieleni.jpg"
                                alt="me"/>
                        </Carousel.Slide> 
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={7}>
                    <Center sx={{height: "100%", width: "100%" }}>
                        <Text align="justify">
                        {t("projectAnalysisDescription")}
                        </Text>
                    </Center>
                </Grid.Col> 
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/aksonometria.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zagospodarowanie1000.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={8}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zagospodarowanie500.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/legenda1.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie1.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie2.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie3.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/schematFunkcji.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/schematZieleni.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                        {t("projectOsrodekTerapiiDescription2")}
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                        {t("projectOsrodekTerapiiDescription3")}
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                        {t("projectOsrodekTerapiiDescription4")}
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutPiwnicy.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutParteru.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutPietra.jpg"
                                alt="me"/>
                    </Grid.Col>  
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        slideGap="md"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan01.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan02.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan03.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan04.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan05.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan06.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan07.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan08.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col xs={4}> 
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii//greenhouseViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/frontgardenViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/gardenViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/poolViz.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/sensoryViz.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={12}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/elewacja1.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        slideGap="md"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/przekrojAA.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/przekrojBB.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/przekrojCC.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/przekrojDD.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
                <Grid.Col xs={12}> 
                    <Center>
                        <Title align="justify" size={20}>
                        {t("projectBoardsDescription")}
                        </Title>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "20px"}}></Box></Grid.Col>
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="33.333%"
                        slideGap="md"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="start"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza1.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza2.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza3.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza4.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza5.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza6.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza7.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza8.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    )
}