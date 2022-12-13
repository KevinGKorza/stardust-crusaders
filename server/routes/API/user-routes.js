const router = require('express').Router();
const {
    login,
    createUser,
    saveGame,
    deleteGame,
} = requite('../../controllers/user-controller');


//importing middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').options(createUser).put(authMiddleware, saveGame);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/games/:gameId').delete(authMiddleware, deleteGame);

module.export = router; 