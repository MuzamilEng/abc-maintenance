export const reportDataForm = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    placeholder: "First Name",
    rules: {
      required: "First name is required",
    },
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    rules: {
      required: "last name is required",
    },
  },
  {
    name: "phoneNumber",
    type: "number",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    rules: {
      required: "phone number  is required",
    },
  },
  {
    name: "phoneType",
    type: "select",
    label: "Phone Type",

    options: [
      { value: "phone type", label: "phone type" },
      { value: "home", label: "Home" },
      { value: "work", label: "Work" },
      { value: "mobile", label: "Mobile" },
    ],
    rules: {
      required: "phone type is required",
    },
  },

  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Email Address",
    rules: {
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Enter a valid email",
      },
      required: "email is required",
    },
  },
  {
    name: "confirmEmail",
    type: "email",
    label: "Confirm Email Address",
    placeholder: "Confirm Email",
    rules: {
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Enter a valid email",
      },
      required: "email is required",
    },
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Address",
    rules: {
      required: "address is required",
    },
  },
  {
    name: "Apartment",
    type: "text",
    label: "Apartment, suite, unit, etc.",
    placeholder: "Apartment, suite, unit, etc.",
    rules: {
      required: "Apartment, suite, unit, etc. is required",
    },
  },
  {
    name: "city",
    type: "text",
    label: "City",
    placeholder: "City",
    rules: {
      required: "City is required",
    },
  },
  {
    name: "state",
    type: "text",
    label: "State",
    placeholder: "State",
    rules: {
      required: "phone type is required",
    },
  },
  {
    name: "postCode",
    type: "text",
    label: "Post code",
    placeholder: "Post code",
    rules: {
      required: "post code is required",
    },
  },
  // {
  //   name: "hearAboutUs",
  //   type: "select",
  //   label: "How did you hear about us?",

  //   options: [
  //     {
  //       value: "How did you hear about us?",
  //       label: "How did you hear about us?",
  //     },
  //     { value: "door hangger yard sign", label: "Door hangger/yard sign" },
  //     { value: "angies list", label: "Angies Lists" },
  //   ],
  //   rules: {
  //     required: "phone type is required",
  //   },
  // },

  {
    name: "projectDetail",
    type: "textarea",
    label: "Enter project details",
    placeholder: "How can ABC help",
    rules: {
      required: "post code is required",
    },
  },
];
