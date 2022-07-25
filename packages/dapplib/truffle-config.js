require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach razor oval collect gown light army giggle'; 
let testAccounts = [
"0x402b8e252aec36968257bbd9d8d15171ae89b20dc179a8e6c756aa5c983258fc",
"0x3ae652c22409c04922353ec3e46ce7272cc9a48facfed7bc9e0ad6b2af2b9ee2",
"0xdf441c120bc217a38c8a6d967ff23089faffa876c60e57c124cc3111ebf66023",
"0xe0ecd571dc09e59dddfb8108c51298faa1671a36b0ae7031a4c80296584c5d22",
"0x717a981cd4603e54fb6f0adc8fba524de1516a987d0d23ed743d4694b71d447b",
"0xe3e90cb73307f13017a2afd345c48f44b555c08f53102fb46db3bfd094a2c389",
"0x7e2cd54f89dd10f57d8f107856ad2f1d0fd00495e874e6961cd812949d7892d1",
"0xba7d1120e613be4e5f2d77607d557b6eb4749c8161c6088e3f3b0dfb980716e5",
"0xaa946bdead17a082c9df9bb76451a0ad20b10512c8849432d44561b0b41549fa",
"0x035758df0e6bd50ed8fd9a9b466766fffba82758679f65f00a5abdac4c19dd91"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

