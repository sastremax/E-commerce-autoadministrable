"use client";

import React, { useState } from "react";

const Contador = () => {

    const [count, setCount] = useState(0);

    const incrementarContador = () => {
        console.log("Contador actual:", count);
        setCount(count + 1);
    }
    const decrementarContador = () => {
        setCount(count - 1);
    }

    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoPantallaLatam.webp')" }}>

            @@ -24,14 +27,18 @@
            <p className="text-2xl font-bold mb-4 text-blue-500">
                Contador: {count}
            </p>
            <Button onClick={incrementarContador}>Incrementar</Button>
            <div className="flex justify-center space-x-4">
                <Button onClick={incrementarContador}>Incrementar</Button>
                <Button onClick={decrementarContador}>Decrementar</Button>
            </div>
        </div>
    )
}

export default Contador