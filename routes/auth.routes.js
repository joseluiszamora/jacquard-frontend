const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const { signIn, getUserInfo } = require('../controllers/auth.controller');
const { validateFields } = require('../middleware/validate-fields');
const { validateJWT } = require('../middleware/validate-jwt');

router.post('/sign-in',[
    check('username', 'Nombre de Usuario obligatorio').notEmpty(),
    check('password', 'Password es obligatorio').notEmpty(),
    validateFields
], signIn);

router.get('/get-user-info', validateJWT, getUserInfo);

module.exports = router