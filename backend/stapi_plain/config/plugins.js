// ./config/plugins.js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "nodemailer",
    providerOptions: {
      service: "gmail", // You can change this to your preferred email provider
      auth: {
        user: "vikas.g@fortune4.in", // Replace with your Gmail email address
        pass: "dwbqjxaewfobqfuu", // Replace with your Gmail password
      },
    },
    settings: {
      defaultFrom: "your-email@gmail.com", // Replace with your Gmail email address
      defaultReplyTo: "your-email@gmail.com", // Replace with your Gmail email address
    },
  },
  // ...
});
