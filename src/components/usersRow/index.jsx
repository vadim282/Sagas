import React from 'react';
import './style.css'

function DataRow(props) {
  return (
    <tr className = "data-row-content">
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>{props.visits}</td>
      <td>{props.progress}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default DataRow;
