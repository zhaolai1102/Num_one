//结构    文件路径@方法
var get_urls = {
    '/register': 'user@registerView',
    '/login': 'user@loginView',
    '/user_list': 'user@listView',
    '/getList': 'user@list',
    '/': 'index@indexView',
    '/normalize': 'index@normalizeCss',
    '/mk': 'index@mkCss'
}

var post_urls = {
    '/register': 'user@register',
    '/login': 'user@login',
}

module.exports = {
    get_urls: get_urls,
    post_urls: post_urls
}
