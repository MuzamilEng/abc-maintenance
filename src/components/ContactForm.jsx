import React from "react";
import { reportDataForm } from "../assets/data";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      phoneType: "",
      emailAddress: "",
      confirmEmailAddress: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      postCode: "",
      aboutUs: "",
      projectDetails: "",
    },
  });

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = (data) => {
    emailjs
      .send("service_qyq7spj", "template_9am60qk", data, "8MEJNThVpecvJtrCU")
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-section-titles">1. Tell us about you</div>
      <div className="gform-body gform_body">
        {reportDataForm?.map((item, index) => (
          <div
            id="field_2_1"
            className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
            data-js-reload="field_2_1"
          >
            <label htmlFor="" className="gfield_label gform-field-label">
              {item?.label}
            </label>
            {item?.type === "text" ||
            item?.type === "number" ||
            item?.type === "email" ? (
              <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                  <div className="ginput_container ginput_container_text">
                    <input
                      {...field}
                      id="input_2_1"
                      onChange={handleInputChange}
                      value={field.value}
                      className="large"
                      type={item?.type}
                      placeholder={item?.placeholder}
                      aria-invalid="false"
                      style={{ padding: "9px" }}
                    />
                  </div>
                )}
              />
            ) : item?.type === "select" ? (
              <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                  <div className="ginput_container ginput_container_select">
                    <select
                      id="input_2_5"
                      className="large gfield_select"
                      aria-invalid="false"
                      {...field}
                      onChange={handleInputChange}
                    >
                      <option className="text-vw" value="">
                        Select the option
                      </option>
                      {item?.options?.map((option, index) => (
                        <option
                          className="text-vw"
                          key={index}
                          value={option?.value}
                        >
                          {option?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              />
            ) : item?.type === "textarea" ? (
              <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                  <div className="ginput_container ginput_container_textarea">
                    <textarea
                      {...field}
                      name="input_18"
                      id="input_2_18"
                      className="textarea small p-[0.2vw]"
                      placeholder="How can ABC  help you?"
                      aria-invalid="false"
                      rows={5}
                      cols={5}
                      defaultValue={""}
                    />
                  </div>
                )}
              />
            ) : item?.type === "date" ? (
              <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                  <input
                    {...field}
                    onChange={handleInputChange}
                    className="text-vw md:p-0.5vw p-[1.5vw] border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none"
                    type={item?.type}
                    placeholder={item?.placeholder}
                  />
                )}
              />
            ) : item?.type === "radio" ? (
              <Controller
                name={item?.name}
                control={control}
                rules={item?.rules}
                render={({ field }) => (
                  <div
                    className="ginput_container ginput_container_radio"
                    onChange={handleInputChange}
                  >
                    {item?.options?.map((option, index) => (
                      <label key={index} className="mr-4">
                        <div className="gfield_radio" id="input_2_15">
                          <div className="gchoice gchoice_2_15_1">
                            <input
                              {...field}
                              type="radio"
                              value={option?.value}
                              checked={field.value === option?.value}
                            />
                          </div>
                          {option?.label}
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              />
            ) : null}

            <div>
              {errors[item?.name] && (
                <p className="text-red-500 text-2vw md:text-vw ml-8vw mt-[0.5vw]">
                  {errors[item?.name]?.message}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-[1px] p-[1vw] ">
        <p>Would you like to receive occasional tips and offers via email?</p>

        <input
          type="radio"
          value="YES! SIGN ME UP"
          name="YES! SIGN ME UP"
          id=""
        />
        <label htmlFor="">YES! SIGN ME UP</label>
        <input type="radio" value="NO THANKS" name="NO THANKS" id="" />
        <label htmlFor="">YES! SIGN ME UP</label>
      </div>
      <h2>2. Service Type</h2>
      <div className="border-[1px] p-[1vw] ">
        <p>Is this your first experience with ABC ?</p>

        <input type="radio" value="YES" name="service type" id="" />
        <label htmlFor="">YES</label>
        <input type="radio" value="NO" name="NO" id="" />
        <label htmlFor="">NO</label>
      </div>
      <div className="border-[1px] p-[1vw] ">
        <p>Are you interested in our ABC Plan?</p>

        <input type="radio" value="YES" name="YES" id="" />
        <label htmlFor="">YES</label>
        <input type="radio" value="NO at this time" name="service type" id="" />
        <label htmlFor="">NO at this time</label>
      </div>
      <div className="">
        <button className=" mt-[2vw] button btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
