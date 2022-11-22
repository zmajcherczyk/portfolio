
import { Box, Center, createStyles, Image, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Categories } from "../common/categories/Categories";
import { ProjectDolinaPradnika } from "./ProjectDolinaPradnika";
import { ProjectOsrodekTerapii } from "./ProjectOsrodekTerapii";
import { ProjectPawilon } from "./ProjectPawilon";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Projects() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');
    const { t } = useTranslation();

    const contentMap = new Map<string, JSX.Element>([
        ["project-dolina-pradnika", <ProjectDolinaPradnika/>],
        ["project-osrodek-terapii", <ProjectOsrodekTerapii/>],
        ["project-pawilon", <ProjectPawilon/>],
        ["course", <></>],
    ])

    return (
        <Box>
            <Box>
            {Categories({
                items: [
                    {
                        imageSrc: "images/projects/dolina_pradnika/finalnyKadr.jpg",
                        link: "project-dolina-pradnika",
                        description: t("projectDolinaPradnikaTitle1"),
                    },
                    {
                        imageSrc: "images/projects/osrodek_terapii/frontViz.jpg",
                        link: "project-osrodek-terapii",
                        description: t("projectOsrodekTerapiiTitle1"),
                    },
                    {
                        imageSrc: "https://assets.gamepur.com/wp-content/uploads/2022/05/15130111/Barn-in-Minecraft.jpg",
                        link: "3",
                        description: "Stodoła w Minecraft"
                    },
                    {
                        imageSrc: "images/projects/pawilon/vizMain.jpg",
                        link: "project-pawilon",
                        description: t("projectPawilonTitle1"),
                    },
                ],
                carousel: true,
                onSelected: (link: string) => {
                    setActive(link)
                }
            })}
            </Box>
            <Box>
                {contentMap.get(active)}
            </Box>
        </Box>
    )

}