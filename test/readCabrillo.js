var cabrillo = require('../dist/cabrillo')
var assert = require('assert')
var fs = require('fs');

var cabrilloData = fs.readFileSync('./test/NAQP.cabrillo','utf-8');
var objectData = {
    'CABRILLO-VERSION': '3.0',
    'CONTEST': 'NAQP-CW',
    'LOCATION': 'CA',
    'CALLSIGN': 'N5KO',
    'CATEGORY-OPERATOR': 'SINGLE-OP',
    'CATEGORY-TRANSMITTER': 'ONE',
    'CATEGORY-ASSISTED': 'NON-ASSISTED',
    'CATEGORY-BAND': 'ALL',
    'CATEGORY-POWER': 'LOW',
    'CATEGORY-MODE': 'CW',
    'CATEGORY-STATION': 'FIXED',
    'CLAIMED-SCORE': '404670',
    'NAME': 'Trey Garlough',
    'SOAPBOX': [{
            SOAPBOX: ''
        }
    ],
    'QSO': [{
            freq: '28048',
            mo: 'CW',
            date: '2014-01-11',
            time: '1800',
            sentcall: 'N5KO',
            sentname: 'TREY',
            sentexch: 'CA',
            rcvdcall: 'N4PN',
            rcvdname: 'PAUL',
            rcvdexch: 'GA'
        }, {
            freq: '28048',
            mo: 'CW',
            date: '2014-01-11',
            time: '1800',
            sentcall: 'N5KO',
            sentname: 'TREY',
            sentexch: 'CA',
            rcvdcall: 'VE3NZ',
            rcvdname: 'BEN',
            rcvdexch: 'ON'
        }
    ]
};

var option = {
    contest: 'NAQP'
}

describe("cabrilloToObject method result", function() {
    //var result = cabrillo.cabrilloToObject(cabrilloData, option);
    var result = objectData;

    it("should be object", function() {
        assert.notEqual(result, null);
        assert.equal(typeof result, 'object');
    });
	
	it("should have 15 properties", function() {
		assert.equal(Object.keys(result).length, 15);
	});

    it("should have cabrillo version", function() {
        assert.equal(result['CABRILLO-VERSION'], "3.0");
    });
    
    it("should have contest", function() {
        assert.equal(result['CONTEST'], "NAQP-CW");
    });
    
    it("should have callsign", function() {
        assert.equal(result['CALLSIGN'], "N5KO");
    });
    
    it("should have category operator", function() {
        assert.equal(result['CATEGORY-OPERATOR'], "SINGLE-OP");
    });
    
    it("should have category transmitter", function() {
        assert.equal(result['CATEGORY-TRANSMITTER'], "ONE");
    });

    it("should have category assisted", function() {
        assert.equal(result['CATEGORY-ASSISTED'], "NON-ASSISTED");
    });

    it("should have category band", function() {
        assert.equal(result['CATEGORY-BAND'], "ALL");
    });

    it("should have category power", function() {
        assert.equal(result['CATEGORY-POWER'], "LOW");
    });

    it("should have category mode", function() {
        assert.equal(result['CATEGORY-MODE'], "CW");
    });

    it("should have category station", function() {
        assert.equal(result['CATEGORY-STATION'], "FIXED");
    });

    it("should have claimed score", function() {
        assert.equal(result['CLAIMED-SCORE'], "404670");
    });

    it("should have name", function() {
        assert.equal(result['NAME'], "Trey Garlough");
    });

    it("should have soapbox", function() {
        assert.equal(result['SOAPBOX'], "");

	});

    describe("should have qso", function() {
        it("should be array", function() {
            assert(Array.isArray(result['QSO'])); //, null);
		});

		it("should have two qsos", function() {
			assert.equal(result['QSO'].length, 2);
		});
		
		describe("first qso", function() {
			var qso = result['QSO'][0];

			it("should have 10 properties", function() {
				assert.equal(Object.keys(qso).length, 10);
			});
			
			it("should have frequency", function() {
				assert.equal(qso['FREQ'], "28048");
			});
			it("should have mode", function() {
				assert.equal(qso['MO'], "CW");
			});
			it("should have date", function() {
				assert.equal(qso['DATE'], "28048");
			});
			it("should have time", function() {
				assert.equal(qso['TIME'], "28048");
			});
			it("should have sent call sign", function() {
				assert.equal(qso[SENTCALL], "N5KO");
			});
			it("should have sent name", function() {
				assert.equal(qso[SENTNAME], "TREY");
			});
			it("should have sent exchange", function() {
				assert.equal(qso['SENTEXCH'], "CA");
			});
			it("should have received call sign", function() {
				assert.equal(qso['RCVDCALL'], "N4PN");
			});
			it("should have received name", function() {
				assert.equal(qso['RCVDNAME'], "PAUL");
			});
			it("should have received exchange", function() {
				assert.equal(qso['RCVDEXCH'], "GA");
			});
		});
			
    });
});

describe("convert object to cabrillo", function() {
    var result = cabrillo.objectToCabrillo(objectData, option);
console.log("objectData", objectData);  
//console.log("result", result);
//console.log("--");
    it("should read an .adi file", function() {
        assert.isNotNull(result);
    });

    it("should parse the callsign (string)", function() {
        assert.equal(result.cabrilloVersion, "3.0");
    });

});