'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Library = require('./Library');

var _Library2 = _interopRequireDefault(_Library);

var _Util = require('./Util');

var _Util2 = _interopRequireDefault(_Util);

var a = new _Library2['default']({ id: "rockandroll" });
console.log(a.foo() + _Util2['default'].add(3, 5));

exports['default'] = _Library2['default'];
exports.Util = _Util2['default'];
//# sourceMappingURL=index.js.map