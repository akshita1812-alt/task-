import express from "express";
let app = express();
import hbs  from "hbs";
// import axios from 'axios';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

hbs.registerHelper('increment', function(value) {
  return value + 1;
});

import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose  from "mongoose";
import {cryptoModel} from './models/model.js';
const dbUrl = 'mongodb+srv://asharma15be19:Akshita_123@cluster0.tlchabt.mongodb.net/'; 

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.set("views-engine", "hbs");
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use(express.json());
app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.render("./index.hbs");
})

async function getPost(){
const post = await fetch('https://api.wazirx.com/api/v2/tickers')
    const response = await post.json();
// try{
  for (const pair in response) {
    if (response.hasOwnProperty(pair)) {
      const dataEntry = response[pair];
      // console.log(dataEntry)
      const cryptoData = new cryptoModel({
        pair: pair,
        name: dataEntry['name'],
        last: dataEntry['last'],
        buy: dataEntry['buy'],
        sell: dataEntry['sell'],
        volume: dataEntry['volume'],
        base_unit: dataEntry['base_unit'],
      });
    }
//       const savedData = await cryptoData.save();
//       console.log(`Saved data for ${pair}`);
//     }
//   }
// }
//  catch (err) {
//   console.error(`Error saving data: ${err}`);
// }
    }
  }
getPost(); 

 app.get('/BTC-INR',async(req,res)=>{
  try {
    const btcData = await cryptoModel.find({ name: 'BTC/INR' });
    res.render('./btc.hbs', {btcData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
 });
 app.get('/ETH-INR',async(req,res)=>{
  try {
    const ethData = await cryptoModel.find({ name: 'ETH/INR' });
    res.render('./eth.hbs', {ethData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/USDT-INR',async(req,res)=>{
  try {
    const usdtData = await cryptoModel.find({ name: 'USDT/INR' });
    res.render('./usdt.hbs', {usdtData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/XRP-INR',async(req,res)=>{
  try {
    const xrpData = await cryptoModel.find({ name: 'XRP/INR' });
    res.render('./xrp.hbs', {xrpData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/TRX-INR',async(req,res)=>{
  try {
    const trxData = await cryptoModel.find({ name: 'TRX/INR' });
    res.render('./trx.hbs', {trxData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/DASH-INR',async(req,res)=>{
  try {
    const dashData = await cryptoModel.find({ name: 'DASH/INR' });
    res.render('./dash.hbs', {dashData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/ZEC-INR',async(req,res)=>{
  try {
    const zecData = await cryptoModel.find({ name: 'ZEC/INR' });
    res.render('./zec.hbs', {zecData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/XEM-INR',async(req,res)=>{
  try {
    const xemData = await cryptoModel.find({ name: 'XEM/INR' });
    res.render('./xem.hbs', {xemData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/IOST-INR',async(req,res)=>{
  try {
    const iostData = await cryptoModel.find({ name: 'IOST/INR' });
    res.render('./iost.hbs', {iostData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/WIN-INR',async(req,res)=>{
  try {
    const winData = await cryptoModel.find({ name: 'WIN/INR' });
    res.render('./win.hbs', {winData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/BTT-INR',async(req,res)=>{
  try {
    const bttData = await cryptoModel.find({ name: 'BTT/INR' });
    res.render('./btt.hbs', {bttData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
app.get('/WRX-INR',async(req,res)=>{
  try {
    const wrxData = await cryptoModel.find({ name: 'WRX/INR' });
    res.render('./wrx.hbs', {wrxData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})




app.listen(5000,()=>{
    console.log("server started");
})