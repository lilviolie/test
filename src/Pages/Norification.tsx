import { useParams } from "react-router-dom";

function NotifiCation() {
    const { username } = useParams<string>();

    return (
        <div>
            <h1>{`${username}'s NotifiCation`}</h1>
        </div>
    );
}

export default NotifiCation;
