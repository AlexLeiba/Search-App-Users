import styles from "./UserList.module.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UserList(props) {
  const { userValue, stateAlert } = props;

  // state
  const [state, setState] = useState([]);
  const [stateCount, setStateCount] = useState(0);

  function handleChange(event) {
    const userResult = event.target.value;

    // Functia care declanseaza alerta.
    if (userResult.length === 0) {
      stateAlert(true);
      setTimeout(() => {
        stateAlert(false);
      }, 5000);
    } else {
      stateAlert(false);
    }

    // Functia care filtreaza cautarea de Useri.
    // const lowerCaseResult = userResult.toLowerCase();
    let filtered = userValue.filter((param) => param.name.includes(userResult));

    {
      userResult.length === 0 ? setState([]) : setState(filtered);
    }
  }

  function handleIncreaseNumbers() {
    const previousState = stateCount;
    const newState = previousState + 1;

    return setStateCount(newState);
  }

  function handleRemove(id) {
    const previousProducts = state;
    const idProduct = id;
    const filteredProducts = previousProducts.filter(
      (product) => product.id !== idProduct
    );

    //   Aceasta functie va returna toti userii care nu sint egali(sint diferiti) de id-ul venit de la (state) pe care a fost dat click.
    return setState(filteredProducts);
  }

  return (
    <div className={styles.rowContainer}>
      <Row className={styles.input}>
        <Col>
          <input
            type="text"
            placeholder="Search users"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className={styles.container}>
        {state.map((user) => {
          return (
            <Col lg={3} md={6} xxl={2} xs={12} className="my-2">
              <div key={user.id} className={`${styles.userBox} }`}>
                <span onClick={handleIncreaseNumbers}>{user.name}</span>
                <button
                  id={styles.button}
                  onClick={() => {
                    handleRemove(user.id);
                  }}
                ></button>
                <span className="m-1">{stateCount}</span>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
