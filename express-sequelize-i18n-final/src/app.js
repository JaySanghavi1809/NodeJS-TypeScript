var express = require("express");
var UserRouter = require('./user/UserRouter');
var ErrorHandler = require('./error/ErrorHandler');
var ArticleRouter = require('./article/ArticleRouter');
var i18next = require('i18next');
var Backend = require('i18next-fs-backend');
var middleware = require('i18next-http-middleware');
i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
    fallbackLng: 'en',
    backend: {
        loadPath: './locales/{{lng}}/translation.json'
    }
});
var app = express();
app.use(middleware.handle(i18next));
app.use(express.json());
app.use(UserRouter);
app.use(ArticleRouter);
app.use(ErrorHandler);
module.exports = app;
