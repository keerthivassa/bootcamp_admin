import React, { useState,useEffect } from 'react'
import Card from './Card.js';

function Dashboard() {

    const [counter,setCounter] = useState(0)

    useEffect (()=> {
        console.log("This code executes on every mount")
    },[]);

    useEffect (()=> {
        console.log("This code executes on every time when counter changes")
    },[counter]);

    useEffect (()=> {
       return () => { 
        
        console.log("This code executes on every destroy")
    }
    },[])
  return (
    <div class="container-fluid">
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard{counter}</h1>
                        <button onClick={()=> 
                            setCounter(counter+1)}class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
                    </div>
                    <div class="row">
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/> 
                        </div>
    </div>
  )
}

export default Dashboard