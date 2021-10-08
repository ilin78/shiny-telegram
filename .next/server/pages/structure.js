(() => {
var exports = {};
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 6578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ structure),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/Layout.tsx + 11 modules
var Layout = __webpack_require__(1762);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./features/structure/MyStructure.module.scss
var MyStructure_module = __webpack_require__(519);
var MyStructure_module_default = /*#__PURE__*/__webpack_require__.n(MyStructure_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./features/structure/MyStructure.tsx







const MyStructure = ({
  userData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MyStructure_module_default()).head,
      children: "\u041C\u043E\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MyStructure_module_default()).cards,
      children: userData.map((udata, i) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MyStructure_module_default()).card,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (MyStructure_module_default()).numbers,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MyStructure_module_default()).block,
              children: udata[0]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MyStructure_module_default()).block,
              children: udata[1]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MyStructure_module_default()).line
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (MyStructure_module_default()).count,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MyStructure_module_default()).block,
              children: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u044B\u043F\u043B\u0430\u0442"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MyStructure_module_default()).block,
              children: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MyStructure_module_default()).box,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MyStructure_module_default()).solo,
              children: udata[2].map((list, l) => {
                return /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (MyStructure_module_default()).item,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      src: `/images/png/${list.image}.png`,
                      alt: list.image,
                      className: (MyStructure_module_default()).image,
                      height: 25,
                      width: 25
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (MyStructure_module_default()).account,
                      children: list.account
                    })]
                  })
                }, l);
              })
            })
          })]
        }, i);
      })
    })]
  });
};

/* harmony default export */ const structure_MyStructure = (MyStructure);
;// CONCATENATED MODULE: ./pages/structure.tsx




const Structure = ({
  userData
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: "\u041C\u043E\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
    children: /*#__PURE__*/jsx_runtime_.jsx(structure_MyStructure, {
      userData: userData
    })
  });
};

const getStaticProps = async () => {
  const userData = [[1, 133, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [2, 129, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [3, 5455, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [4, 4500, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [5, 43243, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [6, 4500, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [7, 43243, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [8, 43243, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [9, 4500, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [10, 43243, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [11, 4500, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [12, 5455, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [13, 129, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]], [14, 133, [{
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }, {
    image: "SuperGurl",
    account: "kris_anfalova"
  }]]];
  return {
    props: {
      userData
    }
  };
};
/* harmony default export */ const structure = (Structure);

/***/ }),

/***/ 519:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "MyStructure_head__y-dM2",
	"cards": "MyStructure_cards__3E7i9",
	"card": "MyStructure_card__3UvII",
	"count": "MyStructure_count__1UYCI",
	"numbers": "MyStructure_numbers__1ytqX",
	"block": "MyStructure_block__2Y5Zc",
	"account": "MyStructure_account__3esUH",
	"line": "MyStructure_line__3Dkjn",
	"item": "MyStructure_item__3nrdM",
	"solo": "MyStructure_solo__tZtn0"
};


/***/ }),

/***/ 2372:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 1873:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,612], () => (__webpack_exec__(6578)));
module.exports = __webpack_exports__;

})();