import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar
                alt="Daniel Zheng"
                src="https://i.postimg.cc/0yjRWZ8y/userimg2.jpg"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            />
           
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <a href="../Profile">Profile</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
