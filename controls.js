export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    crouch: new KeyboardEvent('Keydown',{key: 'Arrowdown', keyCode:40}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}