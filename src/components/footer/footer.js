import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Data is provided by <a href="https://anapioficeandfire.com/">An API of Ice and Fire</a></p>
          </div>
          <div className="col-md-6 text-md-right">
            <p><a href="https://github.com/dm-nz/dbif">GitHub</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;