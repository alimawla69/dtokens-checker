const Checker = require("dtokens-checker")
const check = new Checker('tokens.txt', {
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