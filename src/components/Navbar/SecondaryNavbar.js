import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import { get_category_items } from '../../redux/actions/itemsActionsCreators';
import { CategoryListItem } from './CategoryListItem';

const SecondaryNavbar = (props) => {
  return (
    <nav className="secondary-nav navbar navbar-expand-md navbar-light">        
        <div className="container-fluid px-3">
            {props.isLoggedIn && <span className="greetings text-secondary fw-bold">Hi <span>{props.loggedUser.name.split(' ')[0]}</span></span>}
        
            <button type="button" className="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#menu"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown"><a href="#" role="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                        <ul className="dropdown-menu">
                            <CategoryListItem category="all" onClickEv={props.onCategoryClick}/>
                            <CategoryListItem category="men's clothing" onClickEv={props.onCategoryClick}/>
                            <CategoryListItem category="women's clothing" onClickEv={props.onCategoryClick}/>
                            <CategoryListItem category="jewelry" onClickEv={props.onCategoryClick}/>
                            <CategoryListItem category="electronics" onClickEv={props.onCategoryClick}/>
                        </ul>
                    </li>
                    {
                        props.loggedUser &&  <li className="nav-item"><Link to="/logout" className="nav-link">Logout <MdOutlineLogout className="log"/></Link></li>
                    }
                    {
                        !props.loggedUser &&  <li className="nav-item"><Link to="/login" className="nav-link">Login <MdOutlineLogin className="log"/></Link></li>
                    }
                </ul>
            </div>
        </div> 
    </nav>
  )
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.log.isLoggedIn,
    loggedUser: state.log.loggedUser
})

const mapDispatchToProps = (dispatch) => ({
    onCategoryClick: (category) => dispatch(get_category_items(category))
})

const SecondaryNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(SecondaryNavbar);
export default SecondaryNavbarContainer;
