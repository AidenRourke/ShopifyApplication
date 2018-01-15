import React, { Component } from 'react';

import SignUp from './sign-up';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      submitted: false,
      classNameMenu: ["MenuHidden", false],
      classNameError: 'ErrorTextHidden',
      interest: "Interested in..."
    };
  }
  //Check for valid input
  errorOrLog() {
    if (this.state.submitted) {
      if (this.state.email.match(/.+@.+/) && this.state.interest !== "Interested in...") {
        this.setState({
          classNameError: "ErrorTextHidden",
          email: "",
          classNameInput: "EmailInputInit"
        });
        console.log(`Email address: ${this.state.email}`);
        console.log(`Interested in: ${this.state.interest}`);
      }
      else {
        this.setState({classNameError: "ErrorText"});
      }
    }
  }

  signUp() {
    this.setState({submitted: true}, () => {
        this.errorOrLog();
    });
  }

  render() {
    return (
      <div>
        <p className="Subscribe">Subscribe for free marketing tips</p>
        <div>
          <div className="InputContainer">
            <input
              className="EmailInput"
              placeholder="Email Address"
              value={this.state.email}
              onChange={(event) =>  this.setState({email: event.target.value})} />
            <p className={this.state.classNameError}>Please enter a valid email address</p>
          </div>
          <div className="MenuContainer">
            <input className="DropDownText" value={this.state.interest}/>
            <button className="DropDownButton" onClick={(event) => this.toggleMenu()}>
              <img className="Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/MediaWiki_Vector_skin_action_arrow.svg/2000px-MediaWiki_Vector_skin_action_arrow.svg.png"></img>
            </button>
            <div className={this.state.classNameMenu[0]}>
              <ul className="MenuList">
                <li className="ListItem" onClick={() => this.setState({interest: "one", classNameMenu: ["MenuHidden", false]})}>one</li>
                <li className="ListItem" onClick={() => this.setState({interest: "two", classNameMenu: ["MenuHidden", false]})}>two</li>
                <li className="ListItem" onClick={() => this.setState({interest: "three", classNameMenu: ["MenuHidden", false]})}>three</li>
              </ul>
            </div>
          </div>

        <SignUp handleClick={() => this.signUp()} />

        </div>
      </div>
    );
  }
}

export default Email;
