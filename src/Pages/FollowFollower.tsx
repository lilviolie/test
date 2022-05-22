import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function FollowerLists() {
    return (
        <Grid>
            <h4>follower</h4>
        </Grid>
    );
}

function FollowLLists() {
    return (
        <Grid>
            <h4>follow</h4>
        </Grid>
    );
}

function FollowFollower() {
    const { isfollow } = useParams<string>();

    return (
        <div>
            {isfollow === "follow" ? <FollowLLists /> : <FollowerLists />}
        </div>
    );
}

export default FollowFollower;
