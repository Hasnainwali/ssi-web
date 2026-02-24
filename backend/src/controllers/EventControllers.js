import mongoose from "mongoose";

export const getEvents = async (req, res) => {


    try {

        const AllEvents = await events.find();

        res.status(200).json({ msg: "found All courses", AllEvents })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}





