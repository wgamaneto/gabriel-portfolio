import styled from "styled-components";

export const Header = styled.section`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
  }

  li {
    list-style-type: none;
    margin-right: 10px;
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: black;
  padding: 60px 0px;

  h1 {
    color: white;
  }

  h2 {
    color: white;
  }

  span {
    display: flex;
  }
`;

export const MonotoniaSection = styled.section`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 60px 40px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      border-width: 1px;
      border-color: white;
    }

    h2 {
      font-size: 28px;
      max-width: 360px;
      padding: 8px;
    }
  }
`;

export const ChaveMestraSection = styled.section`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 60px 40px;
  background-color: black;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      border-width: 1px;
      border-color: white;
    }

    h2 {
      font-size: 28px;
      max-width: 360px;
      padding: 8px;
      color: white;
    }
  }
`;

export const SkillsSection = styled.section`
  background-color: #fbcb47;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    max-width: 360px;
    padding-bottom: 40px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 120px;

    span {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h2 {
      padding: 12px;
      font-size: 24px;
    }
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  padding: 60px 0px;

  h1 {
    font-size: 60px;
    color: white;
  }

  div {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;

    img {
      border-width: 1px;
      border-color: white;
    }
  }
`;

export const ToolsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

export const GameJamsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
  }

  div {
    display: flex;
    gap: 8px;
  }
`;
