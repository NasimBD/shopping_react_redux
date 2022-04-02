import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { login_user } from '../../redux/actions/logActionCreators'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const EmailRef = useRef(null);
  const UsernameRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    if(props.isLoggedIn) navigate('/');
  })


  const onLoginSubmit = e => {
    e.preventDefault();
    const fields = {email: EmailRef.current.value, username: UsernameRef.current.value};
    props.loginFormSubmit(fields);
  }


  return (
   <>
     {
      !props.isLoggedIn && 
      <div className="p-3 p-md-4">
        <form id="loginFrm" className="mt-3 m-auto" onSubmit={onLoginSubmit}>
          <div className="row mb-3 d-flex flex-row align-items-center">
            <label htmlFor="email" className="form-label col-12 col-sm-2">Email</label>
            <div className="col-12 col-sm-10"><input type="email" className="form-control" id="email" ref={EmailRef}/></div>
            </div>

            <div className="row mb-3 d-flex flex-row align-items-center">
              <label htmlFor="username" className="form-label col-12 col-sm-2">Username</label>
              <div className="col-12 col-sm-10"><input type="text" className="form-control" id="username" ref={UsernameRef}/></div>
            </div>

          <input type="submit" value="Login" className="btn btn-dark" />
        </form>
        <p className="text-dark mt-3">For testing: uses are taken from an API. <a href="https://jsonplaceholder.typicode.com/users" target="_blank" className="text-secondary small">JSON Placeholder</a></p>
      </div>
    }
   </>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.log.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  loginFormSubmit : (formFields) => {
    console.log('formFields = ', formFields)
    axios.get(`https://jsonplaceholder.typicode.com/users?email=${formFields.email}`).then(data => {
      const fetchedInfo = data.data;
      console.log(fetchedInfo)
      if(!!fetchedInfo.length) {
        if(fetchedInfo[0].username === formFields.username) {
            const loggedUser = fetchedInfo[0];
            console.log('loggedUser');
            dispatch(login_user(loggedUser));
        }else{
          dispatch(login_user(null))
        }
      }
    }).catch(err => console.log(err));
  } 
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer
