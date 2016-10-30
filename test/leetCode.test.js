import {expect} from 'chai'
import findNb from '../src/buildAPileOfCubes.js'
import songDecoder from '../src/songDecoder.js'
import toWeirdCase from '../src/toWeirdCase.js'
import humanReadable from '../src/humanReadable.js'

describe('finNb 函数测试', () => {
  it('寻找符合 n ^ 3 + (n - 1) ^ 3 + ... + 1 ^ 3 === m 的数字 n', () => {
    expect(findNb(1071225)).to.be.equal(45)
  })
})

describe('songDecoder 函数测试', () => {
  it('WUB replaced by a space', () => {
    expect(songDecoder('AWUBBWUBC')).to.be.equal('A B C')
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).to.be.equal('A B C')
    expect(songDecoder('WUBAWUBBWUBCWUB')).to.be.equal('A B C')
  })
})

describe('toWeirdCase 函数测试', () => {
  it('should return the correct value for a single word or multiple words', () => {
    expect(toWeirdCase('This')).to.be.equal('ThIs')
    expect(toWeirdCase('This is a test')).to.be.equal('ThIs Is A TeSt')
  })
})

describe('humanReadable 函数测试', () => {
  it('should format correctly', () => {
    expect(humanReadable(0)).to.be.equal('00:00:00')
    expect(humanReadable(5)).to.be.equal('00:00:05')
    expect(humanReadable(60)).to.be.equal('00:01:00')
    expect(humanReadable(86399)).to.be.equal('23:59:59')
    expect(humanReadable(359999)).to.be.equal('99:59:59')
  })
})
