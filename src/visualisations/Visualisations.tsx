
import { Box, Center, createStyles, Image, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Categories } from "../common/categories/Categories";
import { Course } from "./Course";
import { Exterior } from "./Exterior";
import { Interior } from "./Interior";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Visualisations() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');
    const { t } = useTranslation();

    const contentMap = new Map<string, JSX.Element>([
        ["interior", <Interior />],
        ["exterior", <Exterior />],
        ["course", <Course />],
    ])

    return (
        <Box>
            <Box>
            {Categories({
                items: [
                    {
                        imageSrc: "images/visualisations/course/interiory.jpg",
                        link: "interior",
                        description: t("visInteriorTitle1"),
                    },
                    {
                        imageSrc: "images/visualisations/course/exteriory.jpg",
                        link: "exterior",
                        description: t("visExteriorTitle1"),
                    },
                    {
                        imageSrc: "images/visualisations/course/kurs.jpg",
                        link: "course",
                        description: t("visCourseTitle1"),
                    },
                ],
                carousel: false,
                onSelected: (link: string) => {
                    setActive(link)
                }
            })}
            </Box>
            <Box sx={{marginTop: 60}}>
                {contentMap.get(active)}
            </Box>
        </Box>
    )

}