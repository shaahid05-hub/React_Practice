import React from "react";
import Child from "./Child";
import { moviesData } from "./Data";



export default function Parent() {
    return(
        <>
            <div className="container-fluid d-flex justify-content-center ">
                {moviesData.map(item=>
                <Child
                    id = {item.actorName}
                    actorName = {item.actorName}
                    totalMovies = {item.totalMovies}
                    age = {item.age}
                    movieName = {item.movieName}
                    boxOfficeCollection = {item.boxOfficeCollection}

                />
            )
        }
            </div>
            
        </>
    )
}