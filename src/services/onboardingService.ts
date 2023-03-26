import {IUsers} from '../store/types';
import {ILoginInput} from './types';

export const logIn = async (inputData: ILoginInput, allUsers: IUsers[]) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = allUsers.find(
        u =>
          u.email === inputData.userName && u.password === inputData.password,
      );
      if (user) {
        resolve({success: true, message: 'Login successful', data: user});
      } else {
        resolve({success: false, message: 'Invalid username or password'});
      }
    }, 3000);
  });
};

export const signIn = async (inputData: IUsers, allUsers: IUsers[]) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = allUsers.find(u => u.email === inputData.email);
      if (user) {
        resolve({success: false, message: 'Email already exists'});
      } else {
        resolve({
          success: true,
          message: 'Account crated successfully',
          data: inputData,
        });
      }
    }, 3000);
  });
};

export const logOut = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: true, message: 'Logout successfully'});
    }, 3000);
  });
};
