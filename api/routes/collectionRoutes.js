'use strict';
module.exports = function(app) {
  const collectionList = require('../controllers/collectionController');

  app.route('/collection/:locale/:page/:limit')
    .get(collectionList.list_all_collectibles)
    .post(collectionList.create_a_collectible);

  app.route('/collection/:collectionId')
    .get(collectionList.get_a_collectible)
    .put(collectionList.update_a_collectible)
    .delete(collectionList.delete_a_collectible);
};
