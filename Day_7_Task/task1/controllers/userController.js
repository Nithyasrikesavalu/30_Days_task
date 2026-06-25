export const addUser = async (req, res) => {

    const { name } = req.body;

    if (name) {
        res.status(200).json({
            msg: "User Added Successfully"
        });
    } else {
        res.status(400).json({
            msg: "User Name Required"
        });
    }

};

export const addCourse = async (req, res) => {

    const { courseName } = req.body;

    if (courseName) {
        res.status(200).json({
            msg: "Course Added Successfully"
        });
    } else {
        res.status(400).json({
            msg: "Course Name Required"
        });
    }

};

export const addEmployee = async (req, res) => {

    const { employeeName } = req.body;

    if (employeeName) {
        res.status(200).json({
            msg: "Employee Added Successfully"
        });
    } else {
        res.status(400).json({
            msg: "Employee Name Required"
        });
    }

};