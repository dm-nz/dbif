import React from 'react';
import './intro.css';

const Intro = () => {
  document.title = 'A Database of Ice and Fire';
  return (
    <section id="intro" className="jumbotron">
      <div className="container">
        <div className="row ">
          <div className="col-md-3 order-md-2 col-5 mb-4">
            <img className="img-fluid" src="/img/targaryen-sigil.png" srcSet="/img/targaryen-sigil@2x.png 2x" alt="Targaryen sigil" />
          </div>
          <div className="col-md-9 order-md-1">
            <h1>A Database of Ice and Fire</h1>
            <p className="lead text-muted">Base information about all characters, houses and books from <span className="d-md-inline-block">A Song of Ice and Fire</span> by George R. R. Martin</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;