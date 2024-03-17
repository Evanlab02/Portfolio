import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './Loaders/Spinner';

const Welcome = lazy(() => import('../Pages/Welcome'));

export default function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<Spinner />}><Welcome /></Suspense>} />
        </Routes>
    );
}