import React from 'react';
import StartItem from '../start-item';
import './start.css';

const Start = () => {
  return (
    <section id="start" className="content">
      <div className="container">
        <div className="row row-cols-md-3 row-cols-1">
            <StartItem image="books" title="Books" path="/books/page/1" />
            <StartItem image="daenerys-portrait" title="Characters" path="/characters/page/1" />
            <StartItem image="lannister-sigil" title="Houses" path="/houses/page/1" />
        </div>
      </div>
    </section>
  )
}

export default Start;