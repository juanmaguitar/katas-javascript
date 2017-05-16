describe('function checkISBN ', function () {
  it('should exist', function () {
    expect(checkISBN).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof checkISBN).toBe('function')
  })
  it('should receives an argument', function () {
    var result = checkISBN
    expect(result()).toBe(false)
  })
  it('should return a boolean', function () {
    expect(typeof checkISBN('8')).toBe('boolean')
  })
  describe('should return FALSE if string received ', function () {
    it('doesnt contain numbers (ex: "skylab")', function () {
      var isbnString = 'skylab'
      var result = checkISBN(isbnString)
      expect(result).toBe(false)
    })
    it('doesnt contain 10 numbers (ex: "0123456")', function () {
      var isbnString = '0123456'
      var result = checkISBN(isbnString)
      expect(result).toBe(false)
    })
    it('does contain 10 numbers (ex: "51 2315 6385") but the control digit is not right', function () {
      var isbnString = '51 2315 6385'
      var result = checkISBN(isbnString)
      expect(result).toBe(false)
    })
    it('does contain 10 numbers but using accepted separators (ex: "21-2645-6781")', function () {
      var isbnString = '21.2645.6781'
      var result = checkISBN(isbnString)
      expect(result).toBe(false)
    })
  })
  describe('should return TRUE if string is a valid ISBN number (control digit as last one)', function () {
    it('w/ 10 numbers (ex: "0123456789")', function () {
      var isbnString = '0123456789'
      var result = checkISBN(isbnString)
      expect(result).toBe(true)
    })
    it('w/ 10 numbers separated by hyphens (ex: "21-2645-6781")', function () {
      var isbnString = '21-2645-6781'
      var result = checkISBN(isbnString)
      expect(result).toBe(true)
    })
    it('w/ 10 numbers separated by spaces (ex: "51 2315 6380")', function () {
      var isbnString = '51 2315 6380'
      var result = checkISBN(isbnString)
      expect(result).toBe(true)
    })
    it('w/ X as last digit (ex: "123456789X")', function () {
      var isbnString = '123456789X'
      var result = checkISBN(isbnString)
      expect(result).toBe(true)
    })
  })
})
