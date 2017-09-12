# Fadi

Fadi is a simple api to read from your public Google Spreadsheet files. You can:

  - Get all rows from a file
  - Get a specific row.
  - Get a range of rows.

### Installation
You can install it using npm
```bash
$ npm install --save fadi
```

### Usage
To use Fadi, first you have to import the module and make an instance of Fadi.
```js
var Fadi = require('fadi');
var fadi = new Fadi(api_key, spreadsheet_id);
```

To retrevive all rows:
```js
fadi.fetch_alaa_rows((result)=>{
    console.log(result);
})
```

To get a row at a specific place:
```js
fadi.fetch_specific_row(row_num, (result)=>{
    console.log(result);
})
```

To get a range of rows:
```js
fadi.fetch_specific_range(range, (result)=>{
    console.log(result);
})
```

Also you can convert two diminsinal array to json arrays, dealing with the first row as a header.
```js
Fadi.arr2json(...)
```


