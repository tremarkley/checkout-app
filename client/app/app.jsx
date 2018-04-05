import React from 'react';
import AccountInfo from './components/accountInfo';
import ContactInfo from './components/contactInfo';
import PaymentInfo from './components/paymentInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: undefined,
    };
  }

  render() {
    switch (this.state.activeForm) {
      case 'AccountInfo':
        return <AccountInfo />;
      case 'ContactInfo':
        return <ContactInfo />;
      case 'PaymentInfo':
        return <PaymentInfo />;
      default:
        return <button>Checkout</button>;
    }
  }
}

export default App;

