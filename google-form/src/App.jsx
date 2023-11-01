import React from "react";

const App = () => {
  return (
    <>
      <div className="p-2 mt-10 flex flex-col justify-center items-center gap-4">
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
      <form className="flex justify-center flex-col items-center gap-4 mb-10">
        <div className="inputfields">
          <label>Email *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Full Name *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Age *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Highest Level of Education *</label>
          <select className="border border-gray-400 rounded p-2">
            <option value="option1">Grade 12</option>
            <option value="option2">Diploma</option>
            <option value="option3">Bachelors Degree</option>
            <option value="option4">Masters Degree</option>
            <option value="option5">PhD</option>
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
          />
        </div>
        <div className="inputfields">
          <label>What did you study *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>What did you study *</label>
          <p>
            {" "}
            Write None if no work experience. Provide the following details if
            yes:
          </p>
          <ul>
            <li>1.Job Title</li>
            <li>2.Company Name</li>
            <li>3.Job duties</li>
          </ul>
          <p>
            Sample Answer: I worked as a Sales Manager at Effizient Immigration
            Inc from Jan 2022 till Feb 2023. In this role, I managed sales
            operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </p>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>What institute did you get admitted to in Canada? *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Which country are you applying from? *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Did you pay your first year tuition? *</label>
          <label>
            <input type="radio" name="yes-no-options" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="yes-no-options" value="yes" />
            No
          </label>
        </div>
        <div className="inputfields">
          <label>Which country are you applying from? *</label>
          <input
            className="border-b-2 text-sm w-full outline-none focus:border-b-gray-500"
            required
            placeholder="Your answer"
          />
        </div>
        <div className="inputfields">
          <label>Did you do a GIC? *</label>
          <label>
            <input type="radio" name="yes-no-options" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="yes-no-options" value="yes" />
            No
          </label>
        </div>
        <div className="flex justify-center items-center gap-56">
          <button className="bg-blue-400 p-2 rounded-md w-20 text-black font-bold">
            Submit
          </button>
          <p className="text-blue-600 cursor-pointer">Clear Form</p>
        </div>
        <div className="flex flex-col w-9/12  text-sm gap-4 text-left">
          <p>Never submit passwords through Google Forms.</p>
          <p>
            This content is neither created nor endorsed by Google.
            <span className="underline cursor-pointer">Report Abuse</span>-
            <span className="underline cursor-pointer">Terms of Service</span> -
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
          <h1 className="text-center text-2xl font-bold text-gray-500">Google Forms</h1>
        </div>
      </form>
    </>
  );
};

export default App;
