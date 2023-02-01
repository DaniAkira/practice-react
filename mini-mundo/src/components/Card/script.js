import React from "react";
import './style.css';

export default function Card(props) {
    return (
        <div className="Card">
            <p>{ props.date }</p>
            <h2>{ props.tittle }</h2>
            <p>{ props.company }</p>
            <p>{ props.about }</p>
        </div>
    )
}
