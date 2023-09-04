import { URL } from 'url';

const getDirname = () => new URL('.', import.meta.url).pathname;
const getFilename = () => new URL('', import.meta.url).pathname;

export default {
    get __dirname() {
        return getDirname();
    },
    get __filename() {
        return getFilename();
    }
}
