import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAxios } from '../store/reducer/authentification/axios';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userSlice);

    function handleLogout() {
        dispatch(LogoutAxios());
    }

    function renderLogoutMenu() {
        return (
            <li>
                {user.username}
                <ul className="header-sub-ul">
                    <li>
                        <Link to="/login/" onClick={handleLogout}>
                            Log Out
                        </Link>
                    </li>
                    <Link to="/settings/">
                        <li>Settings</li>
                    </Link>
                </ul>
            </li>
        );
    }

    function renderLoginMenu() {
        return (
            <li>
                <Link className="click" to="/register/">
                    Account
                </Link>
                <ul className="header-sub-ul">
                    <li>
                        <Link to="/login/">Log in</Link>
                    </li>
                    <li>
                        <Link to="/register/">Register</Link>
                    </li>
                </ul>
            </li>
        );
    }

    return (
        <nav>
            <ul className="header-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create/">Create</Link>
                </li>
                <li>
                    <Link to="/join/">Join</Link>
                </li>
                {localStorage.getItem('app_token') === null
                    ? renderLoginMenu()
                    : renderLogoutMenu()}
            </ul>
        </nav>
    );
};

export default Header;
