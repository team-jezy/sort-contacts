import sortContacts from '../src/sort-list.js';
const test = QUnit.test;

const cantu = {
    'balance': 2559.99,
    'age': 28,
    'firstName': 'Cantu',
    'lastName': 'Sullivan',
    'company': 'IDETICA',
    'email': 'cantu.sullivan@idetica.com',
    'phone': '+1 (970) 454-3315',
    'favoriteFruit': 'banana'
};
const george = {
    'balance': 1401.67,
    'age': 28,
    'firstName': 'George',
    'lastName': 'Nicholson',
    'company': 'MALATHION',
    'email': 'george.nicholson@malathion.com',
    'phone': '+1 (886) 564-2061',
    'favoriteFruit': 'strawberry'
};
const pruitt = {
    'balance': 2723.55,
    'age': 32,
    'firstName': 'Pruitt',
    'lastName': 'Montgomery',
    'company': 'MANGELICA',
    'email': 'pruitt.montgomery@mangelica.com',
    'phone': '+1 (813) 504-3749',
    'favoriteFruit': 'apple'
};

const contacts = [cantu, george, pruitt];

test('sort by first name', assert => {

    const sortOptions = {
        property: 'firstName',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sort by last name', assert => {

    const sortOptions = {
        property: 'lastName',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});

test('sort by age', assert => {

    const sortOptions = {
        property: 'age',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sort by age', assert => {

    const sortOptions = {
        property: 'phone',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});

test('sort by age, descending', assert => {

    const sortOptions = {
        property: 'firstName',
        direction: -1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});