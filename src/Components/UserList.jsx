import getUsers from "./Users";
import styles from "./UserList.module.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export default function UserList(props) {
  const{userList} = props;
  const { state, setState } = useState(false);
  const users = getUsers(1, 1);
  
  function handleChange(event){
      const eventResult = event.target.value;
     
    
    //  creez un action si reducer, si la efectuarea actiunii, in reducer voi filtra si voi afisa ce se asemana cu ce a introdus userul prin includes)

  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input type="text" placeholder="search user" onChange={} />
        <div className={`${styles.border}`}></div>
      </div>

      <div className={styles.usersList}>
        {users.map((user) => {
          return (
            <div key={user.id} className={styles.wrapper}>
              <div className={styles.containerBorder}>
                <h6 className={styles.borderUser}>Numele: {user.name}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
