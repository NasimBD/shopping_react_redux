import React from 'react';

const FooterContactItem = (props) => {
    return (
        <ul className="branch-item list-unstyled col-sm-6 col-md-3 small">
            <li className="branch-name "><i className="fa fa-map me-2"></i>{props.city}</li>
            <li className="branch-address text-light-n">{props.address}<br/>
                {props.country}
            </li>
            <li>
                <span className="branch-tel text-light-n">{props.tel}</span><br/>
                <span className="branch-email small"><a href={"mailto:" + props.email} className="text-light">{props.email}</a></span>
            </li>
        </ul>
    );
};

export default FooterContactItem;