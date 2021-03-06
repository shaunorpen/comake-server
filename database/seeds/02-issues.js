exports.seed = function(knex) {
  return knex("issues").insert([
    {
      description: "Pothole in road",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 1,
      imgURL:
        "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
    {
      description: "Broken sign",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 1,
      imgURL:
        "https://images.unsplash.com/photo-1558882424-680ab6c3b31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
    {
      description: "Fallen tree",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 1,
      imgURL:
        "https://images.unsplash.com/photo-1517660029921-0cbea2f15f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
    {
      description: "Broken manhole cover",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 3,
      imgURL:
        "https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80"
    },
    {
      description: "Overgrown path",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 3,
      imgURL:
        "https://images.unsplash.com/photo-1465765639406-044153778532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
    {
      description: "Flytipped rubbish",
      latitude: 51.969356,
      longitude: 1.100908,
      user_id: 3,
      imgURL:
        "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80"
    }
  ]);
};
