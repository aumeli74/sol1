// depenencias del proyecto
import Web3 from 'web3';
import { Transaction as Tx } from 'ethereumjs-tx';
import fetch from 'node-fetch';


// dependencias de archivos json
import contractJson from "../build/contracts/Oracle.json" assert { type: "json" };
 

const web3 = new Web3('ws://127.0.0.1:7545')

const addressContract = '0x951a0266F2178B85a5e33070D052a68Af88EEF8A'

const contractInstance = new web3.eth.Contract(contractJson.abi, addressContract)

const privateKey = Buffer.from('b09d3a14de1488042197db32864a499081b42ca74365b7a045c92f1f80e5a53e','hex')
const address = '0xB987EDF6c3bf44732c0cf428A451feED5cA49e37'

//web3.eth.getBlockNumber().then(n => listenEvent(n))

contractInstance.events.allEvents({
    fromBlock: 'latest' // Puedes usar 'earliest' para empezar desde el primer bloque, o un número de bloque específico
  }, (error, event) => {
    if (error) {
      console.error("Error al recibir el evento:", error);
    } else {
      console.log("Evento recibido:", event);
    }
  });

  /*
function listenEvent(lastBlock) {    
    contractInstance.events.__callbackNewData( {}, {fromBlock: lastBlock, toBlock: 'latest'}, (err, event) => {

        event ?  updateData() : null
        err ? console.log(err) : null
    })
}


async function updateData() {
    console.log("holaudatedatea")
    const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=knHqGgyyAkUQXQXWg1ZaRvgdtBLJWU7RQxSHaDfp';
    console.log(url);
    await fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setDataContract(json.element_count)
    })
}


function setDataContract(_value) {
    console.log(_value);
    web3.eth.getTransactionCount(address, (err, txNum)  => {
            contractInstance.methods.setNumMeteoritos(_value)
               .estimateGas({}, (err, gasAmount) => {
                let rawTx = {
                    nonce: web3.utils.toHex(txNum),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('1.4','gwei')),
                    gasLimit : web3.utils.toHex(gasAmount),
                    to: addressContract,
                    value: '0x00',
                    data: contractInstance.methods.setNumMeteoritos(_value).encodeAbi()
                } 
                    
                const tx = new Tx(rawTx)
                tx.sign(privateKey);
                const serializedTx = tx.serialize().toString('hex')
                web3.eth.sendSignedTransaction('0x'+ serializedTx);
 
               })
        })
}
        */