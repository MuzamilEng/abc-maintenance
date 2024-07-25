import React, { useState } from "react";
import { reportDataForm } from "../assets/data";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ContactForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

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

  const apiUrl = import.meta.env.VITE_API_URL;
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const resp = await axios.post(`${apiUrl}/maintenance`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return resp;
    },
    onSuccess: (data) => {
      alert("Form submitted successfully!");
    },
    onError: (error) => {
      alert("Form submission failed!");
    },
  });

  const handleFileChange = (e) => {
    setSelectedFiles((prev) => [...prev, e.target.files]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    // Append text fields to FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Append selected files to FormData
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });
    console.log(selectedFiles);
    mutation.mutate(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-section-titles">1. Tell us about you</div>
      <div className="gform-body gform_body">
        {reportDataForm?.map((item, index) => (
          <div
            key={index}
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
                      placeholder="How can ABC help you?"
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
                  <div className="ginput_container ginput_container_radio">
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

        <Controller
          name="emailOptIn"
          control={control}
          render={({ field }) => (
            <>
              <input type="radio" value="YES! SIGN ME UP" id="yes" {...field} />
              <label htmlFor="yes">YES! SIGN ME UP</label>
              <input type="radio" value="NO THANKS" id="no" {...field} />
              <label htmlFor="no">NO THANKS</label>
            </>
          )}
        />
      </div>
      <h2>2. Service Type</h2>
      <div className="border-[1px] p-[1vw] ">
        <p>Is this your first experience with ABC?</p>

        <Controller
          name="firstExperience"
          control={control}
          render={({ field }) => (
            <>
              <input type="radio" value="YES" id="firstYes" {...field} />
              <label htmlFor="firstYes">YES</label>
              <input type="radio" value="NO" id="firstNo" {...field} />
              <label htmlFor="firstNo">NO</label>
            </>
          )}
        />
      </div>
      <div className="border-[1px] p-[1vw] ">
        <p>Are you interested in our ABC Plan?</p>

        <Controller
          name="abcPlan"
          control={control}
          render={({ field }) => (
            <>
              <input type="radio" value="YES" id="abcYes" {...field} />
              <label htmlFor="abcYes">YES</label>
              <input
                type="radio"
                value="NO at this time"
                id="abcNo"
                {...field}
              />
              <label htmlFor="abcNo">NO at this time</label>
            </>
          )}
        />
      </div>
      <div className="mt-[2vw] flex justify-center ">
        {[1, 2, 3].map((elem, ind) => (
          <div key={ind} className=" w-full max-w-[20vw] ml-[4vw]">
            <input
              type="file"
              name="files"
              multiple
              onChange={handleFileChange}
            />
          </div>
        ))}
      </div>
      <div className="">
        <button type="submit" className=" mt-[2vw] button btn btn-primary">
          {mutation.isPending ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
