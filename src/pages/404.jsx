import React from 'react';
import Link from 'gatsby-link';

const NotFound = () => (
    <div>
        <h2>Страница не найдена</h2>
        <p>
            <Link to="/">Вернуться на главную</Link>
        </p>
    </div>
);

export default NotFound;
