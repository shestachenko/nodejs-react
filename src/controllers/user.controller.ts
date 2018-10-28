import { Request, Response } from 'express';

export const getCurrentUser = (req: Request, res: Response) => {
    return res.status(200).json(req.session.user);
};

export const updateCurrentUser = (req: Request, res: Response) => {
    req.assert('name', 'Name is invalid').isLength({min: 1});
    req.assert('gender', 'Gender is invalid').isIn(['male', 'female']);
    req.assert('email', 'Email is invalid').isEmail();
    req.assert('balance', 'Balance invalid').isInt();

    const errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({errors});
    }

    req.session.user = {...req.session.user, ...req.body};

    return res.status(200).json(req.session.user);
};