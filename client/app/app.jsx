import React from 'react';
import axios from 'axios';
import AccountInfo from './components/accountInfo';
import ContactInfo from './components/contactInfo';
import PaymentInfo from './components/paymentInfo';
import Success from './components/success';

const serverUrl = 'http://localhost:3434';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: ['Checkout', 'AccountInfo', 'ContactInfo', 'PaymentInfo', 'Success'],
      activeForm: 0,
      accountInfo: {
        name: '',
        email: '',
        password: '',
      },
      contactInfo: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
      },
      paymentInfo: {
        creditCardNumber: '',
        expiryDate: '',
        CVV: '',
        billingZipCode: '',
      },
    };
    this.nextForm = this.nextForm.bind(this);
    this.clickCheckout = this.clickCheckout.bind(this);
    this.exitCheckout = this.exitCheckout.bind(this);
    this.setAccountInfo = this.setAccountInfo.bind(this);
    this.setContactInfo = this.setContactInfo.bind(this);
    this.setPaymentInfo = this.setPaymentInfo.bind(this);
    this.completeCheckout = this.completeCheckout.bind(this);
    this.saveCheckoutToDb = this.saveCheckoutToDb.bind(this);
  }

  setAccountInfo({ name, email, password }) {
    this.setState({
      accountInfo: { name, email, password },
    });
  }

  setContactInfo({
    addressLine1, addressLine2, city, state, zipCode, phoneNumber,
  }) {
    this.setState({
      contactInfo: {
        addressLine1, addressLine2, city, state, zipCode, phoneNumber,
      },
    });
  }

  setPaymentInfo({
    creditCardNumber, expiryDate, CVV, billingZipCode,
  }) {
    this.setState({
      paymentInfo: {
        creditCardNumber, expiryDate, CVV, billingZipCode,
      },
    }, () => {
      this.completeCheckout();
    });
  }

  exitCheckout() {
    this.setState({
      activeForm: 0,
    });
  }

  nextForm() {
    this.setState(prevState => ({ activeForm: prevState.activeForm + 1 }));
  }

  clickCheckout() {
    this.setState({
      activeForm: 1,
    });
  }

  async completeCheckout() {
    try {
      await this.saveCheckoutToDb();
      this.nextForm();
    } catch (error) {
      alert(`${error}`);
    }
  }

  async saveCheckoutToDb() {
    const information = {
      ...this.state.accountInfo,
      ...this.state.contactInfo,
      ...this.state.paymentInfo,
    };
    try {
      await axios.post(`${serverUrl}/checkout/create`, information);
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    switch (this.state.states[this.state.activeForm]) {
      case 'AccountInfo':
        return <AccountInfo nextForm={this.nextForm} setAccountInfo={this.setAccountInfo} />;
      case 'ContactInfo':
        return <ContactInfo nextForm={this.nextForm} setContactInfo={this.setContactInfo} />;
      case 'PaymentInfo':
        return <PaymentInfo setPaymentInfo={this.setPaymentInfo} />;
      case 'Success':
        return (<Success
          exitCheckout={this.exitCheckout}
          accountInfo={this.state.accountInfo}
          contactInfo={this.state.contactInfo}
          paymentInfo={this.state.paymentInfo}
        />);
      default:
        return <button onClick={this.clickCheckout}>Checkout</button>;
    }
  }
}

export default App;

