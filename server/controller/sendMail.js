const nodemailer = require("nodemailer");
// const uploadOnCloudinary = require("../utils/cloudinary");
const path = require("path");
const ejs = require("ejs");
const uploadOnCloudinary = require("../libs/cloudinary");
const fs = require("fs").promises; // Use fs.promises for async file operations

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   secure: true,
//   port: 465,
//   // You need to generate a unique password from your Google Account settings
//   auth: {
//     user: "afrazrajpoot46@gmail.com",
//     pass: "lpvlezhljdwookuk",
//   },
// });
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: "465", // usually 587 for TLS or 465 for SSL
  secure: true, // true for 465, false for other ports
  auth: {
    user: "lettings@danhamz.co.uk", // your Hostinger email address
    pass: "Muzamil1234+", // your Hostinger email password
  },
});

// Email sending route
const sendFault = async (req, res) => {
  const {
    Apartment,
    address,
    city,
    confirmEmail,
    email,
    firstName,
    hearAboutUs,
    lastName,
    phoneNumber,
    phoneType,
    postCode,
    projectDetail,
    state,
  } = req.body;

  try {
    // Upload images to Cloudinary
    const files = req.files;

    console.log(files, "file");
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        try {
          const image = await uploadOnCloudinary(file.path);
          return image;
        } catch (err) {
          console.log(err);
        }
      })
    );
    // console.log(uploadedImages);
    const templatePath = path.join(__dirname, "../views/mail.ejs");
    const templateContent = await fs.readFile(templatePath, "utf-8");

    const renderedHtml = await ejs.render(templateContent, {
      Apartment,
      address,
      city,
      confirmEmail,
      email,
      firstName,
      hearAboutUs,
      lastName,
      phoneNumber,
      phoneType,
      postCode,
      projectDetail,
      state,
      uploadedImages,
    });

    const mailOptions = {
      from: "danhamz.co.uk", // sender email address
      to: "lettings@danhamz.co.uk", // your office email address
      subject: `Maintenance report request from ${email}`,
      html: renderedHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).send("Internal Server Error", error.message);
  }
};

module.exports = { sendFault };
