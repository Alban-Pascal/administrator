import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <h1> Administrator</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px;
`;
