import { Grid, Skeleton, Container, Box, Image, Center, Text } from '@mantine/core';
import { DynamicImage } from '../common/DynamicImage';

const child = <Skeleton height={350} animate={false} />;

export function Course() {
    return (
        <Box>
            <Grid>
                <Grid.Col span={12}>
                            <Image
                                src="images/visualisations/course/kurs_certyfikat.jpg"/>
                </Grid.Col>
                <Grid.Col xs={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col xs={3}>
                    <DynamicImage src="images/visualisations/course/kurs_interior.jpg" hoverSrc="images/visualisations/course/kurs_interior_MTL.jpg" hoverDescription=""/>
                    </Grid.Col>
                <Grid.Col xs={1}></Grid.Col>
                <Grid.Col xs={4}> 
                    <Center sx={{height: "100%"}}>
                    <DynamicImage src="images/visualisations/course/kurs_exterior.jpg" hoverSrc="images/visualisations/course/kurs_exterior_MTL.jpg" hoverDescription=""/>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={1}></Grid.Col>
                <Grid.Col xs={3}>
                    <DynamicImage src="images/visualisations/course/kurs_closeup.jpg" hoverSrc="images/visualisations/course/kurs_closeup_MTL.jpg" hoverDescription=""/>
                </Grid.Col>
                <Grid.Col xs={12}><Box sx={{height: "100px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    );
}