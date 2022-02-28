import './Topbar.css';
import NotificationsTwoTone from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>
                        <FormatPaintIcon className='brush' /> ArtDeco-Admin
                    </span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsTwoTone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/57192912?s=96&v=4" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
