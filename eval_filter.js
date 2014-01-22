
module.exports = function(data, callback) {

  var helper_name = data.content.split(/<!--\{%_EVAL_ARGS\[(\w+)(.*)\]_%\}-->/)[1];

  if (typeof helper_name !== 'undefined') {

    var caller = hexo.extend.helper.store[helper_name];

    if (typeof caller !== 'undefined') {
      var helper_args = data.content.split(/<!--\{%_EVAL_ARGS\[(\w+),(.*)\]_%\}-->/)[2];
      data.content = data.content.replace(/<!--\{%_EVAL_ARGS\[.*]_%\}-->/, caller(eval(helper_args)));
    }
  }
  callback(null, data);
}
