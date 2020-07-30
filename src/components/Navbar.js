import React from "react";
import styled from "styled-components";
import namaste from "./Charts/image.png";
import geekLogo from "./Charts/Geek.png";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      <img
        src={geekLogo}
        alt="logo"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "0",
        }}
      />
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4 style={{ color: "#f1e8e8" }}>
          {" "}
          <img
            src={namaste}
            alt="namaste"
            style={{ width: "200px", height: "50px", borderRadius: "0" }}
          />{" "}
          <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}

      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}>
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: #000;
  /* var(--clr-white); */
  text-align: center;
  display: flex;
  justify-content: space-around;
  /* grid-template-columns: auto auto 100px; */
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    /* object-fit: cover; */
  }
  button {
    background: transparent;
    border: transparent;
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    /* transition: var(--transition); */
    cursor: pointer;
    /* &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    } */
  }
`;

export default Navbar;
