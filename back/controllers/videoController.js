const { Video } = require('../models/models');
const ApiError = require('../error/ApiError');


class VideoController {
    async create(req, res, next) {
        try {
            const { title, url  } = req.body;
            const data = await Video.create({ title, url });
            return res.json(data);
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        const data = await Video.findAll();
        return res.json(data);
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Video.destroy({ where: { id } });
            if (deleted) {
                return res.json({ message: 'Deleted successfully' });
            }
            throw new Error('Video not found');
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new VideoController();
