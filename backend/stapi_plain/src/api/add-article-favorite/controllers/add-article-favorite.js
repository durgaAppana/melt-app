"use strict";

/**
 * add-article-favorite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::add-article-favorite.add-article-favorite",
  ({ strapi }) => ({
    async create(ctx) {
      const { article_id } = ctx.request.body.data;
      const { user_id } = ctx.request.body.data;

      const post = await strapi.db
        .query("api::add-article-favorite.add-article-favorite")
        .findOne({ where: { article_id: article_id } });

      if (post == null) {
        await strapi.db
          .query("api::add-article-favorite.add-article-favorite")
          .create({
            data: {
              ...ctx.request.body.data,
              publishedAt: new Date().getTime(),
            },
          });
        return ctx.send(
          {
            status: true,
            message: "article added successfully.",
          },
          200
        );
      } else if (post.user_id != user_id) {
        await strapi.db
          .query("api::add-article-favorite.add-article-favorite")
          .create({
            data: {
              ...ctx.request.body.data,
              publishedAt: new Date().getTime(),
            },
          });
        return ctx.send(
          {
            status: true,
            message: "article added successfully.",
          },
          200
        );
      } else {
        await strapi.db
          .query("api::add-article-favorite.add-article-favorite")
          .delete({ where: { user_id: user_id } });
        return ctx.send(
          {
            status: true,
            message: "article removed successfully.",
          },
          200
        );
      }
    },
  })
);
