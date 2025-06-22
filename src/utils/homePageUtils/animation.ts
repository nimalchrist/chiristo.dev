export const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            easing: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
};

export const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            easing: "easeIn",
        },
    },
};

export const hoverVariants = { scale: 1.25 }