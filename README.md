# Mango Money Multiplier

## Description

It's a funding arbitrage bot for mango.markets. What that means is that one element of this software assesses the relative opportunity out of the aggregate opportunity for the subset of perps and leveraged spot markets on Mango.


You can do a fair bit of research( dyor or due diligence, six of one - half dozen of other ) on the mechanics within these two older pieces of content of mine:


https://hacks.substack.com/p/how-the-big-kids-make-a-shtt0n-of


https://jarettdunn.medium.com/what-dydx-and-starkwares-partnership-means-for-defi-s-perps-future-s-e88612b860ef


## Todo

The other half of this trick is to simultaneously measure and maybe enter into the cash n carry arbitrage opportunities for the given subset of markets. I gather from a mango competitor that Zeta allows for expiring onchain futures markets.


Cash n carry futures arbitrage exists on a longer timeframe than funding opps, so it's easier to get into position slowly over time as maker post-only. 


To optimize we probably need to assess when a given funding opp exceeds net fees to get in @ market, and execute if so.


Another idea is to exploit the cross-exchange opportunities in the divergence of the new superset, especially insofar as the most divergent funding/cash n carry futures opps.


A good idea for reproducability (sp I'm in plaintext editor) is to change the nginx reverse proxy from 80, in case the given machine is already running a web server of any kind (or solana RPC for that matter, as I've heard). This results in conflicts when our reverse nginx proxy tries to bind.


## Requirements

1. docker
2. docker-compose
3. python
4. poetry
5. you'll need a solana private key as UInt8Array inside a json file called id.json. There are two ways to achieve this: you can run solana-keygen new after installing solana cli, and it'll be in ~/.config/solana/id.json (I dunno about inferior operating systems - give it a search on your favorite search engine) or you can the node bs58 package to translate your key into a machine-readable key (instructions live here: https://www.npmjs.com/package/bs58)
6. In retrospect you'll need this same file to also be in ~/.config/solana/id.json
7. node, npm, yarn
8. a paid solana rpc service, better yet your own running on localhost

## Install Steps

meAndTheBoys is the list of public keys for wallets where you have access to trade mango. This includes you and people that delegate to you. Male or female. This is your root wallet pubkey, not the mango account within the interface.

Delays env var is the range for each thread to delay every cycle, randomly selected each cycle. The default 1,100 means it'll randomly select a number between 1 and 100, per thread, and sleep that long.


0. Fork this shit. PRs welcome.
1. git clone https://github.com/dyor-market/mango-money-multiplier
2. cd mango-money-multiplier
3. cp ~/.config/solana/id.json ./mango-service-v3
4. don't panic (I removed a step and didn't feel like re-numbering)
5. configure docker.env
6. sudo docker build .
7. sudo docker-compose up
8. pip install tenacity httpx pydantic
9. cd opportunities-assessor
10. yarn install && yarn build
11. node lib/examples/example.js
12. cd ../py
13. export delays="1,100"
14. edit mango-service-v3/src/mango.simple.client.ts with your pubkeys
14. python3 example3_market_maker.py
15. tip the address stacc.sol