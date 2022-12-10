import React from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { SignUp } from './SignUp';

const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

interface LoginProps {
  name?: any;
  value?: any;
}
interface LoginState {
  username: string;
  email: string;
  password: string;
  errors: {
    username: string;
    email: string;
    password: string;
  };
  condition: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'email':
        errors.email = Regex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be eight characters long!' : '';
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };
  handleSubmit = (event: any) => {
    event.preventDefault();
    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (validity == true) {
      console.log('Login can be done');
    } else {
      console.log('You cannot log in!!!');
    }
  };

  constructor(props: LoginProps) {
    super(props);
    const initialState = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
      condition: false,
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(condition: boolean) {
    this.setState({ ...this.state, condition });
  }

  render() {
    const { errors } = this.state;
    const { condition } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="role">
              <label htmlFor="role">Choose your role</label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={this.handleChange}
              >
                <MenuItem value={1}>Patient</MenuItem>
                <MenuItem value={2}>Doctor</MenuItem>
              </Select>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />
              {errors.email.length > 0 && (
                <span style={{ color: 'red' }}>{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {errors.password.length > 0 && (
                <span style={{ color: 'red' }}>{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
