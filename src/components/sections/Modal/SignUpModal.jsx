import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useState } from "react";
import { input } from "motion/react-client";

const initialState = {
  email: "",
  password: "",
};

export default function SignUpModal() {
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  console.log(checked);
  console.log(inputs);

  function handleInputs(e) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked) {
      console.log(inputs);
      setInputs(initialState);
      // close model
      // submit to a database...
    }
  }

  return (
    <section>
      <div>
        <h4>Lets Get You Signed Up</h4>
      </div>
      <p>No charges, no fees. Get note taking in minutes!</p>
      <div>
        <button>
          <Close />
        </button>
        <div>
          <label>
            Email
            <input
              placeholder="janedone@gmail.com"
              name="email"
              type="email"
              onChange={handleInputs}
              value={inputs.email}
            />
          </label>
          <label>
            Password
            <input
              placeholder="*************"
              name="password"
              type="password"
              onChange={handleInputs}
              value={inputs.password}
            />
          </label>
        </div>
        <div>
          <div onClick={() => setChecked((prev) => !prev)}>
            <button>
              <Checkmark />
            </button>
            <p>I agree to all terms</p>
          </div>
          <button onClick={handleSubmit}>Get Started</button>
        </div>
      </div>
    </section>
  );
}
