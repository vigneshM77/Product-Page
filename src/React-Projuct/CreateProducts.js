import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const CreateProducts = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());

    // Simple validation
    if (
      !product.Id ||
      !product.Name ||
      !product.Description ||
      // !formData.get("Image") ||
      !product.Price
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:6001/product/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      if (response.status === 201 || response.status === 200) {
        navigate("/Admin/Products");
        toast.success("Product created successfully!");
      } else {
        setValidationErrors(data);
      }
    } catch (error) {
      toast.error("Unable to connect to the server!");
    }
  }

  return (
    <>
      <div className="product-container">
        <div className="col-md-8 mx-auto ">
          <h2 className="text-center mb-2">Product Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="Form-control " action="/multiple-upload" method="POST" encType="multiple">
          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Product Id :</label>
            <div className="col-sm-8">
              <input type="number" className="form-control " name="Id" />
              <span className="text-danger">{validationErrors.Id}</span>
            </div>
          </div>
          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Name :</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="Name" />
              <span className="text-danger">{validationErrors.Name}</span>
            </div>
          </div>
          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label">Description :</label>
            <div className="col-sm-8">
              <textarea
                name="Description"
                id="Description"
                rows="4"
                cols="50"
                className="form-control"
              ></textarea>
              <span className="text-danger">
                {validationErrors.Description}
              </span>
            </div>
          </div>
          {/* <div className="row mb-3 flex-column">
            <label
              className="col-sm-4 col-form-label"
              htmlFor="exampleFormControlFile1"
          
            >
              Image :
            </label>
            <div className="col-sm-8">
              <input
                type="file"
                multiple
                className="form-control"
                id="exampleFormControlFile1"
                name="Image"
              />
              <span className="text-danger">{validationErrors.Image}</span>
            </div>
          </div> */}
          <div className="row mb-3 flex-column">
            <label className="col-sm-4 col-form-label ">Price :</label>
            <div className="col-sm-8">
              <input
                type="number"
                className="form-control"
                name="Price"
                step="0.01"
                min="1"
              />
              <span className="text-danger">{validationErrors.Price}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8 create-btn">
              <button type="submit" className="btn" style={{backgroundColor:"blueviolet", color:"white"}}>
                Submit
              </button>
              <Link
                to="/Admin/Products"
                className="btn btn-secondary"
                role="button"
              >
                Cancel
              </Link>
            </div>
            <div className="col-sm-4 ">
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
