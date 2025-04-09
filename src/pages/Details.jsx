import React from 'react';
import {Link, useParams} from "react-router";
import {FLOWERS} from "../db/database.jsx";

function Details(props) {

    const { id } = useParams();

    const  flowers = FLOWERS;

    const  cicek = flowers.find(c => c.id ==id);


    return (
        <div style={{marginBottom:75}}>

            <div  className="card text-bg-dark my-2">
                <img  src={cicek.image} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{cicek.name}</h5>
                    <p className="card-text">{cicek.description}</p>
                    <p className="card-text"> Fiyat : {cicek.price}</p>

                </div>
            </div>
            <Link to={"/"} className="btn btn-outline-success">Anasayfa <i className="bi bi-house-fill"></i></Link>
        </div>
    );
}

export default Details;