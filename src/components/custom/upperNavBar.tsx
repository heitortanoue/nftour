import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <Badge>Logo</Badge>
            <Avatar />
        </nav>
    );
}