import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <h1>React</h1>
      <p>D반</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ddd;
  padding: 20px;
`;
