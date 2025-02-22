const Worker_schema = require('../../Schema/WorkerList/WorkerList'); // Ensure this path is correct

const Worker_controller = {
    index: async (req, res) => {
        try {
            const worker_list = await Worker_schema.find();
            if (!worker_list || worker_list.length === 0) {
                return res.status(404).json({ msg: 'No worker list found' });
            }
            return res.status(200).json(worker_list);
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const { id, name, phone, location, department, status, condition, time, reason } = req.body;
            if (!id || !name || !phone || !location || !department || !status || !condition || !time || !reason) {
                return res.status(400).json({ msg: 'All fields are required' });
            }

            const worker_store = await Worker_schema.create({
                id,
                name,
                phone,
                location,
                department,
                status,
                condition,
                time,
                reason,
                profilePicture: req.file ? req.file.path : null, // Save the file path if uploaded
            });

            return res.status(201).json(worker_store);
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    },

    show: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid Worker ID' });
            }
            const worker = await Worker_schema.findById(id);
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
            }
            const update = await Worker_schema.findByIdAndUpdate(id, req.body, { new: true });
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
            }
            const worker_delete = await Worker_schema.findByIdAndDelete(id);
            if (!worker_delete) {
                return res.status(404).json({ msg: 'Worker not found' });
            }
            return res.status(200).json({ msg: 'Worker deleted successfully' });
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error', error: error.message });
        }
    },
};

module.exports = Worker_controller;