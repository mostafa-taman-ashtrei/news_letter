import React from 'react';
import classNames from 'classnames';

interface InputComponentProps {
    className?: string
    type: string
    placeholder: string
    value: string
    // eslint-disable-next-line no-unused-vars
    setValue: (e: React.ChangeEvent<any>) => void
    // eslint-disable-next-line no-unused-vars
    handleBlur?: (e: React.FocusEvent<any>) => void
    error: string | undefined
    id?: string
}

const InputComponent: React.FC<InputComponentProps> = ({
    className, type, placeholder, value, setValue, error, handleBlur, id,
}: InputComponentProps) => (
    <div className={className}>
        <input
            className={classNames(
                'transition duration-600 text-green-500 px-3 py-2 w-full bg-gray-900  focus:bg-gray-800 hover:bg-gray-700',
                { 'bg-red-600 text-gray-900 hover:bg-red-500': error },
            )}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={setValue}
            onBlur={handleBlur}
            id={id}
        />

        <small className="font-medium text-red-600">{error}</small>
    </div>
);

export default InputComponent;
