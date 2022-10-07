/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var _pages_notFound_NotFoundPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/notFound/NotFoundPage */ "./src/client/pages/notFound/NotFoundPage.js");
/* harmony import */ var _pages_options_OptionsPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/options/OptionsPage */ "./src/client/pages/options/OptionsPage.js");


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
  }, _pages_auth_LoginPage__WEBPACK_IMPORTED_MODULE_5__["default"]), _objectSpread({
    path: '/options'
  }, _pages_options_OptionsPage__WEBPACK_IMPORTED_MODULE_11__["default"]), _objectSpread(_objectSpread({}, _pages_blogs_BlogPage__WEBPACK_IMPORTED_MODULE_6__["default"]), {}, {
    routes: [_objectSpread({
      exact: true,
      path: '/blogs'
    }, _pages_blogs_BlogListPage__WEBPACK_IMPORTED_MODULE_7__["default"]), _objectSpread({
      path: '/blogs/:blogId',
      exact: true
    }, _pages_blogs_SingleBlogPage__WEBPACK_IMPORTED_MODULE_8__["default"]), _objectSpread({
      path: '/blogs/write/new-blog'
    }, _pages_blogs_AddNewBlogPage__WEBPACK_IMPORTED_MODULE_9__["default"]), _objectSpread({}, _pages_notFound_NotFoundPage__WEBPACK_IMPORTED_MODULE_10__["default"])]
  })]
})]);

/***/ }),

/***/ "./src/client/components/blogs/Blog.js":
/*!*********************************************!*\
  !*** ./src/client/components/blogs/Blog.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




function Blog(_ref) {
  var title = _ref.title,
      authorId = _ref.authorId,
      content = _ref.content,
      createdAt = _ref.createdAt,
      id = _ref.id,
      users = _ref.users;
  var user = users.find(function (user) {
    return user._id === authorId;
  });

  function dateFormat(date) {
    var newDate = new Date(date);
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return newDate.toLocaleDateString('en-US', options);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "date"
  }, dateFormat(createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "author"
  }, user ? user.fullname : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post"
  }, content.substring(0, 130), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs/".concat(id)
  }, "Read more"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/client/components/blogs/BlogList.js":
/*!*************************************************!*\
  !*** ./src/client/components/blogs/BlogList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blog */ "./src/client/components/blogs/Blog.js");




function BlogList(_ref) {
  var blogs = _ref.blogs,
      users = _ref.users;
  var blogsToRender = blogs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "bloglist-container"
  }, blogsToRender.map(function (blog) {
    console.log(blog._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Blog__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: blog._id
    }, blog, {
      id: blog._id,
      users: users
    }));
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogList);

/***/ }),

/***/ "./src/client/components/footer/Footer.js":
/*!************************************************!*\
  !*** ./src/client/components/footer/Footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Blogger")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs"
  }, "Bloggies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs/write/new-blog"
  }, "Write Bloggy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/options"
  }, "Options")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (Component) {
  var RequireAuth = function RequireAuth(props) {
    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state;
    }),
        auth = _useSelector.auth;

    switch (auth) {
      case null:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
          to: "/login"
        });

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          auth: auth
        }, props));
    }
  };

  return RequireAuth;
});

/***/ }),

/***/ "./src/client/components/input/Input.js":
/*!**********************************************!*\
  !*** ./src/client/components/input/Input.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/auth/actions */ "./src/client/redux/auth/actions.js");
/* harmony import */ var _components_input_InputContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/input/InputContainer */ "./src/client/components/input/InputContainer.js");
/* harmony import */ var _components_input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/input/Input */ "./src/client/components/input/Input.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








function LoginPage(_ref) {
  var login = _ref.login,
      history = _ref.history;

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
    login(formEntries);
    history.push('/blogs');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    className: "login-form auth-form-container",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter Your Email",
    value: formEntries.email,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "text",
    name: "password",
    id: "password",
    placeholder: "Enter Your Password",
    value: formEntries.password,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: '/register'
  }, "Register"))));
}

var mapDispatchToProps = {
  login: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_5__.login
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(LoginPage)
});

/***/ }),

/***/ "./src/client/pages/auth/RegisterPage.js":
/*!***********************************************!*\
  !*** ./src/client/pages/auth/RegisterPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/input/InputContainer */ "./src/client/components/input/InputContainer.js");
/* harmony import */ var _components_input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/input/Input */ "./src/client/components/input/Input.js");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/auth/actions */ "./src/client/redux/auth/actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








function RegisterPage(_ref) {
  var register = _ref.register,
      history = _ref.history;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    fullname: '',
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

  function handleSubmit(e) {
    e.preventDefault();
    register(formEntries, history);
    history.push('/blogs');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    className: "auth-form-container",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Create your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    name: "fullname",
    id: "fullname",
    placeholder: "Enter Your Full Name",
    value: formEntries.firstName,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "email",
    name: "username",
    id: "username",
    placeholder: "Enter Your Email",
    value: formEntries.username,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_InputContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter Your Password",
    value: formEntries.password,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: '/login'
  }, "Login"))));
}

var mapDispatchTOProps = {
  register: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_7__.register
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchTOProps)(RegisterPage)
});

/***/ }),

/***/ "./src/client/pages/blogs/AddNewBlogPage.js":
/*!**************************************************!*\
  !*** ./src/client/pages/blogs/AddNewBlogPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/blogs/actions */ "./src/client/redux/blogs/actions.js");
/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hocs/requireAuth */ "./src/client/components/hocs/requireAuth.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function AddNewBlogPage(_ref) {
  var addNewBlog = _ref.addNewBlog,
      history = _ref.history;
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.auth;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: '',
    content: '',
    authorId: auth._id
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      blog = _useState2[0],
      setBlog = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isExpanded = _useState4[0],
      setExpanded = _useState4[1];

  console.log('Auth State: ', auth);
  console.log(blog);

  function expand() {
    setExpanded(true);
  }

  function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setBlog(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewBlog(blog);
    history.push('/blogs');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    className: "create-note",
    onSubmit: handleSubmit
  }, isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    name: "title",
    onChange: handleChange,
    value: blog.title,
    placeholder: "Title",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", {
    name: "content",
    onClick: expand,
    onChange: handleChange,
    value: blog.content,
    placeholder: "Take a note...",
    required: true,
    rows: isExpanded ? 15 : 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", null, "Add")));
}

var mapDispatchToProps = {
  addNewBlog: _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_4__.addNewBlog
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)((0,_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNewBlogPage))
});

/***/ }),

/***/ "./src/client/pages/blogs/BlogListPage.js":
/*!************************************************!*\
  !*** ./src/client/pages/blogs/BlogListPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/blogs/BlogList */ "./src/client/components/blogs/BlogList.js");
/* harmony import */ var _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/blogs/actions */ "./src/client/redux/blogs/actions.js");
/* harmony import */ var _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users/actions */ "./src/client/redux/users/actions.js");






function BlogListPage(_ref) {
  var getALlBlogs = _ref.getALlBlogs,
      blogs = _ref.blogs,
      getUsers = _ref.getUsers,
      users = _ref.users;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getALlBlogs();
    getUsers();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blogs: blogs,
    users: users
  });
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.blogs,
    users: state.users
  };
};

var mapDispatchToProps = {
  getALlBlogs: _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__.getALlBlogs,
  getUsers: _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__.getUsers
};

function loadData(_ref2) {
  var dispatch = _ref2.dispatch;
  return function () {
    dispatch((0,_redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__.getALlBlogs)());
    dispatch((0,_redux_users_actions__WEBPACK_IMPORTED_MODULE_4__.getUsers)());
  }();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(BlogListPage),
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/blogs/BlogPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/blogs/BlogPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/blogs/actions */ "./src/client/redux/blogs/actions.js");
/* harmony import */ var _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users/actions */ "./src/client/redux/users/actions.js");






function SingleBlogPage(_ref) {
  var getBlog = _ref.getBlog,
      blog = _ref.blog,
      getUsers = _ref.getUsers,
      users = _ref.users;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
      blogId = _useParams.blogId;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getBlog(blogId);
    getUsers();
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

  var author = users.find(function (user) {
    return user._id === blog.authorId;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "single-blog-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "date"
  }, dateFormat(blog.createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "author"
  }, author ? author.fullname : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post"
  }, blog.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blogs"
  }, "Back to all blogs"));
}

var mapStateToProps = function mapStateToProps(_ref2) {
  var blog = _ref2.blog,
      users = _ref2.users;
  return {
    blog: blog,
    users: users
  };
};

var mapDispatchToProps = {
  getBlog: _redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__.getBlog,
  getUsers: _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__.getUsers
};

function loadData(store, blogId) {
  return function () {
    var dispatch = store.dispatch;
    dispatch((0,_redux_blogs_actions__WEBPACK_IMPORTED_MODULE_3__.getBlog)(blogId));
    dispatch((0,_redux_users_actions__WEBPACK_IMPORTED_MODULE_4__.getUsers)());
  }();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(SingleBlogPage),
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/home/HomePage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/home/HomePage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  }, "Start reading"));
};

var loadData = function loadData() {
  return console.log('Hello Home Page');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: HomePage,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/notFound/NotFoundPage.js":
/*!***************************************************!*\
  !*** ./src/client/pages/notFound/NotFoundPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  console.log("Not found page: ".concat(JSON.stringify(staticContext)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sorry, we can't find that page. You'll find loads to explore on the home page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: '/'
  }, "Bloggy Home"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: NotFoundPage
});

/***/ }),

/***/ "./src/client/pages/options/OptionsPage.js":
/*!*************************************************!*\
  !*** ./src/client/pages/options/OptionsPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/auth/actions */ "./src/client/redux/auth/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hocs/requireAuth */ "./src/client/components/hocs/requireAuth.js");






function OptionsPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();

  var handleLogout = function handleLogout() {
    dispatch((0,_redux_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
    history.push('/');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "optionsPage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout
  }, "Logout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Update or Delete Blog"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(OptionsPage)
});

/***/ }),

/***/ "./src/client/redux/auth/actions.js":
/*!******************************************!*\
  !*** ./src/client/redux/auth/actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/client/redux/auth/constants.js");




var register = function register(newUserDetails) {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$axios$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/auth/register', newUserDetails);

            case 2:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.REGISTER_USER,
                data: data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var login = function login(loginDetails) {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var _yield$axios$post2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/auth/login', loginDetails);

            case 2:
              _yield$axios$post2 = _context2.sent;
              data = _yield$axios$post2.data;
              console.log(data);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_USER,
                data: data
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:3000/api/auth/logout');

            case 2:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              console.log(data);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_USER,
                data: data
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/client/redux/auth/constants.js":
/*!********************************************!*\
  !*** ./src/client/redux/auth/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOG_IN_USER": () => (/* binding */ LOG_IN_USER),
/* harmony export */   "LOG_OUT_USER": () => (/* binding */ LOG_OUT_USER),
/* harmony export */   "REGISTER_USER": () => (/* binding */ REGISTER_USER)
/* harmony export */ });
var REGISTER_USER = 'REGISTER_USER';
var LOG_IN_USER = 'LOG_IN_USER';
var LOG_OUT_USER = 'LOG_OUT_USER';

/***/ }),

/***/ "./src/client/redux/auth/index.js":
/*!****************************************!*\
  !*** ./src/client/redux/auth/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/client/redux/auth/constants.js");


var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER_USER:
      return action.data.user;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.LOG_IN_USER:
      return action.data.user;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.LOG_OUT_USER:
      return action.data.user;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);

/***/ }),

/***/ "./src/client/redux/blogs/actions.js":
/*!*******************************************!*\
  !*** ./src/client/redux/blogs/actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewBlog": () => (/* binding */ addNewBlog),
/* harmony export */   "getALlBlogs": () => (/* binding */ getALlBlogs),
/* harmony export */   "getBlog": () => (/* binding */ getBlog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/client/redux/blogs/constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var getALlBlogs = function getALlBlogs() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:3000/api/blogs');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__.FETCH_ALL_BLOGS,
                payload: data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var addNewBlog = function addNewBlog(blogToAdd) {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var _yield$axios$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3000/api/blogs', blogToAdd);

            case 2:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__.ADD_NEW_BLOG,
                payload: data
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}; //Single Blog Actions

var getBlog = function getBlog(blogId) {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      var _yield$axios$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://localhost:3000/api/blogs/".concat(blogId));

            case 2:
              _yield$axios$get2 = _context3.sent;
              data = _yield$axios$get2.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__.GET_SINGLE_BLOG,
                payload: data
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/client/redux/blogs/constants.js":
/*!*********************************************!*\
  !*** ./src/client/redux/blogs/constants.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_NEW_BLOG": () => (/* binding */ ADD_NEW_BLOG),
/* harmony export */   "FETCH_ALL_BLOGS": () => (/* binding */ FETCH_ALL_BLOGS),
/* harmony export */   "GET_SINGLE_BLOG": () => (/* binding */ GET_SINGLE_BLOG)
/* harmony export */ });
var FETCH_ALL_BLOGS = 'GET_ALL_BLOGS';
var ADD_NEW_BLOG = 'ADD_NEW_BLOG'; //Single Blog Constants

var GET_SINGLE_BLOG = 'GET_SINGLE_BLOG';

/***/ }),

/***/ "./src/client/redux/blogs/index.js":
/*!*****************************************!*\
  !*** ./src/client/redux/blogs/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allBlogsReducer": () => (/* binding */ allBlogsReducer),
/* harmony export */   "singleBlogReducer": () => (/* binding */ singleBlogReducer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/client/redux/blogs/constants.js");


var allBlogsReducer = function allBlogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.FETCH_ALL_BLOGS:
      return action.payload;

    case _constants__WEBPACK_IMPORTED_MODULE_1__.ADD_NEW_BLOG:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.payload.blog]);

    default:
      return state;
  }
}; //Single Blog Reducer

var singleBlogReducer = function singleBlogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_SINGLE_BLOG:
      return action.payload;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/client/redux/index.js":
/*!***********************************!*\
  !*** ./src/client/redux/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "persistedReducer": () => (/* binding */ persistedReducer),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "../../../../node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "../../../../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage/createWebStorage */ "../../../../node_modules/redux-persist/lib/storage/createWebStorage.js");
/* harmony import */ var _blogs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs/index */ "./src/client/redux/blogs/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ "./src/client/redux/auth/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/client/redux/users/index.js");









var createNoopStorage = function createNoopStorage() {
  return {
    getItem: function getItem(_key) {
      return Promise.resolve(null);
    },
    setItem: function setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem: function removeItem(_key) {
      return Promise.resolve();
    }
  };
};

var storage = typeof window !== 'undefined' ? (0,redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__["default"])('local') : createNoopStorage();
var persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'] // which reducer want to store

};
var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blog: _blogs_index__WEBPACK_IMPORTED_MODULE_5__.singleBlogReducer,
  blogs: _blogs_index__WEBPACK_IMPORTED_MODULE_5__.allBlogsReducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_6__["default"],
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"]
});
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, reducers);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()), (redux_logger__WEBPACK_IMPORTED_MODULE_3___default())));
});

/***/ }),

/***/ "./src/client/redux/users/actions.js":
/*!*******************************************!*\
  !*** ./src/client/redux/users/actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "getUsers": () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/client/redux/users/constants.js");




var getUsers = function getUsers() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:3000/api/users');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_USERS,
                payload: data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getUser = function getUser() {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var _yield$axios$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:3000/api/users/".concat(userId));

            case 2:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__.GET_USER,
                payload: data
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/client/redux/users/constants.js":
/*!*********************************************!*\
  !*** ./src/client/redux/users/constants.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_USERS": () => (/* binding */ GET_ALL_USERS),
/* harmony export */   "GET_USER": () => (/* binding */ GET_USER)
/* harmony export */ });
var GET_ALL_USERS = 'GET_ALL_USERS';
var GET_USER = 'GET_USER';

/***/ }),

/***/ "./src/client/redux/users/index.js":
/*!*****************************************!*\
  !*** ./src/client/redux/users/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/client/redux/users/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.GET_ALL_USERS:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/server/controllers/authController.js":
/*!**************************************************!*\
  !*** ./src/server/controllers/authController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/server/model/User.js");






var log = debug__WEBPACK_IMPORTED_MODULE_2___default()('app:authController');
var SALT_ROUNDS = process.env.SALT_ROUNDS;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function controller() {
  return {
    register: function register(req, res) {
      (function () {
        var _registerUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var _req$body, username, password, fullname, userExist, hash, newUser, savedUser, userWithLinks;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  if (!req.body.isAdmin) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", res.status(403).json({
                    message: 'Registration with administrative right not allowed'
                  }));

                case 3:
                  _req$body = req.body, username = _req$body.username, password = _req$body.password, fullname = _req$body.fullname;
                  _context.next = 6;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                    username: username
                  });

                case 6:
                  userExist = _context.sent;

                  if (!userExist) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", res.status(409).json({
                    message: 'User Already Exists'
                  }));

                case 9:
                  hash = (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.hashSync)(password, +SALT_ROUNDS);
                  newUser = new _model_User__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    username: username,
                    password: hash,
                    fullname: fullname
                  });
                  _context.next = 13;
                  return newUser.save();

                case 13:
                  savedUser = _context.sent;
                  userWithLinks = savedUser.toJSON();
                  userWithLinks.links = {};
                  userWithLinks.links.filteredBlogsByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(savedUser._id);
                  passport__WEBPACK_IMPORTED_MODULE_3___default().authenticate('local')(req, res, function () {
                    return res.status(201).json({
                      user: userWithLinks
                    });
                  });
                  _context.next = 24;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t0 = _context["catch"](0);
                  log(_context.t0);
                  return _context.abrupt("return", res.status(500).json(_context.t0));

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 20]]);
        }));

        function registerUser() {
          return _registerUser.apply(this, arguments);
        }

        return registerUser;
      })()();
    },
    login: function login(req, res) {
      (function () {
        var _loginUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
          var _req$body2, username, password, foundUser, userWithLinks;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
                  _context2.next = 4;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                    username: username
                  });

                case 4:
                  foundUser = _context2.sent;

                  if (!(!foundUser || (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compareSync)(password, foundUser.password) !== true)) {
                    _context2.next = 7;
                    break;
                  }

                  return _context2.abrupt("return", res.status(403).json({
                    user: null,
                    message: 'Incorrect username or password'
                  }));

                case 7:
                  userWithLinks = foundUser.toJSON();
                  userWithLinks.links = {};
                  userWithLinks.links.filteredBlogsByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(foundUser._id);
                  passport__WEBPACK_IMPORTED_MODULE_3___default().authenticate('local')(req, res, function () {
                    return res.status(200).json({
                      user: userWithLinks
                    });
                  });
                  _context2.next = 16;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](0);
                  log(_context2.t0);

                case 16:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 13]]);
        }));

        function loginUser() {
          return _loginUser.apply(this, arguments);
        }

        return loginUser;
      })()();
    },
    logout: function logout(req, res) {
      (function logoutUser() {
        try {
          req.logout(function () {
            return res.status(200).json({
              message: 'You have successfully logged out from your account.',
              user: null
            });
          });
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    }
  };
})());

/***/ }),

/***/ "./src/server/controllers/blogsController.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/blogsController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Blog */ "./src/server/model/Blog.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);




var log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app:blogsController');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function controller() {
  return {
    getBlogs: function getBlogs(req, res) {
      (function () {
        var _getBlogs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var blogs, query, foundBlogs, results, resultsToReturn, blogsWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  blogs = req.blogs;
                  query = {};

                  if (req.query.authorId) {
                    query.authorId = req.query.authorId;
                  }

                  _context.next = 6;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].find(query);

                case 6:
                  foundBlogs = _context.sent;

                  if (!(foundBlogs.length === 0)) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 10;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].insertMany(blogs);

                case 10:
                  results = _context.sent;
                  resultsToReturn = results.map(function (blog) {
                    var newBlog = blog.toJSON();
                    newBlog.links = {};
                    newBlog.links.self = "http://".concat(req.headers.host, "/api/blogs/").concat(blog._id);
                    return newBlog;
                  });
                  return _context.abrupt("return", res.json(resultsToReturn));

                case 13:
                  blogsWithLinks = foundBlogs.map(function (blog) {
                    var newBlog = blog.toJSON();
                    newBlog.links = {};
                    newBlog.links.self = "http://".concat(req.headers.host, "/api/blogs/").concat(blog._id);
                    return newBlog;
                  });
                  return _context.abrupt("return", res.status(200).json(blogsWithLinks));

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](0);
                  log(_context.t0);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 17]]);
        }));

        function getBlogs() {
          return _getBlogs.apply(this, arguments);
        }

        return getBlogs;
      })()();
    },
    postNewBlog: function postNewBlog(req, res) {
      (function () {
        var _postNewBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
          var _req$body, title, content, authorId, newBlog, savedBlog, newBlogWithLink;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context2.next = 19;
                    break;
                  }

                  _context2.prev = 1;
                  _req$body = req.body, title = _req$body.title, content = _req$body.content, authorId = _req$body.authorId;
                  log('Post New Author: ', authorId);
                  newBlog = new _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"]({
                    title: title,
                    authorId: authorId,
                    content: content
                  });
                  _context2.next = 7;
                  return newBlog.save();

                case 7:
                  savedBlog = _context2.sent;
                  newBlogWithLink = savedBlog.toJSON();
                  newBlogWithLink.links = {};
                  newBlogWithLink.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(newBlog.authorId);
                  return _context2.abrupt("return", res.status(201).json(newBlogWithLink));

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](1);
                  log(_context2.t0);

                case 17:
                  _context2.next = 20;
                  break;

                case 19:
                  return _context2.abrupt("return", res.status(403).json({
                    message: 'You must be logged in to post a new blog'
                  }));

                case 20:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[1, 14]]);
        }));

        function postNewBlog() {
          return _postNewBlog.apply(this, arguments);
        }

        return postNewBlog;
      })()();
    },
    deleteAllBlogs: function deleteAllBlogs(req, res) {
      (function () {
        var _deleteAllBlogs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
          var query, results;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(req.isAuthenticated() && req.user.isAdmin)) {
                    _context3.next = 16;
                    break;
                  }

                  _context3.prev = 1;
                  query = {};

                  if (req.query.authorId) {
                    query.authorId = req.query.authorId;
                  }

                  _context3.next = 6;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].deleteMany(query);

                case 6:
                  results = _context3.sent;
                  return _context3.abrupt("return", res.status(200).json(results));

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](1);
                  log(_context3.t0);
                  return _context3.abrupt("return", res.status(500).json(_context3.t0));

                case 14:
                  _context3.next = 17;
                  break;

                case 16:
                  return _context3.abrupt("return", res.status(403).json({
                    message: 'You do not have the required permission to perform this operation.'
                  }));

                case 17:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[1, 10]]);
        }));

        function deleteAllBlogs() {
          return _deleteAllBlogs.apply(this, arguments);
        }

        return deleteAllBlogs;
      })()();
    },
    getBlog: function getBlog(req, res) {
      (function () {
        var _getBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
          var blog, newBlog;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  blog = req.blog;
                  newBlog = blog.toJSON();
                  newBlog.links = {};
                  newBlog.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(blog.authorId);
                  return _context4.abrupt("return", res.json(newBlog));

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](0);
                  log(_context4.t0);
                  return _context4.abrupt("return", res.status(500).json(_context4.t0));

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[0, 8]]);
        }));

        function getBlog() {
          return _getBlog.apply(this, arguments);
        }

        return getBlog;
      })()();
    },
    replaceBlog: function replaceBlog(req, res) {
      (function () {
        var _updateBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
          var blogId, blog, updateInfo, updatedBlog, updatedBlogWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context5.next = 27;
                    break;
                  }

                  _context5.prev = 1;
                  blogId = req.params.blogId;
                  blog = req.blog;

                  if (req.body._id) {
                    delete req.body._id;
                  }

                  if (!(req.user._id === blog.authorId || req.user.isAdmin)) {
                    _context5.next = 18;
                    break;
                  }

                  _context5.next = 8;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].replaceOne({
                    _id: blogId
                  }, req.body);

                case 8:
                  updateInfo = _context5.sent;
                  _context5.next = 11;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].findById(blogId);

                case 11:
                  updatedBlog = _context5.sent;
                  updatedBlogWithLinks = updatedBlog.toJSON();
                  updatedBlogWithLinks.links = {};
                  updatedBlogWithLinks.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(updatedBlog.authorId);
                  return _context5.abrupt("return", res.status(200).json({
                    message: 'Blog Updated Successfully',
                    blog: updatedBlogWithLinks
                  }));

                case 18:
                  return _context5.abrupt("return", res.status(403).json({
                    message: 'You do not have the necessary permission to perform this operation.'
                  }));

                case 19:
                  _context5.next = 25;
                  break;

                case 21:
                  _context5.prev = 21;
                  _context5.t0 = _context5["catch"](1);
                  log(_context5.t0);
                  return _context5.abrupt("return", res.status(500).json(_context5.t0));

                case 25:
                  _context5.next = 28;
                  break;

                case 27:
                  return _context5.abrupt("return", res.status(403).json({
                    message: 'You must be logged in to perform this operation.'
                  }));

                case 28:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[1, 21]]);
        }));

        function updateBlog() {
          return _updateBlog.apply(this, arguments);
        }

        return updateBlog;
      })()();
    },
    updateBlog: function updateBlog(req, res) {
      (function () {
        var _updateBlog2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
          var blogId, blog, updateInfo, updatedBlog, updatedBlogWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context6.next = 27;
                    break;
                  }

                  _context6.prev = 1;
                  blogId = req.params.blogId;
                  blog = req.blog;

                  if (req.body._id) {
                    delete req.body._id;
                  }

                  if (!(req.user._id === blog.authorId || req.user.isAdmin)) {
                    _context6.next = 18;
                    break;
                  }

                  _context6.next = 8;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].updateOne({
                    _id: blogId
                  }, req.body);

                case 8:
                  updateInfo = _context6.sent;
                  _context6.next = 11;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].findById(blogId);

                case 11:
                  updatedBlog = _context6.sent;
                  updatedBlogWithLinks = updatedBlog.toJSON();
                  updatedBlogWithLinks.links = {};
                  updatedBlogWithLinks.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(updatedBlog.authorId);
                  return _context6.abrupt("return", res.status(200).json({
                    message: 'Blog Updated Successfully',
                    blog: updatedBlogWithLinks
                  }));

                case 18:
                  return _context6.abrupt("return", res.status(403).json({
                    message: 'You do not have the necessary permission to perform this operation.'
                  }));

                case 19:
                  _context6.next = 25;
                  break;

                case 21:
                  _context6.prev = 21;
                  _context6.t0 = _context6["catch"](1);
                  log(_context6.t0);
                  return _context6.abrupt("return", res.status(500).json(_context6.t0));

                case 25:
                  _context6.next = 28;
                  break;

                case 27:
                  return _context6.abrupt("return", res.status(403).json({
                    message: 'You must be logged in to perform this operation.'
                  }));

                case 28:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[1, 21]]);
        }));

        function updateBlog() {
          return _updateBlog2.apply(this, arguments);
        }

        return updateBlog;
      })()();
    },
    deleteBlog: function deleteBlog(req, res) {
      (function () {
        var _deleteBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7() {
          var blogId, blog, deletionInfo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context7.next = 20;
                    break;
                  }

                  _context7.prev = 1;
                  blogId = req.params.blogId;
                  blog = req.blog;

                  if (!(req.user._id === blog.authorId || req.user.isAdmin)) {
                    _context7.next = 11;
                    break;
                  }

                  _context7.next = 7;
                  return _model_Blog__WEBPACK_IMPORTED_MODULE_2__["default"].deleteOne({
                    _id: blogId
                  });

                case 7:
                  deletionInfo = _context7.sent;
                  return _context7.abrupt("return", res.status(200).json({
                    message: 'Blog deleted successfully.',
                    deletionInfo: deletionInfo
                  }));

                case 11:
                  return _context7.abrupt("return", res.status(403).json({
                    message: 'You do not have the necessary permission to perform this operation.'
                  }));

                case 12:
                  _context7.next = 18;
                  break;

                case 14:
                  _context7.prev = 14;
                  _context7.t0 = _context7["catch"](1);
                  log(_context7.t0);
                  return _context7.abrupt("return", res.status(500).json(_context7.t0));

                case 18:
                  _context7.next = 21;
                  break;

                case 20:
                  return _context7.abrupt("return", res.status(403).json({
                    message: 'You must be logged in to perform this operation'
                  }));

                case 21:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[1, 14]]);
        }));

        function deleteBlog() {
          return _deleteBlog.apply(this, arguments);
        }

        return deleteBlog;
      })()();
    }
  };
})());

/***/ }),

/***/ "./src/server/controllers/usersController.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/usersController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/User */ "./src/server/model/User.js");






var log = debug__WEBPACK_IMPORTED_MODULE_2___default()('app:userController');
var SALT_ROUNDS = process.env.SALT_ROUNDS;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function controller() {
  return {
    getUsers: function getUsers(req, res) {
      (function () {
        var _getAllUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var user, userWithLinks, users, usersWithFilter;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  if (!req.query.userId) {
                    _context.next = 9;
                    break;
                  }

                  user = _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findById(req.query.userId);

                  if (user) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", res.status(404).json({
                    message: 'No such user in our database.'
                  }));

                case 5:
                  userWithLinks = user.toJSON();
                  userWithLinks.links = {};
                  userWithLinks.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(user._id);
                  return _context.abrupt("return", res.status(200).json(userWithLinks));

                case 9:
                  _context.next = 11;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].find({});

                case 11:
                  users = _context.sent;

                  if (!(users.length === 0)) {
                    _context.next = 14;
                    break;
                  }

                  return _context.abrupt("return", res.status(404).json({
                    message: 'No users in our database yet.'
                  }));

                case 14:
                  usersWithFilter = users.map(function (user) {
                    var userWithLinks = user.toJSON();
                    userWithLinks.links = {};
                    userWithLinks.links.filteredByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(user._id);
                    return userWithLinks;
                  });
                  return _context.abrupt("return", res.status(200).json(usersWithFilter));

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](0);
                  log(_context.t0);
                  return _context.abrupt("return", res.status(500).json(_context.t0));

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 18]]);
        }));

        function getAllUsers() {
          return _getAllUsers.apply(this, arguments);
        }

        return getAllUsers;
      })()();
    },
    deleteUsers: function deleteUsers(req, res) {
      (function () {
        var _deleteUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
          var deletedUsers;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context2.next = 18;
                    break;
                  }

                  if (!req.user.isAdmin) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 2;
                  _context2.next = 5;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].deleteMany({});

                case 5:
                  deletedUsers = _context2.sent;
                  return _context2.abrupt("return", res.status(200).json({
                    message: 'All users deleted.',
                    databaseMessage: deletedUsers
                  }));

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                  log(_context2.t0);
                  return _context2.abrupt("return", res.status(500).json(_context2.t0));

                case 13:
                  _context2.next = 16;
                  break;

                case 15:
                  return _context2.abrupt("return", res.status(403).json({
                    message: 'Must be an Admin to perform this operation.'
                  }));

                case 16:
                  _context2.next = 19;
                  break;

                case 18:
                  return _context2.abrupt("return", res.status(403).json({
                    message: 'Must be logged in to perform this operation.'
                  }));

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[2, 9]]);
        }));

        function deleteUsers() {
          return _deleteUsers.apply(this, arguments);
        }

        return deleteUsers;
      })()();
    },
    getUser: function getUser(req, res) {
      (function () {
        var _getUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
          var foundUser, userWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  foundUser = req.foundUser;
                  userWithLinks = foundUser.toJSON();
                  userWithLinks.links = {};
                  userWithLinks.links.filteredBlogsByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(foundUser._id);
                  return _context3.abrupt("return", res.status(200).json(userWithLinks));

                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3["catch"](0);
                  log(_context3.t0);
                  return _context3.abrupt("return", res.status(500).json({
                    err: _context3.t0
                  }));

                case 12:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 8]]);
        }));

        function getUser() {
          return _getUser.apply(this, arguments);
        }

        return getUser;
      })()();
    },
    replaceProfile: function replaceProfile(req, res) {
      (function () {
        var _replaceProfile = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
          var foundUser, updateInfo, updatedUser, updatedUserWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context4.next = 27;
                    break;
                  }

                  _context4.prev = 1;

                  if (req.body._id) {
                    delete req.body._id;
                  }

                  foundUser = req.foundUser;

                  if (!(req.body.isAdmin && foundUser.isAdmin !== true)) {
                    _context4.next = 6;
                    break;
                  }

                  return _context4.abrupt("return", res.status(403).json({
                    message: 'You do not have the permission to perform this operation.'
                  }));

                case 6:
                  if (!(req.user.username === foundUser.username || req.user.isAdmin === true)) {
                    _context4.next = 18;
                    break;
                  }

                  if (req.body.password) {
                    req.body.password = (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.hashSync)(req.body.password, +SALT_ROUNDS);
                  }

                  _context4.next = 10;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].replaceOne({
                    _id: foundUser._id
                  }, req.body);

                case 10:
                  updateInfo = _context4.sent;
                  _context4.next = 13;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findById(foundUser._id);

                case 13:
                  updatedUser = _context4.sent;
                  updatedUserWithLinks = updatedUser.toJSON();
                  updatedUserWithLinks.links = {};
                  updatedUserWithLinks.links.filteredBlogsByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(foundUser._id);
                  return _context4.abrupt("return", res.status(200).json({
                    message: 'Account updated successfully',
                    user: updatedUserWithLinks
                  }));

                case 18:
                  return _context4.abrupt("return", res.status(403).json({
                    message: 'Can only update your own account'
                  }));

                case 21:
                  _context4.prev = 21;
                  _context4.t0 = _context4["catch"](1);
                  log(_context4.t0);
                  return _context4.abrupt("return", res.status(500).json(_context4.t0));

                case 25:
                  _context4.next = 28;
                  break;

                case 27:
                  return _context4.abrupt("return", res.status(403).json({
                    message: 'Must be logged in to perform such operation.'
                  }));

                case 28:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[1, 21]]);
        }));

        function replaceProfile() {
          return _replaceProfile.apply(this, arguments);
        }

        return replaceProfile;
      })()();
    },
    updateProfile: function updateProfile(req, res) {
      (function () {
        var _replaceProfile2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
          var foundUser, updateInfo, updatedUser, updatedUserWithLinks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context5.next = 27;
                    break;
                  }

                  _context5.prev = 1;

                  if (req.body._id) {
                    delete req.body._id;
                  }

                  foundUser = req.foundUser;

                  if (!(req.body.isAdmin && foundUser.isAdmin !== true)) {
                    _context5.next = 6;
                    break;
                  }

                  return _context5.abrupt("return", res.status(403).json({
                    message: 'You do not have the permission to perform this operation.'
                  }));

                case 6:
                  if (!(req.user.username === foundUser.username || req.user.isAdmin === true)) {
                    _context5.next = 18;
                    break;
                  }

                  if (req.body.password) {
                    req.body.password = (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.hashSync)(req.body.password, +SALT_ROUNDS);
                  }

                  _context5.next = 10;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].updateOne({
                    _id: foundUser._id
                  }, req.body);

                case 10:
                  updateInfo = _context5.sent;
                  _context5.next = 13;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findById(foundUser._id);

                case 13:
                  updatedUser = _context5.sent;
                  updatedUserWithLinks = updatedUser.toJSON();
                  updatedUserWithLinks.links = {};
                  updatedUserWithLinks.links.filteredBlogsByThisAuthor = "http://".concat(req.headers.host, "/api/blogs/?authorId=").concat(foundUser._id);
                  return _context5.abrupt("return", res.status(200).json({
                    message: 'Account updated successfully',
                    user: updatedUserWithLinks
                  }));

                case 18:
                  return _context5.abrupt("return", res.status(403).json({
                    message: 'Can only update your own account'
                  }));

                case 21:
                  _context5.prev = 21;
                  _context5.t0 = _context5["catch"](1);
                  log(_context5.t0);
                  return _context5.abrupt("return", res.status(500).json(_context5.t0));

                case 25:
                  _context5.next = 28;
                  break;

                case 27:
                  return _context5.abrupt("return", res.status(403).json({
                    message: 'Must be logged in to perform such operation.'
                  }));

                case 28:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[1, 21]]);
        }));

        function replaceProfile() {
          return _replaceProfile2.apply(this, arguments);
        }

        return replaceProfile;
      })()();
    },
    deleteUser: function deleteUser(req, res) {
      (function () {
        var _deleteUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
          var foundUser, deletionInfo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!req.isAuthenticated()) {
                    _context6.next = 19;
                    break;
                  }

                  _context6.prev = 1;
                  foundUser = req.foundUser;

                  if (!(req.user.username === foundUser.username || req.user.isAdmin)) {
                    _context6.next = 10;
                    break;
                  }

                  _context6.next = 6;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].deleteOne({
                    _id: foundUser._id
                  });

                case 6:
                  deletionInfo = _context6.sent;
                  return _context6.abrupt("return", res.status(200).json({
                    message: 'User account deleted successfully.',
                    deletionInfo: deletionInfo
                  }));

                case 10:
                  return _context6.abrupt("return", res.status(403).json({
                    message: 'You do not have the required permission to perform this operation.'
                  }));

                case 11:
                  _context6.next = 17;
                  break;

                case 13:
                  _context6.prev = 13;
                  _context6.t0 = _context6["catch"](1);
                  log(_context6.t0);
                  return _context6.abrupt("return", res.status(500).json(_context6.t0));

                case 17:
                  _context6.next = 20;
                  break;

                case 19:
                  return _context6.abrupt("return", res.status(403).json({
                    message: 'Must be an account owner to perform such operation.'
                  }));

                case 20:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[1, 13]]);
        }));

        function deleteUser() {
          return _deleteUser.apply(this, arguments);
        }

        return deleteUser;
      })()();
    }
  };
})());

/***/ }),

/***/ "./src/server/helpers/createStore.js":
/*!*******************************************!*\
  !*** ./src/server/helpers/createStore.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "../../../../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_redux_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/redux/index */ "./src/client/redux/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_client_redux_index__WEBPACK_IMPORTED_MODULE_3__.reducers, {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default()), (redux_logger__WEBPACK_IMPORTED_MODULE_1___default())));
});

/***/ }),

/***/ "./src/server/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/server/helpers/renderer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store, context) {
  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__["default"])))));
  return "\n  <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"/styles.css\">\n\n  </head>\n  <body>\n    <div id=\"root\">".concat(content, "</div>\n\n    <script>\n       window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n    </script>\n\n    <script src=\"/bundle.js\"></script>\n  </body>\n</html>\n");
});

/***/ }),

/***/ "./src/server/model/Blog.js":
/*!**********************************!*\
  !*** ./src/server/model/Blog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  content: {
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

"use strict";
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
    type: String
  },
  fullname: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    "default": ''
  },
  isAdmin: {
    type: Boolean,
    "default": false
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model('User', userSchema));

/***/ }),

/***/ "./src/server/passport/index.js":
/*!**************************************!*\
  !*** ./src/server/passport/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  (0,_strategies_localStrategy__WEBPACK_IMPORTED_MODULE_1__.localStrategy)();
  passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, {
        id: user.id,
        username: user.username
      });
    });
  });
  passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};

/***/ }),

/***/ "./src/server/passport/strategies/localStrategy.js":
/*!*********************************************************!*\
  !*** ./src/server/passport/strategies/localStrategy.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStrategy": () => (/* binding */ localStrategy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/User */ "./src/server/model/User.js");






var localStrategy = function localStrategy() {
  passport__WEBPACK_IMPORTED_MODULE_3___default().use(new passport_local__WEBPACK_IMPORTED_MODULE_2__.Strategy(function (username, password, done) {
    try {
      (function () {
        var _getUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var user;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _model_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
                    username: username
                  });

                case 2:
                  user = _context.sent;

                  if (user) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", done(null, false));

                case 5:
                  if (!((0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compareSync)(password, user.password) !== true)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", done(null, false));

                case 7:
                  return _context.abrupt("return", done(null, user));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getUser() {
          return _getUser.apply(this, arguments);
        }

        return getUser;
      })()();
    } catch (err) {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_authController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/authController */ "./src/server/controllers/authController.js");


var register = _controllers_authController__WEBPACK_IMPORTED_MODULE_1__["default"].register,
    login = _controllers_authController__WEBPACK_IMPORTED_MODULE_1__["default"].login,
    logout = _controllers_authController__WEBPACK_IMPORTED_MODULE_1__["default"].logout;

var routes = function routes() {
  var authRoutes = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
  authRoutes.route('/register').post(register);
  authRoutes.route('/login').post(login);
  authRoutes.route('/logout').get(logout);
  return authRoutes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/server/routes/blogRoutes.js":
/*!*****************************************!*\
  !*** ./src/server/routes/blogRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Blog */ "./src/server/model/Blog.js");
/* harmony import */ var _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/blogsController */ "./src/server/controllers/blogsController.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var blogsFilePath = (0,path__WEBPACK_IMPORTED_MODULE_5__.join)('src', 'db', 'blogs.json');
var log = debug__WEBPACK_IMPORTED_MODULE_6___default()('app:blogRoutes');
var getBlogs = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].getBlogs,
    getBlog = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].getBlog,
    updateBlog = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].updateBlog,
    deleteAllBlogs = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].deleteAllBlogs,
    deleteBlog = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].deleteBlog,
    postNewBlog = _controllers_blogsController__WEBPACK_IMPORTED_MODULE_8__["default"].postNewBlog;

var router = function router() {
  var blogRoutes = (0,express__WEBPACK_IMPORTED_MODULE_3__.Router)();
  blogRoutes.use(function (req, res, next) {
    try {
      var blogs = (0,fs__WEBPACK_IMPORTED_MODULE_4__.readFileSync)(blogsFilePath, 'utf8');
      var parsedBlogs = JSON.parse(blogs).map(function (blog) {
        return _objectSpread(_objectSpread({}, blog), {}, {
          content: blog.post.join(' ')
        });
      });
      req.blogs = parsedBlogs;
      next();
    } catch (err) {
      log(err);
      return res.status(500).json(err);
    }
  });
  blogRoutes.route('/').get(getBlogs).post(postNewBlog)["delete"](deleteAllBlogs);
  blogRoutes.route('/:blogId').all(function (req, res, next) {
    (function () {
      var _getBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var blogId, blog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                blogId = req.params.blogId;
                _context.next = 4;
                return _model_Blog__WEBPACK_IMPORTED_MODULE_7__["default"].findById(blogId);

              case 4:
                blog = _context.sent;

                if (blog) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  message: 'No such blog in our database.'
                }));

              case 9:
                req.blog = blog;
                next();

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                log(_context.t0);
                return _context.abrupt("return", res.status(500).json(_context.t0));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function getBlog() {
        return _getBlog.apply(this, arguments);
      }

      return getBlog;
    })()();
  }).get(getBlog).put(function (req, res) {
    updateBlog(req, res, _model_Blog__WEBPACK_IMPORTED_MODULE_7__["default"].replaceOne);
  }).patch(function (req, res) {
    updateBlog(req, res, _model_Blog__WEBPACK_IMPORTED_MODULE_7__["default"].updateOne);
  })["delete"](deleteBlog);
  return blogRoutes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/server/routes/userRoutes.js":
/*!*****************************************!*\
  !*** ./src/server/routes/userRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/server/model/User.js");
/* harmony import */ var _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/usersController */ "./src/server/controllers/usersController.js");






var log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app:userRoutes');
var getUsers = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].getUsers,
    deleteUsers = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].deleteUsers,
    getUser = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].getUser,
    updateProfile = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].updateProfile,
    replaceProfile = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].replaceProfile,
    deleteUser = _controllers_usersController__WEBPACK_IMPORTED_MODULE_5__["default"].deleteUser;

var routes = function routes() {
  var userRoutes = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
  userRoutes.route('/').get(getUsers)["delete"](deleteUsers);
  userRoutes.route('/:userId').all(function (req, res, next) {
    (function () {
      var _getUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var userId, foundUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                userId = req.params.userId;
                _context.next = 4;
                return _model_User__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
                  _id: userId
                });

              case 4:
                foundUser = _context.sent;
                log('Middleware: ', foundUser);

                if (foundUser) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  message: 'No such user in our database.'
                }));

              case 8:
                req.foundUser = foundUser;
                next();
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  err: _context.t0
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function getUser() {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    })()();
  }).get(getUser).put(replaceProfile).patch(updateProfile)["delete"](deleteUser);
  return userRoutes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "../../../../node_modules/redux-logger/dist/redux-logger.js":
/*!******************************************************************!*\
  !*** ../../../../node_modules/redux-logger/dist/redux-logger.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "../../../../node_modules/redux-persist/es/constants.js":
/*!**************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_VERSION": () => (/* binding */ DEFAULT_VERSION),
/* harmony export */   "FLUSH": () => (/* binding */ FLUSH),
/* harmony export */   "KEY_PREFIX": () => (/* binding */ KEY_PREFIX),
/* harmony export */   "PAUSE": () => (/* binding */ PAUSE),
/* harmony export */   "PERSIST": () => (/* binding */ PERSIST),
/* harmony export */   "PURGE": () => (/* binding */ PURGE),
/* harmony export */   "REGISTER": () => (/* binding */ REGISTER),
/* harmony export */   "REHYDRATE": () => (/* binding */ REHYDRATE)
/* harmony export */ });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/createMigrate.js":
/*!******************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/createMigrate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMigrate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");

function createMigrate(migrations, config) {
  var _ref = config || {},
      debug = _ref.debug;

  return function (state, currentVersion) {
    if (!state) {
      if ( true && debug) console.log('redux-persist: no inbound state, skipping migration');
      return Promise.resolve(undefined);
    }

    var inboundVersion = state._persist && state._persist.version !== undefined ? state._persist.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;

    if (inboundVersion === currentVersion) {
      if ( true && debug) console.log('redux-persist: versions match, noop migration');
      return Promise.resolve(state);
    }

    if (inboundVersion > currentVersion) {
      if (true) console.error('redux-persist: downgrading version is not supported');
      return Promise.resolve(state);
    }

    var migrationKeys = Object.keys(migrations).map(function (ver) {
      return parseInt(ver);
    }).filter(function (key) {
      return currentVersion >= key && key > inboundVersion;
    }).sort(function (a, b) {
      return a - b;
    });
    if ( true && debug) console.log('redux-persist: migrationKeys', migrationKeys);

    try {
      var migratedState = migrationKeys.reduce(function (state, versionKey) {
        if ( true && debug) console.log('redux-persist: running migration for versionKey', versionKey);
        return migrations[versionKey](state);
      }, state);
      return Promise.resolve(migratedState);
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/createPersistoid.js":
/*!*********************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/createPersistoid.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPersistoid)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");

// @TODO remove once flow < 0.63 support is no longer required.
function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var serialize;

  if (config.serialize === false) {
    serialize = function serialize(x) {
      return x;
    };
  } else if (typeof config.serialize === 'function') {
    serialize = config.serialize;
  } else {
    serialize = defaultSerialize;
  }

  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values

  var lastState = {};
  var stagedState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop

      if (lastState[key] === state[key]) return; // value unchanged? noop

      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop

      keysToProcess.push(key); // add key to queue
    }); //if any key is missing in the new state which was present in the lastState,
    //add it for processing too

    Object.keys(lastState).forEach(function (key) {
      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
        keysToProcess.push(key);
      }
    }); // start the time iterator if not running (read: throttle)

    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key, lastState);
    }, lastState[key]);

    if (endState !== undefined) {
      try {
        stagedState[key] = serialize(endState);
      } catch (err) {
        console.error('redux-persist/createPersistoid: error serializing state', err);
      }
    } else {
      //if the endState is undefined, no need to persist the existing serialized content
      delete stagedState[key];
    }

    if (keysToProcess.length === 0) {
      writeStagedState();
    }
  }

  function writeStagedState() {
    // cleanup any removed keys just before write.
    Object.keys(stagedState).forEach(function (key) {
      if (lastState[key] === undefined) {
        delete stagedState[key];
      }
    });
    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (writeFailHandler) writeFailHandler(err);

    if (err && "development" !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }

    return writePromise || Promise.resolve();
  }; // return `persistoid`


  return {
    update: update,
    flush: flush
  };
} // @NOTE in the future this may be exposed via config

function defaultSerialize(data) {
  return JSON.stringify(data);
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/createTransform.js":
/*!********************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/createTransform.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTransform)
/* harmony export */ });
function createTransform( // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
inbound, // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key, fullState) : state;
    },
    out: function out(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key, fullState) : state;
    }
  };
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/getStoredState.js":
/*!*******************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/getStoredState.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStoredState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");

function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var debug = config.debug;
  var deserialize;

  if (config.deserialize === false) {
    deserialize = function deserialize(x) {
      return x;
    };
  } else if (typeof config.deserialize === 'function') {
    deserialize = config.deserialize;
  } else {
    deserialize = defaultDeserialize;
  }

  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key, rawState);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if ( true && debug) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
        throw err;
      }
    }
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/index.js":
/*!**********************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_VERSION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_VERSION),
/* harmony export */   "FLUSH": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.FLUSH),
/* harmony export */   "KEY_PREFIX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.KEY_PREFIX),
/* harmony export */   "PAUSE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.PAUSE),
/* harmony export */   "PERSIST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.PERSIST),
/* harmony export */   "PURGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.PURGE),
/* harmony export */   "REGISTER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.REGISTER),
/* harmony export */   "REHYDRATE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.REHYDRATE),
/* harmony export */   "createMigrate": () => (/* reexport safe */ _createMigrate__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "createPersistoid": () => (/* reexport safe */ _createPersistoid__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "createTransform": () => (/* reexport safe */ _createTransform__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "getStoredState": () => (/* reexport safe */ _getStoredState__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "persistCombineReducers": () => (/* reexport safe */ _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "persistReducer": () => (/* reexport safe */ _persistReducer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "persistStore": () => (/* reexport safe */ _persistStore__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "purgeStoredState": () => (/* reexport safe */ _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "../../../../node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistCombineReducers */ "../../../../node_modules/redux-persist/es/persistCombineReducers.js");
/* harmony import */ var _persistStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistStore */ "../../../../node_modules/redux-persist/es/persistStore.js");
/* harmony import */ var _createMigrate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMigrate */ "../../../../node_modules/redux-persist/es/createMigrate.js");
/* harmony import */ var _createTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransform */ "../../../../node_modules/redux-persist/es/createTransform.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStoredState */ "../../../../node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createPersistoid */ "../../../../node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purgeStoredState */ "../../../../node_modules/redux-persist/es/purgeStoredState.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");










/***/ }),

/***/ "../../../../node_modules/redux-persist/es/persistCombineReducers.js":
/*!***************************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/persistCombineReducers.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ persistCombineReducers)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistReducer */ "../../../../node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel2 */ "../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js");



// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_2__["default"] : config.stateReconciler;
  return (0,_persistReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(config, (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers));
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/persistReducer.js":
/*!*******************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/persistReducer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ persistReducer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");
/* harmony import */ var _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel1 */ "../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPersistoid */ "../../../../node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStoredState */ "../../../../node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purgeStoredState */ "../../../../node_modules/redux-persist/es/purgeStoredState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var DEFAULT_TIMEOUT = 5000;
/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/

function persistReducer(config, baseReducer) {
  if (true) {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }

  var version = config.version !== undefined ? config.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__["default"] : config.stateReconciler;
  var getStoredState = config.getStoredState || _getStoredState__WEBPACK_IMPORTED_MODULE_3__["default"];
  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
  var _persistoid = null;
  var _purge = false;
  var _paused = true;

  var conditionalUpdate = function conditionalUpdate(state) {
    // update the persistoid only if we are rehydrated and not paused
    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
    return state;
  };

  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type


    var restState = rest;

    if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PERSIST) {
      var _sealed = false;

      var _rehydrate = function _rehydrate(payload, err) {
        // dev warning if we are already sealed
        if ( true && _sealed) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed

        if (!_sealed) {
          action.rehydrate(config.key, payload, err);
          _sealed = true;
        }
      };

      timeout && setTimeout(function () {
        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
      }, timeout); // @NOTE PERSIST resumes if paused.

      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set

      if (!_persistoid) _persistoid = (0,_createPersistoid__WEBPACK_IMPORTED_MODULE_2__["default"])(config); // @NOTE PERSIST can be called multiple times, noop after the first

      if (_persist) {
        // We still need to call the base reducer because there might be nested
        // uses of persistReducer which need to be aware of the PERSIST action
        return _objectSpread({}, baseReducer(restState, action), {
          _persist: _persist
        });
      }

      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
      action.register(config.key);
      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };

        migrate(restoredState, version).then(function (migratedState) {
          _rehydrate(migratedState);
        }, function (migrateErr) {
          if ( true && migrateErr) console.error('redux-persist: migration error', migrateErr);

          _rehydrate(undefined, migrateErr);
        });
      }, function (err) {
        _rehydrate(undefined, err);
      });
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: {
          version: version,
          rehydrated: false
        }
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PURGE) {
      _purge = true;
      action.result((0,_purgeStoredState__WEBPACK_IMPORTED_MODULE_4__["default"])(config));
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.FLUSH) {
      action.result(_persistoid && _persistoid.flush());
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PAUSE) {
      _paused = true;
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE) {
      // noop on restState if purging
      if (_purge) return _objectSpread({}, restState, {
        _persist: _objectSpread({}, _persist, {
          rehydrated: true
        }) // @NOTE if key does not match, will continue to default else below

      });

      if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined

        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

        var _newState = _objectSpread({}, reconciledRest, {
          _persist: _objectSpread({}, _persist, {
            rehydrated: true
          })
        });

        return conditionalUpdate(_newState);
      }
    } // if we have not already handled PERSIST, straight passthrough


    if (!_persist) return baseReducer(state, action); // run base reducer:
    // is state modified ? return original : return updated

    var newState = baseReducer(restState, action);
    if (newState === restState) return state;
    return conditionalUpdate(_objectSpread({}, newState, {
      _persist: _persist
    }));
  };
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/persistStore.js":
/*!*****************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/persistStore.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ persistStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__.REGISTER:
      return _objectSpread({}, state, {
        registry: [].concat(_toConsumableArray(state.registry), [action.key])
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__.REHYDRATE:
      var firstIndex = state.registry.indexOf(action.key);

      var registry = _toConsumableArray(state.registry);

      registry.splice(firstIndex, 1);
      return _objectSpread({}, state, {
        registry: registry,
        bootstrapped: registry.length === 0
      });

    default:
      return state;
  }
};

function persistStore(store, options, cb) {
  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (true) {
    var optionsToTest = options || {};
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
    });
  }

  var boostrappedCb = cb || false;

  var _pStore = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);

  var register = function register(key) {
    _pStore.dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.REGISTER,
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.REHYDRATE,
      payload: payload,
      err: err,
      key: key // dispatch to `store` to rehydrate and `persistor` to track result

    };
    store.dispatch(rehydrateAction);

    _pStore.dispatch(rehydrateAction);

    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  var persistor = _objectSpread({}, _pStore, {
    purge: function purge() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.PURGE,
        result: function result(purgeResult) {
          results.push(purgeResult);
        }
      });
      return Promise.all(results);
    },
    flush: function flush() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.FLUSH,
        result: function result(flushResult) {
          results.push(flushResult);
        }
      });
      return Promise.all(results);
    },
    pause: function pause() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.PAUSE
      });
    },
    persist: function persist() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.PERSIST,
        register: register,
        rehydrate: rehydrate
      });
    }
  });

  if (!(options && options.manualPersist)) {
    persistor.persist();
  }

  return persistor;
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/purgeStoredState.js":
/*!*********************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/purgeStoredState.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ purgeStoredState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../../../node_modules/redux-persist/es/constants.js");

function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && "development" !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
/*!************************************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ autoMergeLevel1)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel1: 
    - merges 1 level of substate
    - skips substate if already modified
*/
function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      } // otherwise hard set the new value


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
/*!************************************************************************************!*\
  !*** ../../../../node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ autoMergeLevel2)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel2: 
    - merges 2 level of substate
    - skips substate if already modified
    - this is essentially redux-perist v4 behavior
*/
function autoMergeLevel2(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      }

      if (isPlainEnoughObject(reducedState[key])) {
        // if object is plain enough shallow merge the new values (hence "Level2")
        newState[key] = _objectSpread({}, newState[key], {}, inboundState[key]);
        return;
      } // otherwise hard set


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

function isPlainEnoughObject(o) {
  return o !== null && !Array.isArray(o) && _typeof(o) === 'object';
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/lib/storage/createWebStorage.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/redux-persist/lib/storage/createWebStorage.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = createWebStorage;

var _getStorage = _interopRequireDefault(__webpack_require__(/*! ./getStorage */ "../../../../node_modules/redux-persist/lib/storage/getStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = (0, _getStorage.default)(type);
  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.getItem(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve, reject) {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.removeItem(key));
      });
    }
  };
}

/***/ }),

/***/ "../../../../node_modules/redux-persist/lib/storage/getStorage.js":
/*!************************************************************************!*\
  !*** ../../../../node_modules/redux-persist/lib/storage/getStorage.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = getStorage;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function noop() {}

var noopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop
};

function hasStorage(storageType) {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !(storageType in self)) {
    return false;
  }

  try {
    var storage = self[storageType];
    var testKey = "redux-persist ".concat(storageType, " test");
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (true) console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
    return false;
  }

  return true;
}

function getStorage(type) {
  var storageType = "".concat(type, "Storage");
  if (hasStorage(storageType)) return self[storageType];else {
    if (true) {
      console.error("redux-persist failed to create sync storage. falling back to noop storage.");
    }

    return noopStorage;
  }
}

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _server_helpers_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server/helpers/renderer */ "./src/server/helpers/renderer.js");
/* harmony import */ var _server_helpers_createStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/helpers/createStore */ "./src/server/helpers/createStore.js");
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/Routes */ "./src/client/Routes.js");
/* harmony import */ var _server_routes_blogRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server/routes/blogRoutes */ "./src/server/routes/blogRoutes.js");
/* harmony import */ var _server_routes_authRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./server/routes/authRoutes */ "./src/server/routes/authRoutes.js");
/* harmony import */ var _server_routes_userRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server/routes/userRoutes */ "./src/server/routes/userRoutes.js");
/* harmony import */ var _server_passport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./server/passport */ "./src/server/passport/index.js");

dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();













var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var debug = debug__WEBPACK_IMPORTED_MODULE_2___default()('app');
var _process$env = process.env,
    HOST = _process$env.HOST,
    PORT = _process$env.PORT,
    SECRET = _process$env.SECRET,
    DATABASE_URL = _process$env.DATABASE_URL;
app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"]('public'));
(0,mongoose__WEBPACK_IMPORTED_MODULE_6__.connect)(DATABASE_URL, function (err) {
  if (err) {
    debug(err);
  } else {
    debug("Database connected successfully.");
  }
}); //Auth Config

app.use(express_session__WEBPACK_IMPORTED_MODULE_5___default()({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}));
(0,_server_passport__WEBPACK_IMPORTED_MODULE_13__.passportConfig)(app);
app.use('/api/blogs', (0,_server_routes_blogRoutes__WEBPACK_IMPORTED_MODULE_10__["default"])());
app.use('/api/auth', (0,_server_routes_authRoutes__WEBPACK_IMPORTED_MODULE_11__["default"])());
app.use('/api/users', (0,_server_routes_userRoutes__WEBPACK_IMPORTED_MODULE_12__["default"])());
app.get('*', function (req, res) {
  var store = (0,_server_helpers_createStore__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_9__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store, req.path.split('/')[2]) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve)["catch"](resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = (0,_server_helpers_renderer__WEBPACK_IMPORTED_MODULE_7__["default"])(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    return res.send(content);
  });
});
app.listen(PORT, HOST, function () {
  return debug("Server is running on ".concat(HOST, ", port ").concat(PORT));
});
})();

/******/ })()
;