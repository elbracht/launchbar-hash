// LaunchBar Action Script
include('md5.js');
include('sha256.js');
include('sha512.js');
include('enc-base64.js');

function run(argument) {
    if (argument === undefined) {
        LaunchBar.alert('No argument was passed to the action');
    } else {
        items = [
        {
            title: 'SHA512', 
            subtitle: CryptoJS.SHA512(argument).toString(CryptoJS.enc.Base64),
            action: 'copy'
        },
        {
            title: 'SSHA512',
            subtitle: ssha512(argument),
            action: 'copy'
        },
        {
            title: 'SHA256',
            subtitle: CryptoJS.SHA256(argument).toString(CryptoJS.enc.Base64),
            action: 'copy'
        },
        {
            title: 'SSHA256',
            subtitle: ssha256(argument),
            action: 'copy'
        },
        {
            title: 'MD5',
            subtitle: CryptoJS.MD5(argument).toString(CryptoJS.enc.Base64),
            action: 'copy'
        }];
        return items;
    }
}

function copy(item) {
    LaunchBar.executeAppleScript('set the clipboard to "' + item.subtitle + '"');
}

function ssha512(cleartext, salt) {
    salt = (typeof(salt) === 'undefined') ? CryptoJS.lib.WordArray.random(4) : CryptoJS.enc.Utf8.parse(salt);
    var plain = CryptoJS.enc.Utf8.parse(cleartext);
    var digest = CryptoJS.SHA512(plain.concat(salt));
    var ssha = '{SSHA512}' + digest.concat(salt).toString(CryptoJS.enc.Base64);
    return ssha;
}

function ssha256(cleartext, salt) {
    salt = (typeof(salt) === 'undefined') ? CryptoJS.lib.WordArray.random(4) : CryptoJS.enc.Utf8.parse(salt);
    var plain = CryptoJS.enc.Utf8.parse(cleartext);
    var digest = CryptoJS.SHA256(plain.concat(salt));
    var ssha = '{SSHA256}' + digest.concat(salt).toString(CryptoJS.enc.Base64);
    return ssha;
}