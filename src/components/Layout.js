import styled from "styled-components";

const Layout = (props) => {
  const { children } = props;

  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
