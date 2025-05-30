import { Card, CardContent } from "@/components/ui/card";

export default function GlassCard({children}: {children: React.ReactNode}) {
    return (
        <div className="flex items-center justify-center p-5">
            <Card className="backdrop-blur-md bg-white/30 border-white/20 shadow-xl rounded-2xl p-6 max-w-xl w-full">
                <CardContent className="text-gray-800 font-urbanist">
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}
