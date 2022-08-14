import React from 'react';
import { Link } from 'react-router-dom';
import Settings from './Settings/Index';

const links = [
    { label: 'Pomodoro', to: '/pomodoro' },
    { label: 'How is work', to: '/howiswork' },
    { label: 'Stats', to: '/statistics' },
];

const Navbar = () => {
    return (
        <nav className="navbar bg-primary py-3 navbar-expand-md navbar-text">
            <div className="container-sm d-flex justify-content-space-between">
                <button
                    type="button"
                    className="navbar-toggler border-0 p-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-expanded="false"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                >
                    <i
                        className="bi bi-list text-light "
                        style={{ fontSize: '30px' }}
                    ></i>
                </button>
                <div className="navbar-brand">
                    <Link
                        to=""
                        className="text-light navbar-brand fs-3 text fw-bold"
                    >
                        PomoMusic
                    </Link>
                </div>

                <div className="collapse navbar-collapse me-5" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => (
                            <li key={link.label} className="nav-item fs-5 ms-3">
                                <Link
                                    className="nav-link text-light text me-0"
                                    to={link.to}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item ms-3 ">
                            <span
                                type="button"
                                className=" nav-link text-light fs-5 text me-0"
                                data-bs-toggle="modal"
                                data-bs-target="#settingsModal"
                            >
                                Settings
                            </span>
                        </li>
                        <div
                            className="modal fade"
                            id="settingsModal"
                            tabIndex="-1"
                            aria-labelledby="setingModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog ">
                                <div className="modal-content p-4 rounded-1 ">
                                    <div className="modal-header pt-0">
                                        <h6
                                            className="modal-title fs-4 text fw-bold text-secondary"
                                            id="setingModal"
                                        >
                                            Settings
                                        </h6>
                                        <button
                                            type="button"
                                            className="btn-close "
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <Settings />
                                    </div>
                                    <div className="modal-footer border-0">
                                        <button
                                            type="button"
                                            className="btn btn-primary text-light rounded-pill fs-4 fw-bold px-4 py-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Okay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="dropdown ">
                    <button
                        className="btn p-0 d-flex align-items-center rounded-pill border-0 border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                    >
                        <img
                            src="https://i.pinimg.com/originals/65/3d/01/653d01c977ea7ce63d9eb06f5a273d7d.jpg"
                            alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top rounded-circle"
                        />
                        <span className="d-none d-sm-block fs-5 text text-light fw-bolder ms-2">
                            Tony
                        </span>
                    </button>
                    {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li>
                            <h6 className="dropdown-item hover fs-4 text">
                                Themes
                            </h6>
                        </li>
                        <li>
                            <h6 className="dropdown-item  fs-4 text">
                                Settings
                            </h6>
                        </li>
                        <li>
                            <h6 className="dropdown-item  fs-4 text">
                                Log out
                            </h6>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
