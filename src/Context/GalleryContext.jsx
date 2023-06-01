// import React, { createContext, useState } from 'react';
// import appleImage from '../Assets/Images/apple.jpg';
// import bananaImage from '../Assets/Images/banana.jpg';
// import grapesImage from '../Assets/Images/grapes.jpg';
// import orangeImage from '../Assets/Images/orange.jpg';

// const GalleryContext = createContext();

// const GalleryProvider = ({ children }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const HandleSearch = () => {
//         const filteredFruits = Fruits.filter((fruit) =>
//             fruit.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         if (filteredFruits.length > 0) {
//             setresults(filteredFruits)
//         }
//         else {
//             alert("Not found")
//         }
//     }
//     const Fruits = [
//         {
//             title: "Apple",
//             Image_Url: appleImage
//         },
//         {
//             title: "Banana",
//             Image_Url: bananaImage
//         },
//         {
//             title: "grapes",
//             Image_Url: grapesImage
//         },
//         {
//             title: "orange",
//             Image_Url: orangeImage
//         }]


//     const [results, setresults] = useState('')
//     if (!searchQuery) {
//         setresults(Fruits)
//     }
//     if (searchQuery) {
//         HandleSearch()
//     }
//     const state = { HandleSearch, searchQuery, setSearchQuery, results }
//     return (
//         <GalleryContext.Provider value={state}>
//             {children}
//         </GalleryContext.Provider>
//     );
// };

// export { GalleryContext, GalleryProvider };


import React, { createContext, useState, useEffect } from 'react';
import appleImage from '../Assets/Images/apple.jpg';
import bananaImage from '../Assets/Images/banana.jpg';
import grapesImage from '../Assets/Images/grapes.jpg';
import orangeImage from '../Assets/Images/orange.jpg';
import peachImage from '../Assets/Images/peach.jpg';
import pineappleImage from '../Assets/Images/pineapple.jpg';
import watermelonImage from '../Assets/Images/watermelon.jpg';
import mangoImage from '../Assets/Images/mango.jpg';

const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const fruits = [
        {
            title: 'Mango',
            imageUrl: mangoImage,
        },
        {
            title: 'Peach',
            imageUrl: peachImage,
        },
        {
            title: 'WaterMelon',
            imageUrl: watermelonImage,
        },
        {
            title: 'Pineapple',
            imageUrl: pineappleImage,
        },
        {
            title: 'Apple',
            imageUrl: appleImage,
        },
        {
            title: 'Banana',
            imageUrl: bananaImage,
        },
        {
            title: 'Grapes',
            imageUrl: grapesImage,
        },
        {
            title: 'Orange',
            imageUrl: orangeImage,
        },
    ];

    useEffect(() => {
        if (!searchQuery) {
            setResults(fruits);
        } else {
            const filteredFruits = fruits.filter((fruit) =>
                fruit.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (filteredFruits.length > 0) {
                setResults(filteredFruits);
            }
            else{
                
                setResults([]);
            }
        }
    }, [searchQuery]);

    const state = {
        handleSearch: setSearchQuery,
        searchQuery,
        results,
    };

    return (
        <GalleryContext.Provider value={state}>
            {children}
        </GalleryContext.Provider>
    );
};

export { GalleryContext, GalleryProvider };
