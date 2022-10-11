import React, { useEffect } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';


function UserView() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    useEffect (() => {
      
        console.log(searchParams.get('status'))
    },[]);
  return (
   <div class="container">
    <div className='row'>
        <h1>Id:{params.id}</h1> 
        <h2>Id:{searchParams.get("status")}</h2>

       
        <div className='col-lg-6'>
            Username:keerthi
        </div>
        <div className='col-lg-6'>
            Email:keerthi
        </div>
        <div className='col-lg-6'>
            Country:keerthi
        </div>
        <div className='col-lg-6'>
            State:keerthi
        </div>
        <div className='col-lg-6'>
            City:keerthi
        </div>
        <div className='col-lg-6'>
            Phone:keerthi
        </div>
        <div className='col-lg-6'>
            DOB:keerthi
        </div>
        <div className='col-lg-6'>
            Gender:keerthi
        </div>
    </div>
   </div>
  )
}

export default UserView

