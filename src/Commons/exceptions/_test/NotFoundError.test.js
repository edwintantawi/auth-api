const { NotFoundError } = require('../NotFoundError');

describe('NotFoundError', () => {
  it('should create NotFoundError correctly', () => {
    const errorMessage = 'not found!';
    const notFoundError = new NotFoundError(errorMessage);

    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.message).toEqual(errorMessage);
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
