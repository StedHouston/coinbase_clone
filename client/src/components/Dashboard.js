import React from 'react';
import Navbar from '../components/Navbar';


function Dashboard() {






    return (
        <>
            <Navbar/>
            <div className="Dashboard">
                <div className="Dashboad__Portfolio">
                    <div>Portfolio</div>
                    <div></div>
                </div>
                <div className="Dashboad__History">
                    Transaction History
                </div>
            </div>
        </>
    );
}
export default Dashboard;
