new Vue({
  el: '#app',
  data: {
    selected_area: "",
    selected_pref : "",
    selected_prefs: [],
    areas : [
      "Pacific",
      "West Central",
      "Southwest",
      "Great Lakes",
      "Southeast",
      "Florida/Caribbean",
      "Mid-Atlantic",
      "New York/New Jersey",
      "New England"
    ],
    pref : [
      [
        "Washington",
        "Oregon",
        "Idaho",
        "Nevada",
        "California",
        "Alaska",
        "Hawaii"
      ],
      [
        "Montana",
        "Wyoming",
        "North Dakota",
        "South Dakota",
        "Nebraska",
        "Kansas",
        "Colorado",
        "Utah",
        "Iowa",
        "Missouri"
      ],
      [
        "Oklahoma",
        "Texas",
        "New Mexico",
        "Arizona"
      ],
      [
        "Minnesota",
        "Wisconsin",
        "Illinois",
        "Indiana",
        "Kentucky",
        "Ohio",
        "Michigan"
      ],
      [
        "Arkansas",
        "Louisiana",
        "Mississippi",
        "Alanama",
        "Georgia",
        "Tennessee",
        "North Carolina",
        "South Carolina"
      ],
      [
        "Florida"
      ],
      [
        "Virginia",
        "West Virginia",
        "Maryland",
        "Delaware",
        "Pennsylvania"
      ],
      [
        "New Jersey",
        "New York"
      ],
      [
        "Maine",
        "New Hampshire",
        "Vermont",
        "Massachusetts",
        "Connecticut",
        "Rhode Island"
      ]
    ]
  },
  methods : {
    _set_area : function(){
      if(this.selected_area !== ""){
        this.selected_pref = "";
        this.selected_prefs = this.pref[this.selected_area];
      }else{
        this.selected_prefs = [];
      }
    }
  }
});