var expect = require('chai').expect
  , moment = global.moment = require('moment')
  , mo = require('./')

describe('mo', function() {
  
  it('should create date', function() {
    expect(mo('1-30-1970').toString()).to.equal('Fri Jan 30 1970 00:00:00 GMT+0000')
  })

  it('should format to specific format', function() {
    expect(mo.format('Do MMM YY')('1-30-1970')).to.equal('30th Jan 70')
  })

  it('should format to iso by default', function() {
    expect(mo.format()('1-30-1970')).to.equal('1970-01-30T00:00:00+00:00')
  })
  
  it('should format to simple iso by default', function() {
    expect(mo.iso('1-30-1970')).to.equal('1970-01-30')
  })

})