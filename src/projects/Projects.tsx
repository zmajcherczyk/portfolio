
import { Box, Center, createStyles, Image, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Categories } from "../common/categories/Categories";
import { ProjectDetails } from "./ProjectDetails";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Projects() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');

    const contentMap = new Map<string, JSX.Element>([
        ["1", <ProjectDetails title="asdf" subtitle="asdf" description="asdf"/>],
        ["exterior", <></>],
        ["course", <></>],
    ])

    return (
        <Box>
            <Box>
            {Categories({
                items: [
                    {
                        imageSrc: "zuum-studio/images/projects/dolina_pradnika/finalny kadr.jpg",
                        link: "1",
                        description: "Wielorodzinny zespół mieszkaniowy w dolinie prądnika",
                    },
                    {
                        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Barn_Barber%C3%AAche_Mar_2011.jpg/220px-Barn_Barber%C3%AAche_Mar_2011.jpg",
                        link: "2",
                        description: "Inna Stodoła"
                    },
                    {
                        imageSrc: "https://assets.gamepur.com/wp-content/uploads/2022/05/15130111/Barn-in-Minecraft.jpg",
                        link: "3",
                        description: "Stodoła w Minecraft"
                    },
                    {
                        imageSrc: "https://i.cbc.ca/1.3355986.1449605277!/fileImage/httpImage/happy-barn-alberta.jpg",
                        link: "4",
                        description: "Smutna Stodoła"
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