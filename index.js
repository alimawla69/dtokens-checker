const { default: axios } = require("axios"),
    { existsSync, mkdirSync, appendFileSync, readFileSync, writeFileSync } = require("fs"),
    fs = require("fs"),
    path = require('path');

require('colors')
class Checker {
    constructor(tokensPath, {
        pinLogger = false,
        fullLogger = false,
        output_tokens = {
            valid_tokens: 'valid.txt',
            invalid_tokens: 'invalid.txt',
            not_verified: false,
            email_verified: false,
            phone_verified: false,
            full_verified: false,
            mfa_enabled: false,
            hasnitro: false,
        },
    } = {}) {
        this.tokensPath = path.join(process.cwd(), tokensPath) || null;
        this.pinLogger = pinLogger || false;
        this.fullLogger = fullLogger || false;
        this.output_tokens = output_tokens || {
            validtokens: 'valid.txt',
            invalid_tokens: 'invalid.txt',
            not_verified: false,
            email_verified: false,
            phone_verified: false,
            full_verified: false,
            mfa_enabled: false,
            hasnitro: false,
        };
    }

    async start() {

        if (!fs.existsSync(this.tokensPath)) {
            try {
                fs.writeFileSync('tokens.txt', '');
                console.log(`There is not tokens file we have created it for you 'tokens.txt'.`.green);
            } catch (error) {
                console.log(error);
            }
        }
        var tokens = readFileSync(this.tokensPath, 'utf-8').trim().replace(/\r/gi, '').split("\n");
        if (!tokens) throw new Error(`Cannot find '${this.tokensPath}' file.`);
        if (!tokens[0]) throw new Error(`There is no tokens in '${this.tokensPath}' file.`); const outputDir = path.join(process.cwd(), 'output');
        if (!existsSync(outputDir)) {
            try {
                mkdirSync(outputDir);
                console.log(`Creating 'output' folder.`.green);
            } catch (error) {
                console.log(error);
            }
        }

        if (this.output_tokens.valid_tokens) {
            const validTokensFile = path.join(outputDir, this.output_tokens.valid_tokens);
            if (!fs.existsSync(validTokensFile)) {
                try {
                    fs.writeFileSync(validTokensFile, '');
                    console.log(`Creating 'output/${this.output_tokens.valid_tokens}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.invalid_tokens) {
            const invalidTokensFile = path.join(outputDir, this.output_tokens.invalid_tokens);
            if (!fs.existsSync(invalidTokensFile)) {
                try {
                    fs.writeFileSync(invalidTokensFile, '');
                    console.log(`Creating 'output/${this.output_tokens.invalid_tokens}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.not_verified) {
            const notVerifiedFile = path.join(outputDir, this.output_tokens.not_verified);
            if (!fs.existsSync(notVerifiedFile)) {
                try {
                    fs.writeFileSync(notVerifiedFile, '');
                    console.log(`Creating 'output/${this.output_tokens.not_verified}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.email_verified) {
            const emailVerifiedFile = path.join(outputDir, this.output_tokens.email_verified);
            if (!fs.existsSync(emailVerifiedFile)) {
                try {
                    fs.writeFileSync(emailVerifiedFile, '');
                    console.log(`Creating 'output/${this.output_tokens.email_verified}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.phone_verified) {
            const phoneVerifiedFile = path.join(outputDir, this.output_tokens.phone_verified);
            if (!fs.existsSync(phoneVerifiedFile)) {
                try {
                    fs.writeFileSync(phoneVerifiedFile, '');
                    console.log(`Creating 'output/${this.output_tokens.phone_verified}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.full_verified) {
            const fullVerifiedFile = path.join(outputDir, this.output_tokens.full_verified);
            if (!fs.existsSync(fullVerifiedFile)) {
                try {
                    fs.writeFileSync(fullVerifiedFile, '');
                    console.log(`Creating 'output/${this.output_tokens.full_verified}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        if (this.output_tokens.mfa_enabled) {
            const mfaEnabledFile = path.join(outputDir, this.output_tokens.mfa_enabled);
            if (!fs.existsSync(mfaEnabledFile)) {
                try {
                    fs.writeFileSync(mfaEnabledFile, '');
                    console.log(`Creating 'output/${this.output_tokens.mfa_enabled}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        if (this.output_tokens.hasnitro) {
            const hasnitroFile = path.join(outputDir, this.output_tokens.hasnitro);
            if (!existsSync(hasnitroFile)) {
                try {
                    writeFileSync(hasnitroFile, '');
                    console.log(`Crerating 'output/${this.output_tokens.hasnitro}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        if (this.output_tokens.hasnitro) {
            const outputDir = path.join(process.cwd(), 'output');
            const hasnitroFile = path.join(outputDir, this.output_tokens.hasnitro);
            if (!existsSync(hasnitroFile)) {
                try {
                    writeFileSync(hasnitroFile, '');
                    console.log(`Creating 'output/${this.output_tokens.hasnitro}' file.`.green);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        let tnum = 0
        let vnum = 0
        let nvnum = 0
        let logger = []
        let accounts = {
            valid: [],
            invalid: [],
            email_verified: [],
            not_verified: [],
            phone_verified: [],
            full_verified: [],
            mfa_enabled: [],
            hasnitro: [],
        };
        setInterval(() => {
            if (tokens.length === tnum) {
                console.log('--------------------------------');
                console.log(`All tokens has been checked!`.green);
                console.log(`Valid Tokens: `.green + `${vnum}`.yellow);
                console.log(`Invalid Tokens: `.red + `${nvnum}`.yellow);
                if (this.output_tokens.email_verified) {
                    const outputDir = path.join(process.cwd(), 'output');
                    if (!existsSync(outputDir)) {
                        mkdirSync(outputDir);
                    }
                    if (accounts.email_verified.length) {
                        const TokensFile = path.join(outputDir, this.output_tokens.email_verified);
                        const fileContents = readFileSync(TokensFile, 'utf8');
                        const out = this.output_tokens.email_verified
                        const data = accounts.email_verified
                        let tokens = []
                        data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                        if (tokens.length > 0) {
                            console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to output/${out} !`.green);
                            appendFileSync(TokensFile, tokens.join('\n'));
                        } else console.log(`There is no tokens with email verified are not updated to output/${out}`.red);
                    }
                }
                if (accounts.valid.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.valid_tokens);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.valid_tokens
                    const data = accounts.valid
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to output/${out} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no valid tokens are not updated to output/${out}`.red);
                }
                if (accounts.invalid.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.invalid_tokens);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.invalid_tokens
                    const data = accounts.invalid
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to output/${out} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no invalid tokens are not updated to output/${out}`.red);
                }
                if (accounts.phone_verified.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.phone_verified);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.phone_verified
                    const data = accounts.phone_verified
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to output/${out} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no tokens with phone verified are not updated to output/${out}`.red);
                }
                if (accounts.not_verified.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.not_verified);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.not_verified
                    const data = accounts.not_verified
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to ${path.join(outputDir, out)} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no tokens not-verified are not updated to ${path.join(outputDir, out)}`.red);
                }
                if (accounts.full_verified.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.full_verified);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.full_verified
                    const data = accounts.full_verified
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to ${path.join(outputDir, out)} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no tokens full-verified are not updated to ${path.join(outputDir, out)}`.red);
                }
                if (accounts.mfa_enabled.length) {
                    const outputDir = path.join(process.cwd(), 'output');
                    const TokensFile = path.join(outputDir, this.output_tokens.mfa_enabled);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.mfa_enabled
                    const data = accounts.mfa_enabled
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to ${path.join(outputDir, out)} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else console.log(`There is no tokens with mfa enabled are not updated to ${path.join(outputDir, out)}`.red);
                }

                if (accounts.hasnitro.length) {
                    const TokensFile = path.join(process.cwd(), 'output', this.output_tokens.hasnitro);
                    const fileContents = readFileSync(TokensFile, 'utf8');
                    const out = this.output_tokens.hasnitro
                    const data = accounts.hasnitro
                    let tokens = []
                    data.forEach(token => !fileContents.includes(token) ? tokens.push(token) : false)
                    if (tokens.length > 0) {
                        console.log(`[+] ${tokens.length}`.yellow + ` tokens has been updated to output/${out} !`.green);
                        appendFileSync(TokensFile, tokens.join('\n'));
                    } else {
                        console.log(`There is no tokens with nitro are not updated to output/${out}`.red);
                    }
                }
                if (tokens.length === tnum) {
                    writeFileSync(this.tokensPath, '');
                    console.log(`${this.tokensPath} has been reset and all tokens will be updated to 'output' foloder!`.green);

                    if (this.pinLogger) {
                        const outputDir = path.join(process.cwd(), 'Logger');
                        if (!existsSync(outputDir)) {
                            mkdirSync(outputDir);
                        }
                        const now = new Date();
                        const year = now.getFullYear();
                        const month = now.getMonth() + 1; // add 1 since January is 0
                        const day = now.getDate();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        const seconds = now.getSeconds();
                        let date = `${year}_${month}_${day}_${hours}_${minutes}_${seconds}.txt`
                        const loggerPath = path.join(outputDir, `${date}`);
                        if (!existsSync(loggerPath)) {
                            try {
                                writeFileSync(loggerPath, logger.join("\n"));
                                console.log(`Logger file has been created (Logger/${date})!`.green);
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }

                console.log('--------------------------------');
                return process.exit(0)
            }

        }, 1000);
        if (this.fullLogger) {
            console.log('----------------------------------------');
            console.log(`| DTokens Checker v${require('./package.json').version}^              |`.red);
            console.log(`| Checker started checking ` + `${tokens.length}`.yellow + ` ${tokens.length == 1 ? 'token' : 'tokens'}!   |`.green);
            console.log('----------------------------------------');
        };
        tokens.map(async token => {
            tnum++

            try {
                const { data } = await axios.get('https://discord.com/api/v9/users/@me', {
                    headers: {
                        Authorization: token
                    }
                })
                accounts.valid.push(token)
                vnum++
                let emsg = `[+] Valid Token: ${token}`;
                if (this.fullLogger) {
                    const {
                        verified,
                        mfa_enabled,
                        phone,
                        premium_type
                    } = data

                    if (verified && phone == null) {
                        accounts.email_verified.push(token)
                        let msg = `[+] Token: ${token} is verified by email only!`
                        if (this.fullLogger) {
                            console.log(msg.green);
                        }
                        if (!logger.includes(token) && this.pinLogger) {
                            logger.push(msg)
                        }
                    } else if (verified && phone != null) {
                        accounts.full_verified.push(token)
                        let msg = `[+] Token: ${token} is verified by email and phone!`
                        if (this.fullLogger) {
                            console.log(msg.green);
                        }
                        if (!logger.includes(token) && this.pinLogger) {
                            logger.push(msg)
                        }
                    } else if (!verified && phone != null) {
                        accounts.not_verified.push(token)
                        let msg = `[+] Token: ${token} is not verified by email or phone!`
                        if (this.fullLogger) {
                            console.log(msg.green);
                        }
                        if (!logger.includes(token) && this.pinLogger) {
                            logger.push(msg)
                        }
                    }
                    if (premium_type != 0) {
                        accounts.hasnitro.push(token)
                        let msg = `[+] Token: ${token} has a nitro!`
                        if (this.fullLogger) {
                            console.log(msg.green);
                        }
                        if (!logger.includes(token) && this.pinLogger) {
                            logger.push(msg)
                        }
                    }
                    if (mfa_enabled) {
                        accounts.mfa_enabled.push(token)
                        let msg = `[+] Token: ${token} has a two-factor verfiecation enabled!`
                        if (this.fullLogger) {
                            console.log(msg.green);
                        }
                        if (!logger.includes(token) && this.pinLogger) {
                            logger.push(msg)
                        }

                    }
                } else {
                    console.log(emsg.green);
                    logger.push(emsg)
                }
            } catch {
                nvnum++
                accounts.invalid.push(token)
                let msg = `[-] Invalid Token: ${token}`
                console.log(msg.red)
                if (!logger.includes(token) && this.pinLogger) {
                    logger.push(msg)
                }
            }
        });
    }
}
module.exports = Checker