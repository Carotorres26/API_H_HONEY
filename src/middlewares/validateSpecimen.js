export const validateSpecimen = (req, res, next) => {
    const { name, birthDate, paso, color, owner, cedula, email } = req.body.specimen;

    if (!name || !birthDate || !paso || !color || !owner || !cedula || !email) {
        return res.status(400).json({ msg: 'All specimen fields are required' });
    }

    if (cedula.length < 10) {
        return res.status(400).json({ msg: 'Cedula must be at least 10 characters' });
    }

    next();
};
