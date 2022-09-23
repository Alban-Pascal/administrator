import styled from "styled-components";

export default function Footer({ isLight, handleToggleTheme }) {
  return (
    <Wrapper>
      <p> The footer</p>
      <br></br>
      <button onClick={handleToggleTheme}>
        Switch to{isLight ? "dark" : "light"} theme
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px;
  padding 1rem;
`;
