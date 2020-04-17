
exports.seed = function(knex, Promise) {
  return knex('quantity_type').insert([
    { Qty_Type: 'lb' },
    { Qty_Type: 'oz' },
    { Qty_Type: 'cups' },
    { Qty_Type: 'each of' },
    { Qty_Type: 'slice of' }
  ]);
};
