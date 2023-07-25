'use strict';

/**
 * get-author-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-author-list.get-author-list');
