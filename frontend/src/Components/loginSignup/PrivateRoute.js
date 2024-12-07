import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState('loading')

    useEffect(() => {

        const checkAuthentication = async () => {
            try {
                await new Promise((resolve, reject) => setTimeout(resolve, 200))
                const response = await fetch('http://localhost:8000/userApi/authCheck', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
                let data = await response.json();
                console.log('data1', data);
                if (response.ok) {

                    if (data.authenticated) {
                        setIsAuthenticated('authenticated');
                    } else {
                        setIsAuthenticated('NotAuthenticated');
                    }
                } else {
                    setIsAuthenticated('NotAuthenticated');
                }
            } catch (e) {
                console.log('ERROR', e);
                setIsAuthenticated('NotAuthenticated');
            }
        }

        checkAuthentication();
    }, [])



    if (isAuthenticated == 'loading') {
        return <div style={{
            height: '100vh',
            width: '100vw',
            fontWeight: 'bold',
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            background: 'rgb(62, 63, 63,0.5)'
        }}>
            Loading.....
        </div>
    }

    if (isAuthenticated == 'NotAuthenticated') {

        return <Navigate to="/SignIn" replace />;
    }


    return children;
};

export default PrivateRoute;
