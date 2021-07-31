import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageProducts = () => {
    return (
        <div  className="container-fluid row" >
        <div className="col-md-2">
         <Sidebar></Sidebar>
         </div>
         <div className="col-md-10 mt-5"  style={{paddingLeft:"100px",backgroundColor: "#F4FDFB" }}>
            <h3 className="text-success">Manage Products</h3> 
            </div>
        </div>
    );
};

export default ManageProducts;




// import React from 'react';

// const AppointmentShortList = ({appointments}) => {
//     return (
//         <table className="table table-borderless">
//             <thead>
//                 <tr>
//                 <th className="text-secondary" scope="col">Name</th>
//                 <th className="text-secondary" scope="col">Phone</th>
//                 <th className="text-secondary" scope="col">Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                   appointments.map((appointment, index) => 
                        
//                     <tr>
//                         <td>{appointment.name}</td>
//                         <td>{appointment.phone}</td>
//                         <td>{appointment.email}</td>
//                     </tr>
//                     )
//                 }
//             </tbody>
//         </table>
//     );
// };

// export default AppointmentShortList;