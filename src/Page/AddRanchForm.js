import React,{useState,useEffect} from "react";

const AddRanchForm = ({setData,setTab}) => {
    const [contactPerson, setContactPerson] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const validateForm = () => {
        let errors = {};
        if (!contactPerson) errors.contactPerson = "Contact Person is required.";
        if (!email) errors.email = "Email is required.";
        if (!phoneNumber) errors.phoneNumber = "Phone Number is required.";
        if (!zipCode) errors.zipCode = "Zip Code is required.";
        if (!city) errors.city = "City is required.";
        if (!state) errors.state = "State is required.";
    
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSave = () => {
        const isValid = validateForm();
        if (isValid) {
          const newData = {
            contactPerson,
            email,
            phoneNumber,
            zipCode,
            city,
            state
          };
          setData({...newData})
          setContactPerson("");
          setEmail("");
          setPhoneNumber("");
          setZipCode("");
          setCity("");
          setState("");
        }
      };
   
  return (
    <div className="demobook-wrapper px-3">
    <div className="d-flex justify-content-between align-items-center">
      <h4 className="py-3">Add Ranch</h4>
    </div>
    <div className="form-wrapper p-3">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="contactPerson" className="form-label">
              Contact Person<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="contactPerson"
              placeholder="Enter Contact Person"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
            {formErrors.contactPerson && (
              <div className="text-danger">{formErrors.contactPerson}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <div className="text-danger">{formErrors.email}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {formErrors.phoneNumber && (
              <div className="text-danger">{formErrors.phoneNumber}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">
              Zip Code<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            {formErrors.zipCode && (
              <div className="text-danger">{formErrors.zipCode}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {formErrors.city && (
              <div className="text-danger">{formErrors.city}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State<span className="text-danger">*</span>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="Enter State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            {formErrors.state && (
              <div className="text-danger">{formErrors.state}</div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 my-2">
          <div>
            <button className="cancel" onClick={()=>setTab(1)}>Cancel</button>
          </div>
          <div>
            <button className="save" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddRanchForm;
