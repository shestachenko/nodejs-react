import { Request } from 'express';
import { Dictionary, MappedError } from 'express-validator/shared-typings';

export const validateUser = (req: Request): Dictionary<MappedError> | MappedError[] => {
    req.assert('first_name', 'First Name is invalid').isLength({min: 1});
    req.assert('last_name', 'Last Name is invalid').isLength({min: 1});
    req.assert('email', 'Email is invalid').isEmail();
    req.assert('balance', 'Balance invalid').isInt();

    req.sanitize('balance').toInt();

    return req.validationErrors();
};