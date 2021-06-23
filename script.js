!(function () {
  const QUESTIONS_LIB = [
    {
      question: "exclamação",
      weigth: 1,
    },
    {
      question: "joga mapplestory",
      weigth: 1,
    },
    {
      question: "calça skinny",
      weigth: 1,
    },
    {
      question: "tatuagens de flor",
      weigth: 1,
    },
    {
      question: "caveiras ou variações que provavelmente não terá adolescente usando",
      weigth: 1,
    },
    {
      question: "Harry Potter",
      weigth: 1,
    },
    {
      question: "Friends",
      weigth: 1,
    },
    {
      question: "café excessivo",
      weigth: 1,
    },
    {
      question: "rir com hahaha ou rsrs(isso é flerte)",
      weigth: 1,
    },
    {
      question: "rock",
      weigth: 1,
    },
    {
      question: "idolatrar artistas antigos e esculachar os novos",
      weigth: 1,
    },
    {
      question: "dizer q tem saudade de coisas antigas(fliperama)",
      weigth: 1,
    },
    {
      question: "cerveja",
      weigth: 1,
    },
    {
      question: "emoji não ironicamente",
      weigth: 1,
    },
    {
      question: "disco",
      weigth: 1,
    },
    {
      question: "CD",
      weigth: 1,
    },
    {
      question: "tv de tubo",
      weigth: 1,
    },
    {
      question: "a inexistência da internet",
      weigth: 1,
    },
    {
      question: "locadora",
      weigth: 1,
    },
    {
      question: "não saber lidar com adolescentes sendo que eles já passaram por isso",
      weigth: 1,
    },
    {
      question: "tentar ser 'descolado'",
      weigth: 1,
    },
    {
      question: "não jogar jogos",
      weigth: 1,
    },
    {
      question: "Facebook",
      weigth: 1,
    },
    {
      question: "pagar de intelectual",
      weigth: 1,
    },
    {
      question: "jornal impresso",
      weigth: 1,
    },
    {
      question: "globo news",
      weigth: 1,
    },
    {
      question: "não usar ?? pra afirmação",
      weigth: 1,
    },
    {
      question: "idolatrar ficar bêbado(não só adultos)",
      weigth: 1,
    },
    {
      question: "dar lição de moral sem ouvir o ponto do adolescente",
      weigth: 1,
    },
    {
      question: "não aceitar opinião se não for de outro adulto",
      weigth: 1,
    },
    {
      question: "se achar dono da razão",
      weigth: 1,
    },
    {
      question: "culpar o celular por qualquer coisa",
      weigth: 1,
    },
    {
      question: "não respeitar o espaço do adolescente",
      weigth: 1,
    },
    {
      question: "começou a partida",
      weigth: 1,
    },
    {
      question: "usar letra maiúscula no único da frase",
      weigth: 1,
    },
    {
      question: "apoiar o bolsonaro",
      weigth: 1,
    },
    {
      question: "óculos escuros",
      weigth: 1,
    },
    {
      question: "ficar falando de pagar boleto",
      weigth: 1
    },
    {
      question: "hashtag na legenda",
      weigth: 1
    },
    {
      question: "beber cerveja 'litrao'",
      weigth: 1
    },
    {
      question: "assistir jornal",
      weigth: 1
    },
    {
      question: "achar q fds é final de semana",
      weigth: 1
    },
  ]

  const CRINGE_OMETER = [
    {
      message: "Meu deus como você é cringe!!!",
      min: 85.00,
      max: 100.00
    },
    {
      message: "Você está sendo dominado pelo espírito cringe!! Você é cringe...",
      min: 65.00,
      max: 84.99
    },
    {
      message: "Sua cringisse está aparecendo...",
      min: 40.00,
      max: 64.99
    },
    {
      message: "Pode ser que você seja based, mas tome cuidado com o seu cringe...",
      min: 19.00,
      max: 39.99
    },
    {
      message: "Definitivamente você não é cringe, mas será que alguém que é based realmente abriria um questionário para saber se é cringe?",
      min: 0.00,
      max: 18.99
    }
  ]

  const CRINGE_PERCENT = () => (Array.from(document.querySelectorAll("input[type='checkbox']:checked")).length / Array.from(document.querySelectorAll("input[type='checkbox']")).length) * 100

  const FIND_MESSAGE = percent => CRINGE_OMETER.find(({ min, max }) => min <= percent && max >= percent)

  document.querySelector("#year").innerHTML = new Date().getFullYear()
  document.querySelector("#question__wrapper").innerHTML = QUESTIONS_LIB.map(({ question, weigth }, i) => {
    return `<p class="question__line white-text">
      <label>
        <input value="${weigth}" name="question__${i + 1}" id="question__${i + 1}" type="checkbox" />
        <span>${question}</span>
      </label>
    </p>`
  }).join("")

  Array.from(document.querySelectorAll("input[type='checkbox']")).forEach(el => {
    el.addEventListener("change", () => {
      document.querySelector("#points").innerHTML = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).length + " cringepoints"
      console.log(CRINGE_PERCENT().toFixed(2) + '%')
      document.querySelector("#message").innerHTML =  FIND_MESSAGE(CRINGE_PERCENT()).message
      document.querySelector("#twitterlink").innerHTML = `<a href="https://twitter.com/intent/tweet?text=encodeURIComponent(FIND_MESSAGE(CRINGE_PERCENT()).message.substring(0, 200))" class="twitter-hashtag-button" data-show-count="false"></a><script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    })
  })
})()