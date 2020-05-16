import React, { Component } from "react";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          repassword : "",
          submitted: false,
        };
     
      }
      handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
      handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password,repassword } = this.state;
        if (!(email && password) || password!==repassword) {
          return;
        }
      };
    render() {
        const { loading } = this.props;
        const { email, password,repassword, 
            submitted  } = this.state;

        return (
            <div className="form-box">
            <form name="form" className="container" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className={'form-input' +
                  (submitted && !email ? ' error' : '')}
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email && (
                  <div className="error-block email">Email is required.</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className={'form-input' + (submitted && !password ? ' error' : '')}
                  value={password}
                  onChange={this.handleChange}
                />
                {submitted && !password && (
                  <div className="error-block password">Password is required.</div>
                )}
              </div>
                <div className="form-group">
                    <label htmlFor="password">Retype Password</label>
                    <input
                        type="password"
                        name="repassword"
                        className={'form-input' + (submitted && (!repassword || repassword!==password) ? ' error' : '')}
                        value={repassword}
                        onChange={this.handleChange}
                    />
                    {submitted && !repassword
                     && (
                        <div className="error-block repassword">Retype password is required</div>
                    )}
                    {submitted && repassword!==password && (
                        <div className="error-block repassword">Passwords dont match</div>
                    )}
                </div>
              <div className="form-group">
                <button className="form-btn" disabled={loading}>
                    {loading ? <><i className="fas fa-spinner  fa-spin"/> loading</> : "Signup"}
                </button>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUp;