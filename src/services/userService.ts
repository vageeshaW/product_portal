import {IUsers} from '../store/types';

export const getUser = async (userId: number, allUsers: IUsers[]) => {
  console.log(userId, 'user');
  return new Promise(resolve => {
    setTimeout(() => {
      const user = allUsers.find(u => u.id === userId);
      console.log(userId, user);
      if (user) {
        resolve({success: true, message: null, data: user});
      } else {
        resolve({success: false, message: 'No User', data: null});
      }
    }, 3000);
  });
};
