window.addEventListener('load', init)

let currentWord = document.querySelector('#current__word')
let textInput = document.querySelector('#text__input')
let timeDisplay = document.querySelector('#time__display')
let scoreDisplay = document.querySelector('#score__display')
const words = ['JavaScript','User','Vidios','Brother','Bad','War','People','Hello','Speed','Test','Ninja','Horse','Minecraft','George','Test','Range','Rage','Skill','Volume','Yamaha','Guitar','Ever','Change','Men','Off','Need','Such','Hight','Must','Spell','Add','Follow','Went','Picture','Try','Ask','Large','Turn','Line','Great','Give','Thtough','Cause','Under','Show','Before','Move',]
let isPlaying
let time = 5
let score = 0

function init() {
	showWord(words)
	textInput.addEventListener('input', startMatch)
	setInterval(countdown, 1000)
	setInterval(checkStatus, 50)
}

function startMatch() {
	if(matchWords()) {
		isPlaying = true
		time = 6
		showWord(words)
		textInput.value = ''
		score++
	}
	
	if(score === -1){
		scoreDisplay.innerHTML = 0
	} else {
		scoreDisplay.innerHTML = score
	}
}

function matchWords() {
	if(textInput.value === currentWord.innerHTML){
		return true
	} else {
		return false
	}
}

function showWord(words) {
	const randomIndex = Math.floor(Math.random() * words.length)
	currentWord.innerHTML = words[randomIndex]
}

function countdown() {
	if(time > 0) {
		time--;
	} else if(time === 0) {
		isPlaying = false
	}
	
	timeDisplay.innerHTML = time
}

function checkStatus() {
	if(!isPlaying && time === 0) {
		score = -1
	}
}