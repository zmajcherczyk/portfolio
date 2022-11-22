import { Grid, Skeleton, Container, Box, Image } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DynamicImage } from '../common/DynamicImage';

const child = <Skeleton height={400} animate={false} />;

export function Exterior() {
    const { t } = useTranslation();
    return (
        <Box>
            <Grid>
                <Grid.Col xs={5}>
                <DynamicImage src="images/visualisations/exteriors/01_kurs.jpg" hoverSrc="images/visualisations/exteriors/01_kurs_mtl.jpg" hoverDescription={t("visExteriorDescription01")}/>
                            </Grid.Col>
                <Grid.Col xs={7}></Grid.Col>
                <Grid.Col xs={7}>
                <DynamicImage src="images/visualisations/exteriors/02_urb.jpg" hoverSrc="images/visualisations/exteriors/02_urb.jpg" hoverDescription={t("visExteriorDescription02")}/>
                            </Grid.Col>
            </Grid>
        </Box>
    );
}