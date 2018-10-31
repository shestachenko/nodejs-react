import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import * as storageService from '../services/storage.service';
import { UserModel } from '../models/User.model';

export const getCurrentUser = (req: Request, res: Response) => {
    storageService.getUserById(req.session.user.id)
        .then((user: UserModel) => res.status(200).json(user))
        .catch((error: Error) => res.status(422).json({error}));
};

export const updateCurrentUser = (req: Request, res: Response) => {
    const errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({errors});
    }

    storageService.updateUser(req.body);

    return res.status(200).json(req.session.user);
};

export const validate = (req: Request, res: Response) => {
    const errors = userService.validateUser(req);

    if (errors) {
        return res.status(200).json({errors});
    }

    return res.status(200).end();
};