var casper = require('casper').create({
    verbose: false,
    logLevel: "debug"
});
var i=0;
var no = "";
var text = 'Redas Peskaitis ';
casper.start('http://www.md5.cz').repeat(100, function(){
    if (i < 10){
        no = "0" + i.toString();
    } else {
        no = i.toString();
    }
    console.log("\n" + text + no)
    this.fill('form#frm', { what: text + no }, true);
    this.waitForSelector('input#checksum', function() {
        this.capture('md5.cz.' + no + '.png');
        this.echo('md5.cz.' + no + '.png captured.');
        i++;
    });
});
casper.run(); 

