// LaunchBar Action Script
include('md5.js');
include('sha256.js');
include('sha512.js');

function run(argument) {
    if (argument === undefined) {
        LaunchBar.alert('No argument was passed to the action');
    } else {
        items = [
        { 
            title: 'SHA512', 
            subtitle: '$6$' + CryptoJS.SHA512(argument).toString(CryptoJS.enc.Hex),
            action: 'copy'
        },
        {
            title: 'SHA256',
            subtitle: '$5$' + CryptoJS.SHA256(argument).toString(CryptoJS.enc.Hex),
            action: 'copy'
        },
        {
            title: 'MD5',
            subtitle: '$1$' + CryptoJS.MD5(argument).toString(CryptoJS.enc.Hex),
            action: 'copy'
        }];
        return items;
    }
}

function copy(item) {
    LaunchBar.executeAppleScript('set the clipboard to "' + item.subtitle + '"');
}