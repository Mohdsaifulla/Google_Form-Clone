import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  // {
  //   email: "",
  //   name: "",
  //   age: "",
  //   educationLevel: "option1",
  //   institute: "",
  //   study: "",
  //   notes: "",
  //   canadaInstitute: "",
  //   tuitionFee: "",
  //   whichCountry: "", 
  //   didUDoGic: "",
  // }

  const [form, setForm] = useState([]);
  const handleForm = async(e) => {
    e.preventDefault();
const fetchData= await fetch("http://localhost:5000/form-server",{
  method:"POST",
  body:JSON.stringify(form),
  headers:{
    "Content-Type":"application/json",
  }
})
alert("your data is submitted you will be getting email")
console.log(fetchData)
const data=await fetchData.json()
console.log(data)
  };
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const clearForm=()=>{
  
    window.location.reload();
  }

  return (
    <>
      <div className="p-2 mt-10 flex flex-col justify-center items-center gap-4">
        <div className= "grid gap-2 grid-cols-3 border bg-white border-gray-300 shadow-xl rounded-lg p-4 w-[76%] h-full ">
          <img src="https://img.freepik.com/free-photo/view-3d-boy-using-laptop_23-2150709886.jpg" className="md:h-48 h-20 "/>
          <img src="https://img.freepik.com/premium-photo/beautiful-animal-with-magical-color_593294-20347.jpg" className="md:h-48 h-20"/>
          <img src="https://img.freepik.com/free-photo/3d-rendering-kid-playing-online_23-2150898631.jpg" className="md:h-48 h-20" />
        </div>
        <div className="flex flex-col justify-start items-start  border bg-white border-gray-300 shadow-xl rounded-lg p-4 w-[76%]">
          <h1 className="text-2xl font-bold">Customized SOP Generator</h1>
          <div className="border border-b-gray-400 w-full h-[0.5px]"></div>

          <p className="pt-4 pb-4">
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs. If you would like to get it edited, reviewed, or
            drafted by our experts, you can get
          </p>
          <div className="border border-b-gray-400 w-full h-[0.5px]"></div>
          <p className="text-red-600">* Indicates required question</p>
        </div>
      </div>
      <form
        className="flex justify-center flex-col items-center gap-4 mb-10"
        onSubmit={handleForm}
      >
        <div className="inputfields">
          <label>Email *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>Full Name *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>Age *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="age"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>Highest Level of Education *</label>
          <select
            className="border border-gray-400 rounded p-2"
            name="educationLevel"
            onChange={handleInput}
          >
            <option value="Grade 12">Grade 12</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="inputfields">
          <label>
            Institute where you completed your highest level of education *
          </label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="institute"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>What did you study *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="study"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>What did you study *</label>
          <p>
            Write None if no work experience. Provide the following details if
            yes:
          </p>
          <ul>
            <li>1.Job Title</li>
            <li>2.Company Name</li>
            <li>3.Job duties</li>
          </ul>
          <p>
            Sample Answer: I worked as a Web Developer  at XYZ Company from Jan 2022 till Feb 2023. In this role, I managed Frontend operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </p>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="notes"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>What institute did you get admitted to in Canada? *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="canadaInstitute"
            onChange={handleInput}
          />
        </div>

        <div className="inputfields">
          <label>Did you pay your first year tuition? *</label>
          <label>
            <input
              type="radio"
              name="tuitionFee"
              value="yes"
              // checked={'fee' === "yes"}
              onChange={handleInput}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="tuitionFee"
              value="no"
              // checked={'fee' === "no"}
              onChange={handleInput}
            />
            No
          </label>
        </div>
        <div className="inputfields">
          <label>Which country are you applying from? *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
            name="whichCountry"
            onChange={handleInput}
          />
        </div>
        <div className="inputfields">
          <label>Did you do a GIC? *</label>
          <label>
            <input
              type="radio"
              name="didUDoGic"
              value="yes"
              // checked={didUDoGic === "yes"}
              onChange={handleInput}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="didUDoGic"
              value="no"
              // checked={didUDoGic === "no"}
              onChange={handleInput}
            />
            No
          </label>
        </div>
        <div className="flex justify-between items-center  w-9/12">
          <button className="bg-blue-400 p-2 rounded-md w-20 text-black hover:bg-blue-300 duration-300 font-semibold">
            Submit
          </button>
          <p className="text-blue-600 cursor-pointer hover:text-red-500 duration-300 font-semibold" onClick={clearForm}>Clear Form</p>
        </div>
        <div className="flex flex-col w-9/12  text-sm gap-4 text-left ">
          <p>Never submit passwords through Google Forms.</p>
          <p>
            This content is neither created nor endorsed by Google.
            <span className="underline cursor-pointer">Report Abuse</span>-
            <span className="underline cursor-pointer">Terms of Service</span> -
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
          <h1 className="text-center text-2xl font-bold text-gray-500">
            Google Forms
          </h1>
          <p className="text-center  font-bold text-gray-500">
            Made with ❤️ by saif
          </p>
        </div>
      </form>
    </>
  );
};

export default App;
