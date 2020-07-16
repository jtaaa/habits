const LINKS = {
  HOME: '/',
  ADD_HABIT: '/add',
  HABIT: (id: string) => `/${id}`,
  HABIT_TEMPLATE: '/:id',
  ALL: '/all',
  SIGNIN: '/signin',
};

export default LINKS;
