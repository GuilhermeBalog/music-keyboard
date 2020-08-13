const synth = new Tone.PolySynth().toMaster();

var altura = 4;

const notasNasTeclas = {
    KeyA: 'C',
    KeyW: 'C#',
    KeyS: 'D',
    KeyE: 'D#',
    KeyD: 'E',
    KeyF: 'F',
    KeyT: 'F#',
    KeyG: 'G',
    KeyY: 'G#',
    KeyH: 'A',
    KeyU: 'A#',
    KeyJ: 'B',
}

const estaTocando = {
    'C': false,
    'C#': false,
    'D': false,
    'D#': false,
    'E': false,
    'F': false,
    'F#': false,
    'G': false,
    'G#': false,
    'A': false,
    'A#': false,
    'B': false,
}

document.addEventListener('keydown', event => {
    event.preventDefault()
    const nota = notasNasTeclas[event.code]
    if(nota){
        apertarTecla(nota)
    }
})

document.addEventListener('keyup', event => {
    event.preventDefault()
    const nota = notasNasTeclas[event.code]
    if(nota){
        soltarTecla(nota)
    }
})

document.addEventListener('mousedown', event => { 
    event.preventDefault()
    const nota = event.target.id
    apertarTecla(nota) 
})

document.addEventListener('mouseup', event => { 
    event.preventDefault()
    const nota = event.target.id
    soltarTecla(nota) 
})

function apertarTecla(nota){
    if(!estaTocando[nota]){
        synth.triggerAttack(nota + altura)
        estaTocando[nota] = true
        document.getElementById(nota).classList.add('active');
    }
}

function soltarTecla(nota){
    synth.triggerRelease(nota + altura)
    estaTocando[nota] = false
    document.getElementById(nota).classList.remove('active');
}

