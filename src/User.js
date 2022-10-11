import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function User() {
  const [user,setUser] = useState([]);

  useEffect(() => {
    setUser([
      {
        id:1,
        username:"keerthi",
        email:"keerthipnagu@gmail.com",
        country:"India",
        state:"Tamil Nadu",
        city:"Chennai",
        phone:"9629731401",
        dob:"07-05-1992",
        gender:"Male"

      },
      {
        id:2,
        username:"keer",
        email:"kirthivassnagu@gmail.com",
        country:"India",
        state:"Tamil Nadu",
        city:"Bodi",
        phone:"6304661482",
        dob:"07-05-1992",
        gender:"Male"

      },
      {
        id:2,
        username:"soumya",
        email:"kirthivassnagu@gmail.com",
        country:"India",
        state:"Tamil Nadu",
        city:"Raichur",
        phone:"6304661482",
        dob:"08-11-1992",
        gender:"Female"

      }
    ])

  },[])

  let deletUser = () => {
    const result = window.confirm("Are you sure do you want to delete?")
    if(result){
      alert("deleted")
    }
  }
  return (
    <div class="container-fluid">
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User</h1>
                        <Link to ={"/user_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
                    </div>
      <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                        <tr>
                                        <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone no</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone no</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        
                                       {user.map((user)=> {
                                        return  <tr>
                                           <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.country}</td>
                                        <td>{user.state}</td>
                                        <td>{user.city}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                          <Link to={`/users/${user.id}`} className="btn btn-warning mr-1">
                                            view
                                          </Link>
                                          <Link to={`/edit/${user.id}`} className="btn btn-primary mr-1">
                                            Edit
                                          </Link>
                                          <button onClick={()=> deletUser()} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                       })}
                                       
                                    </tbody>
                                </table>
                                </div></div>
                        </div>
    </div>
  );
}

export default User;
