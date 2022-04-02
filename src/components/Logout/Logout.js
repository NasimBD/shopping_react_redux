import { useEffect } from 'react'
import { actionTypes } from '../../redux/constants/actionTypes';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Logout = (props) => {
  const shouldRedirect = true;
  const navigate = useNavigate();

  useEffect(() => {
    if(shouldRedirect) {
      props.logoutUser();
      navigate('/');
    }
  });


  return (
    null
  )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  logoutUser : () => {
    dispatch({
      type: actionTypes.LOGOUT_USER
    })
 }})

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);
export default  LogoutContainer;



