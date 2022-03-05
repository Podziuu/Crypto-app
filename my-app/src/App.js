import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Crypto from './components/Crypto'
import Container from "./components/Layout/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Main />
        <Crypto />
      </Container>
    </div>
  );
}

export default App;
