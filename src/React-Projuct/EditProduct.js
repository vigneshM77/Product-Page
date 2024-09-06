import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const EditProduct = () => {
  const { _id } = useParams();
  const { state } = useLocation();
  const [validationErrors, setValidationErrors] = useState({});
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let check = state?.product;
    setInitialData(check);
  }, [state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

     // Ensure the product ID is sent to the backend
    

    try {
        const formData = new FormData(event.target);
        formData.append("id", _id);
        formData.append("Name",initialData.Name)
        formData.append("Description",initialData.Description)
        formData.append("Price",initialData.Price)

      const response = await axios.put(
        `http://localhost:6001/product/update/`, 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        toast.success("Product updated successfully");
        navigate("/Admin/Products");
      } else {
        setValidationErrors(response.data);
      }
    } catch (error) {
      toast.error("Unable to update the product!");
      console.error("Error updating product:", error.response?error.response.data:error.message);
    }
  };

  return (
    <div className="product-container">
      <div className="col-md-8 mx-auto">
        <h2 className="text-center mb-5">Edit Product</h2>
      </div>

      {initialData && (
        <form onSubmit={handleSubmit} className="Form-control">
          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Product Name:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="Name"
                defaultValue={initialData.Name}
                required
              />
              <span className="text-danger">{validationErrors.Name}</span>
            </div>
          </div>

          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Price:</label>
            <div className="col-sm-8">
              <input
                type="number"
                className="form-control"
                name="Price"
                defaultValue={initialData.Price}
                required
              />
              <span className="text-danger">{validationErrors.Price}</span>
            </div>
          </div>

          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Description:</label>
            <div className="col-sm-8">
              <textarea
                name="Description"
                rows="4"
                cols="50"
                className="form-control"
                defaultValue={initialData.Description}
                required
              ></textarea>
              <span className="text-danger">{validationErrors.Description}</span>
            </div>
          </div>

          {/* <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Image:</label>
            <div className="col-sm-8">
              <input type="file" className="form-control" name="Image" />
            </div>
          </div> */}

          <div className="row mb-3">
            <div className="offset-sm-4 col-sm-8">
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
