var dummyData = require('./dummyData.json');
var sampleRespData = require('./respData.json');
var parse = require('../parser/parser').parse;
var mapBuilder = require('../mapBuilder/mapBuilder');

//let parser = ParserFactory.createParser(sampleRespData.content.result, dummyData);
//parser.exportToFile();
////let parser = ParserFactory._genParser(template);
var callback = function (result) {
    console.log(result);
};
//parser.parse(sampleRespData.content.result, callback);
parse(sampleRespData, mapBuilder.build(), callback);