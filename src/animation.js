export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.5, 
            when: 'beforeChildren',
            staggerChildren: 0.5
        },
    },
    // exit: {
    //     opacity: 0,
    //     y: 200, 
    //     transition: {
    //         duration: 1, 
    //     },
    // },
};

export const titleAnimation = {
    hidden: {y: 100},
    show: {
        y: 0,
        transition: {duration: 0.75, ease: "easeOut"},
    }
} 

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1, 
        transition: { ease: "easeOut", duration: 0.75},
    }
}

export const photoAnimation = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.5
        }
    }
}

export const slider = {
    hidden: {x: '-100%'},
    show: {
        x: '100%',
        
        transition: {ease: 'easeOut', duration: 1},
    },
}

export const sliderContainer = {
    hidden: {opacity: 1},
    show: {opacity: 0, transition: {staggerChildren: 1, ease: 'easeOut'}},
    
}

//NOT IN USE 
// export const scrollReveal = {
//     hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 }},
//     show: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 0.5,
//         }
//     }
// }