'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashMessage = exports.FlashMessage = function () {
    function FlashMessage(ctx) {
        _classCallCheck(this, FlashMessage);

        this._session = ctx.session;
        this._flashMessage = ctx.session && ctx.session.flashMessage;
        if (!this._flashMessage) {
            this._flashMessage = {};
        }
    }

    _createClass(FlashMessage, [{
        key: '_saveMessage',
        value: function _saveMessage(type, message) {
            this._flashMessage[type] = message;
            if (this._session) {
                this._session.flashMessage = this._flashMessage;
            }
        }
    }, {
        key: '_getMessage',
        value: function _getMessage(type) {
            var message = this._flashMessage[type];
            if (message) {
                delete this._flashMessage[type];
                if (this._session) {
                    this._session.flashMessage = this._flashMessage;
                }
            }
            return message;
        }
    }, {
        key: 'success',
        set: function set(message) {
            this._saveMessage('success', message);
        },
        get: function get() {
            return this._getMessage('success');
        }
    }, {
        key: 'notice',
        set: function set(message) {
            this._saveMessage('info', message);
        },
        get: function get() {
            return this._getMessage('info');
        }
    }, {
        key: 'danger',
        set: function set(message) {
            this._saveMessage('danger', message);
        },
        get: function get() {
            return this._getMessage('danger');
        }
    }, {
        key: 'warning',
        set: function set(message) {
            console.log('33  ' + message)
            this._saveMessage('warning', message);
        },
        get: function get() {
            return this._getMessage('warning');
        }
    }, {
        key: 'messages',
        get: function get() {
            var messages = this._flashMessage;
            var keys = Object.keys(messages);
            console.log(keys + 'nnn')
            if (keys.length > 0 && this._session) {
                this._session.flashMessage = null;
            }
            return messages;
        }
    }]);

    return FlashMessage;
}();

const flashMessageMiddleware = (async (ctx, next) => {
    var flashMessage = new FlashMessage(ctx);
    if (!ctx.state) {
        ctx.state = {};
    }
    ctx.state.flashMessage = flashMessage;
    ctx.flashMessage = flashMessage;
    await next();
});


module.exports = flashMessageMiddleware