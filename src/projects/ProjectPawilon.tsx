import { Box, Image, createStyles, Grid, Skeleton, Text, Center, Title, } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconCaretLeft, IconCaretRight } from "@tabler/icons";
import { MainImageTitle } from "../common/MainImageTitle";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const child = <Skeleton height={400} animate={false} />;
const useStyles = createStyles((theme) => ({

}));

export function ProjectPawilon() {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();

    return (
        <Box> 
            <Grid>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col xs={12}>
                    <MainImageTitle title={t("projectPawilonTitle1")} description1={t("projectPawilonTitle2")}
                    subtitle="" image="images/projects/pawilon/vizMain.jpg" 
                    description2={t("projectPawilonTitle3")}></MainImageTitle>
                </Grid.Col>   
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={12}> 
                    <Text align="justify">
                        {t("projectPawilonDescription1")}
                    </Text>
                </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={6}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        slideGap={50}
                        loop
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
                                src="images/projects/pawilon/analizaFunkcji.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaKomunikacji.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaZieleni.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={6}>
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
                                src="images/projects/pawilon/analizaStratygraficzna.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={9}>
                    <Center>
                        <Image
                                    width="100%"
                                    radius="md"
                                    src="images/projects/pawilon/wytyczneProjektowe.jpg"
                                    alt="me"/>
                        </Center>
                    </Grid.Col>
                <Grid.Col xs={3}>
                    <Image
                                width="91%"
                                radius="md"
                                src="images/projects/pawilon/zdjecia.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/zlotuPtaka.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/zagospodarowanie.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizFront.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={4}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        loop
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
                                src="images/projects/pawilon/rzutParteru.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/rzutPiwnicy.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col xs={4}> 
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/aksoSchemat.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/opisRzuty.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojAA.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojBB.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizInterior1.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizInterior2.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={12}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/elewacja.jpg"
                                alt="me"/>
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
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_1.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_2.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_3.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_4.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_5.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_6.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    )
}