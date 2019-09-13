
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Butter'},
        {name: 'Flour'},
        {name: 'Milk'},
        {name: 'Chocolate Chips'},
        {name: 'Baking Powder'},
        {name: 'Shrimp'},
        {name: 'Sausage'},
        {name: 'Pesto'},
        {name: 'Pasta'},
        {name: 'Chicken Wings'},
        {name: 'Buffalo Sauce'}
      ]);
    });
};
