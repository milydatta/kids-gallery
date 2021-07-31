import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{height:"100vh"}}>
        
        <ul  className="list-unstyled">
            <li  className="text-white title">KIDS GALLERY</li>
            <li>
                <Link to="/manageProducts" className="text-white">Manage Products</Link>
            </li>
            <li>
                <Link to="/addProducts" className="text-white">Add Products</Link>
            </li>
            <li>
                <Link to="/editProducts" className="text-white">Edit Products</Link>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar;