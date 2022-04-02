import styled from 'styled-components';

export const Button = styled.button`
font-size: 1.2rem;
text-transform: capitalize;
color: ${prop => prop.cartBtn ? "var(--darkGreen)" : "var(--darkGreen)"};
border: 0.05rem solid var(--ultraLightGreen);
border-radius: 0.4rem;
border-color: ${props => (props.cartBtn ? "var(--lightBlue)" : "var(--lightGreen)")};
background: ${props => (props.cartBtn ? "var(--lightBlue)" : "var(--lightGreen)")};
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.3rem 0.5rem 0.3rem 0;
transition: all ease-in 500ms ;
&:hover{
  color: ${prop => prop.cartBtn ? "var(--white)" : "var(--darkGreen)"};
  background: ${prop => prop.cartBtn ? "var(--darkBlue)" : "var(--darkYellow)"};
}
`