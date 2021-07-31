import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddProducts = () => {
    return (
        <div  className="container-fluid row" >
        <div className="col-md-2">
         <Sidebar></Sidebar>
         </div>
         <div className="col-md-10 mt-5"  style={{paddingLeft:"100px",backgroundColor: "#F4FDFB" }}>
            <h3 className="text-success">Add Products</h3> 
        <form>
           <div className="form-group mt-3 w-50">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" className="form-control" name ="name" placeholder="Enter Product Name"/>
           </div>
          <div className="form-group  mt-3  w-50">
             <label for="exampleInputPassword1">Add Price</label>
             <input type="text" className="form-control"  name ="name" placeholder="Enter Price"/>
          </div>
          <div className="form-group  mt-3  w-50">
             <label for="exampleInputPassword1">Weight</label>
             <input type="text" className="form-control"  name ="name" placeholder="Enter Weight"/>
          </div>
          <div className="form-group  mt-3  w-50">
             <label for="exampleInputPassword1">Upload a image</label>
             <input type="file" className="form-control"  name ="image" placeholder="Picture"/>
          </div>
     
            <button type="submit" className="btn btn-success mt-3">Submit</button>
        </form>
       </div>
    </div>
    );
};

export default AddProducts;