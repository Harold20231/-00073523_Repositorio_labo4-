function recordatorio() {
    let dia = document.getElementById("dia").value.toLowerCase();
    let mensaje = document.getElementById("mensaje").value;
    let actividad = "";

    switch (dia) {
        case "lunes":
            actividad = "Atender a un cliente específico";
            break;
        case "martes":
            actividad = "Visitar una agencia fuera de la ciudad";
            break;
        case "miércoles":
        case "miercoles":
            actividad = "Llevar a mi hija al ballet";
            break;
        case "jueves":
            actividad = "Priorizar entregas de desarrollo";
            break;
        case "viernes":
            actividad = "Atender problemas de manera remota";
            break;
        case "sábado":
        case "sabado":
            actividad = "Hacer lo que mi esposa quiera";
            break;
        default:
            actividad = "No hay actividades programadas";
    }

    document.getElementById("resultado").innerText = 
        `Hoy: ${actividad}. Nota: ${mensaje}`;
}
