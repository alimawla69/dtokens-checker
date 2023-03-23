# Dtokens-checker
<a href="https://nodei.co/npm/dtokens-checker/"><img src="https://nodei.co/npm/dtokens-checker.png"></a><BR>
 <a href="https://www.npmjs.com/package/discord-tokens-checker"><img src="https://img.shields.io/npm/v/discord-tokens-checker.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/dtokens-checker"><img src="https://img.shields.io/npm/dt/dtokens-checker.svg?maxAge=3600" alt="NPM downloads" /></a>
 <a href="https://github.com/alimawla69/dtokens-checker/"><img src="https://img.shields.io/github/last-commit/alimawla69/dtokens-checker?style=flat" /></a>
  <a href="https://github.com/alimawla69/dtokens-checker/stargazers"><img src="https://img.shields.io/github/stars/alimawla69/dtokens-checker?style=flat" /></a>
  <a href="https://github.com/dtokens-checker"><img src="https://visitor-badge.laobi.icu/badge?page_id=alimawla69.dtokens-checker" /></a>
 
A advancd package for checking discord tokens fast and easy to use with loging and exporting system

* It's for education, I won't be responsible for any action you take with this package.
* Don't forget to give the project a star!
* Loved the tool? Please consider [Donate 💸](https://www.patreon.com/alimawla69) to help it improve!
## FEATURES:
- Fast and Easy to Use
- Automatic make the folders and files in need
- Support bots-tokens (soon)
- A output loging system for tokens valid_tokens,invalid_tokens,email_verified,phone_verified,full_verified,not_verified,mfa_enabled,hasnitro
- A Logger to log everything in console to Logger/23/3/23....txt for every run of the package
- if you want you can see the [examples folder](https://github.com/alimawla69/dtokens-checker/tree/main/examples)

# REQUIREMENTS
- A good internet to check tokens faster and run code faster
- Valid tokens to check put it to tokens.txt
- Make the javascript has access to create files and folder
  
## Install

```
npm install --save dtokens-checker
```

## Example

This is a example to use the pacakage and setup the settings

``` javascript
const checker = require("dtokens-checker")
const check = new checker('tokens.txt', {
    fullLogger: true, //Log everything token verified or not phone verified or not ...
    pinLogger:true, // post logs to folder named 'Logger' and everytime you run the script everying in console will apeear in a file named the date of runing
    output_tokens: {
        valid_tokens: 'valid.txt', // the valid tokens file in output folder
        invalid_tokens: 'invalid.txt',// the invalid tokens file in output folder
        email_verified: 'verified.txt',// the email verified tokens file in output folder
        phone_verified: false, // the phone verified tokens file in output folder you can make it false to stop posting phone verified in ouput
        full_verified: 'full_verified.txt', // the email and phone verified tokens file in output folder
        not_verified: 'unverified.txt',// the unverified tokens file in output folder
        mfa_enabled: false,// the mfa enabled tokens file in output folder you can make it false to stop posting phone verified in ouput
        hasnitro: 'hasNitro.txt',// the tokens that has nitros file in output folder
    },
});
check.start()
```
## or you can see the [examples folder](https://github.com/alimawla69/dtokens-checker/tree/main/examples) in the repo

## Problems, Bugs and Suggestions

in case you saw any Problems, Bugs or having a Suggestions you can tell me in the [issues](https://github.com/alimawla69/dtokens-checker/issues/new) OR [Discord Server](https://discord.gg/HFZRWUC)

and i will fix and your suggetions and tell you in news channel in [Discord Server](https://discord.gg/HFZRWUC)

# Contact
- [Discord Server](https://discord.gg/HFZRWUC)
- [business.alimawla69@gmail.com](mailto:business.alimawla69@gmail.com)
