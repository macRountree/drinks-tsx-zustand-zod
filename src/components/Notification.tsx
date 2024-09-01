import {Fragment} from 'react';
import {Transition} from '@headlessui/react';
import {FaCircleCheck, FaCircleXmark, FaXmark} from 'react-icons/fa6';
import {useGlobalStore} from '../stores/useGlobalStore';
export default function Notification() {
  const notification = useGlobalStore(state => state.notification);
  const closeNotification = useGlobalStore(state => state.closeNotification);
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={notification.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.error ? (
                    <FaXmark
                      className="h-6 w-6  text-rose-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaCircleCheck
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-2xl text-gray-900">Notification</p>
                  <p className="mt-1 text-xl text-gray-500 font-extrabold">
                    {notification.text}
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={closeNotification}
                  >
                    <span className="sr-only">Cerrar</span>
                    <FaCircleXmark className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
