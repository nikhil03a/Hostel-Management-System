import React, { useState } from 'react'
const WardenRegForm = () => {
  const [details, setdetails] = useState({
    name: "",
    email: "",
    dob: "",
    mobile: "",
    gender: "",
    bloodgroup: "",
    clgname: "",
    rollno: "",
    degree: "",
    year: "",
    semester: "",
    joindate: "",
    fname: "",
    fphone: "",
    foccupation: "",
    mname: "",
    mphone: "",
    moccupation: "",
    address: "",
    city: "",
    country: "",
    pcode: "",
    about: ""

  });

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setdetails((prev) => {
          return { ...prev, [name]: value };
    });
  }
  



  return (
    <div>
      
      <section className=" py-1 bg-blueGray-50">
  <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Register as Student</h6>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Student Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Name
                </label>
                <input required
                  type="text"
                  name='name'
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name='email'
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name='dob'
                  required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  name='mobile'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label>
                  Gender
                </label>
                <select  name='gender' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  htmlfor="grid-password" required
                  onChange={handlechange}>
                    <option disabled selected>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Blood Group
                </label>
                <select name='bloodgroup' required className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" onChange={handlechange}>
                <option disabled selected>Select Blood Group</option>
                  <option value='O+' >O+</option>
                  <option value='O-' >O-</option>
                  <option value='A+' >A+</option>
                  <option value='B+' >B+</option>
                  <option value='A-' >A-</option>
                  <option value='B-' >B-</option>
                  <option value='AB+' >AB+</option>
                  <option value='AB-' >AB-</option>
                </select>
              </div>
            </div>
          </div>
          <br></br>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            College Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                 College Name
                </label>
                <select name='name' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 >
                  <option value='CEG'>CEG</option>
                </select>
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  ROll Number
                </label>
                <input
                  type="number" required
                  name='rollno'
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Degree
                </label>
                <select name='degree' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option disabled selected>Select Degree</option>
                                <option value='B.E Computer Science and Eng.'>B.E Computer Science and Eng.</option>
                                <option value='B.E Civil Science and Eng.'>B.E Civil Science and Eng.</option>
                                <option value='B.E Electrical and Electronical and Eng.'>B.E Electrical and Electronical and Eng.</option>
                                <option value='B.E Biomedical and Eng.'>B.E Biomedical and Eng.</option>
                                <option vlaue='B.E Electronics and communication and Eng.'>B.E Electronics and communication and Eng.</option>
                                <option value='B.Tech Information Technology.'>B.Tech Information Technology.</option>
                                <option value='M.E Computer Science and Eng.'>M.E Computer Science and Eng.</option>
                                <option value='M.E Civil Science and Eng.'>M.E Civil Science and Eng.</option>
                                <option value='M.E Electrical and Electronical and Eng.'>M.E Electrical and Electronical and Eng.</option>
                                <option value='M.E Biomedical and Eng.'>M.E Biomedical and Eng.</option>
                                <option value='M.E Electronics and communication and Eng.'>M.E Electronics and communication and Eng.</option>
                                <option value='M.Tech Information Technology.'>M.Tech Information Technology.</option>
                                <option value='MSC Integrated CS/IT'>MSC Integrated CS/IT</option>
                                <option value='PHD'>PHD</option>
                </select>
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Year
                </label>
                <input
                  type="number"
                  name='year' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label>
                  Semester
                </label>
                <input
                  type="number"
                  name='semester' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Joining date
                </label>
                <input
                  type="date"
                  name='joindater' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
          </div>
          <br></br>

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Family Information
          </h6>
          <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                   Father Name
                </label>
                <input
                  type="text"
                  name='fathername' required
                  onChange={handlechange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Father Mobile Number
                </label>
                <input
                  type="number"
                  name='fphone'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                   Father Occupation
                </label>
                <input
                  type="text"
                  name='foccupation'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                   Mother Name
                </label>
                <input
                  type="text"
                  name='fname'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Mother Mobile Number
                </label>
                <input
                  type="number"
                  name='mphone'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Mother Occupation
                </label>
                <input
                  type="text"
                  name='moccupation'
                  onChange={handlechange} required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Address
                </label>
                <input
                  type="text"
                  name='address' required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  City
                </label>
                <input
                  type="text"
                  name='city' required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Country
                </label>
                <input
                  type="text"
                  name='country' required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  name='pcode' required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            About Student
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  About Yourself
                </label>
                <textarea
                  type="text"
                  name='about'
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows={4}
                  defaultValue={
                    " Tell us about yourself."
                  }
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button>Submit</button>
      <br>
      </br>
    </div>
    
    
  </div>
</section>

    </div>
  )
}

export default WardenRegForm

