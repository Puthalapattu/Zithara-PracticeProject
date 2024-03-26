const Events = require("../models/EvenSchema");

// ---------------------------- CREATE EVENT ---------------------------

const createEvent = async (req, res) => {
    try {
        let newEvent = await Events.find({ eventId: req.body.eventId });
        if(newEvent) {
            res.status(200).send(`Event already exists`);
        } else {
            await Events.create()
        }
    }
}

// ---------------------