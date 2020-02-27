---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 1
title: Introducing Ethereum
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/1/introducing-ethereum/
---
<span class="openingParagraph">In 2013, a cryptocurrency researcher named Vitalik Buterin wrote a whitepaper proposing a wider conceptual version of the blockchain. Buterin labeled his concept as Ethereum, and suggested that it would provide greater utility by allowing block data to include executable code which peers could run for each other in a complete computing environment. </span>

<img class="aligncenter size-full wp-image-16925" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/Vitalik-01.png" alt="" width="2169" height="854" />
<span class="imageCaption"><span class="mainImageTitle">VITALIK BUTERIN</span> // Forbes.com</span>
<h3>BIRTH OF THE MACHINE</h3>

<hr />

<img class="aligncenter size-full wp-image-17013" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/EthState-01.png" alt="" width="2447" height="890" />

<span style="font-weight: 400;">Rather than the blockchain existing as a ledger of transactions, Buterin proposed that the chain might instead serve as a source of communal truth for the results of computations. In this new version, the network of peers collectively transitioned from one state to another, and the ledger recorded these transitions communally. The rules of this transition and functionality are encompassed in the consensus rules, which you may want to </span><a href="https://github.com/ethereumbook/ethereumbook/blob/develop/14consensus.asciidoc"><span style="font-weight: 400;">explore on Github</span></a><span style="font-weight: 400;">. Collectively, the group of peers are referred to as the </span><b>Ethereum Virtual Machine (EVM).</b>
<h4>Aside: Turing Completeness</h4>
<span style="font-weight: 400;">When a computer is not limited to the execution of a particular type of computation task, we call this Turing complete. Another way of referring to this state is computational universality, because broadly speaking, all Turing complete machines are interchangeable.</span>

<img class="aligncenter size-full wp-image-16936" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/Turing-01.png" alt="" width="2169" height="1006" />
<span style="font-weight: 400;">In a decentralized context, this means that any code submitted to the network can be computed reliably by every node. The EVM is thereby able to operate as a single computer even though it runs on separate devices all around the world.</span>

&nbsp;
<h3>FUNDAMENTAL DIFFERENCES</h3>

<hr />

<span style="font-weight: 400;">While Ethereum and Bitcoin are similar, the rules of the EVM have been constructed with different priorities in mind. In particular, Ethereum's blocks are limited in computational effort, while Bitcoin's blocks are limited in storage space. In addition, new Ethereum blocks are mined every 10-19 seconds, whereas new Bitcoin blocks are mined every ten minutes. </span>

&nbsp;
<h3>GROWTH OF THE NETWORK</h3>

<hr />

<img class="aligncenter size-full wp-image-16933" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/EthereumGrowth-1.jpg" alt="" width="2169" height="724" />
<span style="font-weight: 400;">In the weeks and months after the release of the whitepaper, developers across the Bitcoin ecosystem and from other communities quickly proposed a myriad of additional applications and options for this new version of the blockchain.  The subjects that emerged now provide the framework for decentralization and </span><a href="/web3/"><span style="font-weight: 400;">Web 3</span></a><span style="font-weight: 400;">. Distributed computing and storage are expected to provide a new internet which is governed by a group of collaborating peers.</span>

&nbsp;
<h3>PREVENTING SPAM</h3>

<hr />

<span style="font-weight: 400;">Because the EVM is an open system, there is a substantial risk of a rogue actor attempting to subvert the network by running code which repeats endlessly or otherwise monopolizes the computational power of the network. In order to prevent this, a pricing unit known as ”gas” must be paid in order to run computations. Gas is purchased at the time a smart contract is triggered, and must be paid with Ether. Because the price of gas can vary independently from the price of Ether, and will increase when many parties try to purchase it simultaneously, this provides an economic disincentive to prevent spam within the network. </span>

&nbsp;
<h3>GOVERNANCE</h3>

<hr />

<span style="font-weight: 400;">Just like in the early days of Bitcoin, Ethereum's initial direction took shape over forums and via Github. As the project progressed, the non-profit Ethereum Foundation was established to provide oversight of the growth of the fledgling currency. </span>

<img class="aligncenter size-full wp-image-16938" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/Governance-01.png" alt="" width="2169" height="845" />

<span style="font-weight: 400;">Once a proposed idea has gained momentum through community discussion, it can be formalized as an Ethereum Request for Comment (ERC). If an ERC is adopted by the community, a clearly defined Ethereum Implementation Proposal (EIP) can be created, and developers can begin to collaborate to build the new feature. Once a formal EIP has been produced, funding is sometimes allocated in the form of a bounty from the Foundation or other parties within the Ethereum community. </span>

<span style="font-weight: 400;">Because the Ethereum Virtual Machine is Turing complete, many new features are built using smart contracts, and rarely require changes to the core Ethereum protocol. In these cases, the ERC process will mainly define a standard which developers can use to increase interoperability of their code, as we'll discuss in the next module. </span>