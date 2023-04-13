import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'
const API = process.env.REACT_APP_API;

function DataTable(props){
  const deleteItem = MarcaId => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch(`${API}/api/General/Marca_Delete/${MarcaId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MarcaId
      })
    })
      .then(response => response.json())
      .then(item => {
        props.deleteItemFromState(MarcaId)
      })
      .catch(err => console.log(err))
    }
  }

  const items = props.items.map(item => {
    return (
      <tr key={item.MarcaId}>
        <th scope="row">{item.MarcaId}</th>
        <td>{item.Nombre}</td>
        {/* <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td> */}
        <td>
       
            <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
            {' '}
            <Button 
            className="btn btn-danger btn-sm btn-block"
            color="danger" onClick={() => deleteItem(item.MarcaId)}>Del</Button>
        
        </td>
      </tr>
      )
    })

  return (
    <Table className="table table-striped"
    responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          {/* <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Hobby</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
}

export default DataTable