import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import uuid from "react-uuid";
import AddressBlock from "./AddressBlock";
import AddressForm from "./AddressForm";

export default function AddressContainer() {
  const initialFormValues = {
    name: "",
    mobileNo: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    isEditing: false
  };
  const [formvalues, setFormValues] = useState(initialFormValues);

  const [address, setAddress] = useState(false);
  const [listOfAddress, setListOfAddress] = useState([
    {
      id: uuid(),
      name: "Baliye",
      mobileNo: "9998889988",
      pincode: "123212",
      address: "Just around you",
      city: "in the state",
      state: "in the country",
      isEditing: false
    }
  ]);
  // const [editValues, setEditValues] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValues((f) => {
      return { ...f, [name]: value };
    });
  }

  function cancleClick(e) {
    setAddress(false);
    setFormValues(initialFormValues);
  }

  return (
    <>
      <div className="address-box">
        <div>
          <h1>Manage Address</h1>
        </div>
        {address ? (
          <AddressForm
            handleChange={handleChange}
            values={formvalues}
            cancleClick={cancleClick}
          />
        ) : (
          <button
            onClick={() => {
              console.log("clicked");
              setAddress(true);
              setFormValues(initialFormValues);
            }}
          >
            <span className="addressBtn">
              <FaPlus />
              Add a New Address
            </span>
          </button>
        )}
      </div>
    </>
  );
}
