const { InvariantError } = require('../InvariantError');

describe('InvariantError', () => {
  it('should create an error correctly', () => {
    const errorMessage = 'an error occurs';
    const invariantError = new InvariantError(errorMessage);

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual(errorMessage);
    expect(invariantError.name).toEqual('InvariantError');
  });
});
