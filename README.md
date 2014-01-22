hexo-tag-eval
=============
hexo-tag-eval execute Hexo helper in the post.  
Helper be used not only in theme but also in post via this plugin.

__Limite to Hexo, it only support the helper doesn't use any `this` objects.__

### Usage ###

#### Install ####
```
npm install git://github.com/kywk/hexo-tag-eval.git --save
```

#### Use in your post ####
```
{% eval HELPER_NAME [HELPER_ARGS] %}
```

#### Example ####
Here is a example add TOC to post
```
{% eval toc data.content %}
```
![Post TOC](https://lh6.googleusercontent.com/evSw6jQ-yuZUYL7ro3GdZhopuSDwSsFVXxqL68hIFmQ=w710-h431-no)

### Misc ###

#### Update ####
```
npm update
```

#### Uninstall ####
```
npm uninstall hexo-tag-eval
```
