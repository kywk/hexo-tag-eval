/**
 * eval tag
 *
 * Syntax:
 *   {% eval helper_name {helper_args} %}
 */

module.exports = function(args, content) {
  return '<!--{%_EVAL_ARGS[' + args + ']_%}-->';
}
