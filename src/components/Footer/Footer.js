import React from 'react';
import styled from 'styled-components';
import BgImg from '../../images/blooming-hop.jpg';
import FooterContactItem from './FooterContactItem';

export const Footer = () => {
  return (
    <FooterWrapper className="mt-4 mt-md-5">
      <h3 className="display-2 text-uppercase text-center py-4 py-sm-5 my-0">Contact us</h3>

      <div className="contact-branches">
        <div className="row mx-0 contact-branches-row p-4 p-lg-5 text-center">
            <FooterContactItem city='City A' address='4326 A street' country='Country A' tel='(555) 345 888' email='ndbaradaran@gmail.com'/>
            <FooterContactItem city='City B' address='11311 B street' country='Country B' tel='(666) 219 976' email='ndbaradaran@gmail.com'/>
            <FooterContactItem city='City C' address='65652 C street' country='Country C' tel='(777) 389 976' email='ndbaradaran@gmail.com'/>
            <FooterContactItem city='City D' address='98723 D street' country='Country D' tel='(444) 300 014' email='ndbaradaran@gmail.com'/>
        </div>
      </div>


      <p className="mt-2 text-center">
       <span>&copy; copyright {new Date().getFullYear()}</span> 
       <a target="_blank" href="https://github.com/NasimBD" className="text-decoration-none ms-2 text-pink-n">Nasim Baradaran</a>
      </p>
    </FooterWrapper>
  )
}


const FooterWrapper = styled.footer`
h3{
  background: linear-gradient(0deg, rgba(250, 250, 250,0.5), rgba(250,250,250,0.5)), url(${BgImg}) left top/cover fixed no-repeat;
  text-shadow: 1px 1px yellow, 2px 2px black;
}

.contact-branches{
  color: var(--xLight);
  background: #475828;
}

`