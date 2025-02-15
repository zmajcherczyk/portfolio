import { Text, Box, Image, Center, Stack, createStyles } from "@mantine/core";
import { useState } from "react";
import { StaticImage } from "../StaticImage";

const useStyles = createStyles((theme) => ({
    itemImage: {
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',

        '&:hover': {
            filter: 'none',
            '-webkit-filter': 'grayscale(0)',
            cursor: 'pointer',

            color: theme.black,
        },

        color: theme.colors.gray[6],
        textTransform: 'uppercase',
        fontWeight: 200,
    },

    activeItemImage: {
        filter: 'none',
        '-webkit-filter': 'grayscale(0)',

        color: theme.black,
        fontWeight: 600,
    },
}));

type CategoryItemProps = {
    imageSrc: string;
    description: string;
    link: string;
    isActive: boolean;
    onSelected: () => void;
}

export function CategoryItem(props: CategoryItemProps) {
    const { classes, cx } = useStyles();

    return (
            <Box className={cx(classes.itemImage, {[classes.activeItemImage]: props.isActive})}>
                <Stack onClick={() => props.onSelected()}>
                        <StaticImage 
                            height={250}
                            src={props.imageSrc}
                        />
                        <Center><Text align="center">{props.description}</Text></Center>
                </Stack>
            </Box>
    )
}
