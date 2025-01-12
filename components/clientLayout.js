"use client";

import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header";

export default function ClientLayout({ children }) {
    return (
        <NextUIProvider>
            <Header />
            {children}
        </NextUIProvider>
    );
}