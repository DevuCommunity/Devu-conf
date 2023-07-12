export const speakers = (programReady = false) => [
    {
        id: 3,
        photo: "adolfo.jpg",
        name: 'Adolfo Centeno Téllez',
        conference:  programReady && "Como Iniciar con Kafka y Kubernetes sin fracasar en el intento.",
        description: programReady && "Lic en Informatica y Maestria en Ciencias Computaciones por Tecnologico Nacional de Mexico, Doctorado en Ing. de Software por Universidad Popular Autonoma del Estado de Puebla, Devops, Modelops, Inteligencia Artificial y Computacion Cuantica."
    },
    {
        id: 2,
        photo: "miguel.jpg",
        name: 'Miguel Eduardo Romero Ruiz',
        conference:  programReady && "If there is Code there is hope.",
        description: programReady && "Coordinador de Operaciones de omegaUp, Manager de CyberSecurity para una empresa consultora global y Chief Technology Office de Smart Health Solutions."
    },
    {
        id: 1,
        photo: "cesar.jpg",
        name: 'César García Cabrera',
        conference: programReady && "Clean code: Buenas prácticas en la programación.",
        description: programReady && "Ing. en Sistemas Computacionales, egresado del Instituto Tecnológico de Orizaba, actualmente se desempeña como Backend Developer, es líder de la comunidad internacional Código bits y organizador de GDG Orizaba."
    },
    ]