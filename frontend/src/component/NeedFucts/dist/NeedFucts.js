"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./NeedFucts.css");
require("./NeedFucts.css");
var NeedFucts = function (_a) {
    var adminPanel = _a.adminPanel, coordinates = _a.coordinates;
    var _b = react_1["default"].useState(""), nameObject = _b[0], setNameObject = _b[1];
    var _c = react_1["default"].useState(coordinates), coord = _c[0], setCoord = _c[1];
    var id = react_router_dom_1.useParams().id;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, adminPanel ?
        react_1["default"].createElement("div", { className: "center" },
            react_1["default"].createElement("div", { className: "mainPart" },
                react_1["default"].createElement("div", { className: "blockUp" }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/decisions/" + id }, " \u0420\u0435\u0448\u0435\u043D\u0438\u044F ")))
        :
            react_1["default"].createElement("div", { className: "center" },
                react_1["default"].createElement("div", { className: "mainPart" },
                    react_1["default"].createElement("div", { className: "blockUp" },
                        react_1["default"].createElement("h1", { className: "center-h" }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u041E\u0431\u044A\u0435\u043A\u0442\u0430")),
                    react_1["default"].createElement("form", { className: "block gray fullScreen border", style: { padding: "20px" }, id: "formCard", method: "POST" },
                        react_1["default"].createElement("div", { className: "marginFivePersent" },
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "adres", className: "blockWithoutMargin textForCard" }, "\u041E\u043A\u0440\u0443\u0433"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("select", { className: "blockObject border normal" },
                                    react_1["default"].createElement("option", { defaultValue: "", disabled: true, selected: true }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043A\u0440\u0443\u0433"),
                                    react_1["default"].createElement("option", { defaultValue: "1" }, "\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "2" }, "\u0421\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "3" }, "\u0421\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "4" }, "\u0421\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "5" }, "\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "6" }, "\u042E\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "7" }, "\u042E\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "8" }, "\u042E\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "9" }, "\u0426\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "10" }, "\u0417\u0435\u043B\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "11" }, "\u0422\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "12" }, "\u041D\u041C\u0410\u041E"))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "adres", className: "blockWithoutMargin textForCard" }, "\u0420\u0430\u0439\u043E\u043D"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("select", { className: "blockObject border normal fullScreen" },
                                    react_1["default"].createElement("option", { defaultValue: "", disabled: true, selected: true }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0430\u0439\u043E\u043D"),
                                    react_1["default"].createElement("option", { defaultValue: "1" }, "\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "2" }, "\u0421\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "3" }, "\u0421\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "4" }, "\u0421\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "5" }, "\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "6" }, "\u042E\u0412\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "7" }, "\u042E\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "8" }, "\u042E\u0417\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "9" }, "\u0426\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "10" }, "\u0417\u0435\u043B\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "11" }, "\u0422\u0410\u041E"),
                                    react_1["default"].createElement("option", { defaultValue: "12" }, "\u041D\u041C\u0410\u041E"))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "adres", className: "textForCard blockWithoutMargin" }, "\u0410\u0434\u0440\u0435\u0441"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "adres", id: "adres", type: "text", placeholder: "\u0410\u0434\u0440\u0435\u0441..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "okrug", className: "textForCard blockWithoutMargin" }, "\u041E\u043A\u0440\u0443\u0433"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "okrud", id: "okrug", type: "text", placeholder: "\u041E\u043A\u0440\u0443\u0433..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "raion", className: "textForCard blockWithoutMargin" }, "\u0420\u0430\u0439\u043E\u043D"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "raion", id: "raion", type: "text", placeholder: "\u0420\u0430\u0439\u043E\u043D..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "typeObj", className: "textForCard blockWithoutMargin" }, "\u0422\u0438\u043F \u043E\u0431\u044A\u0435\u043A\u0442\u0430"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "typeObj", id: "typeObj", type: "text", placeholder: "\u0422\u0438\u043F \u043E\u0431\u044A\u0435\u043A\u0442\u0430..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "healseObject", className: "textForCard blockWithoutMargin" }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "healseObject", id: "healseObject", type: "text", placeholder: "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "aria", className: "textForCard blockWithoutMargin" }, "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u0430"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "aria", id: "aria", type: "text", placeholder: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "owner", className: "textForCard blockWithoutMargin" }, "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "owner", id: "owner", type: "text", placeholder: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A..", className: "normal blockObject hungreed" }))),
                            react_1["default"].createElement("div", { className: "blockWithoutMargin margin fiftin" },
                                react_1["default"].createElement("label", { htmlFor: "user", className: "textForCard blockWithoutMargin" }, "\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("div", { className: "normal blockObject border hungreed" },
                                    react_1["default"].createElement("input", { name: "user", id: "user", type: "text", placeholder: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C..", className: "normal blockObject hungreed inputText" })))))))));
};
exports["default"] = NeedFucts;
