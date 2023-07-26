'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require("nodemailer");

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
    async create(ctx) {
        // Get the user's email from the request body
        const { data } = ctx.request.body;
        try {
            await strapi.service("api::contact.contact").create({
                data
            });
            const transporter = nodemailer.createTransport({
                service: "gmail", // You can change this to your preferred email provider
                auth: {
                    user: "vikas.g@fortune4.in", // Replace with your Gmail email address
                    pass: "dwbqjxaewfobqfuu", // Replace with your Gmail password
                },
            });
            const mailOptions = {
                from: "vikas.g@fortune4.in", // Replace with your Gmail email address
                to: data.email, // The user's email address from the request body
                subject: "Welcome to our strapi!",
                text: `Thank you ${data.name} for connecting us, we will connect you soon`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("Error sending email:", error);
                } else {
                    console.log("Email sent:", info.response);
                }
            });
            ctx.send({
                status: true,
                message: "email sent successfully."
            }, 200)
            // Return the subscription object as a response
        } catch (error) {
            ctx.send({ status: false, message: "Email already exist" },500);
        }
    }
}));
