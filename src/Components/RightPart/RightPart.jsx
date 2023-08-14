import './RightPart.css';
import Widgets from './Widgets';

function RightPart() {
    return (
        <div>
            <Widgets />
            <div className="utileLink">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
                <span>Accessibility</span>
                <span>Ads info</span>
                <span>© 2023 X Corp.</span>
            </div>
        </div>
    );
}

export default RightPart;
