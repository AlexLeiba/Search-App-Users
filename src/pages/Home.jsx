import React from "react";
import getUsers from "../Components/getUsers";
import Container from "react-bootstrap/Container";
import UserList from "../Components/UserList";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Home() {
  const users = getUsers(100, 1);
  const [state, setState] = useState(true);

  return (
    <Container>
      {state && (
        <Alert className="h-1 bg-warning">
          <h5>
            In this application you can find 100 Users with the keyword (User)!
          </h5>
        </Alert>
      )}
      <UserList userValue={users} stateAlert={setState} />
    </Container>
  );
}

export default Home;
