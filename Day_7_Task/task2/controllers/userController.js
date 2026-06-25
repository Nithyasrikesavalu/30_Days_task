export const addUser = async (req, res) => {

    console.log(req);

    res.status(200).json({
        msg: "User Added Successfully"
    });

}