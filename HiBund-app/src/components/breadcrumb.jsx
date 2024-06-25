import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex text-gray-700" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex items-center space-x-2">
                <li className="flex items-center">
                    <Link to="/" className="text-gray-500 hover:underline">
                        BLOG
                    </Link>
                    <span className="mx-2">{'>'}</span>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to} className="flex items-center">
                            {index !== pathnames.length - 1 ? (
                                <>
                                    <Link to={to} className="text-blue-500 hover:underline">
                                        {value}
                                    </Link>
                                    <span className="mx-2">{'>'}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-gray-500">{value}</span>
                                    <span className="mx-2">{'>'}</span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
