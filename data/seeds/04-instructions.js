
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'Mix flour and milk together', recipe_id: 1, step_id: 1, prep_time: '30 seconds'},
        {name: 'Melt butter and stir into mixture', recipe_id: 1, step_id: 2, prep_time: '2 minutes'},
        {name: 'Add chocolate chips', recipe_id: 1, step_id: 3, prep_time: '30 seconds'},
        {name: 'Place on cookie sheet, bake for 18 min at 350 degrees', recipe_id: 1, step_id: 4, prep_time: '18 min'},
      ]);
    });
};
