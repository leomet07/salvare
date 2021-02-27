const mongoose = require("mongoose");
require("mongoose-type-url");

const OccurrenceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	nasa_jpl_url: {
		type: mongoose.SchemaTypes.Url,
		required: true,
	},
	neo_reference_id: {
		type: Number,
		min: 9999999,
		max: 99999999,
		required: true,
	},
	is_potentially_hazardous_asteroid: {
		type: Boolean,
		required: true,
	},
	close_approach_data: [
		{
			close_approach_date: String,
			close_approach_date_full: String,
			epoch_date_close_approach: Number,
			relative_velocity: {
				kilometers_per_second: String, // Strings used for Dates and long decimals
				kilometers_per_hour: String,
				miles_per_hour: String,
			},
			miss_distance: {
				astronomical: String,
				lunar: String,
				kilometers: String,
				miles: String,
			},
			orbiting_body: String,
		},
	],
	graph_ss_url: { type: mongoose.SchemaTypes.Url },
});

const OccurrenceModel = mongoose.model("Occurrence", OccurrenceSchema);

module.exports = OccurrenceModel;
