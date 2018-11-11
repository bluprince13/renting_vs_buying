import React, { Component} from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';
import PlotRentVsBuy from './plots/PlotRentVsBuy';
import PlotBuyInitialCosts from './plots/PlotBuyInitialCosts';
import PlotLoanPayments from './plots/PlotLoanPayments';
import PlotBuyCashFlow from './plots/PlotBuyCashFlow';
import PlotRentInvestment from './plots/PlotRentInvestment';
import TableLoanPayments from './tables/TableLoanPayments';

import {
	getBuyScenarioOutputs,
	getRentScenarioOutputs,
} from '../functions/formulas'

class SimpleSlider extends Component {
    render() {
      const buyScenarioOutputs = getBuyScenarioOutputs(this.props.input)
      const { cashFlowNet: buyScenarioCashFlowNet } = buyScenarioOutputs
      const rentScenarioOutputs = getRentScenarioOutputs({...this.props.input, buyScenarioCashFlowNet})
      
      console.info(buyScenarioOutputs)
      console.info(rentScenarioOutputs)

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: true,
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <PlotRentVsBuy buyScenarioOutputs={buyScenarioOutputs} rentScenarioOutputs={rentScenarioOutputs} />
            </div>
            <div>
              <PlotBuyInitialCosts buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotLoanPayments buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotBuyCashFlow buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotRentInvestment buyScenarioOutputs={buyScenarioOutputs}  rentScenarioOutputs={rentScenarioOutputs} />
            </div>
            <div>
              <TableLoanPayments buyScenarioOutputs={buyScenarioOutputs} />
            </div>
          </Slider>
        </div>
      );
    }
  }

  function mapStateToProps({ input }) {
    return { input };
  }
  
  export default connect(mapStateToProps)(SimpleSlider);