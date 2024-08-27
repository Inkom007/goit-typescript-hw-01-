type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const originalUser: User = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

function createOrUpdateUser(
  initialValues: User,
  createOrUpdateUser: Partial<User>
) {
  return { ...initialValues, ...createOrUpdateUser };
}

createOrUpdateUser(originalUser, {
  email: "user@mail.com",
  password: "password123",
});
