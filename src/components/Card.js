import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  // console.log(githubUs);
  const blogLink = blog ? `http://${blog}` : "#";
  console.log(blogLink);
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4 className="profile">{name}</h4>
          <p> @{twitter_username || "pratyush2710"}</p>
        </div>
        <a href={html_url}>Follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness> {company || "company"}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || "Globe"}
        </p>
        <a href={blogLink}>
          <MdLink></MdLink>
          {blog || "blog"}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #1f1f1f;
  /* var(--clr-white); */
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
    /* card header name specified here */
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: #1f1f1f;
    /* var(--clr-white); */
    color: #fff;
    /* var(--clr-grey-5); */
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: uppercase;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }

  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
      h4.profile{
    color: #2faeba;
    text-transform: uppercase;
    font-weight: bold;
    font-size: larger;
}
    p {
      margin-bottom: 0;
    }
    a {
      color: #fff;
      /* var(--clr-primary-5); */
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      background: var(--clr-primary-4);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: #fff;
        /* var(--clr-white); */
      }
    }
  }
  .bio {
    color: #fff;
    /* var(--clr-grey-3); */
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
