import React from "react";
import { Container } from "react-bootstrap";
import InputValidation from "./components/InputValidation";
import EmailPasswordForm from "./components/EmailPasswordForm";
import FullForm from "./components/FullForm";


function App() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">useEffect in React</h2>
      <InputValidation />
      <EmailPasswordForm />
      <FullForm />
    </Container>
  );
}

export default App;
