import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Envelope, Eye, Pencil } from "react-bootstrap-icons";

export const UserTable = ({openInformationWindow, openUserInformatioList}) => {

  const data = [
    { 
      name: 'Data1', 
      id: 'Data2', 
      title: 'Data3', 
      role: 'Data4', 
      lastVisitTime: 'Data5', 
      dateAdded: 'Data6', 
      department: 'Data7', 
      actions: (
        <div class="flex gap-3">
          <Eye size={20} onClick={openInformationWindow}/>
        <Link to="/second-page">
          <Pencil size={20}/>
        </Link>
          <Envelope size={20}/>
        </div>
      ), 
    },
    { 
      name: 'Data1', 
      id: 'Data2', 
      title: 'Data3', 
      role: 'Data4', 
      lastVisitTime: 'Data5', 
      dateAdded: 'Data6', 
      department: 'Data7', 
      actions: (
        <div class="flex gap-3">
          <Eye size={20} onClick={openInformationWindow}/>
        <Link to="/second-page">
          <Pencil size={20}/>
        </Link>
          <Envelope size={20}/>
        </div>
      ),  
    },
    { 
      name: 'Data1', 
      id: 'Data2', 
      title: 'Data3', 
      role: 'Data4', 
      lastVisitTime: 'Data5', 
      dateAdded: 'Data6', 
      department: 'Data7', 
      actions: (
        <div class="flex gap-3">
          <Eye size={20} onClick={openInformationWindow}/>
        <Link to="/second-page">
          <Pencil size={20}/>
        </Link>
          <Envelope size={20}/>
        </div>
      ), 
    },
    { 
      name: 'Data1', 
      id: 'Data2', 
      title: 'Data3', 
      role: 'Data4', 
      lastVisitTime: 'Data5', 
      dateAdded: 'Data6', 
      department: 'Data7', 
      actions: (
        <div class="flex gap-3">
          <Eye size={20} onClick={openInformationWindow}/>
        <Link to="/second-page">
          <Pencil size={20}/>
        </Link>
          <Envelope size={20}/>
        </div>
      ), 
    },
  ];

      return (
        <div className="container mt-2 rounded-2">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>NAME</th>
                <th>ID</th>
                <th>TITLE</th>
                <th>ROLE</th>
                <th>LAST VISIT TIME</th>
                <th>DATE ADDED</th>
                <th>DEPARTAMENT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
                 {data.map((row, index) => (
                    <tr key={index}>
                     <td>{row.name}</td>
                     <td>{row.id}</td>
                     <td>{row.title}</td>
                     <td>{row.role}</td>
                     <td>{row.lastVisitTime}</td>
                     <td>{row.dateAdded}</td>
                     <td>{row.department}</td>
                     <td>{row.actions}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
}

UserTable.propTypes = {
  openInformationWindow: PropTypes.func,
  openUserInformatioList: PropTypes.func,
}
