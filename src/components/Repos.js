import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { githubRepos } = React.useContext(GithubContext);

  let languages = githubRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = [language, 1];
    } else {
      total[language] = [language, total[language][1] + 1];
    }
    return total;
  }, {});

  // console.log(languages);
  //Object changed to array for data structuring
  // Sorted the array to get most popular languages
  // Sliced to 5 popular languages
  languages = Object.values(languages)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 5);

  let stargazers_counts = githubRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = [language, stargazers_count];
    } else {
      total[language] = [language, total[language][1] + stargazers_count];
    }
    return total;
  }, {});

  stargazers_counts = Object.values(stargazers_counts)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 5);

  let count_stars = 0,
    count_forks = 0;
  let { stars, forks } = githubRepos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      if (stargazers_count > 0) {
        total.stars[count_stars++] = [name, stargazers_count];
      }
      if (forks > 0) {
        total.forks[count_forks++] = [name, forks];
      }
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 5);

  forks = Object.values(forks)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={languages} />
        <Doughnut2D data={stargazers_counts} />
        <Column3D data={stars} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }

  /* svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  } */
`;

export default Repos;
