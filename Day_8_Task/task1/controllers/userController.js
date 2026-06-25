export const getParams = (req, res) => {

    res.status(200).json({
        data: req.params
    });

};

export const getQuery = (req, res) => {

    res.status(200).json({
        data: req.query
    });

};

export const getHeaders = (req, res) => {

    res.status(200).json({
        data: req.headers
    });

};

export const getBody = (req, res) => {

    res.status(200).json({
        data: req.body
    });

};