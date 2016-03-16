import test from 'ava';
import fn from './';

test('Must check if we can animate this property or not', t => {
    t.is(fn('transform'), true);
    t.is(fn('-webkit-transform'), true);
    t.is(fn('-xkit-transform'), false);
});
