'use strict';

/**
 * get-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-banner.get-banner');
