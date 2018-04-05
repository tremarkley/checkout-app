import React from 'react';
import AccountInfo from './components/accountInfo';
import ContactInfo from './components/contactInfo';
import PaymentInfo from './components/paymentInfo';
import Success from './components/success';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: ['Checkout', 'AccountInfo', 'ContactInfo', 'PaymentInfo', 'Success'],
      activeForm: 0,
      accountInfo: {
        name: undefined,
        email: undefined,
        password: undefined,
      },
    };
    this.clickNext = this.clickNext.bind(this);
    this.clickCheckout = this.clickCheckout.bind(this);
    this.exitCheckout = this.exitCheckout.bind(this);
    this.setAccountInfo = this.setAccountInfo.bind(this);
  }

  setAccountInfo({ name, email, password }) {
    this.setState({
      accountInfo: { name, email, password },
    });
  }

  exitCheckout() {
    this.setState({
      activeForm: 0,
    });
  }

  clickNext() {
    this.setState(prevState => ({ activeForm: prevState.activeForm + 1 }));
  }

  clickCheckout() {
    this.setState({
      activeForm: 1,
    });
  }

  render() {
    switch (this.state.states[this.state.activeForm]) {
      case 'AccountInfo':
        return <AccountInfo clickNext={this.clickNext} setAccountInfo={this.setAccountInfo} />;
      case 'ContactInfo':
        return <ContactInfo clickNext={this.clickNext} />;
      case 'PaymentInfo':
        return <PaymentInfo clickNext={this.clickNext} />;
      case 'Success':
        return <Success exitCheckout={this.exitCheckout} accountInfo={this.state.accountInfo} />;
      default:
        return <button onClick={this.clickCheckout}>Checkout</button>;
    }
  }
}

export default App;

