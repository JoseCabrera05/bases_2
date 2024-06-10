(function () {
    'use strict';

    module.exports = {
        createUser: createUser,
        fetchUsers: fetchUsers,
        fetchUserById: fetchUserById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        addField: addField
    };

    var UserModel = require('./user.module')().UserModel;
    async function createUser(user) {
        return UserModel.create(user);
    }

     function addField(user){
        //Nueva funcion para la agregacion de edad, se tomo como base las demas funciones sin embargo no se logro acceder a la funcion a travez del POST
        console.log('llega a  addField');
        let user_model = UserModel.create(user);
        UserModel.aggregate([
            {
                $addFields:{
                    edad:  { $add: ['$edad', 1] },
                }
            }
        ])
    }

    function fetchUsers() {
        console.log('fetch usrers')
        return UserModel.find({})
            .exec();
    }

    function fetchUserById(userId) {
        return UserModel.findById(userId)
            .exec();
    }

    function updateUser(userId, user) {
        return UserModel
            .findByIdAndUpdate(userId, user, {new: true})
            .exec();
    }

    function deleteUser(userId) {
        return UserModel
            .findByIdAndRemove(userId)
            .exec();
    }
})();
