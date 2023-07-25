'use strict';

/**
 * article-content controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article-content.article-content')

//slug
// module.exports = createCoreController('api::article-content.article-content',({ strapi }) =>  ({
  
//     // Method 3: Replacing a core action with proper sanitization
//     async findOne(ctx) {

//       const {id} = ctx.params;
//       const entities = await strapi.db.query('api::article-content.article-content').findOne({
//         where : { slug : id}
//       });
//       const sanitizedResults = await this.sanitizeOutput(entities, ctx);
  
//       return this.transformResponse(sanitizedResults);
//     }
//   }))
