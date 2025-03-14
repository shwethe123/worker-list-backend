const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Worker_set_schema = new schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/,
    },
    location: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: [
        "Normal",
        "ဝန်ထမ်းသစ်",
        "အလုပ်နောက်ကျ",
        "ခွင့်တစ်ပိုင်း",
        "ခွင့်တစ်ရက်",
        "ခွင့်ရက်ရှည်",
        "ခွင့်မဲ့",
        "ဖိုင်းအပြစ်ပေး",
        "အလုပ်ထွက်မည့်သူ",
        "အလုပ်ထွက်သူ",
        "ကြိုတင်ခွင့်တိုင်သူ",
      ],
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    reason: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://res.cloudinary.com/dfao1qztg/image/upload/v123456789/default-profile.png",
    },
    leader_approval: {
        type: String,
    },
    status: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkerSet", Worker_set_schema);