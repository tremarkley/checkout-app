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
    };
    this.clickNext = this.clickNext.bind(this);
    this.clickCheckout = this.clickCheckout.bind(this);
    this.exitCheckout = this.exitCheckout.bind(this);
  }

  clickCheckout() {
    this.setState({
      activeForm: 1,
    });
  }

  clickNext() {
    this.setState(prevState => ({ activeForm: prevState.activeForm + 1 }));
  }

  exitCheckout() {
    this.setState({
      activeForm: 0,
    });
  }

  render() {
    switch (this.state.states[this.state.activeForm]) {
      case 'AccountInfo':
        return <AccountInfo clickNext={this.clickNext} />;
      case 'ContactInfo':
        return <ContactInfo clickNext={this.clickNext} />;
      case 'PaymentInfo':
        return <PaymentInfo clickNext={this.clickNext} />;
      case 'Success':
        return <Success exitCheckout={this.exitCheckout} />;
      default:
        return <button onClick={this.clickCheckout}>Checkout</button>;
    }
  }
}

export default App;

