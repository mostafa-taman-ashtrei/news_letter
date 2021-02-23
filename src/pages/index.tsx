import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputComponent from '../components/InputComponent';
import Alert from '../components/Alert';
import { myError } from '../types';

const Home: React.FC = () => {
    const [error, setError] = useState<myError | null>();
    const [showAlert, setShowAlert] = useState<Boolean>(false);

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'First Name must be at leat 2 chars').required('Required Field'),
            lastName: Yup.string().min(2, 'Last Name must be at leat 2 chars').required('Required Field'),
            email: Yup.string().min(2, 'Username must be at leat 2 chars').email().required('Required Field'),
        }),
        onSubmit: async ({ firstName, lastName, email }) => {
            try {
                const res = await axios.post('api/signup', { firstName, lastName, email });
                console.log(res.data);
                setError(res.data);
                setShowAlert(true);
            } catch (err) {
                setError(err.response.data);
                setShowAlert(true);
            }
        },
    });

    return (
        <div className="bg-gray-900 min-w-screen min-h-screen px-5 py-5">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex">
                <div
                    className="w-screen h-screen bg-cover bg-center"
                    style={{ backgroundImage: 'url(\'https://www.thewowstyle.com/wp-content/uploads/2015/07/Forests-bridges-natural-scenery-hd-wallpaper-backgrounds-.jpg\')' }}
                >
                    {showAlert && error?.error
                        ? <Alert error={error.error} setShowAlert={setShowAlert} />
                        : null}

                    {showAlert && error?.message
                        ? <Alert message={error.message} setShowAlert={setShowAlert} />
                        : null}
                </div>

                <div className="flex flex-col justify-center pl-6 p-10 bg-gray-300">
                    <div className="w-72">
                        <h1 className="text-lg mb-2 font-medium">Sign Up</h1>

                        <p className="mb-10 text-xs">
                            By signing up you agree to our terms of service and privacy policy
                        </p>

                        <form onSubmit={handleSubmit}>
                            <InputComponent
                                className="mb-2"
                                type="text"
                                value={values.firstName}
                                setValue={handleChange}
                                handleBlur={handleBlur}
                                placeholder="First Name ..."
                                error={
                                    touched.firstName && fErrors.firstName
                                        ? fErrors.firstName : undefined
                                }
                                id="firstName"
                            />

                            <InputComponent
                                className="mb-2"
                                type="text"
                                value={values.lastName}
                                setValue={handleChange}
                                handleBlur={handleBlur}
                                placeholder="Last Name ..."
                                error={
                                    touched.lastName && fErrors.lastName
                                        ? fErrors.lastName : undefined
                                }
                                id="lastName"
                            />

                            <InputComponent
                                className="mb-2"
                                type="username"
                                value={values.email}
                                setValue={handleChange}
                                handleBlur={handleBlur}
                                placeholder="Email ..."
                                error={touched.email && fErrors.email ? fErrors.email : undefined}
                                id="email"

                            />

                            <button type="submit" className="transition duration-600 w-full  py-2  text-xs font-bold text-white uppercase bg-blue-800 border border-blue-500 hover:bg-green-500">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
