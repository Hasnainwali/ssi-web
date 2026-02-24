import mongoose from "mongoose";

export const getCourses = async (req, res) => {


    try {

        const AllCourses = await courses.find();

        res.status(200).json({ msg: "found All courses", AllCourses })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}


