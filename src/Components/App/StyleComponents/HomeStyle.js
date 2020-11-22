import styled from "styled-components";

const HomeStyle = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  .homeImage {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -100;
    margin-bottom: -30vh;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    .homeImage {
      max-width: 100%;
      margin-bottom: -25vh;
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: 550px) {
    .homeImage {
      margin-bottom: -15vh;
      transition: all 0.5s ease-in-out;
    }
  }
`;

export default HomeStyle;
