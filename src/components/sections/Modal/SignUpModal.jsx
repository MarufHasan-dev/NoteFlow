import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useState } from "react";
import { useModalContext } from "../../../context/ModalContext";

const initialState = {
  email: "",
  password: "",
};

export default function SignUpModal() {
  const { setActiveModal } = useModalContext();
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

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
      setActiveModal("");
      // submit to a database...
    }
  }

  return (
    <section className="grid max-w-3xl grid-cols-2">
      <div className="bg-[url('./././assets/Noise.webp')] bg-primary-1300 flex flex-col justify-center items-center gap-y-4 p-10 bg-repeat">
        <h4 className="text-primary-50 font-bold text-4xl/12 tracking-tight text-center">
          Lets Get You Signed Up
        </h4>
        <p className="text-lg/8 font-light text-primary-100 text-center">
          No charges, no fees. Get note taking in minutes!
        </p>
      </div>
      <div className="flex flex-col gap-y-24 p-10 bg-primary-1400 bg-[url('./././assets/Noise.webp')] bg-repeat">
        <button
          className="box-border w-11 h-11 border-2 border-primary-50 rounded-xl flex justify-center items-center hover:bg-primary-50 group transition-properties cursor-pointer item ml-auto"
          onClick={() => setActiveModal("")}
        >
          <Close
            width={2}
            className="stroke-primary-50 group-hover:stroke-primary-1400 transition-properties"
          />
        </button>
        <div className="flex flex-col gap-y-6">
          <label className="text-primary-50 font-bold text-lg/8 tracking-tight flex flex-col items-start gap-y-2">
            Email
            <input
              className="text-primary-1500 text-base/loose font-light bg-primary-75 rounded-full py-4 px-8 placeholder:text-primary-1500/20 w-full"
              placeholder="janedone@gmail.com"
              name="email"
              type="email"
              onChange={handleInputs}
              value={inputs.email}
            />
          </label>
          <label className="text-primary-50 font-bold text-lg/8 tracking-tight flex flex-col items-start gap-y-2">
            Password
            <input
              className="text-primary-1500 text-base/loose font-light bg-primary-75 rounded-full py-4 px-8 placeholder:text-primary-1500/20 w-full"
              placeholder="*************"
              name="password"
              type="password"
              onChange={handleInputs}
              value={inputs.password}
            />
          </label>
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className="flex items-center justify-center gap-x-2"
            onClick={() => setChecked((prev) => !prev)}
          >
            <button
              className={`box-border w-4 h-4 border-[1.5px] border-primary-100 flex items-center justify-center rounded-sm transition-properties cursor-pointer ${
                checked ? "bg-primary-100" : "bg-none"
              }`}
            >
              <Checkmark width={2} className="stroke-primary-1400" />
            </button>
            <p className="text-primary-100 text-sm/5 font-normal cursor-pointer">
              I agree to all terms
            </p>
          </div>
          <button
            className="bg-primary-500 rounded-full text-primary-1300 font-normal text-lg/8 tracking-tight py-4 px-8 w-full cursor-pointer primary-glow-hover transition-properties hover:font-semibold"
            onClick={handleSubmit}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
