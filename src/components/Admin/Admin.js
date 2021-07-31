import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
 
    return (
       <div  className="container-fluid row" >
           <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
       </div>
       
    );
};

export default Admin;