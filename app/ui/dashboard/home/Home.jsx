
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Header = styled(animated.h1)`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled(animated.button)`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005bb5;
  }
`;

const Home = () => {
  const fadeInStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  const slideInStyles = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <Container>
      <Header style={slideInStyles}>Welcome to the Admin Dashboard</Header>
      <Button style={fadeInStyles}>Get Started</Button>
    </Container>
  );
}

export default Home;
