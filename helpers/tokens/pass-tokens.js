

generateTokenForQrPass = () => {
    var result = '';
    var chars = '0123456789ABCDEF';
    var length = 7;
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

generateTokenForNfcPass = () => {
    var result = '';
    var chars = '0123456789ABCDEF';
    var length = 14;
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


module.exports = {
    generateTokenForQrPass,
    generateTokenForNfcPass
}