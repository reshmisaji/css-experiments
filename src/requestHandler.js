const fs = require('fs');

const renderAcquirePage = function (req, res) {
    const acquire = fs.readFileSync('./public/acquire.html');
    res.write(acquire);
    res.end();
}

const renderPowergridPage = function (req, res) {
    const powergrid = fs.readFileSync('./public/powergrid.html');
    res.write(powergrid);
    res.end();
}

const renderUnoPage = function (req, res) {
    const uno = fs.readFileSync("./public/uno.html");
    res.write(uno);
    res.end();
}

const renderRiskPage = function (req, res) {
    const risk = fs.readFileSync("./public/risk.html");
    res.write(risk);
    res.end();
}

const renderCashflowPage = function (req, res) {
    const cashflow = fs.readFileSync('./public/cashflow.html');
    res.write(cashflow);
    res.end();
}


module.exports = { renderAcquirePage, renderCashflowPage, renderPowergridPage, renderRiskPage, renderUnoPage };



