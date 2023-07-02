export const itinerary = (programReady = false) => [
    {
        id:1,
        title: "Recepción",
        speaker:"Devu Team",
        time: "01:00 P.M."
    },
    {
        id:2,
        title:"Bienvenida",
        speaker:"Devu Team",
        time: "01:20 P.M."
    },
    {
        id:3,
        title: programReady ? "Comunidades en la región" : "Presentación",
        speaker:"César García",
        time: "01:30 P.M."
    },
    {
        id:4,
        title:"Comida",
        // speaker:"Devu team",
        time: "02:10 P.M."
    },
    {
        id:5,
        title: programReady ? "Omega Up qué es!!" : "Presentación",
        speaker:"Miguel Eduardo",
        time: "02:25 P.M."
    },
    {
        id:6,
        title: "Coffee break",
        // speaker:"Devu team",
        time: "03:05 P.M."
    },
    {
        id:7,
        title: programReady ? "Cómo usar Kafka con Kubernetes" : "Presentación",
        speaker:"Adolfo Centeno Tellez",
        time: "03:35 P.M."
    },
    {
        id:8,
        title:"Cierre del evento",
        speaker:"Devu Team",
        time: "04:15 P.M."
    }
]


