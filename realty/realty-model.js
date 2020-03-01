const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

async function add(image) {
    const [id] = await db('image').insert(image, 'id');
    return findById(id);
}

function find() {
    return db('image').select('id', 'image')
}

function findBy(filter) {
    return db('image').where(filter)
}

function findById(id) {
    return db('image')
        .where({id})
        .first();
}