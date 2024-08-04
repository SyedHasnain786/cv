const { ROLE, ROLE_SLUG, SUPER_ADMIN } = require('../../constants/constant');
const {} = require('bcrypt');
const User = require("../../schemas/user.schema");
const Role = require('../../schemas/role.schema');



module.exports.createAdmin = async function() {
    let getAdminRole = await Role.findOne({
        where: {
            slug: ROLE.SUPER_ADMIN
        },
        include: ['id', 'role', 'slug']
    });
    if(!getAdminRole) {
        const createRoleObj = {
            role: ROLE.SUPER_ADMIN,
            slug: ROLE_SLUG.SUPER_ADMIN,
        }
        getAdminRole = await Role.create(createRoleObj)
    }

    const checkSuperAdminExists = await User.count({
        where: {
            email: SUPER_ADMIN.EMAIL,
            roleId: getAdminRole.dataValues?.id
        },
        raw: true
    });
    if(!checkSuperAdminExists || !(checkSuperAdminExists[0]?.count)) {

        const createAdminObj= {
            firstName: SUPER_ADMIN.FIRST_NAME,
            lastName: SUPER_ADMIN.LAST_NAME,
            email: SUPER_ADMIN.EMAIL,
            password: '',
            phoneNumber: SUPER_ADMIN.PHONE_NUMBER,
            aboutMe: '',
            roleId: getAdminRole?.dataValues?.id
        };
        await User.create(createAdminObj);
    }
}