from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Cryptocurrency

with app.app_context():
  # db.drop_all()
  # db.create_all()

  # ian = User(first_name = 'Ian', last_name = 'Bently', email = 'ian@aa.io', account_balance = 0)
  # stedman = User(first_name = 'Stedman', last_name = 'Houston', email = 'sted@aa.io', account_balance = 0)
  db.session.add_all([
  # coin1 = Cryptocurrency(symbol = 'btc', name = 'Bitcoin', image_url = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579')
  # coin2 = Cryptocurrency(symbol = 'eth', name = 'Ethereum', image_url = 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880')
  Cryptocurrency(symbol = 'usdt', name = 'Tether', image_url = 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707'),
  Cryptocurrency(symbol = 'xrp', name = 'XRP', image_url = 'https://assets.coingecko.com/coins/images/44/large/xrp.png?1564480400'),
  Cryptocurrency(symbol = 'link', name = 'Chainlink', image_url = 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700'),
  Cryptocurrency(symbol = 'dot', name = 'Polkadot', image_url = 'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776'),
  Cryptocurrency(symbol = 'bch', name = 'Bitcoin Cash', image_url = 'https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492'),
  Cryptocurrency(symbol = 'bnb', name = 'Binance Coin', image_url = 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615'),
  Cryptocurrency(symbol = 'bsv', name = 'Bitcoin SV', image_url = 'https://assets.coingecko.com/coins/images/6799/large/BSV.png?1558947902'),
  Cryptocurrency(symbol = 'ltc', name = 'Litecoin', image_url = 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580'),
  Cryptocurrency(symbol = 'cro', name = 'Crypto.com Coin', image_url = 'https://assets.coingecko.com/coins/images/7310/large/cypto.png?1547043960'),
  Cryptocurrency(symbol = 'ada', name = 'Cardano', image_url = 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860'),
  Cryptocurrency(symbol = 'eos', name = 'EOS', image_url = 'https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481'),
  Cryptocurrency(symbol = 'trx', name = 'TRON', image_url = 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066'),
  Cryptocurrency(symbol = 'xtz', name = 'Tezos', image_url = 'https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862'),
  Cryptocurrency(symbol = 'usdc', name = 'USD Coin', image_url = 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389'),
  Cryptocurrency(symbol = 'xlm', name = 'Stellar', image_url = 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157'),
  Cryptocurrency(symbol = 'xmr', name = 'Monero', image_url = 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729'),
  Cryptocurrency(symbol = 'okb', name = 'OKB', image_url = 'https://assets.coingecko.com/coins/images/4463/large/okb_token.png?1548386209'),
  Cryptocurrency(symbol = 'atom', name = 'Cosmos', image_url = 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960'),
  Cryptocurrency(symbol = 'neo', name = 'NEO', image_url = 'https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png?1594357361'),
  Cryptocurrency(symbol = 'leo', name = 'LEO Token', image_url = 'https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215'),
  Cryptocurrency(symbol = 'xem', name = 'NEM', image_url = 'https://assets.coingecko.com/coins/images/242/large/NEM_Logo_256x256.png?1598687029'),
  Cryptocurrency(symbol = 'ht', name = 'Huobi Token', image_url = 'https://assets.coingecko.com/coins/images/2822/large/huobi-token-logo.png?1547036992'),
  Cryptocurrency(symbol = 'uma', name = 'UMA', image_url = 'https://assets.coingecko.com/coins/images/10951/large/UMA.png?1586307916'),
  Cryptocurrency(symbol = 'lend', name = 'Aave', image_url = 'https://assets.coingecko.com/coins/images/1365/large/ethlend.png?1547394586'),
  Cryptocurrency(symbol = 'vet', name = 'VeChain', image_url = 'https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1547035194'),
  Cryptocurrency(symbol = 'yfi', name = 'yearn.finance', image_url = 'https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png?1598325330'),
  Cryptocurrency(symbol = 'miota', name = 'IOTA', image_url = 'https://assets.coingecko.com/coins/images/692/large/IOTA_Logo.png?1547034454'),
  Cryptocurrency(symbol = 'dash', name = 'Dash', image_url = 'https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930'),
  Cryptocurrency(symbol = 'cdai', name = 'cDAI', image_url = 'https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585'),
  Cryptocurrency(symbol = 'zec', name = 'Zcash', image_url = 'https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png?1547034197'),
  Cryptocurrency(symbol = 'comp', name = 'Compound', image_url = 'https://assets.coingecko.com/coins/images/10775/large/COMP.png?1592625425'),
  Cryptocurrency(symbol = 'snx', name = 'Synthetix Network Token', image_url = 'https://assets.coingecko.com/coins/images/3406/large/SNX.png?1598631139'),
  Cryptocurrency(symbol = 'etc', name = 'Ethereum Classic', image_url = 'https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169'),
  Cryptocurrency(symbol = 'omg', name = 'OMG Network', image_url = 'https://assets.coingecko.com/coins/images/776/large/OMG_Network.jpg?1591167168'),
  Cryptocurrency(symbol = 'wbtc', name = 'Wrapped Bitcoin', image_url = 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744'),
  Cryptocurrency(symbol = 'mkr', name = 'Maker', image_url = 'https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1585191826'),
  Cryptocurrency(symbol = 'theta', name = 'Theta Network', image_url = 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191'),
  Cryptocurrency(symbol = 'ont', name = 'Ontology', image_url = 'https://assets.coingecko.com/coins/images/3447/large/ONT.png?1583481820'),
  Cryptocurrency(symbol = 'dai', name = 'Dai', image_url = 'https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png?1574218774'),
  Cryptocurrency(symbol = 'tusd', name = 'TrueUSD', image_url = 'https://assets.coingecko.com/coins/images/3449/large/TUSD.png?1559172762'),
  Cryptocurrency(symbol = 'bat', name = 'Basic Attention Token', image_url = 'https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034427'),
  Cryptocurrency(symbol = 'doge', name = 'Dogecoin', image_url = 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256'),
  Cryptocurrency(symbol = 'ftt', name = 'FTX Token', image_url = 'https://assets.coingecko.com/coins/images/9026/large/ftt.png?1563776835'),
  Cryptocurrency(symbol = 'algo', name = 'Algorand', image_url = 'https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725'),
  Cryptocurrency(symbol = 'zrx', name = '0x', image_url = 'https://assets.coingecko.com/coins/images/863/large/0x.png?1547034672'),
  Cryptocurrency(symbol = 'ceth', name = 'cETH', image_url = 'https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598'),
  Cryptocurrency(symbol = 'ksm', name = 'Kusama', image_url = 'https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg?1576190080'),
  Cryptocurrency(symbol = 'dgb', name = 'DigiByte', image_url = 'https://assets.coingecko.com/coins/images/63/large/digibyte.png?1547033717')
  ])


  # db.session.add(ian)
  # db.session.add(stedman)
  # db.session.add(john)
  # db.session.add(mike)

  db.session.commit()
