import mongoose from "mongoose";

export const getCareers = async (req, res) => {


    try {

        const AllCareers = await careers.find();

        res.status(200).json({ msg: "found All careers", AllCareers })
    }

    catch (error) {
        res.status(500).json(error.message)
    }

}


