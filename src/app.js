const express = require('express');
const app = express();
const {renderAcquirePage,renderCashflowPage,renderPowergridPage,renderRiskPage,renderUnoPage} = require('./requestHandler.js');

const options = { extensions: ['html'] };

app.get("/uno",renderUnoPage);
app.get("/acquire",renderAcquirePage);
app.get("/cashflow",renderCashflowPage);
app.get("/powergrid",renderPowergridPage);
app.get("/risk",renderRiskPage);
app.use(express.static('public', options));


module.exports = { app };