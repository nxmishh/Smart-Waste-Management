import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Prime</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            <a className="nav-link" href="learn.html">Learn</a>
            <a className="nav-link" href="shop.html">Shop</a>
            <a className="nav-link" href="statistics.html">Statistics</a>
          </div>
        </div>
        <div className="text-end">
          <button type="button" className="btn btn-danger">Log Out</button>
        </div>
      </div>
    </nav>
  );
}

function Card({ imgSrc, altText, title, quantity }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={imgSrc} alt={altText} height="400px" />
        <div className="card-body">
          <h4 className="card-text">{title}</h4>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => { window.location.href = 'checkout.html'; }}>Order</button>
            </div>
            <small className="text-body-secondary">Quantity: {quantity}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card imgSrc="Assets/compost.jpeg" altText="compost" title="Compost" quantity={9} />
            <Card imgSrc="Assets/glass.jpeg" altText="glass bottles" title="Glass" quantity={5} />
            <Card imgSrc="Assets/metal.jpeg" altText="scrap metal" title="Metal" quantity={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
