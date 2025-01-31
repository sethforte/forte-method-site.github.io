(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _Navigation = _interopRequireDefault(require("./Navigation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _ForteMethodApp_brand = /*#__PURE__*/new WeakSet();
var ForteMethodApp = /*#__PURE__*/function () {
  function ForteMethodApp() {
    _classCallCheck(this, ForteMethodApp);
    _classPrivateMethodInitSpec(this, _ForteMethodApp_brand);
  }
  return _createClass(ForteMethodApp, [{
    key: "init",
    value: function init() {
      _assertClassBrand(_ForteMethodApp_brand, this, _activeThemeScheme).call(this);
      _assertClassBrand(_ForteMethodApp_brand, this, _addScrollToBody).call(this);
      _assertClassBrand(_ForteMethodApp_brand, this, _toggleDarkMode).call(this);
      _assertClassBrand(_ForteMethodApp_brand, this, _handleMobileToggle).call(this);
    }
  }]);
}();
/**
 * Return the instance of the ForteMethodApp class
 *
 * @returns {ForteMethodApp}
 */
function _activeThemeScheme() {
  var theme = localStorage.getItem('theme');
  if (theme && theme.toLowerCase() === 'dark-mode') {
    document.body.classList.add('forte-m-dark-mode');
  } else {
    document.body.classList.remove('forte-m-dark-mode');
  }
}
function _addScrollToBody() {
  document.addEventListener("scroll", function (event) {
    if (document.documentElement.scrollTop >= 100) {
      document.querySelector("body").classList.add("scroll");
    } else {
      document.querySelector("body").classList.remove("scroll");
    }
  });
}
function _toggleDarkMode() {
  var darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function (evt) {
      if (document.body.classList.contains('forte-m-dark-mode')) {
        document.body.classList.remove('forte-m-dark-mode');
        localStorage.setItem('theme', 'light-mode');
      } else {
        document.body.classList.add('forte-m-dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      }
    });
  }
}
function _handleMobileToggle() {
  var navMenu = (0, _Navigation.default)();
  navMenu.init();
}
function App() {
  return new ForteMethodApp();
}

},{"./Navigation":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavMenu;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NavigationMenu = /*#__PURE__*/function () {
  function NavigationMenu() {
    _classCallCheck(this, NavigationMenu);
    // Select relevant DOM elements
    this.body = document.querySelector("body");
    this.masthead = document.querySelector("header.forte-m-masthead");
    this.toggleButton = document.querySelector("header.forte-m-masthead .forte-m-toggle");
    this.dropdownContainers = Array.from(document.querySelectorAll("header.forte-m-masthead .forte-m-drop3-main"));
    this.dropdownElements = document.querySelectorAll(".forte-m-dropdown");
    this.linkElements = document.querySelectorAll(".forte-m-drop-li > .forte-m-li-link");
  }

  // Toggle the value of `aria-expanded` attribute
  return _createClass(NavigationMenu, [{
    key: "toggleAriaExpanded",
    value: function toggleAriaExpanded(element) {
      var isExpanded = element.getAttribute("aria-expanded");
      element.setAttribute("aria-expanded", isExpanded === "false" ? "true" : "false");
    }

    // Toggle menu states
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.toggleButton.classList.toggle("forte-m-toggle--active");
      this.masthead.classList.toggle("forte-m-active");
      this.body.classList.toggle("forte-m-mobile-nav-open");
      this.toggleAriaExpanded(this.toggleButton);
    }

    // Toggle dropdown states
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(dropdown) {
      dropdown.classList.toggle("forte-m-active");
      var dropdownButton = dropdown.querySelector(".forte-m-dropdown-button");
      if (dropdownButton) {
        this.toggleAriaExpanded(dropdownButton);
      }
    }

    // Add event listeners for dropdown containers
  }, {
    key: "setupDropdownContainers",
    value: function setupDropdownContainers() {
      this.dropdownContainers.forEach(function (container) {
        container.addEventListener("click", function (event) {
          event.stopPropagation();
          container.classList.toggle("drop3-active");
        });
      });
    }

    // Add event listeners for dropdown elements
  }, {
    key: "setupDropdownElements",
    value: function setupDropdownElements() {
      var _this = this;
      this.dropdownElements.forEach(function (dropdown) {
        var isEscapeKeyPressed = false;

        // Handle focusout event
        dropdown.addEventListener("focusout", function (event) {
          if (isEscapeKeyPressed) {
            isEscapeKeyPressed = false;
            return;
          }
          if (!dropdown.contains(event.relatedTarget)) {
            dropdown.classList.remove("forte-m-active");
            var dropdownButton = dropdown.querySelector(".forte-m-dropdown-button");
            if (dropdownButton) {
              _this.toggleAriaExpanded(dropdownButton);
            }
          }
        });

        // Handle keyboard events
        dropdown.addEventListener("keydown", function (event) {
          if (dropdown.classList.contains("forte-m-active")) {
            event.stopPropagation();
          }
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            _this.toggleDropdown(dropdown);
          }
          if (event.key === "Escape") {
            isEscapeKeyPressed = true;
            _this.toggleDropdown(dropdown);
          }
        });

        // Handle click events for smaller screens
        if (window.matchMedia("(max-width: 63.9375rem)").matches) {
          dropdown.addEventListener("click", function () {
            return _this.toggleDropdown(dropdown);
          });
        }
      });
    }

    // Add event listeners for links with Enter key
  }, {
    key: "setupLinkElements",
    value: function setupLinkElements() {
      this.linkElements.forEach(function (link) {
        link.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            window.location.href = link.href;
          }
        });
      });
    }

    // Add event listeners for the toggle button and masthead
  }, {
    key: "setupToggleButtonAndMasthead",
    value: function setupToggleButtonAndMasthead() {
      var _this2 = this;
      this.toggleButton.addEventListener("click", function () {
        return _this2.toggleMenu();
      });
      this.masthead.addEventListener("click", function (event) {
        if (event.target === _this2.masthead && _this2.masthead.classList.contains("forte-m-active")) {
          _this2.toggleMenu();
        }
      });

      // Close the menu on Escape key
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && _this2.toggleButton.classList.contains("forte-m-toggle--active")) {
          _this2.toggleMenu();
        }
      });
    }

    // Initialize the entire menu system
  }, {
    key: "init",
    value: function init() {
      this.setupToggleButtonAndMasthead();
      this.setupDropdownContainers();
      this.setupDropdownElements();
      this.setupLinkElements();
    }
  }]);
}();
/**
 * Return the instance of the ForteMethodApp class
 *
 * To use the class, create an instance and call `init()`
 *
 * @returns {NavigationMenu}
 */
function NavMenu() {
  return new NavigationMenu();
}

},{}],3:[function(require,module,exports){
"use strict";

var _App = _interopRequireDefault(require("./classes/App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var app = (0, _App.default)();
document.addEventListener('DOMContentLoaded', function () {
  app.init();
});

},{"./classes/App":1}]},{},[3])

