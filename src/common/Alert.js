import { XCircleIcon } from '@heroicons/react/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  const bgColor = alert.type === 'success' ? 'green-100' : 'red-100';
  const textColor = alert.type === 'success' ? 'text-green-800' : 'text-red-800';

  return (
    <>
      {alert?.active && (
        <div
          x-data="{ show: true }"
          x-show="show"
          x-init="setTimeout(() => show = false, 3000)"
          className={`bg-${bgColor} p-5 w-full rounded-lg mb-8`}
        >
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
