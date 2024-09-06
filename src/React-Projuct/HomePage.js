import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";
import axios from "axios";
// import Dashboard from "../React-Projuct/layout"

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:6001/product/get");
      setProducts(response.data.data);
    } catch (error) {
      toast.error("Error fetching the products");
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProduct = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:6001/product/deleted/${_id}`);
      if (response.status === 200) {
        // Remove the deleted product from the UI
        setProducts(products.filter((product) => product._id !== _id));
        toast.success("Product deleted successfully");
      } else {
        toast.error("Failed to delete the product");
      }
    } catch (error) {
      toast.error("Error deleting the product");
      console.error("Error deleting the product:", error);
    }
  };

 

  const handleEditClick = (product) => {
    // delete product._id
    navigate(`/Admin/Products/edit/${product._id}`, {state:{product:product}});
  };

  return (
    <>
      {/* <Dashboard/> */}
      <div className="container my-4">
        {/* <h1 className="text-center mb-4">Product List</h1> */}
        <div className="row mb-3">
          <div className="col d-flex">
            <h4 className="mb-3">List of Products</h4>
            <button
              className="btn text-light me-1 px-3 mx-4"
              style={{ background: "blueviolet" }}
              onClick={() => navigate("/Admin/Products/Create")}
            >
              Add +
            </button>
          </div>
        </div>
        {products.length > 0 ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                {/* <th scope="col">Image</th> */}
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.Id}</td>
                  <td>{product.Name}</td>
                  <td>{product.Description}</td>
                  {/* <td>
                    <img
                      src={`http://localhost:6001/public/React-img-folder/${product.Image}`}
                      width="100%"
                      alt="Product"
                    />
                  </td> */}
                  <td>{product.Price}</td>
                  <td style={{ width: "15px", whiteSpace: "nowrap" }}>
                    <div className="action d-flex">
                      <div style={{ color: "blueviolet" }}>
                        <button
                          className="btn btn-sm me-1 editbtn"
                          onClick={() => handleEditClick(product)}
                        >
                          <i className="bi bi-pencil-fill text-white"></i>
                        </button>
                
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteProduct(product._id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </>
  );
};
