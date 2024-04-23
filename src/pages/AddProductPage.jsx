import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url.js";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner.jsx";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

// import baseURL from '../utilitis/url.js'
const AddProductPage = ({ update }) => {
  const { user } = useAuth() || {};
  const handleAddProduct = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const type = e.target.type.value;
    const email = user.email;

    // console.log(name, price, image, type)

    const info = { name, price, image, type, email };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
        alert("bhai data insert hoice")
      }
    })
   
  };

  return (
    <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {update ? "Update " : "Add "}
              </span>
              Your Product
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Brand Name
              </label>
              <select
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="Test" selected>
                  Test
                </option>
                <option value="Test2" selected>
                  Test2
                </option>
                <option value="Test3" selected>
                  Test3
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Type
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
