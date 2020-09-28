from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Cryptocurrency

with app.app_context():
  db.drop_all()
  db.create_all()

  db.session.add_all([
  User(first_name = 'Demo User', last_name = 'Sparks', email = 'demoUser@aa.io', password = '$2b$14$BcvGNBC6FqNWEnLRfUp33eDF3usbEZG3BXHLtQV4uhXDCC6gjRsWy', account_balance = 50000),
  Cryptocurrency(symbol = "btc", name = "Bitcoin", image_url = "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"),
  Cryptocurrency(symbol = "eth", name = "Ethereum", image_url = "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"),
  Cryptocurrency(symbol = "usdt", name = "Tether", image_url = "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"),
  Cryptocurrency(symbol = "xrp", name = "XRP", image_url = "https://assets.coingecko.com/coins/images/44/large/xrp.png?1564480400"),
  Cryptocurrency(symbol = "link", name = "Chainlink", image_url = "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700"),
  Cryptocurrency(symbol = "dot", name = "Polkadot", image_url = "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776"),
  Cryptocurrency(symbol = "bch", name = "Bitcoin Cash", image_url = "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492"),
  Cryptocurrency(symbol = "bnb", name = "Binance Coin", image_url = "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"),
  Cryptocurrency(symbol = "cro", name = "Crypto.com Coin", image_url = "https://assets.coingecko.com/coins/images/7310/large/cypto.png?1547043960"),
  Cryptocurrency(symbol = "ltc", name = "Litecoin", image_url = "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"),
  Cryptocurrency(symbol = "ada", name = "Cardano", image_url = "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"),
  Cryptocurrency(symbol = "bsv", name = "Bitcoin SV", image_url = "https://assets.coingecko.com/coins/images/6799/large/BSV.png?1558947902"),
  Cryptocurrency(symbol = "usdc", name = "USD Coin", image_url = "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389"),
  Cryptocurrency(symbol = "eos", name = "EOS", image_url = "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"),
  Cryptocurrency(symbol = "trx", name = "TRON", image_url = "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066"),
  Cryptocurrency(symbol = "okb", name = "OKB", image_url = "https://assets.coingecko.com/coins/images/4463/large/okb_token.png?1548386209"),
  Cryptocurrency(symbol = "xmr", name = "Monero", image_url = "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729"),
  Cryptocurrency(symbol = "xtz", name = "Tezos", image_url = "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862"),
  Cryptocurrency(symbol = "xlm", name = "Stellar", image_url = "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157"),
  Cryptocurrency(symbol = "neo", name = "NEO", image_url = "https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png?1594357361"),
  Cryptocurrency(symbol = "cdai", name = "cDAI", image_url = "https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585"),
  Cryptocurrency(symbol = "leo", name = "LEO Token", image_url = "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215"),
  Cryptocurrency(symbol = "atom", name = "Cosmos", image_url = "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960"),
  Cryptocurrency(symbol = "ht", name = "Huobi Token", image_url = "https://assets.coingecko.com/coins/images/2822/large/huobi-token-logo.png?1547036992"),
  Cryptocurrency(symbol = "xem", name = "NEM", image_url = "https://assets.coingecko.com/coins/images/242/large/NEM_Logo_256x256.png?1598687029"),
  Cryptocurrency(symbol = "wbtc", name = "Wrapped Bitcoin", image_url = "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744"),
  Cryptocurrency(symbol = "dai", name = "Dai", image_url = "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png?1574218774"),
  Cryptocurrency(symbol = "vet", name = "VeChain", image_url = "https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1547035194"),
  Cryptocurrency(symbol = "yfi", name = "yearn.finance", image_url = "https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png?1598325330"),
  Cryptocurrency(symbol = "miota", name = "IOTA", image_url = "https://assets.coingecko.com/coins/images/692/large/IOTA_Logo.png?1547034454"),
  Cryptocurrency(symbol = "lend", name = "Aave", image_url = "https://assets.coingecko.com/coins/images/1365/large/ethlend.png?1547394586"),
  Cryptocurrency(symbol = "dash", name = "Dash", image_url = "https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930"),
  Cryptocurrency(symbol = "uni", name = "Uniswap", image_url = "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604"),
  Cryptocurrency(symbol = "theta", name = "Theta Network", image_url = "https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191"),
  Cryptocurrency(symbol = "snx", name = "Synthetix Network Token", image_url = "https://assets.coingecko.com/coins/images/3406/large/SNX.png?1598631139"),
  Cryptocurrency(symbol = "etc", name = "Ethereum Classic", image_url = "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169"),
  Cryptocurrency(symbol = "uma", name = "UMA", image_url = "https://assets.coingecko.com/coins/images/10951/large/UMA.png?1586307916"),
  Cryptocurrency(symbol = "zec", name = "Zcash", image_url = "https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png?1547034197"),
  Cryptocurrency(symbol = "comp", name = "Compound", image_url = "https://assets.coingecko.com/coins/images/10775/large/COMP.png?1592625425"),
  Cryptocurrency(symbol = "mkr", name = "Maker", image_url = "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1585191826"),
  Cryptocurrency(symbol = "busd", name = "Binance USD", image_url = "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766"),
  Cryptocurrency(symbol = "omg", name = "OMG Network", image_url = "https://assets.coingecko.com/coins/images/776/large/OMG_Network.jpg?1591167168"),
  Cryptocurrency(symbol = "ont", name = "Ontology", image_url = "https://assets.coingecko.com/coins/images/3447/large/ONT.png?1583481820"),
  Cryptocurrency(symbol = "tusd", name = "TrueUSD", image_url = "https://assets.coingecko.com/coins/images/3449/large/TUSD.png?1559172762"),
  Cryptocurrency(symbol = "bat", name = "Basic Attention Token", image_url = "https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034427"),
  Cryptocurrency(symbol = "ftt", name = "FTX Token", image_url = "https://assets.coingecko.com/coins/images/9026/large/ftt.png?1563776835"),
  Cryptocurrency(symbol = "dgb", name = "DigiByte", image_url = "https://assets.coingecko.com/coins/images/63/large/digibyte.png?1547033717"),
  Cryptocurrency(symbol = "doge", name = "Dogecoin", image_url = "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"),
  Cryptocurrency(symbol = "ksm", name = "Kusama", image_url = "https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg?1576190080"),
  Cryptocurrency(symbol = "cel", name = "Celsius Network", image_url = "https://assets.coingecko.com/coins/images/3263/large/New_CEL_Token_Logo.jpg?1600913901"),
  Cryptocurrency(symbol = "pax", name = "Paxos Standard", image_url = "https://assets.coingecko.com/coins/images/6013/large/paxos_standard.png?1548386291"),
  Cryptocurrency(symbol = "nxm", name = "Nexus Mutual", image_url = "https://assets.coingecko.com/coins/images/11810/large/nexus-mutual.jpg?1594547726"),
  Cryptocurrency(symbol = "zrx", name = "0x", image_url = "https://assets.coingecko.com/coins/images/863/large/0x.png?1547034672"),
  Cryptocurrency(symbol = "lrc", name = "Loopring", image_url = "https://assets.coingecko.com/coins/images/913/large/LRC.png?1572852344"),
  Cryptocurrency(symbol = "alink", name = "Aave LINK", image_url = "https://assets.coingecko.com/coins/images/11729/large/aLINK.png?1593084323"),
  Cryptocurrency(symbol = "ceth", name = "cETH", image_url = "https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598"),
  Cryptocurrency(symbol = "algo", name = "Algorand", image_url = "https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725"),
  Cryptocurrency(symbol = "ewt", name = "Energy Web Token", image_url = "https://assets.coingecko.com/coins/images/10886/large/R9gQTJV__400x400.png?1585604557"),
  Cryptocurrency(symbol = "qtum", name = "Qtum", image_url = "https://assets.coingecko.com/coins/images/684/large/qtum.png?1547034438"),
  Cryptocurrency(symbol = "yvault-lp-ycurve", name = "yUSD", image_url = "https://assets.coingecko.com/coins/images/12210/large/yUSD.png?1600166557"),
  Cryptocurrency(symbol = "waves", name = "Waves", image_url = "https://assets.coingecko.com/coins/images/425/large/waves.png?1548386117"),
  Cryptocurrency(symbol = "icx", name = "ICON", image_url = "https://assets.coingecko.com/coins/images/1060/large/icon-icx-logo.png?1547035003"),
  Cryptocurrency(symbol = "renbtc", name = "renBTC", image_url = "https://assets.coingecko.com/coins/images/11370/large/renBTC.png?1589985711"),
  Cryptocurrency(symbol = "ren", name = "REN", image_url = "https://assets.coingecko.com/coins/images/3139/large/REN.png?1589985807"),
  Cryptocurrency(symbol = "cusdc", name = "cUSDC", image_url = "https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577"),
  Cryptocurrency(symbol = "btt", name = "BitTorrent", image_url = "https://assets.coingecko.com/coins/images/7595/large/BTT_Token_Graphic.png?1555066995"),
  Cryptocurrency(symbol = "atusd", name = "Aave TUSD", image_url = "https://assets.coingecko.com/coins/images/11724/large/aTUSD.png?1593082700"),
  Cryptocurrency(symbol = "knc", name = "Kyber Network", image_url = "https://assets.coingecko.com/coins/images/947/large/kyber-logo.png?1547034806"),
  Cryptocurrency(symbol = "ausdc", name = "Aave USDC", image_url = "https://assets.coingecko.com/coins/images/11674/large/aUSDC.png?1592546449"),
  Cryptocurrency(symbol = "zil", name = "Zilliqa", image_url = "https://assets.coingecko.com/coins/images/2687/large/Zilliqa-logo.png?1547036894"),
  Cryptocurrency(symbol = "hbar", name = "Hedera Hashgraph", image_url = "https://assets.coingecko.com/coins/images/3688/large/mqTDGK7Q.png?1566256777"),
  Cryptocurrency(symbol = "lsk", name = "Lisk", image_url = "https://assets.coingecko.com/coins/images/385/large/Lisk_Symbol_-_Blue.png?1573444104"),
  Cryptocurrency(symbol = "nmr", name = "Numeraire", image_url = "https://assets.coingecko.com/coins/images/752/large/numeraire.png?1592538976"),
  Cryptocurrency(symbol = "band", name = "Band Protocol", image_url = "https://assets.coingecko.com/coins/images/9545/large/band-protocol.png?1568730326"),
  Cryptocurrency(symbol = "ar", name = "Arweave", image_url = "https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1591059616"),
  Cryptocurrency(symbol = "aeth", name = "Aave ETH", image_url = "https://assets.coingecko.com/coins/images/11619/large/aETH_2x.png?1591976597"),
  Cryptocurrency(symbol = "dcr", name = "Decred", image_url = "https://assets.coingecko.com/coins/images/329/large/decred.png?1547034093"),
  Cryptocurrency(symbol = "enj", name = "Enjin Coin", image_url = "https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png?1547035078"),
  Cryptocurrency(symbol = "ocean", name = "Ocean Protocol", image_url = "https://assets.coingecko.com/coins/images/3687/large/ocean-protocol-logo.jpg?1547038686"),
  Cryptocurrency(symbol = "luna", name = "Terra", image_url = "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072"),
  Cryptocurrency(symbol = "stx", name = "Blockstack", image_url = "https://assets.coingecko.com/coins/images/2069/large/0T4PyCGk_400x400.png?1572590061"),
  Cryptocurrency(symbol = "sushi", name = "Sushi", image_url = "https://assets.coingecko.com/coins/images/12271/large/sushi.jpg?1598623048"),
  Cryptocurrency(symbol = "husd", name = "HUSD", image_url = "https://assets.coingecko.com/coins/images/9567/large/HUSD.jpg?1568889385"),
  Cryptocurrency(symbol = "btg", name = "Bitcoin Gold", image_url = "https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png?1547034978"),
  Cryptocurrency(symbol = "egld", name = "Elrond", image_url = "https://assets.coingecko.com/coins/images/12335/large/Elrond.png?1599132180"),
  Cryptocurrency(symbol = "yfii", name = "DFI.money", image_url = "https://assets.coingecko.com/coins/images/11902/large/YFII-logo.78631676.png?1598677348"),
  Cryptocurrency(symbol = "ant", name = "Aragon", image_url = "https://assets.coingecko.com/coins/images/681/large/aragon-logo.png?1547034433"),
  Cryptocurrency(symbol = "bal", name = "Balancer", image_url = "https://assets.coingecko.com/coins/images/11683/large/Balancer.png?1592792958"),
  Cryptocurrency(symbol = "sol", name = "Solana", image_url = "https://assets.coingecko.com/coins/images/4128/large/RPU3hzmh_400x400.jpg?1586762168"),
  Cryptocurrency(symbol = "sc", name = "Siacoin", image_url = "https://assets.coingecko.com/coins/images/289/large/siacoin.png?1548386465"),
  Cryptocurrency(symbol = "rsr", name = "Reserve Rights Token", image_url = "https://assets.coingecko.com/coins/images/8365/large/Reserve_Rights.png?1557737411"),
  Cryptocurrency(symbol = "AVAX", name = "Avalanche", image_url = "https://assets.coingecko.com/coins/images/12559/large/5k88YPGv_400x400.png?1600749180"),
  Cryptocurrency(symbol = "dx", name = "DxChain Token", image_url = "https://assets.coingecko.com/coins/images/4700/large/dxchain.jpg?1547039992"),
  Cryptocurrency(symbol = "ampl", name = "Ampleforth", image_url = "https://assets.coingecko.com/coins/images/4708/large/Ampleforth.png?1561684250"),
  Cryptocurrency(symbol = "btm", name = "Bytom", image_url = "https://assets.coingecko.com/coins/images/1087/large/bytom.png?1547564390"),
  Cryptocurrency(symbol = "ckb", name = "Nervos Network", image_url = "https://assets.coingecko.com/coins/images/9566/large/Nervos.png?1568877603"),
  Cryptocurrency(symbol = "rvn", name = "Ravencoin", image_url = "https://assets.coingecko.com/coins/images/3412/large/ravencoin.png?1548386057"),
  Cryptocurrency(symbol = "mana", name = "Decentraland", image_url = "https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1550108745"),
  Cryptocurrency(symbol = "tkx", name = "Tokenize Xchange", image_url = "https://assets.coingecko.com/coins/images/4984/large/Tokenize.png?1561602968"),
  Cryptocurrency(symbol = "nano", name = "Nano", image_url = "https://assets.coingecko.com/coins/images/756/large/nano-coin-logo.png?1547034501")
  ])


  db.session.commit()
