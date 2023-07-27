'use strict';

/**
 * get-advertisement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-advertisement.get-advertisement');
