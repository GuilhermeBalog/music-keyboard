const synth = new Tone.PolySynth().toMaster();

var altura = 4;

const teclas = document.querySelectorAll(".tecla")

teclas.forEach(tecla => {
    tecla.onclick = () => {
        var nota = tecla.id;
        synth.triggerAttackRelease(nota + altura, "8n")
    }
})

document.addEventListener('keypress', function (event) {

    event.preventDefault();

    const notas = {
        KeyA: () => {
            synth.triggerAttackRelease("C" + altura, "8n");
            document.getElementById('C').style.background = 'grey';
            setTimeout(function () { document.getElementById('C').style.background = 'white'; }, 50);
        },
        KeyW: () => {
            synth.triggerAttackRelease("C#" + altura, "8n");
            document.getElementById('C#').style.background = 'black';
            setTimeout(function () { document.getElementById('C#').style.background = '#333'; }, 50);
        },
        KeyS: () => {
            synth.triggerAttackRelease("D" + altura, "8n");
            document.getElementById('D').style.background = 'grey';
            setTimeout(function () { document.getElementById('D').style.background = 'white'; }, 50);
        },
        KeyE: () => {
            synth.triggerAttackRelease("D#" + altura, "8n");
            document.getElementById('D#').style.background = 'black';
            setTimeout(function () { document.getElementById('D#').style.background = '#333'; }, 50);
        },
        KeyD: () => {
            synth.triggerAttackRelease("E" + altura, "8n");
            document.getElementById('E').style.background = 'grey';
            setTimeout(function () { document.getElementById('E').style.background = 'white'; }, 50);
        },
        KeyF: () => {
            synth.triggerAttackRelease("F" + altura, "8n");
            document.getElementById('F').style.background = 'grey';
            setTimeout(function () { document.getElementById('F').style.background = 'white'; }, 50);
        },
        KeyT: () => {
            synth.triggerAttackRelease("F#" + altura, "8n");
            document.getElementById('F#').style.background = 'black';
            setTimeout(function () { document.getElementById('F#').style.background = '#333'; }, 50);
        },
        KeyG: () => {
            synth.triggerAttackRelease("G" + altura, "8n");
            document.getElementById('G').style.background = 'grey';
            setTimeout(function () { document.getElementById('G').style.background = 'white'; }, 1000);
        },
        KeyY: () => {
            synth.triggerAttackRelease("G#" + altura, "8n");
            document.getElementById('G#').style.background = 'black';
            setTimeout(function () { document.getElementById('G#').style.background = '#333'; }, 1000);
        },
        KeyH: () => {
            synth.triggerAttackRelease("A" + altura, "8n");
            document.getElementById('A').style.background = 'grey';
            setTimeout(function () { document.getElementById('A').style.background = 'white'; }, 1000);
        },
        KeyU: () => {
            synth.triggerAttackRelease("A#" + altura, "8n");
            document.getElementById('A#').style.background = 'black';
            setTimeout(function () { document.getElementById('A#').style.background = '#333'; }, 1000);
        },
        KeyJ: () => {
            synth.triggerAttackRelease("B" + altura, "8n");
            document.getElementById('B').style.background = 'grey';
            setTimeout(function () { document.getElementById('B').style.background = 'white'; }, 1000);
        },
    }

    const noteToPlay = notas[event.code] || function(){}
    noteToPlay()

})