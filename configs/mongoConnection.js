const {connect} = require('mongoose');

const mongoConnection = () => {
    return connect(process.env.MONGO_URL)
};

module.exports = {mongoConnection}