export default {
  query,
  get,
};

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return Promise.resolve(entities);
}

function get(entityType, entityCode) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity.code === entityCode)
  );
}
// function post(entityType, newEntity) {
//     newEntity._id = _makeId()
//     return query(entityType)
//         .then(entities => {
//             entities.push(newEntity);
//             _save(entityType, entities)
//             return newEntity;
//         })
// }

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
