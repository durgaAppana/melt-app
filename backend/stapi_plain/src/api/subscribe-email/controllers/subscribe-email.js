'use strict';

/**
 * subscribe-email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require("nodemailer");
// module.exports = createCoreController('api::subscribe-email.subscribe-email')
module.exports = createCoreController('api::subscribe-email.subscribe-email', ({ strapi }) => ({
    async create(ctx) {
        // Get the user's email from the request body
        const { data } = ctx.request.body;
        try {
            await strapi.service("api::subscribe-email.subscribe-email").create({
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
                text: `Thank you ${data.name} for subscribing to our Ready To Melt. We will keep you updated with the latest Articles and Blogs.`,
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
            ctx.throw(500, {
                status: false,
                messege: "error"
            });
        }
    }
}))
