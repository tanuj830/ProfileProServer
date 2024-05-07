const mongoose = require("mongoose");

const resume = mongoose.Schema({
  contact: {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postalcode: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  education: [
    {
      year: {
        type: String,
      },
      degree: {
        type: String,
      },
      school: {
        type: String,
      },
      grade: {
        type: String,
      },
    },
  ],
  experience: [
    {
      title: {
        type: String,
      },
      employer: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      city: {
        type: String,
      },
      disp: {
        type: String,
      },
    },
  ],
  project: [
    {
      title: {
        type: String,
      },
      skills: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      disp: {
        type: String,
      },
    },
  ],
  userEmail: {
    type: String,
    // required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("resume", resume);
