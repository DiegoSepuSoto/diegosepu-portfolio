"use client";

import Title from "@/app/welcome/components/title";
import ImageSection from "@/app/welcome/components/image-section";

export default function WelcomePage() {
    return (
        <main className="grid grid-cols-6">
            {Title()}

            {ImageSection()}
        </main>
    )
}
