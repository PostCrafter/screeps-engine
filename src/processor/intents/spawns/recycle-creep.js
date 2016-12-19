var _ = require('lodash'),
    utils =  require('../../../utils'),
    driver = utils.getDriver(),
    C = driver.constants;

module.exports = function(object, intent, roomObjects, roomTerrain, bulk, bulkUsers, roomController, stats, gameTime) {

    if(object.type != 'spawn') {
        return;
    }

    var target = roomObjects[intent.id];
    if(!target || target.type != 'creep' || target.user != object.user || target.spawning) {
        return;
    }
    if(Math.abs(target.x - object.x) > C.RANGE_RECYCLE_CREEP || Math.abs(target.y - object.y) > C.RANGE_RECYCLE_CREEP) {
        return;
    }

    require('../creeps/_die')(target, roomObjects, bulk, undefined, 1.0);
};