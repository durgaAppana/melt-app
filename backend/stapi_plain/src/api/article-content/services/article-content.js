'use strict';

/**
 * article-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-content.article-content');
