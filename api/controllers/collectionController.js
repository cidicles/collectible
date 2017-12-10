'use strict';

const mongoose = require('mongoose'),
  Collectible = mongoose.model('Collectible'),
  paginate = require('mongoose-pagination');

/**
 * @api {get} /collection/:locale/:page/:limit Get a paginated list of all collectibles
 * @apiName List All Collectibles
 * @apiGroup Collectibles
 *
 * @apiParam {String} locale The sites current locale.
 * @apiParam {Int} page The current page.
 * @apiParam {Int} limit The amount to return.
 *
 */
exports.list_all_collectibles = function(req, res) {
  Collectible.find({}).
  where('locale').equals(req.params.locale).
  paginate(parseInt(req.params.page), parseInt(req.params.limit), function(err, collectibles, total) {
    if (err) {
      res.send(err);
    }
    res.json({
      "collectibles": collectibles,
      "total": total
    });
  });
};

/**
 * @api {post} /collection Create a new collectible
 * @apiName Create a Collectible
 * @apiGroup Collectibles
 *
 * @apiParam {String} name Name of the collectible.
 * @apiParam {String} locale Locale of the collectible.
 *
 */
exports.create_a_collectible = function(req, res) {
  var new_collectible = new Collectible(req.body);
  new_collectible.save(function(err, collectible) {
    if (err) {
      res.send(err);
    }
    res.json(collectible);
  });
};

/**
 * @api {get} /collection/:collectionId Get a collectible
 * @apiName Get a Collectible
 * @apiGroup Collectibles
 *
 * @apiParam {String} collectionId Id of the collectible.
 *
 */
exports.get_a_collectible = function(req, res) {
  Collectible.findById(req.params.collectionId, function(err, collectible) {
    if (err) {
      res.send(err);
    }
    res.json(collectible);
  });
};

/**
 * @api {put} /collection/:collectionId Update a collectible
 * @apiName Update a Collectible
 * @apiGroup Collectibles
 *
 * @apiParam {String} collectionId Id of the collectible.
 *
 */
exports.update_a_collectible = function(req, res) {
  Collectible.findOneAndUpdate({_id: req.params.collectionId}, req.body, {new: true}, function(err, collectible) {
    if (err) {
      res.send(err);
    }
    res.json(collectible);
  });
};

/**
 * @api {delete} /collection/:collectionId Delete a collectible
 * @apiName Delete a Collectible
 * @apiGroup Collectibles
 *
 * @apiParam {String} collectionId Id of the collectible.
 *
 */
exports.delete_a_collectible = function(req, res) {
  Collectible.remove({
    _id: req.params.collectionId
  }, function(err, collectible) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Collectible successfully deleted' });
  });
};
