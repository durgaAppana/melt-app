'use strict';

/**
 * add-article-favorite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-article-favorite.add-article-favorite');
