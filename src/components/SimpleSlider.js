import React, { Component} from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';
import PlotRentVsBuy from './plots/PlotRentVsBuy';
import PlotBuyInitialCosts from './plots/PlotBuyInitialCosts';
import PlotLoanPayments from './plots/PlotLoanPayments';
import PlotBuyCashFlow from './plots/PlotBuyCashFlow';
import PlotRentInvestment from './plots/PlotRentInvestment';
import TableLoanPayments from './tables/TableLoanPayments';
import TableBuyScenario from './tables/TableBuyScenario';
import TableRentScenario from './tables/TableRentScenario';

import {
	getBuyScenarioOutputs,
	getRentScenarioOutputs,
} from '../functions/formulas'

class SimpleSlider extends Component {
    render() {
      const input = this.props.input
      const buyScenarioOutputs = getBuyScenarioOutputs(this.props.input)
      const { cashFlowNet: buyScenarioCashFlowNet } = buyScenarioOutputs
      const rentScenarioOutputs = getRentScenarioOutputs({...this.props.input, buyScenarioCashFlowNet})
      
      console.info(input)
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
              <PlotRentVsBuy input={input} buyScenarioOutputs={buyScenarioOutputs} rentScenarioOutputs={rentScenarioOutputs} />
            </div>
            <div>
              <PlotBuyInitialCosts input={input} buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotLoanPayments input={input} buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotBuyCashFlow input={input} buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <PlotRentInvestment input={input} buyScenarioOutputs={buyScenarioOutputs}  rentScenarioOutputs={rentScenarioOutputs} />
            </div>
            <div>
              <TableLoanPayments input={input} buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <TableBuyScenario input={input} buyScenarioOutputs={buyScenarioOutputs} />
            </div>
            <div>
              <TableRentScenario input={input} buyScenarioOutputs={buyScenarioOutputs} rentScenarioOutputs={rentScenarioOutputs} />
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