import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './Loaders/Spinner';

const Overview = lazy(() => import('../Pages/Overview'));

export default function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<Spinner />}><Overview /></Suspense>} />
        </Routes>
    );
}