import React, {useState} from "react";
import { Header } from '../components/header';
import { Card } from '../components/card';

export function HomeGrid () {
    const [api2, setApi] = React.useState([])

    React.useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then( res => res.json())
            .then(data => {
                setApi(data)
            })
        .catch(err => console.log(err))
    }, [])
    
    
    return (
        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                {api2.map(({ id, title, description }) => (
                    <Card key={id} title={title} description={description}/>
                ))}
            </div>
        </div>
    )
}