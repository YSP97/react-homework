import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';
function Profile(_a) {
    var name = _a.name, imgURL = _a.imgURL, _b = _a.status, status = _b === void 0 ? 'lock' : _b, _c = _a.size, size = _c === void 0 ? 234 : _c;
    var iconPath = '';
    var statusMessage = '';
    switch (status) {
        default:
        case 'lock':
            iconPath = '/lock.svg';
            statusMessage = '잠김';
            break;
        case 'online':
            iconPath = '/edit.svg';
            statusMessage = '편집';
            break;
    }
    var label = "".concat(name, " (").concat(statusMessage, ")");
    return (React.createElement("figure", { className: "Profile", "aria-label": label, title: label },
        React.createElement("div", { className: "img-group" },
            React.createElement("img", { src: "/profile_1.jpg", alt: name, width: size, height: size }),
            React.createElement("button", { type: "button" },
                React.createElement("img", { src: "./lock.svg", alt: "" }))),
        React.createElement("figcaption", null, "\uC2AC\uBE44\uC324")));
}
var container = document.getElementById('root');
if (container) {
    createRoot(container).render(React.createElement(Profile, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
