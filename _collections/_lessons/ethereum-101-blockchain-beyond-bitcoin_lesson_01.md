---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 1
title: Early Bitcoin Proposal
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/1/early-bitcoin-proposal
---
<br>
<br>
<span >It may come as a surprise to many, but <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">the original Bitcoin Whitepaper</a> published in 2008 never actually used the word blockchain. While the document mentions chains of blocks and other similar phrases, the modern concept of a decentralized ledger is a much more recent idea. </span>

<span >The original Bitcoin Whitepaper describes a form of peer-to-peer currency where participants prove that they are trustworthy by wasting computational energy. The core goal of the Bitcoin Protocol in the early stages was to provide a way for a network of untrusting peers to exchange value with minimal risk and maximum anonymity. The primary issue with such a system was known as the double spend problem. If peers are to keep track of the value each other hold, then how is it possible to prevent simultaneous spending of the same monies? </span>

<span >In order to resolve this problem, Satoshi Nakomoto proposed that the new transactions would only lock once a majority of nodes agreed on them. In practice, this means that Bitcoin transactions take about 10 minutes to process. </span>

<h3>THE BIG PICTURE</h3>

<img src="/assets/img/TheBigPicture-01.png"> 

{% include callouts/callout.html
   title="The Bitcoin Whitepaper proposed a system wherein:"
	bodyText="<ol><li >All peers are anonymous</li><li >All peers can reach agreement</li><li >Agreements can be resolved without systemic failure or malfunction</li><li >All peers are treated equally</li></ol>"
%}

<h3>EVOLVING TO ETHEREUM</h3>

<span >In the Bitcoin protocol, the blockchain is the single unchangeable record, shared by every peer, which allows anonymous users to trust one another. A </span><b>Bitcoin</b><span > exists only as a sum of credits attributed to a certain peer and registered to that blockchain. A blockchain is just a set of records which are structured to provide maximum accountability without compromising privacy.</span>

<span >In Bitcoin, the </span><b>block</b><span > is the batch of transactions which are locked every ten minutes. The </span><b>block time</b><span > is the ten minute window, and we refer to the competition between nodes to prove trustworthiness by wasting energy as </span><b>Proof-of-Work</b><span >. In the next lesson, we'll explore how this concept evolved in the years following 2008.</span>
