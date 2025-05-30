import GlassCard from "@/components/GlassCard";

export default function ImprintComponent() {
    return <>
        <div
            className={"flex w-full min-h-screen bg-gradient-to-br from-pink-400 via-white to-green-200 text-gray-800"}>
            <div className={"flex w-full flex-col mt-15"}>
                <GlassCard>
                    <div className={"flex w-full flex-col"}>
                        <div className={"mb-3"}>
                            <h1 className="text-center text-2xl font-bold mb-2">Impressum</h1>
                            <h2 className="text-center text-sm font-semibold mb-2">Inhalte gemäß §5 DDG</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Block 1: Adresse & Vertretung */}
                            <div className="space-y-2 font-urbanist text-gray-800">
                                <h2 className="font-semibold text-lg">Adresse</h2>
                                <p>
                                    Sofia Rösl<br/>
                                    Hundherum Nürnberg<br/>
                                    c/o IP-Management #5659<br/>
                                    Ludwig-Erhard-Str. 18<br/>
                                    20459 Hamburg
                                </p>
                            </div>

                            {/* Block 2: Kontaktinformationen */}
                            <div className="space-y-2 font-urbanist text-gray-800">
                                <h2 className="font-semibold text-lg">Kontakdaten</h2>
                                <p>
                                    <span>Email: </span>
                                    <a href="mailto:hundherum.nbg@gmail.com" className="underline break-words">
                                        hundherum.nbg@gmail.com
                                    </a>
                                    <br/>
                                    Telefon: 01727551509<br/>
                                    Redaktionell verantwortlich:<br /> Sofia Rösl
                                </p>
                            </div>

                            {/* Block 2: Kontaktinformationen */}
                            <div
                                className="md:col-span-2 mt-4 text-gray-700 font-urbanist text-sm bg-white/30 p-4 rounded-md border border-black/20">
                                <h2 className="font-semibold text-lg">EU-Streitschlichtung</h2>
                                <p>
                                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeteiligung (OS)
                                    bereit: <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline break-words max-w-full"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a><br/>
                                    Unsere E-Mail-Adresse finden sie oben im Impressum.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm">


                        </p>
                    </div>
                </GlassCard>
            </div>

        </div>
    </>
}