import { Outlet } from 'react-router-dom';
import LeftPart from './Components/LeftPart/LeftPart';

import './Layout.css';
export default function Layout() {
    return (
        <div className="content">
            <div className="leftPartLayout">
                <LeftPart />
            </div>
            <Outlet />
        </div>
    );
}
