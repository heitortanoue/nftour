import { cn } from "@/lib/utils";

export default function Frame({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("mt-10 mx-5", className)}>
            {children}
        </div>
    );
}