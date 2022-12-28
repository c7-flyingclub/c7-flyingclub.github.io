import React from 'react';
import ImageBox from '../partials/ImageBox';
import FieldSet from '../partials/FieldSet';
import PanoImage from '../partials/PanoImage';

const Photos = () => {
    return <div className="row">
        <PanoImage image="N96418_Interior" initalLon={185} initalLat={-15}>
            <FieldSet title="Garmin G3Xs are in our 182s and 210s"/>  
        </PanoImage>
        <ImageBox image="hangar">
            <FieldSet title="N54589 in our Maintance Hangar"/>  
        </ImageBox>
        <ImageBox image="gtn650">
            <FieldSet title="A GTN650 is in all our Aircraft"/>  
        </ImageBox>
        <ImageBox image="N65045_Panel">
            <FieldSet title="Garmin 275s are in our 172s"/>  
        </ImageBox>
        <ImageBox image="N96418">
            <FieldSet title="N96418 with the Comet Neowise"/>  
        </ImageBox>
        <ImageBox image="N761SP_profile">
            <FieldSet title="The Cessna 210 is a Cross Country Pickup Truck" color="gray"/> 
        </ImageBox>
    </div>
}

export default Photos;