/**
 *
 */
var extend = hexo.extend;

extend.tag.register('eval', require('./eval_tag'));
extend.filter.register('post', require('./eval_filter'));
