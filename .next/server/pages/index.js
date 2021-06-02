(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/style */ "./src/components/Footer/style.ts");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Documents\\loginclientepremium\\src\\components\\Footer\\index.tsx";



const Footer = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.ContainerFooter, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "Circulo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "containerSocial",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://br.linkedin.com/company/agencia-premium-marketing",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./linkeding.svg",
            alt: "Rede social LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.facebook.com/agenciapremiumro/",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./facebook.svg",
            alt: "Rede social Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.instagram.com/agenciapremiumro/",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./instagram.svg",
            alt: "Rede social Instagram"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/style.ts":
/*!****************************************!*\
  !*** ./src/components/Footer/style.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerFooter": function() { return /* binding */ ContainerFooter; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerFooter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  position: relative;
  margin-top: 12rem;

  .Circulo {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 250px;
    height: 250px;
    clip-path: circle(128px at 230px 230px);
    background: #333333;
  }

  .containerSocial {
    display: flex;
    width: 100%;
    height: 100%;
    /* margin-top: 15rem; */
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    margin-bottom: 18.4rem;
    background: transparent;
  }

  @media screen and (max-width: 940px) {
    margin-top: 4.6rem;
    .containerSocial {
      /* margin-top: 15rem; */
      margin: 17.61rem !important;
    }
  }

  
  @media screen and (max-width: 360px) {
    margin-top: 4.6rem;
    .Circulo {
      clip-path: circle(81px at 252px 230px);
    }
    .containerSocial {
      /* margin-bottom: 8rem; */
      margin: 7.61rem !important;
    }
  }
`;

/***/ }),

/***/ "./src/components/HomeLogin/index.tsx":
/*!********************************************!*\
  !*** ./src/components/HomeLogin/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/HomeLogin/style.ts");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ "./src/components/HomeLogin/script.js");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Documents\\loginclientepremium\\src\\components\\HomeLogin\\index.tsx";




const HomeLogin = ({
  data
}) => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [drive, setDrive] = useState("");
  // const [validateUser, setValidateUser] = useState(false);
  // useEffect(() => {
  //   data.map((item) => {
  //     if (item.userName == userName && item.password == password) {
  //       setValidateUser(true);
  //       return setDrive(item.drive);
  //     }
  //   });
  // }, [userName, password]);
  // function messageInfo() {
  //   if (!validateUser) alert("Credenciais inválidas.");
  // }
  {}
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ContainerLogin, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "Formulario",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "Imagem",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./logoPremium.svg",
            alt: "Logo Ag\xEAncia premium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          id: "formulario",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "userName" //e-mail
              ,
              placeholder: "Usu\xE1rio",
              id: "usuario",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "password",
              name: "password",
              placeholder: "Senha",
              id: "senha",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            onClick: () => (0,_script_js__WEBPACK_IMPORTED_MODULE_3__.teste)(),
            className: "botao",
            type: "submit",
            value: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLogin); // sdfjaskfj

/***/ }),

/***/ "./src/components/HomeLogin/script.js":
/*!********************************************!*\
  !*** ./src/components/HomeLogin/script.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "teste": function() { return /* binding */ teste; }
/* harmony export */ });
function teste() {
  var form = document.getElementById('formulario');
  var campoUsuario = document.getElementById('usuario');
  var campoSenha = document.getElementById('senha'); // Aqui cria uma comunicação Ajax

  var xmlhttp = new XMLHttpRequest();

  function redirecionar(url) {
    window.location.href = url;
  }

  function validaUsuario(usuriosJson) {
    usuriosJson.forEach(usuario => {
      //console.log("Usuário: " + usuario.userName + " | Password: " + usuario.password);
      if (campoUsuario.value == usuario.userName && campoSenha.value == usuario.password) {
        // alert("Redirecionar para:\n" + usuario.drive)
        redirecionar(usuario.drive);
      }
    });
  } // Aqui define o método para receber os dados do servidor


  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Caso a resposta do servidor for ok
      var respostaJson = JSON.parse(this.responseText); // Aqui decodifica do arquivo de texto recebido para json
      //document.getElementById("resposta").innerHTML = JSON.stringify(respostaJson, null, 4);

      validaUsuario(respostaJson);
    }
  };

  form.addEventListener('submit', function (e) {
    /*
    // alerta o valor do campos
    if (campoUsuario.value == campoSenha.value) {
        alert("São Iguais");
    } else {
        alert('Não são iguais')
    }
    */
    xmlhttp.open("GET", "http://143.198.170.96/logins", true);
    xmlhttp.send(); // impede o envio do form

    e.preventDefault();
  });
}

/***/ }),

/***/ "./src/components/HomeLogin/style.ts":
/*!*******************************************!*\
  !*** ./src/components/HomeLogin/style.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerLogin": function() { return /* binding */ ContainerLogin; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerLogin = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 940px) {
    .Formulario {
      .Imagem {
        padding-top: 3rem;
        img {
          width: 50%;
        }
      }
      form {
        padding-top: 2rem;
        gap: 6rem !important;
        div {
          height: 3.3rem !important;
          width: 30.5rem !important;
          label {
            font-size: 12px !important;
          }
          input {
          }
        }
      }
      .botao {
        margin-top: 1.5rem !important;
      }
    }
  }
  /* @media screen and (max-width:840px){
        .Formulario {
            .Imagem {
                img {
                    
                }
            }
            form {
                div {
                    width: 35.5rem !important;
                    
                }
            }
        }
    } */

  .Formulario {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Imagem {
      display: flex;
      justify-content: center;
      margin: 5.3rem 0;
    }

    form {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8.8rem;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 55.4rem;
        height: 6.6rem;
        position: relative;

        label {
          position: absolute;
          top: -20px;
          left: 0;
          font-size: 16px;
          font-weight: 600;
        }

        input {
          display: flex;
          width: 100%;
          height: 6.6rem;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 16px;
          border-bottom: 1px solid #ffffff;
        }
      }
      .botao {
        width: 25.4rem;
        height: 5.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 8.1rem;
       
        border-radius: 8px;
        border: none;
        box-shadow: none;
        background: #fdd028;
        color: #333333;

        font-size: 26px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals */ "./src/styles/globals.ts");
/* harmony import */ var _components_HomeLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeLogin */ "./src/components/HomeLogin/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Documents\\loginclientepremium\\src\\pages\\index.tsx";






function Home({
  data
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globals__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width = device-width, initial-scale = 1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Login Premium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeLogin__WEBPACK_IMPORTED_MODULE_4__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  const {
    data
  } = await _services_api__WEBPACK_IMPORTED_MODULE_6__.default.get("/logins");
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://143.198.170.96'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/styles/globals.ts":
/*!*******************************!*\
  !*** ./src/styles/globals.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

html,
body {
  /* width: 100%;
  height: 100%; */
  font-family: 'Ubuntu';
  /* background: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%); */
  background-repeat: no-repeat;
  color: #e1e1e6;
  font: 400 16px Montserrat, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%);
  background-repeat: no-repeat;
  /* padding: 0;
  margin: 0; */
  box-sizing: border-box;
}

:root{
  width: 100%;
  height: 100%;
  font-size: 62.5%; //converte o valor de rem em 1:100 exemplo um 1rem é equivalente a 10px;
  /* background-color: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%); */
  font-family: 'Ubuntu', sans-serif;
}

html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      /* font-family: "Roboto"; */
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    } 
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
   

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS50cyIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvY29tcG9uZW50cy9Ib21lTG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9jb21wb25lbnRzL0hvbWVMb2dpbi9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxvZ2luL3N0eWxlLnRzIiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzLy4vc3JjL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvc3R5bGVzL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiQ29udGFpbmVyRm9vdGVyIiwic3R5bGVkIiwiSG9tZUxvZ2luIiwiZGF0YSIsInRlc3RlIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW1wb1VzdWFyaW8iLCJjYW1wb1NlbmhhIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwicmVkaXJlY2lvbmFyIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidmFsaWRhVXN1YXJpbyIsInVzdXJpb3NKc29uIiwiZm9yRWFjaCIsInVzdWFyaW8iLCJ2YWx1ZSIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJkcml2ZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb3N0YUpzb24iLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9wZW4iLCJzZW5kIiwicHJldmVudERlZmF1bHQiLCJDb250YWluZXJMb2dpbiIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsImFwaSIsInByb3BzIiwiYXhpb3MiLCJiYXNlVVJMIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxDQUFDLEVBQUQsS0FBUTtBQUMvQixzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUcsY0FBSSxFQUFDLDJEQUFSO0FBQW9FLGdCQUFNLEVBQUMsUUFBM0U7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxpQkFBVDtBQUEyQixlQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGNBQUksRUFBQyw0Q0FBUjtBQUFxRCxnQkFBTSxFQUFDLFFBQTVEO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWhGQTtBQWlGQSwrREFBZUQsV0FBZixFOzs7Ozs7Ozs7OztBQ2xGQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyRm9vdGVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9zdHlsZVwiO1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyRm9vdGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2lyY3Vsb1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyU29jaWFsXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ici5saW5rZWRpbi5jb20vY29tcGFueS9hZ2VuY2lhLXByZW1pdW0tbWFya2V0aW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9saW5rZWRpbmcuc3ZnXCIgYWx0PVwiUmVkZSBzb2NpYWwgTGlua2VkSW5cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hZ2VuY2lhcHJlbWl1bXJvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vZmFjZWJvb2suc3ZnXCIgYWx0PVwiUmVkZSBzb2NpYWwgRmFjZWJvb2tcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWdlbmNpYXByZW1pdW1yby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJSZWRlIHNvY2lhbCBJbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lckZvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZDogYmx1ZTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTJyZW07XHJcblxyXG4gIC5DaXJjdWxvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEyOHB4IGF0IDIzMHB4IDIzMHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyU29jaWFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIG1hcmdpbi10b3A6IDE1cmVtOyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOC40cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNC42cmVtO1xyXG4gICAgLmNvbnRhaW5lclNvY2lhbCB7XHJcbiAgICAgIC8qIG1hcmdpbi10b3A6IDE1cmVtOyAqL1xyXG4gICAgICBtYXJnaW46IDE3LjYxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNC42cmVtO1xyXG4gICAgLkNpcmN1bG8ge1xyXG4gICAgICBjbGlwLXBhdGg6IGNpcmNsZSg4MXB4IGF0IDI1MnB4IDIzMHB4KTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJTb2NpYWwge1xyXG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiA4cmVtOyAqL1xyXG4gICAgICBtYXJnaW46IDcuNjFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXJMb2dpbiB9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7dGVzdGV9IGZyb20gJy4vc2NyaXB0LmpzJztcclxuaW1wb3J0IHsgZ2V0TG9naW5zIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2luZGV4XCI7XHJcblxyXG5jb25zdCBIb21lTG9naW46IFJlYWN0LkZDPGdldExvZ2lucz4gPSAoeyBkYXRhIH0pID0+IHtcclxuICAvLyBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3QgW2RyaXZlLCBzZXREcml2ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8gY29uc3QgW3ZhbGlkYXRlVXNlciwgc2V0VmFsaWRhdGVVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgLy8gICAgIGlmIChpdGVtLnVzZXJOYW1lID09IHVzZXJOYW1lICYmIGl0ZW0ucGFzc3dvcmQgPT0gcGFzc3dvcmQpIHtcclxuICAvLyAgICAgICBzZXRWYWxpZGF0ZVVzZXIodHJ1ZSk7XHJcbiAgLy8gICAgICAgcmV0dXJuIHNldERyaXZlKGl0ZW0uZHJpdmUpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCBbdXNlck5hbWUsIHBhc3N3b3JkXSk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIG1lc3NhZ2VJbmZvKCkge1xyXG4gIC8vICAgaWYgKCF2YWxpZGF0ZVVzZXIpIGFsZXJ0KFwiQ3JlZGVuY2lhaXMgaW52w6FsaWRhcy5cIik7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAge1xyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyTG9naW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vbG9nb1ByZW1pdW0uc3ZnXCIgYWx0PVwiTG9nbyBBZ8OqbmNpYSBwcmVtaXVtXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybXVsYXJpb1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Mb2dpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIiAvL2UtbWFpbFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc3XDoXJpb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cInVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5oYVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNlbmhhXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgb25DbGljaz17KCkgPT50ZXN0ZSgpfSBjbGFzc05hbWU9XCJib3Rhb1wiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudHJhclwiLz5cclxuICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm90YW9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2RyaXZlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1lc3NhZ2VJbmZvKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFbnRyYXJcclxuICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXJMb2dpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTG9naW47XHJcblxyXG4vLyBzZGZqYXNrZmpcclxuIiwiIFxyXG4gZXhwb3J0IGZ1bmN0aW9uIHRlc3RlKCkge1xyXG5cclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm11bGFyaW8nKTtcclxuICAgIHZhciBjYW1wb1VzdWFyaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXN1YXJpbycpO1xyXG4gICAgdmFyIGNhbXBvU2VuaGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuaGEnKTtcclxuXHJcbiAgICAvLyBBcXVpIGNyaWEgdW1hIGNvbXVuaWNhw6fDo28gQWpheFxyXG4gICAgdmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWRpcmVjaW9uYXIodXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhVXN1YXJpbyh1c3VyaW9zSnNvbikge1xyXG4gICAgICAgIHVzdXJpb3NKc29uLmZvckVhY2godXN1YXJpbyA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJVc3XDoXJpbzogXCIgKyB1c3VhcmlvLnVzZXJOYW1lICsgXCIgfCBQYXNzd29yZDogXCIgKyB1c3VhcmlvLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKGNhbXBvVXN1YXJpby52YWx1ZSA9PSB1c3VhcmlvLnVzZXJOYW1lICYmIGNhbXBvU2VuaGEudmFsdWUgPT0gdXN1YXJpby5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJSZWRpcmVjaW9uYXIgcGFyYTpcXG5cIiArIHVzdWFyaW8uZHJpdmUpXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjaW9uYXIodXN1YXJpby5kcml2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcXVpIGRlZmluZSBvIG3DqXRvZG8gcGFyYSByZWNlYmVyIG9zIGRhZG9zIGRvIHNlcnZpZG9yXHJcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7IC8vIENhc28gYSByZXNwb3N0YSBkbyBzZXJ2aWRvciBmb3Igb2tcclxuICAgICAgICAgICAgdmFyIHJlc3Bvc3RhSnNvbiA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpOyAvLyBBcXVpIGRlY29kaWZpY2EgZG8gYXJxdWl2byBkZSB0ZXh0byByZWNlYmlkbyBwYXJhIGpzb25cclxuXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNwb3N0YVwiKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShyZXNwb3N0YUpzb24sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhVXN1YXJpbyhyZXNwb3N0YUpzb24pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vIGFsZXJ0YSBvIHZhbG9yIGRvIGNhbXBvc1xyXG4gICAgICAgIGlmIChjYW1wb1VzdWFyaW8udmFsdWUgPT0gY2FtcG9TZW5oYS52YWx1ZSkge1xyXG4gICAgICAgICAgICBhbGVydChcIlPDo28gSWd1YWlzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdOw6NvIHPDo28gaWd1YWlzJylcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovLzE0My4xOTguMTcwLjk2L2xvZ2luc1wiLCB0cnVlKTtcclxuICAgICAgICB4bWxodHRwLnNlbmQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGltcGVkZSBvIGVudmlvIGRvIGZvcm1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTG9naW4gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xyXG4gICAgLkZvcm11bGFyaW8ge1xyXG4gICAgICAuSW1hZ2VtIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgZ2FwOiA2cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGhlaWdodDogMy4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aWR0aDogMzAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvdGFvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg0MHB4KXtcclxuICAgICAgICAuRm9ybXVsYXJpbyB7XHJcbiAgICAgICAgICAgIC5JbWFnZW0ge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1LjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgLkZvcm11bGFyaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuSW1hZ2VtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNS4zcmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBnYXA6IDguOHJlbTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDU1LjRyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA2LjZyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYuNnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvdGFvIHtcclxuICAgICAgICB3aWR0aDogMjUuNHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDUuMnJlbTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiA4LjFyZW07XHJcbiAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZDAyODtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgSG9tZUxvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVMb2dpblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbmV4cG9ydCB0eXBlIGdldExvZ2lucyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcGFzc3dvcmQ6IFN0cmluZztcclxuICAgIGRyaXZlOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gIH1bXTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9OiBnZXRMb2dpbnMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGggPSBkZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGUgPSAxLjBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8dGl0bGU+TG9naW4gUHJlbWl1bTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPEhvbWVMb2dpbiBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCIvbG9naW5zXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovLzE0My4xOTguMTcwLjk2J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyAiLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgLyogd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LCAxNywgMTcsIDAuOCkgMCUsICMxMTExMTEgMTAwJSk7ICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjb2xvcjogI2UxZTFlNjtcclxuICBmb250OiA0MDAgMTZweCBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDE3LCAxNywgMC44KSAwJSwgIzExMTExMSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwOyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDYyLjUlOyAvL2NvbnZlcnRlIG8gdmFsb3IgZGUgcmVtIGVtIDE6MTAwIGV4ZW1wbG8gdW0gMXJlbSDDqSBlcXVpdmFsZW50ZSBhIDEwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNywgMTcsIDE3LCAwLjgpIDAlLCAjMTExMTExIDEwMCUpOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG4gICAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG4gICAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG4gICAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuICAgIGIsIHUsIGksIGNlbnRlcixcclxuICAgIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbiAgICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxuICAgIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG4gICAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG4gICAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxuICAgIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG4gICAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICAgICAgLyogZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7ICovXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH0gXHJcbiAgICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbiAgICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuICAgIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBib2R5IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICAgIG9sLCB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIGJsb2NrcXVvdGUsIHEge1xyXG4gICAgICAgIHF1b3Rlczogbm9uZTtcclxuICAgIH1cclxuICAgIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG4gICAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuICAgXHJcblxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=