import React, {useState} from "react";

export function Card (props) {

    console.log(props);
    return (
            <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}