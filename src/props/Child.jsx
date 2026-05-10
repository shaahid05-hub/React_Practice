import React from 'react'

export default function Child({actorName,totalMovies,age,movieName,boxOfficeCollection}) {
    return (
        <>
            <div className="card m-3 " style={{width: '18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body text-center">
    <h5 className="card-title " >{actorName}</h5>
    <p className="card-text text-danger">{totalMovies}</p>
    {/* <a href="#" className="btn btn-primary" src={age}>{}</a> */}
    <p className="card-text">{age}</p>
    <p className="card-text">{movieName}</p>
    <p className="card-text">{boxOfficeCollection}</p>
  </div>
</div>
        </>
    )
}