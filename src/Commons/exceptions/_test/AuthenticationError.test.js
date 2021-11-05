const { AuthenticationError } = require('../AuthenticationError');

describe('AuthenticationError', () => {
  it('should create AuthenticationError correctly', () => {
    const errorMessage = 'authentication error!';
    const authenticationError = new AuthenticationError(errorMessage);

    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual(errorMessage);
    expect(authenticationError.name).toEqual('AuthenticationError');
  });
});
