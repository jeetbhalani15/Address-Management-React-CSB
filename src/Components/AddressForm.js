import React from "react";

export default function AddressForm({ values, handleChange, cancleClick }) {
  return (
    <>
      <div className="address-box">
        <form>
          <div>
            <FormInputFields
              type="text"
              placeholder="Name"
              id="name"
              handleChange={handleChange}
              name="name"
              value={values.name}
            />
          </div>
          <div>
            <FormInputFields
              type="text"
              placeholder="Mobile no"
              name="mobileNo"
              id="mobile no"
              handleChange={handleChange}
              value={values.mobileNo}
            />
          </div>
          <div>
            <FormInputFields
              type="text"
              placeholder="Pincode"
              name="pincode"
              id="pincode"
              value={values.pincode}
              handleChange={handleChange}
            />
          </div>
          <div>
            <textarea
              id="address"
              cols="30"
              rows="10"
              className="w-100 p-sm border-sm"
              placeholder="Address(Area and Street)"
              name="address"
              onChange={handleChange}
              value={values.address}
            ></textarea>
          </div>
          <div>
            <FormInputFields
              type="text"
              placeholder="City/Street/Town"
              value={values.City}
              name="city"
              id="city"
              handleChange={handleChange}
            />
          </div>
          <div>
            <input type="text" placeholder="State" />
            <select></select>
          </div>
          <div>
            <button>Save</button>
            <button onClick={() => cancleClick()}>Cancle</button>
          </div>
        </form>
      </div>
    </>
  );
}

function FormInputFields({
  type,
  placeholder,
  id,
  name,
  value,
  handleChange,
  required
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      name={name}
      onChange={handleChange}
      required
    />
  );
}
