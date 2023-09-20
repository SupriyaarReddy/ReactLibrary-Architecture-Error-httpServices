import React, { useState, useEffect } from 'react';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

function ErrorHandling({ simulateError }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${BASE_API_URL}/posts`);
                if (!response.ok) {
                    throw new Error(`GET request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        if (simulateError) {
            // Simulate an error for testing purposes
            setError(new Error('Simulated error for testing'));
            setLoading(false);
        } else {
            fetchData();
        }
    }, [simulateError]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data from API:</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ErrorHandling;
