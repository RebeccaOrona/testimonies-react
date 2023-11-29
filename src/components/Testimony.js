import React from 'react';
import '../css/Testimony.css'


export const Testimony = (props) => {
    return (
        <div className='main-container'>
            <div className="testimony-container">
                <img className="testimony-image"
                src={require(`../images/testimonio-${props.image}.png`)}
                alt={`Foto de ${props.name}`}
                />
                <div className='testimony-text-container'>
                    <p className='testimony-name'><strong>{props.name}</strong> en {props.country}</p>
                    <p className='testimony-charge'>{props.charge} en <strong>{props.company}</strong></p>
                    <p className='testomony-text'>"{props.testimony}"</p>
                </div>
            </div>
        </div>
    );
}