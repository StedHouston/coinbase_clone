import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioContainer from '../components/PortfolioContainer';
import AddMoney from '../components/AddMoney';

function Dashboard() {






    return (
        <>
            <Navbar/>
            <div className="Dashboard">
                <div className="Dashboard__Main">
                    <div>Portfolio</div>
                    <AddMoney/>
                    <PortfolioContainer/>
                </div>
                <div className="Dashboard__History">
                    Transaction History
                </div>
            </div>
        </>
    );
}
export default Dashboard;
