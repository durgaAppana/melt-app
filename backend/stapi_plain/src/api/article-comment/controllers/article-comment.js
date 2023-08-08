"use strict";

/**
 * article-comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::article-comment.article-comment",
  ({ strapi }) => ({
    async create(ctx) {
      // Get the user's email from the request body
      const data = ctx.request.body;
      try {
        await strapi
          .service("api::article-comment.article-comment")
          .create(data);

        ctx.send(
          {
            status: true,
            message: "comment added successfully.",
          },
          200
        );
        // Return the subscription object as a response
      } catch (error) {
        // console.error("000000000000",error);
        ctx.send({ status: false, message: "Something went wrong" }, 500);
      }
    },
  })
);
