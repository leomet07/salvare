const router = require("express").Router();
const Occurrence = require("../../../model/Occurrence");
router.get("/get_occurrences", async (req, res) => {
	const occurrences = await Occurrence.find(req.body);
	res.json(occurrences);
});
router.post("/create_occurrences", async (req, res) => {
	// const schema = await Occurrence.create(req.body);
	const neo_reference_id = req.body.neo_reference_id;
	// Needs to be unique for every neo_reference_id
	const schema = await Occurrence.findOneAndUpdate(
		{ neo_reference_id: neo_reference_id },
		req.body,
		{
			upsert: true,
		}
	);
	const occurrence_saved = await schema.save();
	res.json(occurrence_saved);
});
module.exports = router;
