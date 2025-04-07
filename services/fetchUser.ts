import { logoutUser, setLoggedUser } from '@/store/slices/userSlice';
import { Dispatch } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

export const fetchUser = async (dispatch: Dispatch) => {
  try {
    const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`);
    dispatch(setLoggedUser(res.data));
  } catch (error) {
    console.error('Error al obtener el usuario', error);
    dispatch(logoutUser());
  }
};
