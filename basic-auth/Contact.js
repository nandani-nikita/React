import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    var h1;
    if(this.state.authorized === false) {
      h1 = "Enter the password";
    } else {
      h1 = "Contact";
    }
      var login = (<form 
      action="#" 
      onSubmit={this.authorize}>
          <input type="password"
          placeholder="Password" />
          <input type="submit" />
        </form>
        );

      var contactInfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      );
    return (
      <div id="authorization">
        <h1>{h1}</h1>
        {this.state.authorized === false ? login : contactInfo}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);