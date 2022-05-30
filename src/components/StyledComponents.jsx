import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- styled Components -</Title>
      <Button>Fight!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px E392eff;
  border-radius: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 10px;
  border-radius: 10px;
`;
