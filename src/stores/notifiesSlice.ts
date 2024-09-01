import {StateCreator} from 'zustand';
import {FavoritesSliceProps} from './favoritesSlice';

interface Notification {
  text: string;
  error: boolean;
  show: boolean;
}

export interface NotifiesSliceProps {
  notification: Notification;
  showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void;
  closeNotification: () => void;
}
export const createNotifiesSlice: StateCreator<
  NotifiesSliceProps & FavoritesSliceProps,
  [],
  [],
  NotifiesSliceProps
> = (set, get) => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },
  showNotification: payload => {
    set({notification: {text: payload.text, error: payload.error, show: true}});
    setTimeout(() => {
      get().closeNotification();
    }, 3000);
  },
  closeNotification: () => {
    set({notification: {text: '', error: false, show: false}});
  },
});
