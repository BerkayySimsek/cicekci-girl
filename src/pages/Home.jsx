import React from 'react';
import {FLOWERS} from "../db/database.jsx";
import {Link} from "react-router";

function Home(props) {

    const  flowers = FLOWERS;

    return (
        <div className="my-3 ms-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 ms-5">
                {
                    flowers.map(flower => (
                        <div className="col">
                            <div style={{width:'75%',height:'100%'}} className="card">
                                <img style={{width:'100%', height:500}} src={flower.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{flower.name}</h5>
                                    <p className="card-text">{flower.description}</p>
                                    <Link to={`/cicek/${flower.id}`} className="btn btn-outline-info">Detay <i
                                        className="bi bi-info-circle-fill"></i></Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default Home;