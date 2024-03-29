const claveEncriptadora = new Map([
  ['a', 'ai'],
  ['e', 'enter'],
  ['i', 'imes'],
  ['o', 'ober'],
  ['u', 'ufat']
])

const claveDesencriptadora = new Map([
  ['ai', 'a'],
  ['enter', 'e'],
  ['imes', 'i'],
  ['ober', 'o'],
  ['ufat', 'u']
])

const showMessage = document.querySelector('section.showEncryption')

function encriptar (event) {
  event.preventDefault()
  let contentTextArea = document.querySelector('textarea').value

  if(contentTextArea == ''){
    return
  }

  let testTexto = /^[a-z\s]+$/.test(contentTextArea)

  if (!testTexto) {
    alert(
      'El texto no es válido. Debe contener solo letras minúsculas sin acentos ni caracteres especiales.'
    )
    return
  }

  let encryptedMessage = contentTextArea.replaceAll(/[aeiou]/g, vowel =>
    claveEncriptadora.get(vowel)
  )

  showMessage.innerHTML = `<p class='showMessage'>${encryptedMessage}</p> <button class='actionCopy' onclick='copiarPortapapeles()'>copiar</button>`
}

function desencriptar (event) {
  event.preventDefault()
  let contentTextArea = document.querySelector('textarea').value

  if(contentTextArea == ''){
    return
  }

  let testTexto = /^[a-z\s]+$/.test(contentTextArea)

  if (!testTexto) {
    alert(
      'El texto no es válido. Debe contener solo letras minúsculas sin acentos ni caracteres especiales.'
    )
    return
  }

  let encryptedMessage = contentTextArea.replaceAll(
    /(ai|enter|imes|ober|ufat)/g,
    word => claveDesencriptadora.get(word)
  )

  showMessage.innerHTML = `<p class='showMessage'>${encryptedMessage}</p> <button class='actionCopy' onclick='copiarPortapapeles()'>copiar</button>`
}

function copiarPortapapeles () {
  let contentTextArea = document.querySelector('p.showMessage').textContent
  navigator.clipboard
    .writeText(contentTextArea)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })
}
