# Project-IOT-KMIPNV

## For set up arduino folder open this link:
[LilyGo-LoRa-Series](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/master), This documentation can help you how to set up arduino in your computer and configuration loRaWAN device

## For open file Node-Red have a requirement:
1. Install NodeJS
- For file AREA_PERKEBUNAN_WINDOWS, use OS Windows and download File at [nodejs.org](https://nodejs.org/en/download/current)
- For file AREA_IRIGASI_UBUNTU, use OS Linux and download File at [snapcraft,oi](https://snapcraft.io/node), use 20/stable
2. Instal node-red
- Windows, use this [link](https://nodered.org/docs/getting-started/windows)
- Linux, use this [link](https://www.npmjs.com/package/node-red)
3. Open node-red in browser and put in:
- http://127.0.0.1:1880/
4. import file Node-Red
- click hamburger icon
- chose Import
- select file AREA_PERKEBUNAN_WINDOWS for windows and select file AREA_IRIGASI_UBUNTU for ubuntu
- and click import

## Decode Payload:
 At LoRaWAN you can decode payload use the code in file decodePayload.js

## Sum
This project can help you monitoring and controlling via LoRaWAN for saving more energy to use.
