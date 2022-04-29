// This component relies on JavaScript from GOV.UK Frontend
// = require govuk/components/header/header.js

window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {}
window.GOVUK.Modules.GovukHeader = window.GOVUKFrontend.Header

var layoutHeader = document.querySelectorAll("[data-module='govuk-header']")

if (layoutHeader){
  var header = new window.GOVUK.Modules.GovukHeader(layoutHeader[0]);
  header.init(layoutHeader);
}
