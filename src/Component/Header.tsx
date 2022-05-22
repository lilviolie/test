import { Grid, styled, TextField, Button, Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import "../Assets/Styles/Header.css";
import { useState } from "react";

interface IloginInterface {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    user: IuserInterface;
}

interface IsearchInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderGridItem = styled(Grid)({
    textAlign: "center",
});

const ToolBoxContainer = styled(Box)({
    p: 2,
    border: "1px solid black",
    borderRadius: "10px",
});

function SearchField({ search, setSearch }: IsearchInterface) {
    return (
        <Grid container>
            <Grid item xs={11}>
                <TextField
                    style={{ width: "100%" }}
                    size="small"
                    variant="outlined"
                    value={search}
                    label="검색"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </Grid>
            <Grid item xs>
                <Button variant="text" style={{ marginTop: "2px" }}>
                    <SearchIcon color="action" />
                </Button>
            </Grid>
        </Grid>
    );
}

function IconField({ isLogin, setIsLogin, user }: IloginInterface) {
    return (
        <div>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/${user.nickName}`}
            >
                <PersonIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/${user.nickName}/notification`}
            >
                <NotificationsIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/search`}
            >
                <PeopleIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/search`}
            >
                <ExploreIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                onClick={() => {
                    setIsLogin(false);
                }}
            >
                <LogoutIcon color="action" />
            </Button>
        </div>
    );
}

function SignUpSignIn() {
    return (
        <Grid container direction="row" justifyContent="space-around">
            <Grid item>
                <Button
                    variant="text"
                    style={{ marginTop: "2px" }}
                    href="http://localhost:3000/signup"
                >
                    SignUp
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="text"
                    style={{ marginTop: "2px" }}
                    color="info"
                    href="http://localhost:3000/signin"
                >
                    SignIn
                </Button>
            </Grid>
        </Grid>
    );
}

function ToolBox({ isLogin, setIsLogin, user }: IloginInterface) {
    return (
        <ToolBoxContainer>
            {isLogin ? (
                <IconField
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    user={user}
                />
            ) : (
                <SignUpSignIn />
            )}
        </ToolBoxContainer>
    );
}

function Header({ user }: { user: IuserInterface }) {
    const [isLogin, setIsLogin] = useState<boolean>(user.isLogin);
    const [search, setSearch] = useState<string>("");

    return (
        <div id="Header">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <HeaderGridItem item xs={2.5}>
                    <a
                        href={
                            user.isLogin
                                ? `http://localhost:3000/${user.nickName}`
                                : "http://localhost:3000"
                        }
                    >
                        <img
                            style={{ height: "40px", marginTop: "10px" }}
                            src={require("../Assets/Images/Daylog.png")}
                            alt=""
                        />
                    </a>
                </HeaderGridItem>
                <HeaderGridItem item xs={7}>
                    <SearchField search={search} setSearch={setSearch} />
                </HeaderGridItem>
                <HeaderGridItem item xs={2.5}>
                    <ToolBox
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                        user={user}
                    />
                </HeaderGridItem>
            </Grid>
        </div>
    );
}

export default Header;
