import { postData } from '../src/client/js/postHandler'

test('null argument is an error', () => {
    return expect(postData()).rejects.toMatch('URL is missing');
});