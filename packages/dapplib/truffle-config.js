require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot blanket razor random common install person army ghost'; 
let testAccounts = [
"0xd78c7369d99b88cb03c0da0c1cd3f1aa043487902a7965a54e33364ea0adf40a",
"0xdc475a115b389b20f2c463b4ac62a8a649784b6643980a9ef894d5d1ad54782f",
"0x25e58ea7bc9947bb114e8b40e29083ae346fe89ba472a0f3701a56f0626fcd50",
"0xa02e6f681f942a02f11810f5a405ac924dd6c8e89c191872c720471bb9404c3e",
"0x1b5d639fe589692453144669c9370afd91f2a8f475bef3ac44be974c479711c9",
"0x4997278768ae9d1baf0b9cc0b656d5e2a49dd2c2b9030100977c29a071d4ab90",
"0x87cb2e33e3ef9c4bfe833e619e324a47c5c9beaa0c87bd54f779b67af6a31b02",
"0x873c549848fa8cdff3f8769d86389b596b902ed538518591f791e124994b8668",
"0xc5c5af40b162fafd31a88688cccba4a8bca304ec2ce063b558c777f86164b82c",
"0x7b162bff3e3aa22b74e05ad7ffbe1ff69dddb08ca14f210ac98a72630475d9ca"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


