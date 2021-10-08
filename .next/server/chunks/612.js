exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 1762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@mui/material/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__(1873);
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./public/images/svg/home.svg
/* harmony default export */ const home = ({"src":"/_next/static/image/public/images/svg/home.069103adef5a7bcdd8493581ab1b6f99.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./public/images/svg/active.svg
/* harmony default export */ const active = ({"src":"/_next/static/image/public/images/svg/active.20f669ff287c0e5b5e998b7ae8de2f96.svg","height":21,"width":19});
;// CONCATENATED MODULE: ./public/images/svg/blogers.svg
/* harmony default export */ const blogers = ({"src":"/_next/static/image/public/images/svg/blogers.c924845451f1c7b72b2de05b322f6f2e.svg","height":19,"width":21});
;// CONCATENATED MODULE: ./public/images/svg/pr.svg
/* harmony default export */ const pr = ({"src":"/_next/static/image/public/images/svg/pr.047bc7420cc6efac7f1b0fd07d9720a4.svg","height":20,"width":25});
;// CONCATENATED MODULE: ./public/images/svg/struct.svg
/* harmony default export */ const struct = ({"src":"/_next/static/image/public/images/svg/struct.6ca7335cc04d5cf13d16419d471bb2f1.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/svg/shop.svg
/* harmony default export */ const shop = ({"src":"/_next/static/image/public/images/svg/shop.7033820a0ac3cf81ef02328cd8f91d52.svg","height":21,"width":19});
;// CONCATENATED MODULE: ./public/images/svg/maraphon.svg
/* harmony default export */ const maraphon = ({"src":"/_next/static/image/public/images/svg/maraphon.68c9bf9c5caa8bc5772858ac74f8ddd6.svg","height":21,"width":19});
;// CONCATENATED MODULE: ./public/images/svg/lending.svg
/* harmony default export */ const lending = ({"src":"/_next/static/image/public/images/svg/lending.76f4d55cdaedda72fb64d34e0dea36a7.svg","height":21,"width":21});
// EXTERNAL MODULE: ./components/SideBar.module.scss
var SideBar_module = __webpack_require__(1724);
var SideBar_module_default = /*#__PURE__*/__webpack_require__.n(SideBar_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SideBar.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const SideBar = () => {
  const IsActive = route => {
    if (route === (0,router_.useRouter)().pathname) return (SideBar_module_default()).active || "";
  };

  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    bottom: false
  });

  const toggleDrawer = open => () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      bottom: open
    }));
  }; // Оптимизировать list позже через map


  const list = /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: (SideBar_module_default()).ullist,
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/dashboard"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/dashboard",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: home,
              alt: "dashboard",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u0414\u0430\u0448\u0431\u043E\u0440\u0434"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/activity"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/activity",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: active,
              alt: "activity",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u0411\u0438\u0440\u0436\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/market"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/market",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: blogers,
              alt: "market",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u0411\u0438\u0440\u0436\u0430 \u0431\u043B\u043E\u0433\u0435\u0440\u043E\u0432"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/pr"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/pr",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: pr,
              alt: "pr",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u0412\u0437\u0430\u0438\u043C\u043E\u043F\u0438\u0430\u0440"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/structure"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/structure",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: struct,
              alt: "structure",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u041C\u043E\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/shop"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: shop,
              alt: "shop",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/marathon"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/marathon",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: maraphon,
              alt: "marathon",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u041C\u0430\u0440\u0430\u0444\u043E\u043D"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: IsActive("/landing"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).button,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/landing",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (SideBar_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: lending,
              alt: "landing",
              height: 25,
              width: 25
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (SideBar_module_default()).next,
              children: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433\u0438"
            })]
          })
        })
      })
    })]
  });

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (SideBar_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).desc,
        children: list
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).mobile,
        onClick: toggleDrawer(true),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SideBar_module_default()).upmenu,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ArrowUpOutlined, {
            style: {
              fontSize: '16px',
              color: '#6b73ff'
            }
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((SwipeableDrawer_default()), {
        anchor: 'bottom',
        open: state.bottom,
        onClose: toggleDrawer(false),
        onOpen: toggleDrawer(true),
        children: list
      })]
    })
  });
};

/* harmony default export */ const components_SideBar = (SideBar);
// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__(8191);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/images/svg/exit.svg
/* harmony default export */ const exit = ({"src":"/_next/static/image/public/images/svg/exit.dacd1b011551e673453e98bc7bee9839.svg","height":22,"width":23});
;// CONCATENATED MODULE: ./components/Header.tsx








const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).next,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).exit,
      children: ["\u0412\u044B\u0445\u043E\u0434 ", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: exit,
        width: 25,
        height: 25,
        alt: "exit"
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./components/Layout.module.scss
var Layout_module = __webpack_require__(5315);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.tsx








const Layout = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).layout,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: props.title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).head,
      children: /*#__PURE__*/jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Header, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_module_default()).flex,
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: (Layout_module_default()).bar,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_SideBar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: (Layout_module_default()).content,
        children: props.children
      })]
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 8191:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Header_content__3--fg",
	"exit": "Header_exit__zsFM1",
	"next": "Header_next__3_YOy"
};


/***/ }),

/***/ 5315:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Layout_layout__1he8Q",
	"content": "Layout_content__3s-p0",
	"head": "Layout_head__2mD98",
	"flex": "Layout_flex__30Wb8",
	"bar": "Layout_bar__3Cpd0"
};


/***/ }),

/***/ 1724:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "SideBar_content__2jZov",
	"mobile": "SideBar_mobile__2zp3X",
	"container": "SideBar_container__1jPO8",
	"upmenu": "SideBar_upmenu__jITxt",
	"next": "SideBar_next__3dNrA",
	"button": "SideBar_button__1ezm1",
	"active": "SideBar_active__CZLn4",
	"ullist": "SideBar_ullist__23e1J",
	"desc": "SideBar_desc__3waAd"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;