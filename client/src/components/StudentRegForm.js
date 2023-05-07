import React from 'react'
// import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css'
const StudentRegForm = () => {
  const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})
backBtn.addEventListener("click", () => form.classList.remove('secActive'));
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/*--======== CSS ======== */}
    
    {/*--===== Iconscout CSS ===== */}
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
    <title>Hostel Regisration Form </title>
    <div className="container">
      <header> Hostel Registration</header>
      <form action="#">
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-field">
                <label>Date of Birth</label>
                <input type="date" placeholder="Enter birth date" required />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-field">
                <label>Mobile Number</label>
                <input type="number" placeholder="Enter mobile number" required />
              </div>
              <div className="input-field">
                <label>Gender</label>
                <select required>
                  <option disabled selected>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="input-field">
                <label>Blood Group</label>
                <select required>
                  <option disabled selected>Select BloodGroup</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>
          </div>
          <div className="details ID">
            <span className="title">College Details</span>
            <div className="fields">
              <div className="input-field">
                <label>College Name</label>
                <select required>
                  <option disabled selected>Select College Name</option>
                  <option>College Of Engineering, Guindy</option>
                </select>
              </div>
              <div className="input-field">
                <label>Roll Number</label>
                <input type="text" placeholder="Enter your Roll Number" required />
              </div>
              <div className="input-field">
                <label>Degree</label>
                <select required>
                  <option disabled selected>Select Degree</option>
                  <option>B.E Computer Science and Eng.</option>
                  <option>B.E Civil Science and Eng.</option>
                  <option>B.E Electrical and Electronical and Eng.</option>
                  <option>B.E Miomedical and Eng.</option>
                  <option>B.E Electronics and communication and Eng.</option>
                  <option>B.Tech Information Technology.</option>
                  <option>M.E Computer Science and Eng.</option>
                  <option>M.E Civil Science and Eng.</option>
                  <option>M.E Electrical and Electronical and Eng.</option>
                  <option>M.E Biomedical and Eng.</option>
                  <option>M.E Electronics and communication and Eng.</option>
                  <option>M.Tech Information Technology.</option>
                  <option>MSC Integrated CS/IT</option>
                  <option>PHD</option>
                </select>
              </div>
              <div className="input-field">
                <label>Year</label>
                <input type="text" placeholder="Enter Year of Study" required />
              </div>
              <div className="input-field">
                <label>Semester</label>
                <input type="text" placeholder="Enter Semester" required />
              </div>
              <div className="input-field">
                <label>Joining Date</label>
                <input type="date" placeholder="Enter your joining date" required />
              </div>
            </div>
            <button className="nextBtn">
              <span className="btnText">Next</span>
              <i className="uil uil-navigator" />
            </button>
          </div> 
        </div>
        <div className="form second">
          <div className="details address">
            <span className="title">Address Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Nationality</label>
                <input type="text" placeholder="Enter nationality" required />
              </div>
              <div className="input-field">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>
              <div className="input-field">
                <label>District</label>
                <input type="text" placeholder="Enter your district" required />
              </div>
              <div className="input-field">
                <label>House Number</label>
                <input type="number" placeholder="Enter House number" required />
              </div>
              <div className="input-field">
                <label>Street/Area/Locality</label>
                <input type="text" placeholder="Enter Address" required />
              </div>
              <div className="input-field">
                <label>Pincode</label>
                <input type="number" placeholder="Enter Pincode" required />
              </div>
            </div>
          </div>
          <div className="details family">
            <span className="title">Parents Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Father Name</label>
                <input type="text" placeholder="Enter father name" required />
              </div>
              <div className="input-field">
                <label>Mobile Number</label>
                <input type="number" placeholder="Enter mobile number" required />
              </div>
              <div className="input-field">
                <label>Occupation</label>
                <input type="text" placeholder="Enter Occupation" required />
              </div>
              <div className="input-field">
                <label>Mother Name</label>
                <input type="text" placeholder="Enter Mother name" required />
              </div>
              <div className="input-field">
                <label>Mobile Number</label>
                <input type="number" placeholder="Enter mobile number" required />
              </div>
              <div className="input-field">
                <label>Occupation</label>
                <input type="text" placeholder="Enter Occupation" required />
              </div>
            </div>
            <div className="buttons">
              <div className="backBtn">
                <i className="uil uil-navigator" />
                <span className="btnText">Back</span>
              </div>
              <button className="sumbit">
                <span className="btnText">Submit</span>
                <i className="uil uil-navigator" />
              </button>
            </div>
          </div> 
        </div>
      </form>
    </div>
  </div>
  )
}

export default StudentRegForm
