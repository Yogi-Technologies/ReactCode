import React from 'react';
import './GuidelineCard.css';

const GuidelineCard = () => {
  return (
    <React.Fragment>
      <div className="row justify-content-center" style={{ marginTop: "200px" }}>
        {/* Cards */}
        <div className="container">
          <div className="row" style={{ marginTop: "200px" }}>
            <div className="col-md-12"></div>
          </div>

          <div className="col-md-12">
            <div className="card custom-card" style={{position:'relative', backgroundColor: "transparent", borderRadius: "2.5rem", boxShadow: '.5rem .5rem 1.5rem rgba(0, 0, 0, 0.3)', width: "11rem", height: "23.5rem",transform:'translate(638%,-160%)'}}>
              <div className="card-body">
                <div style={{ position: "relative", top: "5%", left: "350%", transform: "translate(-32%, -2700%)", width: "11.5rem", height: "1.5rem", backgroundColor: "white", borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", boxShadow: 'inset 0 0 1rem rgba(0,0,0,0.3), 0 .3rem .5rem rgba(0,0,0,0.2)' }}>
                  {/* <p className="card-title" style={{ fontSize: '1.4rem', textJustify: 'center', color: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>GUIDELINES</p> */}
                </div>
                <p className='card-title' style={{ fontSize: '1.4rem', textJustify: 'center', color: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>GUIDELINES</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>Avg Battery Life:</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>2MWh</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>Avg. Battery Cost:</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>₹ 30000</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>Avg. BreakEven Cost:</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center" }}>₹ 55000</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center"}}>Avg. Target Cost:</p>
                <p className="card-text" style={{ fontSize: '1rem', color: "black", display: "flex", fontWeight: 'bold',justifyContent: "center", alignItems: "center"}}>₹ 65000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GuidelineCard;
