import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <>
       <Header />
        {/* .header */}
        <div id="content" className="main-content" role="main">
          <div className="wrap">
            <section
              className="content_1 section__wrapper "
              id="contact-anner"
            >
              <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      {/* <div className="section__content mt-[4vw]">
                        <h2 className="text-align-center ">CONTACT US</h2>
                        <h3 className="text-align-center">
                          Schedule an appointment online today to discuss your
                          projects with your local ABC .
                        </h3>
                        <hr className="contact-hr" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact_4 section__wrapper ">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="section__container">
                      <div className="section__content">
                        <h2
                          className="text-align-center"
                          style={{ textAlign: "center" }}
                        >
                          Select a Location to Contact your local ABC .
                        </h2>
                        <p style={{ textAlign: "center" }}>
                          <a
                            className="m-font-size-14 font-size-18"
                            href="../mi-jackson/index.html"
                            type="page"
                          >
                            Jackson, MI
                          </a>
                        </p>
                        <h2 style={{ textAlign: "center" }}>
                          Or Complete Our Contact Form to Connect with your
                          Local ABC  Technicians!
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row flex-row-reverse align-items-center">
                  <div className="col-12 ">
                    <div className="section__container">
                      <div className="contact_4_form section__form">
                        <div className="section__form_wrapper">
                          <div
                            className="gf_browser_chrome gform_wrapper gravity-theme gform-theme--no-framework"
                            data-form-theme="gravity-theme"
                            data-form-index={0}
                            id="gform_wrapper_2"
                          >
                            <form
                             
                            >
                              <div className="gform-body gform_body">
                                <div
                                  id="gform_fields_2"
                                  className="gform_fields top_label form_sublabel_below description_below validation_below"
                                >
                                  <div
                                    id="field_2_26"
                                    className="gfield gfield--type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_26"
                                  >
                                    <div className="form-section-titles">
                                      1. Tell us about you
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_1"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_1"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_1"
                                      style={{ fontSize: "100px" }}
                                    >
                                      First
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_1"
                                        id="input_2_1"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="First Name"
                                        aria-invalid="false"
                                        style={{ padding: "9px" }}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_3"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_3"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_3"
                                    >
                                      Last Name
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_3"
                                        id="input_2_3"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Last Name"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_4"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_4"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_4"
                                    >
                                      Phone Number
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_4"
                                        id="input_2_4"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Phone Number"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_5"
                                    className="gfield gfield--type-select gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_5"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_5"
                                    >
                                      Phone Type
                                    </label>
                                    <div className="ginput_container ginput_container_select">
                                      <select
                                        name="input_5"
                                        id="input_2_5"
                                        className="large gfield_select"
                                        aria-invalid="false"
                                      >
                                        <option
                                          value=""
                                          selected="selected"
                                          className="gf_placeholder"
                                        >
                                          Phone Type
                                        </option>
                                        <option value="Home">Home</option>
                                        <option value="Work">Work</option>
                                        <option value="Mobile">Mobile</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_6"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_6"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_6"
                                    >
                                      Email Address
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_6"
                                        id="input_2_6"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Email Address"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_7"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_7"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_7"
                                    >
                                      Confirm Email Address
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_7"
                                        id="input_2_7"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Confirm Email Address"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_8"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_8"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_8"
                                    >
                                      Address
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_8"
                                        id="input_2_8"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Address"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_9"
                                    className="gfield gfield--type-text gfield--width-half field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_9"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_9"
                                    >
                                      Apartment, suite, unit, etc.
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_9"
                                        id="input_2_9"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Apartment, suite, unit, etc."
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_11"
                                    className="gfield gfield--type-text gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_11"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_11"
                                    >
                                      City
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_11"
                                        id="input_2_11"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="City"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_30"
                                    className="gfield gfield--type-select gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_30"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_30"
                                    >
                                      State
                                    </label>
                                    <div className="ginput_container ginput_container_select">
                                      <select
                                        name="input_30"
                                        id="input_2_30"
                                        className="large gfield_select"
                                        aria-invalid="false"
                                      >
                                        <option
                                          value=""
                                          selected="selected"
                                          className="gf_placeholder"
                                        >
                                          State
                                        </option>
                                        <option value="AK">AK</option>
                                        <option value="AL">AL</option>
                                        <option value="AR">AR</option>
                                        <option value="AZ">AZ</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DC">DC</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="GU">GU</option>
                                        <option value="HI">HI</option>
                                        <option value="IA">IA</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="IT">IT</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="MA">MA</option>
                                        <option value="MD">MD</option>
                                        <option value="ME">ME</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MO">MO</option>
                                        <option value="MS">MS</option>
                                        <option value="MT">MT</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="NE">NE</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NV">NV</option>
                                        <option value="NY">NY</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="PR">PR</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VA">VA</option>
                                        <option value="VT">VT</option>
                                        <option value="WA">WA</option>
                                        <option value="WI">WI</option>
                                        <option value="WV">WV</option>
                                        <option value="WY">WY</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_13"
                                    className="gfield gfield--type-text gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_13"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_13"
                                    >
                                      Zip Code
                                    </label>
                                    <div className="ginput_container ginput_container_text">
                                      <input
                                        name="input_13"
                                        id="input_2_13"
                                        type="text"
                                        defaultValue=""
                                        className="large"
                                        placeholder="Zip Code"
                                        aria-invalid="false"
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_14"
                                    className="gfield gfield--type-select field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_14"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_14"
                                    >
                                      How did you hear about us?
                                    </label>
                                    <div className="ginput_container ginput_container_select">
                                      <select
                                        name="input_14"
                                        id="input_2_14"
                                        className="large gfield_select"
                                        aria-invalid="false"
                                      >
                                        <option
                                          value=""
                                          selected="selected"
                                          className="gf_placeholder"
                                        >
                                          How did you hear about us?
                                        </option>
                                        <option value="Door Hanger/Yard Sign">
                                          Door Hanger/Yard Sign
                                        </option>
                                        <option value="Angie's List">
                                          Angie's List
                                        </option>
                                        <option value="Home Advisor">
                                          Home Advisor
                                        </option>
                                        <option value="Yelp">Yelp</option>
                                        <option value="Yellow Pages">
                                          Yellow Pages
                                        </option>
                                        <option value="Television">
                                          Television
                                        </option>
                                        <option value="Radio">Radio</option>
                                        <option value="Newspaper">
                                          Newspaper
                                        </option>
                                        <option value="Mail/Postcard">
                                          Mail/Postcard
                                        </option>
                                        <option value="Email Marketing">
                                          Email Marketing
                                        </option>
                                        <option value="Social Media - Facebook, Twitter, Other">
                                          Social Media - Facebook, Twitter,
                                          Other
                                        </option>
                                        <option value="Vehicle Advertising">
                                          Vehicle Advertising
                                        </option>
                                        <option value="Referral">
                                          Referral
                                        </option>
                                        <option value="Gift Certificate">
                                          Gift Certificate
                                        </option>
                                        <option value="Internet Search">
                                          Internet Search
                                        </option>
                                        <option value="Other">Other</option>
                                      </select>
                                    </div>
                                  </div>
                                  <fieldset
                                    id="field_2_15"
                                    className="gfield gfield--type-radio gfield--type-choice field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_15"
                                  >
                                    <legend className="gfield_label gform-field-label">
                                      Would you like to receive occasional tips
                                      and offers via email?
                                    </legend>
                                    <div className="ginput_container ginput_container_radio">
                                      <div
                                        className="gfield_radio"
                                        id="input_2_15"
                                      >
                                        <div className="gchoice gchoice_2_15_0">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_15"
                                            type="radio"
                                            defaultValue="YES! SIGN ME UP."
                                            id="choice_2_15_0"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_15_0"
                                            id="label_2_15_0"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            YES! SIGN ME UP.
                                          </label>
                                        </div>
                                        <div className="gchoice gchoice_2_15_1">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_15"
                                            type="radio"
                                            defaultValue="NO THANKS"
                                            id="choice_2_15_1"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_15_1"
                                            id="label_2_15_1"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            NO THANKS
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                  <div
                                    id="field_2_27"
                                    className="gfield gfield--type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_27"
                                  >
                                    <div className="form-section-titles">
                                      2. Service Type
                                    </div>
                                  </div>
                                  <fieldset
                                    id="field_2_16"
                                    className="gfield gfield--type-radio gfield--type-choice gfield--width-half field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_16"
                                  >
                                    <legend className="gfield_label gform-field-label">
                                      Is this your first experience with
                                      ABC ?
                                    </legend>
                                    <div className="ginput_container ginput_container_radio">
                                      <div
                                        className="gfield_radio"
                                        id="input_2_16"
                                      >
                                        <div className="gchoice gchoice_2_16_0">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_16"
                                            type="radio"
                                            defaultValue="YES"
                                            id="choice_2_16_0"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_16_0"
                                            id="label_2_16_0"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            YES
                                          </label>
                                        </div>
                                        <div className="gchoice gchoice_2_16_1">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_16"
                                            type="radio"
                                            defaultValue="NO"
                                            id="choice_2_16_1"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_16_1"
                                            id="label_2_16_1"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            NO
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                  <fieldset
                                    id="field_2_17"
                                    className="gfield gfield--type-radio gfield--type-choice gfield--width-half field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_17"
                                  >
                                    <legend className="gfield_label gform-field-label">
                                      Are you interested in our ABC 
                                      Plan?
                                    </legend>
                                    <div className="ginput_container ginput_container_radio">
                                      <div
                                        className="gfield_radio"
                                        id="input_2_17"
                                      >
                                        <div className="gchoice gchoice_2_17_0">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_17"
                                            type="radio"
                                            defaultValue="YES"
                                            id="choice_2_17_0"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_17_0"
                                            id="label_2_17_0"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            YES
                                          </label>
                                        </div>
                                        <div className="gchoice gchoice_2_17_1">
                                          <input
                                            className="gfield-choice-input"
                                            name="input_17"
                                            type="radio"
                                            defaultValue="NOT AT THIS TIME"
                                            id="choice_2_17_1"
                                            onchange="gformToggleRadioOther( this )"
                                          />
                                          <label
                                            htmlFor="choice_2_17_1"
                                            id="label_2_17_1"
                                            className="gform-field-label gform-field-label--type-inline"
                                          >
                                            NOT AT THIS TIME
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                  <div
                                    id="field_2_28"
                                    className="gfield gfield--type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_28"
                                  >
                                    <div className="form-section-titles">
                                      3. Enter Project Details
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_18"
                                    className="gfield gfield--type-textarea field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_18"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_18"
                                    >
                                      How can ABC  help you?
                                    </label>
                                    <div className="ginput_container ginput_container_textarea">
                                      <textarea
                                        name="input_18"
                                        id="input_2_18"
                                        className="textarea small"
                                        placeholder="How can ABC  help you?"
                                        aria-invalid="false"
                                        rows={10}
                                        cols={50}
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_29"
                                    className="gfield gfield--type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_29"
                                  >
                                    Upload up to 3 images of your project
                                  </div>
                                  <div
                                    id="field_2_20"
                                    className="gfield gfield--type-fileupload gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_20"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_20"
                                    >
                                      File
                                    </label>
                                    <div className="ginput_container ginput_container_fileupload">
                                      <input
                                        type="hidden"
                                        name="MAX_FILE_SIZE"
                                        defaultValue={1536000}
                                      />
                                      <input
                                        name="input_20"
                                        id="input_2_20"
                                        type="file"
                                        className="large"
                                        aria-describedby="gfield_upload_rules_2_20"
                                        onchange="javascript:gformValidateFileSize( this, 1536000 );"
                                      />
                                      <span
                                        className="gfield_description gform_fileupload_rules"
                                        id="gfield_upload_rules_2_20"
                                      >
                                        Accepted file types: png, jpg, jpeg,
                                        Max. file size: 1 MB.
                                      </span>
                                      <div
                                        className="gfield_description validation_message gfield_validation_message validation_message--hidden-on-empty"
                                        id="live_validation_message_2_20"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_19"
                                    className="gfield gfield--type-fileupload gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_19"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_19"
                                    >
                                      File
                                    </label>
                                    <div className="ginput_container ginput_container_fileupload">
                                      <input
                                        type="hidden"
                                        name="MAX_FILE_SIZE"
                                        defaultValue={1536000}
                                      />
                                      <input
                                        name="input_19"
                                        id="input_2_19"
                                        type="file"
                                        className="large"
                                        aria-describedby="gfield_upload_rules_2_19"
                                        onchange="javascript:gformValidateFileSize( this, 1536000 );"
                                      />
                                      <span
                                        className="gfield_description gform_fileupload_rules"
                                        id="gfield_upload_rules_2_19"
                                      >
                                        Accepted file types: png, jpg, jpeg,
                                        Max. file size: 1 MB.
                                      </span>
                                      <div
                                        className="gfield_description validation_message gfield_validation_message validation_message--hidden-on-empty"
                                        id="live_validation_message_2_19"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_21"
                                    className="gfield gfield--type-fileupload gfield--width-third field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_21"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_21"
                                    >
                                      File
                                    </label>
                                    <div className="ginput_container ginput_container_fileupload">
                                      <input
                                        type="hidden"
                                        name="MAX_FILE_SIZE"
                                        defaultValue={1536000}
                                      />
                                      <input
                                        name="input_21"
                                        id="input_2_21"
                                        type="file"
                                        className="large"
                                        aria-describedby="gfield_upload_rules_2_21"
                                        onchange="javascript:gformValidateFileSize( this, 1536000 );"
                                      />
                                      <span
                                        className="gfield_description gform_fileupload_rules"
                                        id="gfield_upload_rules_2_21"
                                      >
                                        Accepted file types: png, jpg, jpeg,
                                        Max. file size: 1 MB.
                                      </span>
                                      <div
                                        className="gfield_description validation_message gfield_validation_message validation_message--hidden-on-empty"
                                        id="live_validation_message_2_21"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    id="field_2_25"
                                    className="gfield gfield--type-html gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_25"
                                  />
                                  <div
                                    id="field_2_31"
                                    className="gfield gfield--type-captcha gfield--width-full field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"
                                    data-js-reload="field_2_31"
                                  >
                                    <label
                                      className="gfield_label gform-field-label"
                                      htmlFor="input_2_31"
                                    >
                                      CAPTCHA
                                    </label>
                                    <div
                                      id="input_2_31"
                                      className="ginput_container ginput_recaptcha"
                                      data-sitekey="6LcLkxAmAAAAAON9FMpKbNLITL38R1e3X3-DWD8Z"
                                      data-theme="light"
                                      data-tabindex={-1}
                                      data-size="invisible"
                                      data-badge="bottomright"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Link to="/">
                              <button className=" mt-[2vw] button btn btn-primary">Submit</button>
                              </Link>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* .wrap */}
        </div>
        {/* .site-content */}
       <Footer />
        {/* .site-footer */}
        <link
          rel="stylesheet"
          id="gform_basic-css"
          href="../wp-content/plugins/gravityforms/assets/css/dist/basic.min1f6a.css?ver=2.8.12"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="../wp-includes/css/dashicons.min380f.css?ver=6.5.4"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="assets_css-css"
          href="../wp-content/themes/cybermark/assets/css/assets380f.css?ver=6.5.4"
          type="text/css"
          media="all"
        />
      </>
    </>
  );
};

export default Contact;
