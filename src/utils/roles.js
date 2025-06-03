export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
  CLIENT: 'client'
};

export const Access = {
  ADMIN_ONLY: [Roles.ADMIN],
  ADMIN_AND_USER: [Roles.ADMIN, Roles.USER],
  ALL_USERS: [Roles.ADMIN, Roles.USER, Roles.CLIENT]
};
