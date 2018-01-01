import React, { Component } from 'react';
import './App.css';
import router from './router';

import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loanType: 'Home Purchase',
      propertyType: 'Single Family Home',
      propToBeUsedOn: '',
      city: '',
      found: 'false',
      realEstateAgent: 'false',
      downPayment: 0,
      cost: 0,
      credit: '',
      history: '',
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      firstName: '',
      lastName: '',
      email: ''
    };

    //BINDING METHODS:
    this.handleChangeLoanType = this.handleChangeLoanType.bind(this);
    this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
    this.handleChangePropertyToBeUsedOn = this.handleChangePropertyToBeUsedOn.bind(
      this
    );
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeFoundFalse = this.handleChangeFoundFalse.bind(this);
    this.handleChangeFoundTrue = this.handleChangeFoundTrue.bind(this);
    this.handleChangeRealEstateAgentTrue = this.handleChangeRealEstateAgentTrue.bind(
      this
    );
    this.handleChangeRealEstateAgentFalse = this.handleChangeRealEstateAgentFalse.bind(
      this
    );
    this.handleChangeUpdateDownPayment = this.handleChangeUpdateDownPayment.bind(
      this
    );
    this.handleChangeUpdateCost = this.handleChangeUpdateCost.bind(this);
    this.handleChangeCreditE = this.handleChangeCreditE.bind(this);
    this.handleChangeCreditG = this.handleChangeCreditG.bind(this);
    this.handleChangeCreditF = this.handleChangeCreditF.bind(this);
    this.handleChangeCreditP = this.handleChangeCreditP.bind(this);
    this.handleChangeUpdateHistory = this.handleChangeUpdateHistory.bind(this);
    this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
    this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
    this.handleChangeAddressThree = this.handleChangeAddressThree.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  //METHODS BELOW:
  handleChangeLoanType(event) {
    this.setState({ loanType: event.target.value });
  }
  handleChangePropertyType(event) {
    this.setState({ propertyType: event.target.value });
  }
  handleChangePropertyToBeUsedOn(event) {
    this.setState({ propToBeUsedOn: event.target.value });
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleChangeFoundTrue(event) {
    this.setState({ found: 'true' });
  }
  handleChangeFoundFalse(event) {
    this.setState({ found: 'false' });
  }
  handleChangeRealEstateAgentTrue() {
    this.setState({ realEstateAgent: 'true' });
  }
  handleChangeRealEstateAgentFalse() {
    this.setState({ realEstateAgent: 'false' });
  }
  handleChangeUpdateDownPayment(event) {
    this.setState({ downPayment: event.target.value });
  }
  handleChangeUpdateCost(event) {
    this.setState({ cost: event.target.value });
  }
  handleChangeCreditE() {
    this.setState({ credit: 'Excellent' });
  }
  handleChangeCreditG() {
    this.setState({ credit: 'Good' });
  }
  handleChangeCreditF() {
    this.setState({ credit: 'Fair' });
  }
  handleChangeCreditP() {
    this.setState({ credit: 'Poor' });
  }
  handleChangeUpdateHistory(event) {
    this.setState({ history: event.target.value });
  }
  handleChangeAddressOne(event) {
    this.setState({ addressOne: event.target.value });
  }
  handleChangeAddressTwo(event) {
    this.setState({ addressTwo: event.target.value });
  }
  handleChangeAddressThree(event) {
    this.setState({ addressThree: event.target.value });
  }
  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return <div>{router}</div>;
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps)(App);
