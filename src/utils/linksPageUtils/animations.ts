export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // delay between each item animation
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            easing: "cubic-bezier(0.22,1,0.36,1)"
        },
    },
};

export const listHoverAnimation = { scale: 1.05 };
export const listTapAnimation = { scale: 0.95 };
