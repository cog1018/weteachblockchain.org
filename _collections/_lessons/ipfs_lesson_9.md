---
layout: lesson
course: ipfs
module: 3
title: Running a Node
permalink: /courses/ipfs/3/running-a-node
---


<span>
<span class="openingParagraph">
Now that you have installed the IPFS software, you’ll need to configure your local node. Your node’s address is shown in the last line as ‘peer identity’.</span>

&nbsp;

<span>For the sake of this example, you can use the defaults. For more information on configuring nodes for different environments <a href="https://docs.ipfs.io/guides/examples/config/" rel="noopener noreferrer" target="_blank">click here.</a></span>

<code class="cli"> ipfs init
initializing ipfs node at /Users/alexandermorris/.go-ipfs
generating 2048-bit RSA keypair...done
peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z</code>
<br>
Congratulations – you’re now the proud owner of your very own IPFS node! Your node’s address is shown in the last line as ‘peer identity’. You can test that your node is working by contacting the IPFS core node to download the readme or quick-start guide:
<code class="cli">ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme
$ ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/quick-start</code></span>