// This component relies on JavaScript from GOV.UK Frontend
// = require govuk/components/header/header.js

window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {}
window.GOVUK.Modules.GovukHeader = window.GOVUKFrontend.Header

const layoutHeader = document.querySelectorAll("[data-module='govuk-header']")

if (layoutHeader){
  layoutHeader.forEach(function(el){
    const header = new window.GOVUK.Modules.GovukHeader(el);
    header.init();
  })
}
