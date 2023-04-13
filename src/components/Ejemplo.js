import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modals/Modal";
import DataTable from "./Tables/DataTable";
import { CSVLink } from "react-csv";
const API = process.env.REACT_APP_API;
function Ejemplo(props) {
  const [items, setItems] = useState([
  ]);

  const getItems = () => {
    try {

      fetch(`${API}/api/General/Get_MarcaItems/`)
        .then((response) => response.json())
        .then((items) => setItems(items))
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }
  };
 
  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.MarcaId === item.MarcaId);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.MarcaId !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CSVLink
            filename={"db.csv"}
            color="primary"
            style={{ float: "left", marginRight: "10px" }}
            className="btn btn-primary"
            data={items}
          >
            Download CSV
          </CSVLink>
          <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
      </Row>
    </Container>
  );
}

export default Ejemplo;
