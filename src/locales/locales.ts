import English from './translations/en.json';
import Hungarian from './translations/hu.json';

const languages = ['en', 'hu'];

const translations = {
    [languages[0]]: English,
    [languages[1]]: Hungarian
};

export default translations;