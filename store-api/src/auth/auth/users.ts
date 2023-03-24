export interface Payload {
  sub: number;
  username: string;
}

export interface User {
    id?: number;
    username: string;
    password: string;
}

export const users: User[] = [
    {
      id: 1,
      username: 'user1@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    },
    {
      id: 2,
      username: 'user2@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    },
    {
      id: 3,
      username: 'user3@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    },
];