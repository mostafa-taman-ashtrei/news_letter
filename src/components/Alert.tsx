import React from 'react';
import classNames from 'classnames';

interface props {
    message?: string
    setShowAlert: React.Dispatch<React.SetStateAction<Boolean>>
    error?: string
}

const Alert: React.FC<props> = ({ message, setShowAlert, error }: props) => (
    <div>
        <div
            className={classNames(
                { 'bg-green-500': message },
                { 'bg-red-500': error },
            )}
            role="alert"
        >
            <div className="container flex items-center text-white text-sm font-bold px-4 py-3 relative">
                {error ? (
                    <>
                        <svg
                            viewBox="0 0 24 24"
                            className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                        >
                            <path
                                fill="white"
                                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                            />
                        </svg>
                        <p>
                            {error}
                            {' '}
                            .
                        </p>
                    </>
                ) : null}

                {message ? (
                    <>
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
                            />
                        </svg>
                        <p>
                            {message}
                            {' '}
                            .
                        </p>
                    </>
                ) : null}

                <button
                    type="button"
                    onClick={() => setShowAlert(false)}
                >
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 closealertbutton">
                        <svg
                            className="fill-current h-6 w-6 text-white"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                            />
                        </svg>

                    </span>
                </button>
            </div>

        </div>
    </div>
);

export default Alert;
