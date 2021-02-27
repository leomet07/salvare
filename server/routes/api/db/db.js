const router = require("express").Router();
const Occurrence = require("../../../model/Occurrence");
router.get("/get_occurrences", async (req, res) => {
	const occurrences = await Occurrence.find(req.body || {});
	res.json(occurrences);
});
router.post("/create_occurrences", async (req, res) => {
	try {
		const neo_reference_id = req.body.neo_reference_id;
		// Needs to be unique for every neo_reference_id
		const isExisting = await Occurrence.find({
			neo_reference_id: neo_reference_id,
		});
		let schema;

		if (isExisting.length > 0) {
			schema = await Occurrence.findOneAndUpdate(
				{ neo_reference_id: neo_reference_id },
				req.body,
				{
					upsert: true,
				}
			);
		} else {
			schema = await Occurrence.create(req.body);
		}

		const occurrence_saved = await schema.save();
		res.json({ created: true, occurrence_saved: occurrence_saved });
	} catch (err) {
		console.log(err);
		res.statusCode(500).send({ message: "error" });
	}
});
module.exports = router;
