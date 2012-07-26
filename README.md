     _     _                   
    | |__ (_) __ _  __ _  __ _ 
    | '_ \| |/ _` |/ _` |/ _` |
    | |_) | | (_| | (_| | (_| |
    |_.__/|_|\__, |\__, |\__,_|
             |___/ |___/  

Makes things take up more space. You can turn anything in to a string of numbers and letters.

Not sure where you would ever use this. but you know just in case.

Works in your browser and in your node.js.

## Usage

Browser

    <script type="text/javascript" src="bigga.js"></script>
Node

    var bigga = require('bigga');

### Encode

    var big = bigga.encode(data, radix);

Or

    var big = bigga(data, radix);

### Decode

Works out what radix you used.

    var data = bigga.encode(big);

### Even Bigger Mode

Returns true for on and false for off;

    bigga.evenBigga();

## Why?

Why not?