var google = require('googleapis');
var sheets = google.sheets('v4');

module.exports = class Fadi {
    constructor(key, sheet_id) {
        this.key = key;
        this.sheet_id = sheet_id;
    }

    fetch_alaa_rows(callback) {
      let ths = this;
        sheets.spreadsheets.values.get({
            key: this.key, //AIzaSyCild3rIzu0Eb4RMyS2UhkxcjMDhBWRcQ0
            spreadsheetId: this.sheet_id, //1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
            range: 'A:Z',
        }, function(err, response) {
            if (err) {
                throw err;
            }

            let res = [];
            var rows = response.values;
            if (rows.length === 0) {
                callback([])
            } else {
                ths.arr2json(rows, function(json) {
                    callback(json)
                })
            }
        });
    }

    fetch_specific_row(row_num, callback) {
      let ths = this;
        sheets.spreadsheets.values.get({
            key: this.key, //AIzaSyCild3rIzu0Eb4RMyS2UhkxcjMDhBWRcQ0
            spreadsheetId: this.sheet_id, //1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
            range: `A${row_num}:Z${row_num+1}`,
        }, function(err, response) {
            if (err) {
                throw err;
            }

            let res = [];
            var rows = response.values;
            if (rows.length === 0) {
                callback([])
            } else {
                ths.arr2json(rows, function(json) {
                    callback(json)
                })
            }
        });
    }



    fetch_specific_range(range, callback) {
        let ths = this;
        sheets.spreadsheets.values.get({
            key: this.key, //AIzaSyCild3rIzu0Eb4RMyS2UhkxcjMDhBWRcQ0
            spreadsheetId: this.sheet_id, //1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
            range: range,
        }, function(err, response) {
            if (err) {
                throw err;
            }

            let res = [];
            var rows = response.values;
            if (rows.length === 0) {
                callback([])
            } else {
                ths.arr2json(rows, function(json) {
                    callback(json)
                })
            }
        });
    }



    arr2json(array, cb) {

        let json = []
        let head = array[0];

        for (let i = 1; i < array.length; i++) {

            let row = array[i];
            let fields = []

            for (let i = 0; i < row.length; i++) {
                fields.push(row[i])
            }


            let obj = {}
            for (let i = 0; i < head.length; i++) {
                obj[head[i]] = fields[i]
            }

            json.push(obj)

        }

        cb(json)

    }

}