import React from 'react'

export default function Carousel() {
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/5622862/pexels-photo-5622862.jpeg" className="d-block w-100" height={"650px"} width={'100%'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/5868241/pexels-photo-5868241.jpeg" className="d-block w-100" height={"650px"} width={'100%'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/5926460/pexels-photo-5926460.jpeg" className="d-block w-100" height={"650px"} width={'100%'} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}