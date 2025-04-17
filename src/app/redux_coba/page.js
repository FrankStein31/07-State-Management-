import ReduxProvider from "@/providers/ReduxProvider";
import ReduxCounter from "@/components/ReduxCounter";

export default function Coba() {
    return (
        <ReduxProvider>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">Redux Counter</h1>
            <ReduxCounter />
        </div>
        </ReduxProvider>
    );
}