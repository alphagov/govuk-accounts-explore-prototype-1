/* global nodeListForEach */
//  = require ../vendor/polyfills/closest.js
//  = require ../vendor/polyfills/indexOf.js
//  = require ../vendor/polyfills/common.js

window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (Modules) {
  function GemAccordion () { }

  GemAccordion.prototype.start = function ($module) {
    this.$module = $module[0]
    this.moduleId = this.$module.getAttribute('id')
    this.sections = this.$module.querySelectorAll('.gem-c-accordion__section')
    this.openAllButton = ''
    this.browserSupportsSessionStorage = helper.checkForSessionStorage()
    this.controlsClass = 'gem-c-accordion__controls'
    this.openAllClass = 'gem-c-accordion__open-all'
    this.openAllTextClass = 'gem-c-accordion__open-all-text'
    this.sectionHeaderClass = 'gem-c-accordion__section-header'
    this.sectionHeadingClass = 'gem-c-accordion__section-heading'
    this.sectionSummaryClass = 'gem-c-accordion__section-summary'
    this.sectionButtonClass = 'gem-c-accordion__section-button'
    this.sectionExpandedClass = 'gem-c-accordion__section--expanded'
    this.sectionInnerContent = 'gem-c-accordion__section-content'
    this.toggleLinkClass = 'js-toggle-link'
    this.sectionShowHideIconClass = 'gem-c-accordion__toggle-link'
    this.sectionShowHideTextClass = 'gem-c-accordion__toggle-text'
    this.upChevonIconClass = 'gem-c-accordion-nav__chevron'
    this.downChevonIconClass = 'gem-c-accordion-nav__chevron--down'

    // Indicate that js has worked
    this.$module.classList.add('gem-c-accordion--active')

    this.initControls()
    this.initSectionHeaders()

    // See if "Show all sections" button text should be updated
    var areAllSectionsOpen = this.checkIfAllSectionsOpen()
    this.updateOpenAllButton(areAllSectionsOpen)
  }

  // Initialise controls and set attributes
  GemAccordion.prototype.initControls = function () {
    // Create "Show all" button and set attributes
    this.openAllButton = document.createElement('button')
    this.openAllButton.setAttribute('class', this.openAllClass)
    this.openAllButton.setAttribute('aria-expanded', 'false')

    // Create icon, add to element
    var icon = document.createElement('span')
    icon.classList.add(this.upChevonIconClass)
    this.openAllButton.appendChild(icon)

    // Create control wrapper and add controls to it
    var accordionControls = document.createElement('div')
    accordionControls.setAttribute('class', this.controlsClass)
    accordionControls.appendChild(this.openAllButton)
    this.$module.insertBefore(accordionControls, this.$module.firstChild)

    // Build addtional wrapper for open all toggle text, place icon after wrapped text.
    var wrapperOpenAllText = document.createElement('span')
    wrapperOpenAllText.classList.add(this.openAllTextClass)
    this.openAllButton.insertBefore(wrapperOpenAllText, this.openAllButton.childNodes[0] || null)

    // Handle events for the controls
    this.openAllButton.addEventListener('click', this.onOpenOrCloseAllToggle.bind(this))
  }

  // Initialise section headers
  GemAccordion.prototype.initSectionHeaders = function () {
    // Loop through section headers
    nodeListForEach(this.sections, function (section, i) {
      // Set header attributes
      var header = section.querySelector('.' + this.sectionHeaderClass)
      this.initHeaderAttributes(header, i)
      this.setExpanded(this.isExpanded(section), section)

      // Handle events
      header.addEventListener('click', this.onSectionToggle.bind(this, section))

      // See if there is any state stored in sessionStorage and set the sections to
      // open or closed.
      this.setInitialState(section)
    }.bind(this))
  }

  // Set individual header attributes
  GemAccordion.prototype.initHeaderAttributes = function (headerWrapper, index) {
    var span = headerWrapper.querySelector('.' + this.sectionButtonClass)
    var heading = headerWrapper.querySelector('.' + this.sectionHeadingClass)
    var summary = headerWrapper.querySelector('.' + this.sectionSummaryClass)

    // Copy existing span element to an actual button element, for improved accessibility.
    var button = document.createElement('button')
    button.setAttribute('id', this.moduleId + '-heading-' + (index + 1))
    button.setAttribute('aria-controls', this.moduleId + '-content-' + (index + 1))

    // Create show / hide arrow icons with text.
    var showIcons = document.createElement('span')
    showIcons.classList.add(this.sectionShowHideIconClass, this.toggleLinkClass)

    // Add pause after heading for assistive technology.
    var srPause = document.createElement('span')
    srPause.classList.add('govuk-visually-hidden')
    srPause.innerHTML = ', '

    // Build addtional copy for assistive technology
    var srAddtionalCopy = document.createElement('span')
    srAddtionalCopy.classList.add('govuk-visually-hidden')
    srAddtionalCopy.innerHTML = ' this section'

    // Build addtional wrapper for toggle text, place icon after wrapped text.
    var wrapperShowHideIcon = document.createElement('span')
    var icon = document.createElement('span')
    icon.classList.add(this.upChevonIconClass)
    showIcons.appendChild(icon)
    wrapperShowHideIcon.classList.add(this.sectionShowHideTextClass)
    showIcons.insertBefore(wrapperShowHideIcon, showIcons.childNodes[0] || null)

    // Copy all attributes (https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) from span to button
    for (var i = 0; i < span.attributes.length; i++) {
      var attr = span.attributes.item(i)
      button.setAttribute(attr.nodeName, attr.nodeValue)
    }

    // span could contain HTML elements (see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content)
    button.innerHTML = span.innerHTML
    heading.removeChild(span)
    heading.appendChild(button)
    button.appendChild(srPause)

    // If summary content exists add to DOM in correct order
    if (typeof (summary) !== 'undefined' && summary !== null) {
      button.setAttribute('aria-describedby', this.moduleId + '-summary-' + (index + 1))
      button.appendChild(summary)
    }

    button.appendChild(showIcons)
    button.appendChild(srAddtionalCopy)
  }

  // When section toggled, set and store state
  GemAccordion.prototype.onSectionToggle = function (section) {
    var expanded = this.isExpanded(section)
    this.setExpanded(!expanded, section)

    // Store the state in sessionStorage when a change is triggered
    this.storeState(section)
  }

  // When Open/Close All toggled, set and store state
  GemAccordion.prototype.onOpenOrCloseAllToggle = function () {
    var module = this
    var sections = this.sections
    var nowExpanded = !this.checkIfAllSectionsOpen()

    nodeListForEach(sections, function (section) {
      module.setExpanded(nowExpanded, section)
      // Store the state in sessionStorage when a change is triggered
      module.storeState(section)
    })

    module.updateOpenAllButton(nowExpanded)
  }

  // Set section attributes when opened/closed
  GemAccordion.prototype.setExpanded = function (expanded, section) {
    var icon = section.querySelector('.' + this.upChevonIconClass)
    var showHideText = section.querySelector('.' + this.sectionShowHideTextClass)
    var button = section.querySelector('.' + this.sectionButtonClass)
    var newButtonText = expanded ? 'Hide' : 'Show'

    showHideText.innerHTML = newButtonText
    button.setAttribute('aria-expanded', expanded)
    button.classList.add(this.toggleLinkClass)

    // Swap icon, change class
    if (expanded) {
      section.classList.add(this.sectionExpandedClass)
      icon.classList.remove(this.downChevonIconClass)
    } else {
      section.classList.remove(this.sectionExpandedClass)
      icon.classList.add(this.downChevonIconClass)
    }

    // See if "Show all sections" button text should be updated
    var areAllSectionsOpen = this.checkIfAllSectionsOpen()
    this.updateOpenAllButton(areAllSectionsOpen)
  }

  // Get state of section
  GemAccordion.prototype.isExpanded = function (section) {
    return section.classList.contains(this.sectionExpandedClass)
  }

  // Check if all sections are open
  GemAccordion.prototype.checkIfAllSectionsOpen = function () {
    // Get a count of all the Accordion sections
    var sectionsCount = this.sections.length
    // Get a count of all Accordion sections that are expanded
    var expandedSectionCount = this.$module.querySelectorAll('.' + this.sectionExpandedClass).length
    var areAllSectionsOpen = sectionsCount === expandedSectionCount

    return areAllSectionsOpen
  }

  // Update "Show all sections" button
  GemAccordion.prototype.updateOpenAllButton = function (expanded) {
    var icon = this.openAllButton.querySelector('.' + this.upChevonIconClass)
    var openAllCopy = this.openAllButton.querySelector('.' + this.openAllTextClass)
    var newButtonText = expanded ? 'Hide all sections' : 'Show all sections'
    this.openAllButton.setAttribute('aria-expanded', expanded)
    openAllCopy.innerHTML = newButtonText

    // Swap icon, toggle class
    if (expanded) {
      icon.classList.remove(this.downChevonIconClass)
    } else {
      icon.classList.add(this.downChevonIconClass)
    }
  }

  var helper = {
    checkForSessionStorage: function () {
      var testString = 'this is the test string'
      var result
      try {
        window.sessionStorage.setItem(testString, testString)
        result = window.sessionStorage.getItem(testString) === testString.toString()
        window.sessionStorage.removeItem(testString)
        return result
      } catch (exception) {
        if ((typeof console === 'undefined' || typeof console.log === 'undefined')) {
          console.log('Notice: sessionStorage not available.')
        }
      }
    }
  }

  // Set the state of the accordions in sessionStorage
  GemAccordion.prototype.storeState = function (section) {
    if (this.browserSupportsSessionStorage) {
      // We need a unique way of identifying each content in the GemAccordion. Since
      // an `#id` should be unique and an `id` is required for `aria-` attributes
      // `id` can be safely used.
      var button = section.querySelector('.' + this.sectionButtonClass)

      if (button) {
        var contentId = button.getAttribute('aria-controls')
        var contentState = button.getAttribute('aria-expanded')

        if (typeof contentId === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
          console.error(new Error('No aria controls present in accordion section heading.'))
        }

        if (typeof contentState === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
          console.error(new Error('No aria expanded present in accordion section heading.'))
        }

        // Only set the state when both `contentId` and `contentState` are taken from the DOM.
        if (contentId && contentState) {
          window.sessionStorage.setItem(contentId, contentState)
        }
      }
    }
  }

  // Read the state of the accordions from sessionStorage
  GemAccordion.prototype.setInitialState = function (section) {
    if (this.browserSupportsSessionStorage) {
      var button = section.querySelector('.' + this.sectionButtonClass)

      if (button) {
        var contentId = button.getAttribute('aria-controls')
        var contentState = contentId ? window.sessionStorage.getItem(contentId) : null

        if (contentState !== null) {
          this.setExpanded(contentState === 'true', section)
        }
      }
    }
  }

  Modules.GemAccordion = GemAccordion
})(window.GOVUK.Modules)

const accDivs = document.querySelectorAll('div[data-module="gem-accordion"]');
if (accDivs.length > 0) {
  const accs = new window.GOVUK.Modules.GemAccordion(accDivs);
  accs.start(accDivs);
}
