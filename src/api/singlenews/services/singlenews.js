'use strict';

/**
 * singlenews service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::singlenews.singlenews');
