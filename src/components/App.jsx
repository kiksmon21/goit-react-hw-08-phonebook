import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { HomePage } from 'pages/HomePage/HomePage';
import { useAuth } from '../redux/hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';

export const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
        navigate('/contacts');
    }, [dispatch, navigate]);

    return isRefreshing ? (
        <h1>Refreshing user... Please wait...</h1>
    ) : (
        <>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo='/contacts' />} />
                    <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />} />
                    <Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo='/login' />} />
                    <Route path='/logout' element={<PrivateRoute component={HomePage} redirectTo='/' />} />
                </Route>
            </Routes>
        </>
    );
};
