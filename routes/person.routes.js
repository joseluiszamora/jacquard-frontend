const express = require('express');
const router = express.Router();

const { check } = require('express-validator')
const { validateFields } = require('../middleware/validate-fields');
const { verifyEmailCode } = require('../helpers/validators/email-code-validators');
const { personExists } = require('../helpers/validators/person-validators');

const { validateJWT } = require('../middleware/validate-jwt');

const {  store, generateRestorePasswordCode, changePassword, changePasswordWithToken, me, hasActiveCard } = require('../controllers/person.controller');

router.post('/', [
    check('document_type', 'El tipo de documento es obligatorio').notEmpty(),
    check('document_type', 'El tipo de documento es invalido').isIn(['CI', 'DOC_EXTRANJERO']),
    check('dni', 'El documento de identidad es obligatorio').notEmpty(),
    check('first_name', 'El nombre es obligatorio').notEmpty(),
    check('last_name', 'El apellido es obligatorio').notEmpty(),
    check('birthday', 'La fecha de nacimiento es obligatorio').notEmpty(),
    check('birthday', 'La fecha no es valida').isDate('yyyy-MM-dd'),
    check('cellphone', 'El número de celular es obligatorio').notEmpty(),
    check('gender', 'El género es obligatorio').notEmpty(),
    check('gender', 'El género es obligatorio').isIn(['M', 'F']),
    check('fk_nationality', 'La nacionalidad es obligatorio').notEmpty(),
    check('password', 'La contraseña es obligatorio').notEmpty(),
    check('email', 'El correo es obligatorio').notEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('code', 'El código de verificación es obligatorio').notEmpty(),
    check('code', 'El código no es válido').isNumeric().bail().custom((code, { req }) => verifyEmailCode(code, req.body.email)),
    check('dni').custom(personExists),
    validateFields
], store);

router.post('/generate-restore-password-code',[
    check('dni', 'El documento es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('birthday', 'La fecha de nacimiento es obligatorio').notEmpty(),
    check('birthday', 'La fecha de nacimiento no es válida').isDate("yyyy-MM-dd"),
    validateFields
],
generateRestorePasswordCode);

router.post('/change-password',[
    check('dni', 'El documento es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('birthday', 'La fecha de nacimiento es obligatorio').notEmpty(),
    check('birthday', 'La fecha de nacimiento no es válida').isDate("yyyy-MM-dd"),
    check('code', 'El código es obligatorio').notEmpty(),
    check('code', 'El código no es válido').isNumeric(),
    check('password', 'La contraseña es obligatorio').notEmpty(),
    validateFields
],
changePassword);

router.post('/change-password-with-token', [
    validateJWT,
    check('currentPassword', 'El password actual es obligatorio').notEmpty(),
    check('newPassword', 'El password nuevo es obligatorio').notEmpty(),
    validateFields
], changePasswordWithToken);

router.get('/has-active-card/:id', hasActiveCard);

router.get('/me', validateJWT, me);

module.exports = router