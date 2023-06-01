import React, { useContext } from 'react'
import ImageCard from './ImageCard'
import notfound from '../Assets/Images/notfound.png';
import { GalleryContext } from '../Context/GalleryContext';
function Gallery() {
    const { results } = useContext(GalleryContext)

    return (
        <div className='Cards-Holder'>

            <div className='Gallery-title'>
                <h1>
                    Fruits Gallery

                </h1>

            </div>
            <div className='Cards-Container'>
                {results.length > 0 ?

                    results.map((fruit) => (

                        <ImageCard title={fruit.title} imageSrc={fruit.imageUrl} />
                    ))
                    :

                    <ImageCard title={"Not found"} imageSrc={notfound} />
                }
            </div>
        </div>
    )
}

export default Gallery