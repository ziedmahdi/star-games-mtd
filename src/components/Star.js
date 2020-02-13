import React from 'react';
import star from '../logo.svg';

export function Star() {
    const style = {width: 50};
    return (
        <img alt="star" src={star} style={style} />
    )
}