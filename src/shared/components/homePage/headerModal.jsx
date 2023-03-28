import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ContextSvg} from "../../../img/context";
import {SettingsSvg} from "../../../img/settings";
import {SeoSvg} from "../../../img/seo";
import {CompanySvg} from "../../../img/company";
import {SmmSvg} from "../../../img/smm";
import {ServicesSvg} from "../../../img/services";
import {DevelopmentSvg} from "../../../img/development";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const TemporaryDrawer = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='header__menu_modal'>
                        <div className="header__menu_icon" onClick={toggleDrawer(anchor, true)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            <div className="header__menu_wrapper">
                                <ul className='header__menu container'>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <ContextSvg />
                                            <span>Контекст</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <SettingsSvg />
                                            <span>Поддержка</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <SeoSvg />
                                            <span>SEO</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <CompanySvg />
                                            <span>О компании</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <SmmSvg />
                                            <span>SMM</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <ServicesSvg />
                                            <span>Ещё услуги</span>
                                        </a>
                                    </li>
                                    <li onClick={toggleDrawer(anchor, false)}>
                                        <a href="#">
                                            <DevelopmentSvg />
                                            <span>Разработка</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default TemporaryDrawer