import React from 'react';




function PortfolioContainer(){






    return(
        <div className="Portfolio">
            <div className="Portfolio__amount">
                <p style={{fontWeight: 'bold'}}>Bitcoin</p>
                <div>1.04 BTC</div>
            </div>
            <div className="Portfolio__graph">
                graph
            </div>

            <div className="Portfolio__price"> $10,422.12</div>
        </div>
    );
}

export default PortfolioContainer;
