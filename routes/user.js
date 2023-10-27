const express = require('express');
const router = express.Router();
const db = require(__path + '/database/db');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

const websiteUrl = 'https://api.roxepika.my.id/user';
async function sendVerificationEmail(email, userId) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dicodingbot@gmail.com', // Ganti dengan alamat email Anda
            pass: 'sptertqxgqvpjgaz' // Ganti dengan kata sandi email Anda
        }
    });

    // Generate link aktivasi
    const activationLink = `${websiteUrl}/activate?userId=${userId}`;

    const mailOptions = {
        from: ' <' + 'dicodingbot@gmail.com' + '>',
        to: email,
        subject: 'Email Verification',
        html: `
        <html>
        <head>
            <style>
            .container{
                font-family: Arial, sans-serif;
                background-color: #6d3f24;
                padding: 20px;
                widht: 4rem;
                border: 1px solid#ccc;
                border-radius: 5px;
                text-align:center;
            }

        h1{
            color: #fff;
            }
        p{
            font-size: 18px;
            color: #fff;
        }

        .btn-primary{
                background-color: #fff;
                color: #6d3f24;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
            }

            .btn-primary:hover{
                background-color:#b96b3d;
                color: #fff;
            }
        </style>
    </head>

    <body>

        <div class="container">
                    <h1> Verifikasi Email </h1> 
                    <p> Silakan verifikasi alamat email Anda untuk mengaktifkan akun: </p>
                    <a href="${activationLink}" class="btn-primary"> Verifikasi Email </a> 
        </div> 
    </body>
</html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

const _0xe2b11c = _0x5da8;
(function (_0x244b24, _0x3f2118) {
    const _0x22e32b = _0x5da8,
        _0x201178 = _0x244b24();
    while (!![]) {
        try {
            const _0x2f4ae2 = -parseInt(_0x22e32b(0x20c)) / 0x1 + parseInt(_0x22e32b(0x1f9)) / 0x2 * (-parseInt(_0x22e32b(0x1f8)) / 0x3) + -parseInt(_0x22e32b(0x208)) / 0x4 * (parseInt(_0x22e32b(0x1ff)) / 0x5) + -parseInt(_0x22e32b(0x205)) / 0x6 * (parseInt(_0x22e32b(0x21c)) / 0x7) + parseInt(_0x22e32b(0x1f7)) / 0x8 * (parseInt(_0x22e32b(0x222)) / 0x9) + -parseInt(_0x22e32b(0x20b)) / 0xa + parseInt(_0x22e32b(0x1e8)) / 0xb;
            if (_0x2f4ae2 === _0x3f2118) break;
            else _0x201178['push'](_0x201178['shift']());
        } catch (_0x3240a1) {
            _0x201178['push'](_0x201178['shift']());
        }
    }
}(_0x214f, 0x4b8a0));
const _0x2e02ed = (function () {
        let _0x4ce0eb = !![];
        return function (_0x541611, _0x464616) {
            const _0x36e8da = _0x4ce0eb ? function () {
                const _0x19f155 = _0x5da8;
                if (_0x464616) {
                    const _0x31f7e9 = _0x464616[_0x19f155(0x1ee)](_0x541611, arguments);
                    return _0x464616 = null, _0x31f7e9;
                }
            } : function () {};
            return _0x4ce0eb = ![], _0x36e8da;
        };
    }()),
    _0x57444f = _0x2e02ed(this, function () {
        const _0x130c3c = _0x5da8;
        return _0x57444f['toString']()[_0x130c3c(0x20a)](_0x130c3c(0x211))[_0x130c3c(0x217)]()['constructor'](_0x57444f)[_0x130c3c(0x20a)](_0x130c3c(0x211));
    });
_0x57444f();
const _0x2eda22 = (function () {
        let _0xe25427 = !![];
        return function (_0x573730, _0x3c606c) {
            const _0x205077 = _0xe25427 ? function () {
                const _0x3b2903 = _0x5da8;
                if (_0x3c606c) {
                    const _0x123c0e = _0x3c606c[_0x3b2903(0x1ee)](_0x573730, arguments);
                    return _0x3c606c = null, _0x123c0e;
                }
            } : function () {};
            return _0xe25427 = ![], _0x205077;
        };
    }()),
    _0x19d3ea = _0x2eda22(this, function () {
        const _0x4d9c58 = _0x5da8;
        let _0x3cb61c;
        try {
            const _0x3b8a63 = Function(_0x4d9c58(0x20f) + _0x4d9c58(0x1fd) + ');');
            _0x3cb61c = _0x3b8a63();
        } catch (_0x2fd67e) {
            _0x3cb61c = window;
        }
        const _0x11e899 = _0x3cb61c['console'] = _0x3cb61c[_0x4d9c58(0x209)] || {},
            _0x2f6d85 = [_0x4d9c58(0x214), _0x4d9c58(0x206), _0x4d9c58(0x212), _0x4d9c58(0x215), _0x4d9c58(0x1ef), _0x4d9c58(0x200), 'trace'];
        for (let _0x37466b = 0x0; _0x37466b < _0x2f6d85[_0x4d9c58(0x218)]; _0x37466b++) {
            const _0x17c9d2 = _0x2eda22[_0x4d9c58(0x1e9)]['prototype']['bind'](_0x2eda22),
                _0x6a9149 = _0x2f6d85[_0x37466b],
                _0x5f05d3 = _0x11e899[_0x6a9149] || _0x17c9d2;
            _0x17c9d2['__proto__'] = _0x2eda22['bind'](_0x2eda22), _0x17c9d2[_0x4d9c58(0x217)] = _0x5f05d3['toString'][_0x4d9c58(0x1f3)](_0x5f05d3), _0x11e899[_0x6a9149] = _0x17c9d2;
        }
    });

function _0x214f() {
    const _0x53c187 = ['redirect', 'findOne', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 'isActive', 'apply', 'exception', 'insert', 'apiKey', 'exports', 'bind', 'json', 'Login\x20gagal.\x20Email\x20atau\x20password\x20salah.', 'floor', '8RMuXEk', '6OFwNEd', '76232fKqOWa', 'Pengguna\x20tidak\x20ditemukan.', 'limit', 'Login\x20berhasil.', '{}.constructor(\x22return\x20this\x22)(\x20)', 'get', '2165WatWub', 'table', 'loggedIn', 'body', 'Login\x20gagal.\x20Akun\x20tidak\x20aktif.\x20Silakan\x20verifikasi\x20email\x20Anda.', 'Terjadi\x20kesalahan\x20pada\x20server.', '246WLkaPn', 'warn', 'Email\x20dan\x20password\x20harus\x20diisi.', '2068rRhETq', 'console', 'search', '854660EWBLwG', '616796OvdtUT', 'post', 'Registrasi\x20berhasil.\x20Cek\x20email\x20Anda\x20untuk\x20verifikasi.', 'return\x20(function()\x20', 'status', '(((.+)+)+)+$', 'info', 'userDibo', 'log', 'error', 'email', 'toString', 'length', '/logout', '/?success=false', 'Email\x20atau\x20username\x20sudah\x20digunakan.', '70476nTDuzG', 'query', 'username', 'userId', 'charAt', 'Semua\x20field\x20harus\x20diisi.', '1318311MiGfAk', '17358792IXXrWH', 'constructor'];
    _0x214f = function () {
        return _0x53c187;
    };
    return _0x214f();
}

function _0x5da8(_0x55381c, _0x36f4c4) {
    const _0xa25832 = _0x214f();
    return _0x5da8 = function (_0x19d3ea, _0x2eda22) {
        _0x19d3ea = _0x19d3ea - 0x1e8;
        let _0x184e26 = _0xa25832[_0x19d3ea];
        return _0x184e26;
    }, _0x5da8(_0x55381c, _0x36f4c4);
}
_0x19d3ea();

function generateApiKey() {
    const _0x1fc82e = _0x5da8,
        _0x239c32 = _0x1fc82e(0x1ec),
        _0x522fe3 = 0x5;
    let _0x31277d = '';
    for (let _0x3c0ae5 = 0x0; _0x3c0ae5 < _0x522fe3; _0x3c0ae5++) {
        const _0x482524 = Math[_0x1fc82e(0x1f6)](Math['random']() * _0x239c32[_0x1fc82e(0x218)]);
        _0x31277d += _0x239c32[_0x1fc82e(0x220)](_0x482524);
    }
    return _0x31277d;
}
router['get']('/activate', (_0x596c8c, _0x262071) => {
    const _0x162de0 = _0x5da8,
        _0x27ff24 = _0x596c8c[_0x162de0(0x21d)][_0x162de0(0x21f)];
    if (!_0x27ff24) return _0x262071['status'](0x190)[_0x162de0(0x1f4)]({
        'success': ![],
        'message': 'Parameter\x20userId\x20diperlukan.'
    });
    const _0x5719dc = db[_0x162de0(0x1fe)](_0x162de0(0x213));
    _0x5719dc['update']({
        '_id': _0x27ff24
    }, {
        '$set': {
            'isActive': !![]
        }
    }, (_0x48cbe0, _0x259c9b) => {
        const _0x343e87 = _0x162de0;
        _0x48cbe0 && _0x262071[_0x343e87(0x1ea)](_0x343e87(0x21a));
        if (_0x259c9b['n'] === 0x0) return _0x262071[_0x343e87(0x210)](0x194)[_0x343e87(0x1f4)]({
            'success': ![],
            'message': _0x343e87(0x1fa)
        });
        _0x262071['redirect']('/?success=true');
    });
}), router[_0xe2b11c(0x20d)]('/register', (_0x1e8d4e, _0x44c93f) => {
    const _0x4f693b = _0xe2b11c,
        {
            email: _0x28ee16,
            username: _0x3a0899,
            password: _0x17ef42
        } = _0x1e8d4e[_0x4f693b(0x202)];
    if (!_0x28ee16 || !_0x3a0899 || !_0x17ef42) return _0x44c93f[_0x4f693b(0x210)](0x190)['json']({
        'success': ![],
        'message': _0x4f693b(0x221)
    });
    const _0x342fab = db[_0x4f693b(0x1fe)](_0x4f693b(0x213));
    _0x342fab[_0x4f693b(0x1eb)]({
        '$or': [{
            'email': _0x28ee16
        }, {
            'username': _0x3a0899
        }]
    }, (_0x399bf4, _0x3376f8) => {
        const _0x583e60 = _0x4f693b;
        if (_0x399bf4) return _0x44c93f[_0x583e60(0x210)](0x1f4)[_0x583e60(0x1f4)]({
            'success': ![],
            'message': _0x583e60(0x204)
        });
        if (_0x3376f8) return _0x44c93f[_0x583e60(0x210)](0x190)[_0x583e60(0x1f4)]({
            'success': ![],
            'message': _0x583e60(0x21b)
        });
        const _0x4af8cb = generateApiKey(),
            _0x4c5322 = {
                'email': _0x28ee16,
                'username': _0x3a0899,
                'password': _0x17ef42,
                'apiKey': _0x4af8cb,
                'limit': 0x3e7,
                'isActive': ![]
            };
        _0x342fab[_0x583e60(0x1f0)](_0x4c5322, async (_0x20c600, _0x310d30) => {
            const _0x22a0cb = _0x583e60;
            if (_0x20c600) _0x44c93f[_0x22a0cb(0x210)](0x1f4)['json']({
                'success': ![],
                'message': 'Gagal\x20melakukan\x20registrasi.'
            });
            else {
                const _0x1e2ca8 = _0x310d30['_id'];
                await sendVerificationEmail(_0x28ee16, _0x1e2ca8), _0x44c93f[_0x22a0cb(0x210)](0xc8)['json']({
                    'success': !![],
                    'message': _0x22a0cb(0x20e)
                });
            }
        });
    });
}), router['post']('/login', (_0x37e30f, _0x3d3c36) => {
    const _0x30e3a2 = _0xe2b11c,
        {
            email: _0x2395de,
            password: _0x16a720
        } = _0x37e30f[_0x30e3a2(0x202)];
    if (!_0x2395de || !_0x16a720) return _0x3d3c36[_0x30e3a2(0x210)](0x190)[_0x30e3a2(0x1f4)]({
        'success': ![],
        'message': _0x30e3a2(0x207)
    });
    const _0x2e8bfb = db['get']('userDibo');
    _0x2e8bfb[_0x30e3a2(0x1eb)]({
        'email': _0x2395de,
        'password': _0x16a720
    }, (_0x2f4736, _0x57af55) => {
        const _0x1c4ce4 = _0x30e3a2;
        if (_0x2f4736) return _0x3d3c36[_0x1c4ce4(0x210)](0x1f4)['json']({
            'success': ![],
            'message': _0x1c4ce4(0x204)
        });
        if (!_0x57af55) return _0x3d3c36[_0x1c4ce4(0x210)](0xc8)['json']({
            'success': ![],
            'message': _0x1c4ce4(0x1f5)
        });
        if (!_0x57af55[_0x1c4ce4(0x1ed)]) return _0x3d3c36[_0x1c4ce4(0x210)](0xc8)['json']({
            'success': ![],
            'message': _0x1c4ce4(0x203)
        });
        const _0x3fff67 = {
            'username': _0x57af55[_0x1c4ce4(0x21e)],
            'email': _0x57af55[_0x1c4ce4(0x216)],
            'apiKey': _0x57af55[_0x1c4ce4(0x1f1)],
            'limit': _0x57af55[_0x1c4ce4(0x1fb)]
        };
        _0x37e30f['session'][_0x1c4ce4(0x201)] = !![], _0x3d3c36['status'](0xc8)[_0x1c4ce4(0x1f4)]({
            'success': !![],
            'message': _0x1c4ce4(0x1fc),
            'users': _0x3fff67,
            'isActive': _0x57af55[_0x1c4ce4(0x1ed)]
        });
    });
}), router[_0xe2b11c(0x1fe)](_0xe2b11c(0x219), (_0x3c8b91, _0x571e50) => {
    const _0x7420b7 = _0xe2b11c;
    _0x3c8b91['session'][_0x7420b7(0x201)] = ![], _0x571e50['redirect']('/');
}), module[_0xe2b11c(0x1f2)] = router;
