import mongoose from "mongoose";

export const getResults = async (req, res) => {


    try {

        const AllResults = await results.find();

        res.status(200).json({ msg: "found All results", AllResults })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}





