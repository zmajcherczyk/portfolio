import { Group, createStyles, Text } from '@mantine/core';
import i18n from './i18n';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({

    languageOption: {
        color: theme.colors.gray[5],
        '&:hover': {
            color: theme.colors.gray[8],
            cursor: 'pointer',
        }
    },

    languageOptionActive: {
        textDecoration: 'underline'
    },
    
}));

export function LanguageChooser() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(i18n.language);

    function setLanguage(code: string): void {
        i18n.changeLanguage(code)
        setActive(code)
    }

    return (
        <Group spacing="xs">
            <LanguageChooserItem displayName="PL" code="pl-PL"/>
            <LanguageChooserItem displayName="EN" code="en-US"/>
        </Group>
    )

    type LanguageChooserItemProps = {
        code: string
        displayName: string
    }
    
    function LanguageChooserItem(props: LanguageChooserItemProps) {
        return (
            <Text className={cx(classes.languageOption, { [classes.languageOptionActive]: props.code === active })} onClick={() => setLanguage(props.code)}>{props.displayName}</Text>
        );
    }
}


