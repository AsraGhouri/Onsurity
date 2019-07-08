import React from 'react';
import './css/AddPlan.css';
import Header from '../constants/Header'
import Footer from '../constants/Footer'
import AddPlanCarousel from './ClaimCaraousal/AddPlanCarousel'
import MobileCarousal from '../AddPlan/ClaimCaraousal/AddPlanMobile'
class AddPlan extends React.Component {

    render() {
        return (
            <div className="Add-Plan">                           
                <Header />
                <p className="Select-a-Plan">Select a Plan</p>
                <div>
                <AddPlanCarousel />
                </div>
                <div>
                <MobileCarousal  />
                </div>
                <Footer />
            </div>
        );
    }
}
export default AddPlan;