const Worker_set_schema = require('../../Schema/WorkerSet/WorkerSet');
const mongoose = require('mongoose');

const worker_set_controller = {
    index: async (req, res) => {
        try {
            const workers = await Worker_set_schema.find();
            res.json(workers);
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    },
    store: async (req, res) => {
        try {
            const { id, name, phone, location, department, condition, startDate, endDate, reason,leader_approval } = req.body;
            const image = req.file ? req.file.path : 
            "https://res.cloudinary.com/dfao1qztg/image/upload/v123456789/default-image.png"; 

            if (!id || !name || !phone || !location || !department || !condition || !endDate || !startDate || !reason) {
                return res.status(400).json({ msg: 'All fields are required' });
            }

            if ( leader_approval === "AM24" || leader_approval === "AG187" 
                || leader_approval === "AG94" || leader_approval === "AM43"
                || leader_approval === "AG209" || leader_approval === "64")

                { 
                    return res.status(400).json({ msg: 'Invalid leader approval' }); 
                };

            const newWorker = await Worker_set_schema.create({
                id,
                name,
                phone,
                location,
                department,
                condition,
                startDate,
                endDate,
                reason,
                image,
                leader_approval
            });
            res.status(201).json({ msg: 'Worker created', newWorker });
        } catch (error) {
            res.status(500).json({ msg: 'Error add worker', error: error.message });
        }
    },
    show: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid Worker ID' });
            }
            const worker = await Worker_set_schema.findById(id);
            if (!worker) {
                return res.status(404).json({ msg: 'Worker not found' });
            }
            return res.status(200).json(worker);
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid Worker ID' });
            };
            const update = await Worker_set_schema.findByIdAndUpdate(id, req.body
            , { new: true });
            if (!update) {
                return res.status(404).json({ msg: 'Worker not found' });
            }
            return res.status(200).json(update);
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    },
    destroy: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid Worker ID' });
            };
            const worker = await Worker_set_schema.findByIdAndDelete(id);
            if (!worker) {
                return res.status(404).json({ msg: 'Worker not found' });
            };
            return res.status(200).json({ msg: 'Worker deleted', worker });
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    }
}

module.exports = worker_set_controller;