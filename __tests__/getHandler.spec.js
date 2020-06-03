import { getHandler } from '../src/client/js/getHandler'

test('null argument is an error', () => {
    return expect(getHandler()).rejects.toMatch('URL is missing');
});