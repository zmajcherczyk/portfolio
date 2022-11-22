import { Grid, Skeleton, Container, Box, Image } from '@mantine/core';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { DynamicImage } from '../common/DynamicImage';

const child = <Skeleton height={300} animate={false} />;

export function Interior() {
    const { t } = useTranslation();
    return (
        <Box>
            <Grid>
                <Grid.Col xs={6}>
                <DynamicImage src="images/visualisations/interiors/05_Sypialnia 2.jpg" hoverSrc="images/visualisations/interiors/05_Sypialnia 2.jpg" hoverDescription={t("visInteriorDescription01")}/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <DynamicImage src="images/visualisations/interiors/05_Sypialnia 3.jpg" hoverSrc="images/visualisations/interiors/05_Sypialnia 3.jpg" hoverDescription={t("visInteriorDescription01")}/>
                    </Grid.Col>
                <Grid.Col xs={4}> 
                <DynamicImage src="images/visualisations/interiors/01a_łazienka.jpg" hoverSrc="images/visualisations/interiors/01a_łazienka.jpg" hoverDescription={t("visInteriorDescription02")}/>
                        </Grid.Col>
                <Grid.Col xs={8}>  
                <DynamicImage src="images/visualisations/interiors/05_Sypialnia 1.jpg" hoverSrc="images/visualisations/interiors/05_Sypialnia 1.jpg" hoverDescription={t("visInteriorDescription01")}/>
                         </Grid.Col>
                <Grid.Col xs={4}>
                <DynamicImage src="images/visualisations/interiors/02a_łazienka.jpg" hoverSrc="images/visualisations/interiors/02a_łazienka.jpg" hoverDescription={t("visInteriorDescription02")}/>
                        </Grid.Col>
                <Grid.Col xs={4}>
                <DynamicImage src="images/visualisations/interiors/02b_łazienka.jpg" hoverSrc="images/visualisations/interiors/02b_łazienka.jpg" hoverDescription={t("visInteriorDescription02")}/>
                        </Grid.Col>
                <Grid.Col xs={4}>
                <DynamicImage src="images/visualisations/interiors/01b_łazienka.jpg" hoverSrc="images/visualisations/interiors/01b_łazienka.jpg" hoverDescription={t("visInteriorDescription02")}/>
                        </Grid.Col>
                <Grid.Col xs={6}>
                <DynamicImage src="images/visualisations/interiors/04_kurs_interior.jpg" hoverSrc="images/visualisations/interiors/04_kurs_interior_MTL.jpg" hoverDescription={t("visInteriorDescription03")}/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <DynamicImage src="images/visualisations/interiors/03_kurs_closeup.jpg" hoverSrc="images/visualisations/interiors/03_kurs_closeup_MTL.jpg" hoverDescription={t("visInteriorDescription04")}/>
                    </Grid.Col>
                <Grid.Col xs={12}><Box sx={{height: "100px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    );
}