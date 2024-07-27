import React from 'https://esm.sh/react';
function button(_a) {
    var _b = _a.status, status = _b === void 0 ? 'edit' : _b, _c = _a.size, size = _c === void 0 ? 234 : _c;
    var iconPath = '';
    var statusMessage = '';
    switch (status) {
        default:
        case 'edit':
            statusMessage = '프로필 편집';
            break;
        case 'confirm':
            iconPath = '/edit.svg';
            statusMessage = '완료';
            break;
    }
    return React.createElement("button", null, statusMessage);
}
