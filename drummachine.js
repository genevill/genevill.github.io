const src = [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];

const soundName = [
    "Heater 1",
    "Heater 2",
    "Heater 3",
    "Heater 4",
    "Heater 6",
    "Dsc Oh",
    "Kick n Hat",
    "RP4 KICK 1",
    "Cev H2"
];

const drumLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
var noteIndex = 0;

document.addEventListener("keydown", (event) => {
    if (event.isComposing) {
        return;
    }

    if (drumLetters.includes(event.key) || drumLetters.includes(event.key.toUpperCase())) {
        console.log(event.key.toUpperCase());
    }
});

document.addEventListener("keyup", (event) => {
    EndSound();
});

document.addEventListener("mouseup", (event) => {
    EndSound();
});

/*
function PlaySound() {
    EndSound();
    document.getElementById(drumLetters[noteIndex]).getElementsByClassName("drum-clip")[0].play();
    document.getElementById("drum-text-box").innerHTML = soundName[noteIndex];
    document.getElementById(drumLetters[noteIndex]).style.background = "#5E6A75";
}
*/
const EndSound = () => {
    drumLetters.map((current, index) => {
        if (document.getElementById("drum-machine") != null) {
            document.getElementById(drumLetters[index]).style.background = "#213242"
        }
    });
}

function DrumPad(ele) {
    if (drumLetters.includes(ele.id)) {
        console.log(ele.id);
        //PlaySound();
    }
    /*
    noteIndex = drumLetters.findIndex(letter => letter == ele.id);
        PlaySound();
    //<audio class="drum-clip" id={props.text} src={src[drumLetters.findIndex(letter => letter == props.text)]} type="audio/mp3" />
    */
}

document.getElementById('drummachine').innerHTML = `
    <div class="drum-outer-box">
        <div id="drum-machine" class="drum-box">
            <div class="drum-row">
                <button class="drum-pad drum-unselectable" id="Q" onmousedown="DrumPad(this)">Q</button>
                <button class="drum-pad drum-unselectable" id="W" onmousedown="DrumPad(this)">W</button>
                <button class="drum-pad drum-unselectable" id="E" onmousedown="DrumPad(this)">E</button>
                <button class="drum-pad drum-unselectable" id="A" onmousedown="DrumPad(this)">A</button>
                <button class="drum-pad drum-unselectable" id="S" onmousedown="DrumPad(this)">S</button>
                <button class="drum-pad drum-unselectable" id="D" onmousedown="DrumPad(this)">D</button>
                <button class="drum-pad drum-unselectable" id="Z" onmousedown="DrumPad(this)">Z</button>
                <button class="drum-pad drum-unselectable" id="X" onmousedown="DrumPad(this)">X</button>
                <button class="drum-pad drum-unselectable" id="C" onmousedown="DrumPad(this)">C</button>
            </div>
            <div id="display" class="drum-row">
                <p id="drum-text-box" class="drum-unselectable">Sound Name</p>
            </div>
        </div>
    </div>
`;