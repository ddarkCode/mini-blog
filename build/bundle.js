/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/Header */ "./src/client/components/header/Header.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/Footer */ "./src/client/components/footer/Footer.js");





var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: App
});

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/client/App.js");
/* harmony import */ var _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/HomePage */ "./src/client/pages/home/HomePage.js");
/* harmony import */ var _pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/RegisterPage */ "./src/client/pages/auth/RegisterPage.js");
/* harmony import */ var _pages_auth_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth/LoginPage */ "./src/client/pages/auth/LoginPage.js");
/* harmony import */ var _pages_blogs_BlogPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blogs/BlogPage */ "./src/client/pages/blogs/BlogPage.js");
/* harmony import */ var _pages_blogs_BlogListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blogs/BlogListPage */ "./src/client/pages/blogs/BlogListPage.js");
/* harmony import */ var _pages_blogs_SingleBlogPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/blogs/SingleBlogPage */ "./src/client/pages/blogs/SingleBlogPage.js");
/* harmony import */ var _pages_blogs_AddNewBlogPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/blogs/AddNewBlogPage */ "./src/client/pages/blogs/AddNewBlogPage.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
  routes: [_objectSpread({
    path: '/',
    exact: true
  }, _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"]), _objectSpread({
    path: '/register'
  }, _pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_4__["default"]), _objectSpread({
    path: '/login'
  }, _pages_auth_LoginPage__WEBPACK_IMPORTED_MODULE_5__["default"]), _objectSpread(_objectSpread({}, _pages_blogs_BlogPage__WEBPACK_IMPORTED_MODULE_6__["default"]), {}, {
    routes: [_objectSpread({
      exact: true,
      path: '/blogs'
    }, _pages_blogs_BlogListPage__WEBPACK_IMPORTED_MODULE_7__["default"]), _objectSpread({
      path: '/blogs/:blogId',
      exact: true
    }, _pages_blogs_SingleBlogPage__WEBPACK_IMPORTED_MODULE_8__["default"]), _objectSpread({
      path: '/blogs/write/new-blog'
    }, _pages_blogs_AddNewBlogPage__WEBPACK_IMPORTED_MODULE_9__["default"])]
  })]
})]);

/***/ }),

/***/ "./src/client/components/blogs/Blog.js":
/*!*********************************************!*\
  !*** ./src/client/components/blogs/Blog.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function Blog(_ref) {
  var blog = _ref.blog;

  function dateFormat(date) {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "date"
  }, dateFormat(blog.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "author"
  }, blog.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post"
  }, blog.post.substring(0, 130), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs/".concat(blog._id)
  }, "Read more"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/client/components/blogs/BlogList.js":
/*!*************************************************!*\
  !*** ./src/client/components/blogs/BlogList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blog */ "./src/client/components/blogs/Blog.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function BlogList(_ref) {
  var blogs = _ref.blogs;
  var blogsToRender = blogs ? blogs.map(function (blog) {
    return _objectSpread(_objectSpread({}, blog), {}, {
      date: new Date()
    });
  }) : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "bloglist-container"
  }, blogsToRender.map(function (blog) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Blog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: blog._id,
      blog: blog
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogList);

/***/ }),

/***/ "./src/client/components/footer/Footer.js":
/*!************************************************!*\
  !*** ./src/client/components/footer/Footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "App Made by darkcode__"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/client/components/header/Header.js":
/*!************************************************!*\
  !*** ./src/client/components/header/Header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);




function Header() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  }),
      user = _useSelector.user;

  var loginOrLogout = user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/api/auth/register"
  }, "Logout") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "Login");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Bloggy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs"
  }, "All blogs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs/write/new-blog"
  }, "Write")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, loginOrLogout), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, user ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/register"
  }, "Register")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/client/components/input/Input.js":
/*!**********************************************!*\
  !*** ./src/client/components/input/Input.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Input(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    required: true
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/client/components/input/InputContainer.js":
/*!*******************************************************!*\
  !*** ./src/client/components/input/InputContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function InputContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-container"
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputContainer);

/***/ }),

/***/ "./src/client/pages/auth/LoginPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/auth/LoginPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/auth */ "./src/client/redux/auth/index.js");
/* harmony import */ var _components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/input/InputContainer */ "./src/client/components/input/InputContainer.js");
/* harmony import */ var _components_input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/input/Input */ "./src/client/components/input/Input.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







function LoginPage(_ref) {
  var history = _ref.history;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    username: '',
    password: ''
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      formEntries = _useState2[0],
      setFormEntries = _useState2[1];

  var handleFormChange = function handleFormChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setFormEntries(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,_redux_auth__WEBPACK_IMPORTED_MODULE_4__.loginUser)(formEntries));
    history.push('/blogs');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    className: "login-form auth-form-container",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "username"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter Your Email",
    value: formEntries.email,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    name: "password",
    id: "password",
    placeholder: "Enter Your Password",
    value: formEntries.password,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Login"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: LoginPage
});

/***/ }),

/***/ "./src/client/pages/auth/RegisterPage.js":
/*!***********************************************!*\
  !*** ./src/client/pages/auth/RegisterPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_input_InputContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/input/InputContainer */ "./src/client/components/input/InputContainer.js");
/* harmony import */ var _components_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/input/Input */ "./src/client/components/input/Input.js");
/* harmony import */ var _redux_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/auth */ "./src/client/redux/auth/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







function RegisterPage(_ref) {
  var history = _ref.history;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    fullname: '',
    username: '',
    password: ''
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      formEntries = _useState2[0],
      setFormEntries = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var handleFormChange = function handleFormChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setFormEntries(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,_redux_auth__WEBPACK_IMPORTED_MODULE_6__.registerUser)(formEntries));
    history.push('/blogs');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    className: "auth-form-container",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Create your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "fullname"
  }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    name: "fullname",
    id: "fullname",
    placeholder: "Enter Your Full Name",
    value: formEntries.firstName,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "username"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "email",
    name: "username",
    id: "username",
    placeholder: "Enter Your Email",
    value: formEntries.username,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter Your Password",
    value: formEntries.password,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Register"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: RegisterPage
});

/***/ }),

/***/ "./src/client/pages/blogs/AddNewBlogPage.js":
/*!**************************************************!*\
  !*** ./src/client/pages/blogs/AddNewBlogPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AddNewBlogPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "write"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Add New Blog Post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Enter Blog Title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Author ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Author ID"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    placeholder: "Enter Blog Content",
    rows: 10,
    cols: 15
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Add"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: AddNewBlogPage
});

/***/ }),

/***/ "./src/client/pages/blogs/BlogListPage.js":
/*!************************************************!*\
  !*** ./src/client/pages/blogs/BlogListPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/blogs/BlogList */ "./src/client/components/blogs/BlogList.js");
/* harmony import */ var _redux_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/blogs */ "./src/client/redux/blogs/index.js");





function BlogListPage() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.blogs;
  }),
      blogs = _useSelector.blogs;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_blogs__WEBPACK_IMPORTED_MODULE_3__.getBlogs)());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blogs: blogs
  });
}

function loadData(_ref) {
  var dispatch = _ref.dispatch;
  return dispatch((0,_redux_blogs__WEBPACK_IMPORTED_MODULE_3__.getBlogs)());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: BlogListPage,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/blogs/BlogPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/blogs/BlogPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);



var BlogPage = function BlogPage(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: BlogPage
});

/***/ }),

/***/ "./src/client/pages/blogs/SingleBlogPage.js":
/*!**************************************************!*\
  !*** ./src/client/pages/blogs/SingleBlogPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_singleBlog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/singleBlog */ "./src/client/redux/singleBlog/index.js");





function SingleBlogPage() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.blog;
  }),
      blog = _useSelector.blog;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
      blogId = _useParams.blogId;

  global.globalBlogId = blogId;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_singleBlog__WEBPACK_IMPORTED_MODULE_3__.getBlog)(blogId));
  }, []);

  function dateFormat(date) {
    var dateToReturn = new Date(date);
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return dateToReturn.toLocaleDateString('en-US', options);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "single-blog-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "date"
  }, dateFormat(blog.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "author"
  }, blog.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post"
  }, blog.post), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs"
  }, "Back to all blogs"));
}

function loadData(_ref) {
  var dispatch = _ref.dispatch;
  return dispatch((0,_redux_singleBlog__WEBPACK_IMPORTED_MODULE_3__.getBlog)(globalBlogId));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: SingleBlogPage,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/home/HomePage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/home/HomePage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "homePage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stay curious."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Discover stories, thinking, and expertise from writers on any topic."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs"
  }, "Starting reading"));
};

var loadData = function loadData() {
  return console.log('Hello Home Page');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: HomePage,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/redux/auth/index.js":
/*!****************************************!*\
  !*** ./src/client/redux/auth/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loginUser": () => (/* binding */ loginUser),
/* harmony export */   "logoutUser": () => (/* binding */ logoutUser),
/* harmony export */   "registerUser": () => (/* binding */ registerUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);



var _extraReducers;




var registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('auth/registerUser', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(newUserDetails, thunkAPI) {
    var _yield$axios$post, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3000/api/auth/register', newUserDetails);

          case 3:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue('Something went wrong: ', _context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('auth/loginUser', /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(loginDetails, thunkAPI) {
    var _yield$axios$post2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3000/api/auth/login', loginDetails);

          case 3:
            _yield$axios$post2 = _context2.sent;
            data = _yield$axios$post2.data;
            return _context2.abrupt("return", data);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", thunkAPI.rejectWithValue('Something went wrong: ', _context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // export const logoutUser = createAsyncThunk(
//   'auth/logoutUser',
//   async (userId, thunkAPI) => {
//     try {
//       const { data } = await axios.p(
//         `http://localhost:3000/api/auth/logout`,
//         {userId}
//       );
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue('Something went wrong: ', err);
//     }
//   }
// );

var initialState = {
  isPending: false,
  user: null,
  err: ''
};
var authReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logoutUser: function logoutUser() {
      return function (state, action) {
        state.blog = {
          isPending: false,
          user: null,
          err: ''
        };
      };
    }
  },
  extraReducers: (_extraReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, registerUser.pending, function (state, action) {
    state.isPending = true;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, registerUser.fulfilled, function (state, action) {
    state.user = action.payload;
    state.isPending = false;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, registerUser.rejected, function (state, action) {
    state.err = action.payload;
    state.isPending = false;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, loginUser.pending, function (state, action) {
    state.isPending = true;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, loginUser.fulfilled, function (state, action) {
    state.user = action.payload;
    state.isPending = false;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, loginUser.rejected, function (state, action) {
    state.err = action.payload;
    state.isPending = false;
  }), _extraReducers)
});
var logoutUser = authReducer.actions.logoutUser;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer.reducer);

/***/ }),

/***/ "./src/client/redux/blogs/index.js":
/*!*****************************************!*\
  !*** ./src/client/redux/blogs/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getBlogs": () => (/* binding */ getBlogs),
/* harmony export */   "getblogsFromFunc": () => (/* binding */ getblogsFromFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _extraReducers;




var initialState = {
  blogs: [],
  isPending: false,
  err: ''
};
var getBlogs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('blogs/getBlogs', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(name, thunkAPI) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get('http://localhost:3000/api/blogs');

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue('Something went wrong: ', _context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var blogsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
  name: 'blogs',
  initialState: initialState,
  reducers: {
    getblogsFromFunc: function getblogsFromFunc(state, ownParams) {
      return console.log('getblogsFromFunc: ', state);
    }
  },
  extraReducers: (_extraReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlogs.pending, function (state) {
    state.isPending = true;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlogs.fulfilled, function (state, action) {
    state.blogs = action.payload;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlogs.rejected, function (state, action) {
    state.err = action.payload;
  }), _extraReducers)
});
var getblogsFromFunc = blogsReducer.actions.getblogsFromFunc;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogsReducer.reducer);

/***/ }),

/***/ "./src/client/redux/index.js":
/*!***********************************!*\
  !*** ./src/client/redux/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _singleBlog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleBlog */ "./src/client/redux/singleBlog/index.js");
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs */ "./src/client/redux/blogs/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./src/client/redux/auth/index.js");






var reducer = {
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__["default"],
  blogs: _blogs__WEBPACK_IMPORTED_MODULE_4__["default"],
  blog: _singleBlog__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (preloadedState) {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer: reducer,
    preloadedState: preloadedState
  });
});

/***/ }),

/***/ "./src/client/redux/singleBlog/index.js":
/*!**********************************************!*\
  !*** ./src/client/redux/singleBlog/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getBlog": () => (/* binding */ getBlog),
/* harmony export */   "logState": () => (/* binding */ logState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _extraReducers;




var getBlog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('blog/getBlog', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(blogId, thunkAPI) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://localhost:3000/api/blogs/".concat(blogId));

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue("Something went wrong: ".concat(JSON.stringify(_context.t0))));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var initialState = {
  err: '',
  isPending: false,
  blog: {}
};
var blogReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
  name: 'blog',
  initialState: initialState,
  reducers: {
    logState: function logState(state, action) {
      return console.log(state);
    }
  },
  extraReducers: (_extraReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlog.pending, function (state, action) {
    state.isPending = true;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlog.fulfilled, function (state, action) {
    state.blog = action.payload;
    state.isPending = false;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, getBlog.rejected, function (state, action) {
    state.err = action.payload;
    state.isPending = false;
  }), _extraReducers)
});
var logState = blogReducer.actions.logState;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogReducer.reducer);

/***/ }),

/***/ "./src/server/helpers/configureStore.js":
/*!**********************************************!*\
  !*** ./src/server/helpers/configureStore.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_redux_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/redux/index */ "./src/client/redux/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (preloadedState) {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: _client_redux_index__WEBPACK_IMPORTED_MODULE_1__.reducer,
    preloadedState: preloadedState
  });
});

/***/ }),

/***/ "./src/server/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/server/helpers/renderer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/Routes */ "./src/client/Routes.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store) {
  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: req.url,
    context: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__["default"])))));
  return "\n  <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"/styles.css\">\n\n  </head>\n  <body>\n    <div id=\"root\">".concat(content, "</div>\n\n    <script>\n       window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n    </script>\n\n    <script src=\"/bundle.js\"></script>\n  </body>\n</html>\n");
});

/***/ }),

/***/ "./src/server/model/Blog.js":
/*!**********************************!*\
  !*** ./src/server/model/Blog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var blogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  title: {
    type: String
  },
  authorId: {
    type: String
  },
  img_url: {
    type: String,
    "default": ''
  },
  body: {
    type: String
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Blog', blogSchema));

/***/ }),

/***/ "./src/server/model/User.js":
/*!**********************************!*\
  !*** ./src/server/model/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _require = __webpack_require__(/*! mongoose */ "mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model('User', userSchema));

/***/ }),

/***/ "./src/server/passport/passport.js":
/*!*****************************************!*\
  !*** ./src/server/passport/passport.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passportConfig": () => (/* binding */ passportConfig)
/* harmony export */ });
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strategies_localStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/localStrategy */ "./src/server/passport/strategies/localStrategy.js");


var passportConfig = function passportConfig(app) {
  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize());
  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().session());
  passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser(function (user, done) {
    return done(null, user);
  });
  passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser(function (user, done) {
    return done(null, user);
  });
  (0,_strategies_localStrategy__WEBPACK_IMPORTED_MODULE_1__.localStrategy)();
};

/***/ }),

/***/ "./src/server/passport/strategies/localStrategy.js":
/*!*********************************************************!*\
  !*** ./src/server/passport/strategies/localStrategy.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStrategy": () => (/* binding */ localStrategy)
/* harmony export */ });
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




var usersFilePath = (0,path__WEBPACK_IMPORTED_MODULE_3__.join)('src', 'db', 'users.json');
var localStrategy = function localStrategy() {
  passport__WEBPACK_IMPORTED_MODULE_1___default().use(new passport_local__WEBPACK_IMPORTED_MODULE_0__.Strategy(function (username, password, done) {
    try {
      var usersInDb = (0,fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync)(usersFilePath, 'utf-8');
      var foundUser = JSON.parse(usersInDb).find(function (user) {
        return user.username === username && user.password === password;
      });
      console.log("Passport Local Strategy FOund User: ".concat(JSON.stringify(foundUser)));

      if (!foundUser) {
        return done(null, false);
      }

      return done(null, foundUser);
    } catch (err) {
      console.log(err);
      return done(err);
    }
  }));
};

/***/ }),

/***/ "./src/server/routes/authRoutes.js":
/*!*****************************************!*\
  !*** ./src/server/routes/authRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/server/model/User.js");





var usersFilePath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)('src', 'db', 'users.json');

var routes = function routes() {
  var authRoutes = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
  authRoutes.use(function (req, res, next) {
    var users = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(usersFilePath, 'utf-8'));
    req.users = users;
    next();
  });
  authRoutes.route('/register').post(function (req, res) {
    try {
      var _req$body = req.body,
          username = _req$body.username,
          password = _req$body.password,
          fullname = _req$body.fullname;
      var users = req.users;
      var newUser = new _model_User__WEBPACK_IMPORTED_MODULE_4__["default"]({
        username: username,
        password: password,
        fullname: fullname
      });
      users.push(newUser);
      (0,fs__WEBPACK_IMPORTED_MODULE_1__.writeFile)(usersFilePath, JSON.stringify(users), 'utf-8', function () {
        // passport.authenticate('local')(req, res, () => {
        //   res.redirect('/secrets');
        // });
        passport__WEBPACK_IMPORTED_MODULE_3___default().authenticate('local')(req, res, function () {
          return res.json(newUser);
        });
      });
    } catch (err) {
      console.log(err);
    }
  });
  authRoutes.route('/login').post(function (req, res) {
    try {
      var _req$body2 = req.body,
          username = _req$body2.username,
          password = _req$body2.password;
      var users = req.users;
      var userDetails = users.find(function (user) {
        return user.username === username && user.password === password;
      });

      if (!userDetails) {
        return res.json({
          message: 'Invalid username or password.'
        });
      }

      return res.json(userDetails);
    } catch (error) {
      console.log(error);
    }
  });
  return authRoutes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/server/routes/blogRoutes.js":
/*!*****************************************!*\
  !*** ./src/server/routes/blogRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Blog */ "./src/server/model/Blog.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;


var blogsFilePath = join('src', 'db', 'blogs.json');

var router = function router() {
  var blogRoutes = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();
  blogRoutes;
  blogRoutes.use(function (req, res, next) {
    var blogs = (0,fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync)(blogsFilePath, 'utf8');
    var parsedBlogs = JSON.parse(blogs).map(function (blog) {
      return _objectSpread(_objectSpread({}, blog), {}, {
        post: blog.post.join(),
        date: new Date()
      });
    });
    req.blogs = parsedBlogs;
    next();
  }).route('/').get(function (req, res) {
    try {
      var blogs = req.blogs;
      return res.json(blogs);
    } catch (err) {
      console.log(err);
    }
  }).post(function (req, res) {
    try {
      var _req$body = req.body,
          title = _req$body.title,
          id = _req$body.id,
          post = _req$body.post,
          author = _req$body.author;
      var blogs = req.blogs;
      var newBlog = new _model_Blog__WEBPACK_IMPORTED_MODULE_3__["default"]({
        title: title,
        id: id,
        author: author,
        post: post.split('.')
      });
      blogs.push(newBlog);
      (0,fs__WEBPACK_IMPORTED_MODULE_2__.writeFile)(blogsFilePath, JSON.stringify(blogs), function () {
        return res.json({
          message: 'New Blog Added Successfully',
          blog: newBlog
        });
      });
    } catch (err) {
      console.log(err);
    }
  });
  blogRoutes.route('/:blogId').get(function (req, res) {
    try {
      var blogId = req.params.blogId;
      var blogs = req.blogs;
      var requestedBlog = blogs.find(function (blog) {
        return blog._id === +blogId;
      });
      return res.json(requestedBlog);
    } catch (err) {
      console.log(err);
    }
  });
  return blogRoutes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

module.exports = require("debug");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_helpers_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/helpers/renderer */ "./src/server/helpers/renderer.js");
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/Routes */ "./src/client/Routes.js");
/* harmony import */ var _server_helpers_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/helpers/configureStore */ "./src/server/helpers/configureStore.js");
/* harmony import */ var _server_routes_blogRoutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server/routes/blogRoutes */ "./src/server/routes/blogRoutes.js");
/* harmony import */ var _server_routes_authRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server/routes/authRoutes */ "./src/server/routes/authRoutes.js");
/* harmony import */ var _server_passport_passport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./server/passport/passport */ "./src/server/passport/passport.js");

dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();











var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var debug = debug__WEBPACK_IMPORTED_MODULE_2___default()('app');
var _process$env = process.env,
    HOST = _process$env.HOST,
    PORT = _process$env.PORT,
    SECRET = _process$env.SECRET;
app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"]('public')); //Auth Config

app.use(express_session__WEBPACK_IMPORTED_MODULE_5___default()({
  secret: SECRET,
  resave: false,
  saveUninitialized: false
}));
(0,_server_passport_passport__WEBPACK_IMPORTED_MODULE_11__.passportConfig)(app);
app.use('/api/blogs', (0,_server_routes_blogRoutes__WEBPACK_IMPORTED_MODULE_9__["default"])());
app.use('/api/auth', (0,_server_routes_authRoutes__WEBPACK_IMPORTED_MODULE_10__["default"])());
app.get('*', function (req, res) {
  var store = (0,_server_helpers_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])({});
  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_7__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(function () {
    var content = (0,_server_helpers_renderer__WEBPACK_IMPORTED_MODULE_6__["default"])(req, store);
    res.send(content);
  });
});
app.listen(PORT, HOST, function () {
  return debug("Server is running on port ".concat(PORT));
});
})();

/******/ })()
;