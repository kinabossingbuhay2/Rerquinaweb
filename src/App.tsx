import React from 'react';
import "./DumagueteSafety.css";

const DumagueteSafety = () => {
  return (
    <div className="app-viewport">
      <div className="noise-overlay"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <nav className="floating-nav glass">
        <div className="nav-container">
          <div className="brand">
            <div className="logo-icon">
              <span className="material-symbols-outlined">Kian T Requina </span>
            </div>
            <span className="logo-text">DGT<span className="bold">SAFE</span></span>
          </div>
          <div className="nav-items">
            <a href="#emergency">Emergency</a>
            <a href="#map">Safety Map</a>
            <a href="#portal">Portal</a>
          </div>
          <div className="weather-pill">
            <span className="status-dot"></span>
            <span className="temp">28°C</span>
            <span className="city-time">15:49</span>
          </div>
        </div>
      </nav>

      <main className="content">
        <header className="hero">
          <div className="hero-content">
            <div className="glass-badge">
              <span className="material-symbols-outlined">verified</span>
              Reliable Response 2026
            </div>
            <h1 className="hero-title">
              Safety for the <br />
              <span className="gradient-text">Gentle People.</span>
            </h1>
            <p className="hero-description">
              Secure, swift, and reliable. Dumaguete's unified emergency network 
              connecting you to help in seconds.
            </p>
            <div className="button-group">
              <button className="btn-main">
                Emergency Dispatch
              </button>
              
            </div>
          </div>
        </header>

        <section className="bento-layout">
          {/* Main Dispatch - Wide */}
          <div className="bento-card police-wide glass shine">
            <div className="card-header">
              <div className="badge-blue">Active Dispatch</div>
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="card-footer">
              <span className="label">Dumaguete Police (PNP)</span>
              <div className="numbers">
                <a href="tel:911" className="big-num">911</a>
                <a href="tel:2251766" className="sub-num">225-1766</a>
              </div>
            </div>
          </div>

          {/* Medical - Square */}
          <div className="bento-card medical glass shine">
            <span className="material-symbols-outlined icon-red">emergency</span>
            <div className="card-details">
              <h3>Hospital</h3>
              <p>Silliman Medical Center</p>
              <a href="tel:2250841" className="call-btn">Call Now</a>
            </div>
          </div>

          {/* Fire - Tall */}
          <div className="bento-card fire-tall glass shine">
            <div className="fire-header">
              <span className="material-symbols-outlined">local_fire_department</span>
              <h3>BFP Control</h3>
            </div>
            <p>Direct line for fire and structural hazards.</p>
            <a href="tel:2253445" className="num-link">225-3445</a>
          </div>

          {/* Rescue - Small */}
          <div className="bento-card rescue glass shine">
            <span className="material-symbols-outlined">medical_information</span>
            <div className="rescue-text">
               <h4>CDRRMO</h4>
               <p>225-3775</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DumagueteSafety;