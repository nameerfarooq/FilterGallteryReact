import React from 'react'

function ImageCard(props) {
    return (
        <div className='Fruit-card'>
            <div className='Fruit-card-img'>
                <img src={props.imageSrc} alt="apple image" />
            </div>
            <div className='Fruit-card-title'>
                <p>
                    {props.title}
                </p>
            </div>
        </div>
    )
}

export default ImageCard