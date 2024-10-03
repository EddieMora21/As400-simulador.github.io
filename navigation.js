document.addEventListener('DOMContentLoaded', function () {
    const commandInput1 = document.getElementById('commandInput1');
    const commandInput2 = document.getElementById('commandInput2');
    const commandInputPersona = document.getElementById('commandInputpersoncif1'); // Nuevo para pantalla Persona

    // Enfocar el input de la Terminal 1 si está presente
    if (commandInput1) {
        commandInput1.focus();
        commandInput1.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const command = commandInput1.value.trim();
                handleCommand(command, 'terminal1');
            }
        });
    }

    // Enfocar el input de la Terminal 2 si está presente
    if (commandInput2) {
        commandInput2.focus();
        commandInput2.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const command = commandInput2.value.trim();
                handleCommand(command, 'terminal2');
            }
        });
    }

    // Enfocar el input de la pantalla Persona si está presente
    if (commandInputPersona) {
        commandInputPersona.focus();
        commandInputPersona.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const command = commandInputPersona.value.trim();
                handleCommand(command, 'persona');
            }
        });
    }

    // Captura de F3 para realizar la navegación según la página actual
    document.addEventListener('keydown', function (event) {
        if (event.key === 'F3') {
            event.preventDefault(); // Evita la acción predeterminada del navegador
            if (commandInput1) {
                // Si estamos en Terminal 1, regresar al login
                window.location.href = 'index.html';
            } else if (commandInput2) {
                // Si estamos en Terminal 2, regresar a Terminal 1
                window.location.href = 'terminal1.html';
            } else if (commandInputPersona) {
                // Si estamos en la pantalla Persona, regresar a Terminal 2
                window.location.href = 'terminal2.html';
            }
        }
    });

    // Función para manejar los comandos dentro de las terminales
    function handleCommand(command, currentTerminal) {
        if (command === '1') {
            if (currentTerminal === 'terminal1') {
                window.location.href = 'terminal2.html';
            } else if (currentTerminal === 'terminal2') {
                window.location.href = 'persona.html';
            } else if (currentTerminal === 'persona') {
                // Lógica para el comando en la pantalla Persona (puedes personalizar esto si es necesario)
                alert("Formulario enviado.");
            }
        } else {
            alert("Comando no válido.");
        }
    }
});
