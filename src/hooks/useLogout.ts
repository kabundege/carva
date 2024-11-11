import {useQueryClient} from '@tanstack/react-query';
import useAppDispatch from './useAppDispatch';
import {logout} from '../store/Reducers/AuthReducer';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    Promise.resolve(queryClient.clear()).then(() => {
      dispatch(logout());
    });
  };

  return {handleLogout};
};
