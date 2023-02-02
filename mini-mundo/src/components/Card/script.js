import React from "react";
import './style.css';

export default function Card(props) {
    return (
        <div className={props.mode === false ? 'CardDark' : 'CardLight'}>
            <p>{ props.date }</p>
            <h2>{ props.tittle }</h2>
            <p>{ props.company }</p>
            <p>{ props.about }</p>
        </div>
    )
}
