<template>
    <div>
        <header>
            <div id="header">
                <a href="#home"><div id="logo"><img src='../assets/logoMPv3.svg' id="header-foto"> <span id="header-title">P coding</span></div></a>
                <nav>
                    <ul id="navibar">
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>O mnie</li></a>
                        <a href="#offer"><li>Oferta</li></a>
                        <a href="#opinion"><li>Opinie</li></a>
                        <a href="#contact"><li>Kontakt</li></a>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <a id="home"></a>
            <section id="welcomeSection" class="container">
                <div id="welcome" class="row align-items-center ">
                    <div class="d-block d-sm-none">
                        <h1>
                            Witaj!
                        </h1>
                        <h3>
                            Jestem tu po to, by Ci pomóc.
                        </h3>
                        <a href="#about">
                            <div class="text-center">
                               <h4 class="ctr">Kim jestem?</h4>
                               <i class="fas fa-arrow-down"></i>
                            </div>    
                        </a> 
                    </div>
                    <div  class="col-md-5 col-lg-6 bg-white">
                        <img src="../assets/png.png">
                    </div>
                    <div class="col-md-5 col-lg-6 bg-white d-none d-sm-block">
                        <h1>
                            Witaj!
                        </h1>
                        <h3>
                            Jestem tu po to, by Ci pomóc.
                        </h3>
                    
                        <a href="#about">
                            <div class="text-center">
                                <h4 class="ctr">Kim jestem?</h4>
                                <i class="fas fa-arrow-down"></i>
                            </div>
                        </a> 
                    </div>
                </div>
            </section>
            <a id="about"></a>
            <section id="aboutSection">
                <div id="about" class="row align-items-center">
                    <div class="col-lg-6">
                        <h2>Cześć!</h2>
                        <p>Mam na imię Michał. Jestem uczniem drugiej klasy liceum oraz pasjonatem programowania. Od ponad 5 lat zgłębiam tajniki tworzenia stron internetowych, aplikacji oraz algorytmów umożliwiających rozwiązywanie różnorodnych problemów. Uwielbiam pomagać innym oraz dzielić się moją wiedzą. Z ogromną chęcią zrobię wszystko, by pomóc Ci rozwiązać Twój problem!</p>
                    </div>
                    <div class="col-lg-6">
                        <img src="../assets/test.png"/>
                    </div>
                    <a href="#offer">
                        <div class="text-center">
                                <h4 class="ctr">W czym mogę pomóc?</h4>
                                <i class="fas fa-arrow-down"></i>
                        </div>
                    </a>
                </div>
            </section>
            <a id="offer"></a>
            <section id="offerSection">
                <div id="offer" >
                    <h1 class="ctr">Co obejmują zajęcia?</h1>

                    

                    <div id="offerSquares">
                        <h5 class="text-center">Wspólną naukę: </h5>
                        
                        <div class=" offerSquare m-1">
                            <img src="../assets/cpp.png" alt="c++" title="c++">
                            <h5>C++</h5>
                            <p>Podstaw języka C++. Podstawowych algorytmów, programowania funkcyjnego oraz obiektowego.</p>
                        </div>
                        <div class=" offerSquare m-1">
                            <img src="../assets/python.png" alt="python" title="python">
                            <h5>Python</h5>
                            <p>Podstaw języka python. Programowania funkcyjnego i obiektowego. Rozwiązywania zadań na poziomie maturalnym.</p>
                        </div>
                        <div class=" offerSquare m-1">
                            <img src="../assets/excel.png" alt="excel" title="excel">
                            <h5>Excel</h5>
                            <p>Podstaw arkusza kalkulacyjnego Excel, funkcji, rozwiązywania zadań, formatowania plików oraz danych.</p>
                        </div>
                        <div class=" offerSquare m-1">
                           <img src="../assets/htmljscss.png" alt="html,css&js" title="html,css&js"/>
                           <h5>HTML, CSS & JS</h5>
                           <p>
                            Podstaw tworzenia stron, podstaw designu, mechaniki strony, rozwiązywania zadań.
                            </p>
                           
                        </div>

                        <div id="offerMeetings">
                        <h5>Zajęcia odbywają się za pośrednictwem poniższych platform:</h5>
                        <br>

                        
                         <div id="instagram">
                            <a href="https://www.facebook.com/profile.php?id=100021506402832" target="_blank">
                                    <img src="../assets/mess.svg" alt="Michał Płócienniczak - Facebook" title="Michał Płócienniczak - Facebook">
                                    <div id="instagramText"> Michał Płócienniczak</div>
                            </a>
                        </div>
                         <div id="instagram">
                            <a href="https://join.skype.com/invite/gSOR0XpJaQqZ" target="_blank">
                                    <img src="../assets/skype.svg" alt="Michał Płócienniczak - Skype" title="Michał Płócienniczak - Skype" >
                                    <div id="instagramText"> Michał Płócienniczak</div>
                            </a>
                        </div>
                         <div id="instagram">
                            <a href="https://discordapp.com/users/652588877256851491/" target="_blank">
                                    <img src="../assets/dsc.svg" alt="Michał Płócienniczak - Discord" title="Michał Płócienniczak - Discord" >
                                    <div id="instagramText"> Michał Płócienniczak</div>
                            </a>
                        </div>
                        
                    </div>
                        
                        
                    </div>

                    
                    <div>
                        <a href="#opinion">
                            <div class="text-center">
                                <h4 class="ctr">Opinie osób po współpracy ze mną.</h4>
                                <i class="fas fa-arrow-down"></i>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </section>
            <a id="opinion"></a>
            <section id="opinionSection" >
                <div id="opinion" class="row text-center">
                    <h1>Co inni sądzą o współpracy ze mną?</h1>
                    <div id="singleOpinion" v-for="(opinion, index) in opinions" :key="opinion.id" class="col-lg-39 align-items-center" v-if="index <= 5">
                        <div >
                            <p>"{{ opinion.opinion }}"~</p>
                            <h6>{{ opinion.name }}</h6>
                            <span class="text-muted">{{ opinion.school }} </span>

                        </div>
                        
                    </div>

                    <a href="#contact">
                        <div class="text-center">
                                <h4 class="ctr">Jak się ze mną skontaktować?</h4>
                                <i class="fas fa-arrow-down"></i>
                        </div>
                    </a>
                </div>
            </section>
            <a id="contact"></a>
            <section id="contactSection">
                <div id="contact">
                    <h1>Jak nawiązać ze mną kontakt?</h1>
                    <h5>Za pomocą moich social media:</h5>
                    
                        <div id="instagram">
                            <a href="https://www.instagram.com/michal.plocienniczak/" target="_blank">
                                    <img src="../assets/insta.svg" alt="Michał Płócienniczak - Instagram" title="Michał Płócienniczak - Instagram">
                                    <div id="instagramText">@michal.plocienniczak</div>
                            </a>
                        </div>
                        <div id="instagram">
                            <a href="https://www.facebook.com/profile.php?id=100021506402832" target="_blank">
                                    <img src="../assets/face.svg" alt="Michał Płócienniczak - Facebook" title="Michał Płócienniczak - Facebook">
                                    <div id="instagramText"> Michał Płócienniczak</div>
                            </a>
                        </div>
                    <h5 class="mb-4" v-if="show_contact">Możesz również wysłać wiadomość:</h5>   
                    <h6><strong>E-mail:</strong> <a href="mailto:korepetycje@mpcoding.pl" target="_blank">korepetycje@mpcoding.pl</a></h6> 
                    <div class="alert alert-warning" v-if="this.notice">
                        {{ this.notice }}
                    </div>
                    <form @submit.prevent="sendContactMessage()" id="contactForm" v-if="show_contact">
                        <input
                            type="email"
                            v-model="email"
                            placeholder="E-mail (example@test.com)"
                            class="form-control"
                            /><span>Wymagane</span><br>
                        <input 
                            type="text"
                            v-model="number"
                            placeholder="Numer telefonu (+48 XXX XXX XXX)"
                            class="form-control"
                            /><span>Wymagane</span><br>
                        <input
                            type="text"
                            v-model="name"
                            placeholder="Imię i nazwisko (min. 5 znaków)"
                            class="form-control"
                            /><span>Wymagane</span><br>
                        <textarea 
                            v-model="message" 
                            placeholder="Opisz swój problem lub zakres materiału (min. 10 znaków)"
                            class="form-control"
                        ></textarea><span>Wymagane</span><br>
                        <label> </label>
                        <button type="submit" class="btn btn-success">Wyślij</button>
                        <p class="text-muted">Przesłane dane są używane tylko wewnętrznie i nie są udostępniane podmiotom trzecim.</p>
                    </form>
                    <div v-else class="alert alert-success">
                        Dziękuję za przesłanie wiadomości. Odpowiem najszybciej jak się da!
                    </div>
                </div>
            </section>
        </main>
        <footer id="footerSection">
            
            <div id="footer">
               
                <nav>
                    <ul id="footerNavibar">
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>O mnie</li></a>
                        <a href="#offer"><li>Oferta</li></a>
                        <a href="#opinion"><li>Opinie</li></a>
                        <a href="#contact"><li>Kontakt</li></a>
                    </ul>
                </nav>
                
                
                <div id="stopka">Copyright &copy; 2021 Michał Płócienniczak. <br>Wszelkie prawa zastrzeżone. </div>
                <div id="stopka2">W sprawach biznesowych proszę o kontakt na e-mail: <a href="mailto:biuro@mpcoding.pl" target="_blank">biuro@mpcoding.pl</a></div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      email: '',
      message: '',
      notice: '',
      number: '',
      name: '',

      show_contact: true,

      opinions: [
                        {
                            id: 1,
                            name: "Amelia B.",
                            opinion: "Naprawdę super pomoc. Wszystko dobrze wytłumaczone i przedstawione, nawet jak dla kogoś, kto nic nie rozumie z informatyki.",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        },
                        {
                            id: 2,
                            name: "Piotr D.",
                            opinion:"Błyskawiczna odpowiedź i skuteczne rozwiązanie mojego problemu. Dobra komunikacja oraz wsparcie w dojściu do celu.",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        },
                        {
                            id: 3,
                            name: "Martyna M.",
                            opinion:"Mega przyjazna atmosfera, jest miejsce na naukę, ale także na wspólne żartowanie i oczywiście same zagadnienia czy wątpliwości wyjaśnione w prosty i łatwy do zapamiętania sposób!",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        },
                        {
                            id: 4,
                            name: "Szymon T.",
                            opinion: "Michał jako osoba zorientowana w temacie, pasuje na miejscu korepetytora, jak średnik na końcu polecenia w C++.",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        },
                        {
                             id: 5,
                            name: "Kacper N.",
                            opinion:"Michał jest pomocny i cierpliwy. Z wielką łatwością jest w stanie rozwiązać każdy problem.",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        },
                        {
                            id: 6,
                            name: "Patryk W.",
                            opinion:"Michał wszystko pięknie wytłumaczył. Zadanie zaliczone.",
                            school: "Liceum Ogólnokształcące nr 9 im. Juliusza Słowackiego we Wrocławiu"
                        }
                        

                    ]
      
    }
  },
  methods: {
        sendContactMessage() {
          if(!this.validEmail(this.email)) {
              this.notice = 'Podany email jest nieprawidłowy'
          } else if(!this.validPhoneNumber(this.number)) {
              this.notice = 'Podany numer telefonu jest nieprawidłowy'
          } else if (this.name.length < 5) {
              this.notice = 'Twoje imie i nazwisko nie zostało wprowadzone'
          } else if (this.message.length < 10) {
              this.notice = 'Twoja wiadomość jest za krótka lub nie została wprowadzona'
          } else {
              const url = `https://us-central1-rainbow-roses-db3a0.cloudfunctions.net/sendEmail?email_from=${this.email}&message=${this.message}&name=${this.name}&number=${this.number}`

              const requestOptions = {
                  method: "GET",
                  headers: {"Content-Type": "application/json"}
              }
              fetch(url, requestOptions)
              this.show_contact = false
              this.notice = ''
          }
      },
      validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhoneNumber(number) {
        var re = /^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))$/;
        return re.test(number)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .ctr {
            width: 100%;
            
            text-align: center;
        }
        body {
            margin: 0;
            z-index: 1;
        }
        header {
            width: 100%;
            background-color: white;
            border-bottom: 2px solid black;
            position: fixed;
            z-index: 1000;
        }
        a{
            text-decoration: none;
            font-style: none;
            color: none;
        }

        i {
            text-decoration: none;
            font-style: none;
            font-size: 23px;
            color:rgb(40,40,40);
        }

        

        #header {
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            height: 50px;
            max-width: 1000px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        #header-foto {
            height: 45px;
            float: left;
        }
        #header-title {
            float: left;
            color: rgb(40,40,40);
            font-family: 'Nunito', sans-serif;
            font-size: 30px;
        }
        #navibar {
            list-style-type: none;
            float: right;
            max-width: 600px;
        }
        #navibar li {
            float: left;
            width: 80px;
            text-align: center;
            margin: 5px;
            
            color: rgb(40,40,40);
            transition-duration: 400ms;
            cursor: pointer;
            font-family: 'Nunito', sans-serif;

            font-size: 17px;
            
        }
        #navibar li:hover {
            transition-duration: 400ms;
            color: rgb(255, 189, 0)
        }
        #welcome {
            max-width: 900px;
            height: 100%;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
        }
        #welcome h1 {
            font-size: 100px;
        }
        #welcome h3 {
            font-size: 30px;
        }
        #welcome h4 {
            color: rgb(40,40,40);
            font-style: none;
        }
         
        #welcomeSection {
            width: 100%;
            height: 100vh;
            background: white;
            padding-top: 70px;
        }

        #about {
            max-width: 900px;
            height: 100%;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            color: rgb(40,40,40);
        }
        #about h2 {
            font-size: 55px;
        }

        #about p {
            font-size: 20px;
            color: rgb(40,40,40);
        }

        #about h4 {
            
            color: rgb(40,40,40);
        }
        
       #aboutSection {
           height: 100vh;
           width: auto;
           background-color: rgb(255, 189, 0);
       }

       #offer {
            max-width: 1000px;
            height: 100%;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            color: rgb(40,40,40);
       }

       #offer img {
           height: 110px;
       }

       #offer h1 {
           margin-top: 90px;
           margin-bottom: 50px;
           color: rgb(40,40,40);
       }
       #offer h4 {
           color:rgb(40,40,40);
           clear: both;    
       }

       #offerSection {
            height: 100vh;
            width: auto;
            background-color:white
       }
       .offerSquare {
            border: 2px solid rgb(40,40,40);
            background-color: white;
            border-radius: 5px;
            height: 310px;
            width: 230px;
            text-align: center;
            padding: 10px;
            float: left;
            margin-bottom: 50px;
       }

       #offerSquares {
           max-width: 1000px;
           align-self: center;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 50px;
           min-height: 42vh
       }

       #offerMeetings {
           text-align: center;
           margin-bottom: 30px;
       }

       #offerMeetings img {
            height: 80px;
       }
       #opinionSection {
           height: 100vh;
           background-color: rgb(255, 189, 0);
       }
       #opinion {
            max-width: 1000px;
            height: 100%;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            
       }
       #opinion h1 {
           text-align: center;
           margin-top: 90px;
           margin-bottom: 50px;
           color: rgb(40,40,40);
       }
       #singleOpinion{
            background-color: white;
            color: rgb(40,40,40);
            margin: 10px;
            padding: 10px;
            width: 30%;
            height: 250px;
       }
       #singleOpinion span{
            font-size: 12px;
            color: lightgray;
       }
       #singleOpinion p{
            font-size: 15px;
            color:rgb(40,40,40);
            font-style: italic;
       }
       #singleOpinion h6{
            font-size: 15px;
            color:rgb(40,40,40);
            
       }
       #opinion h4 {
            color: rgb(40,40,40);
            font-style: none;   
        }

        #contactSection {
            width: 100%;
            height: auto;
            background: white;
            padding-bottom: 90px;
        }

        #contact {
            max-width: 900px;
            height: 100%;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
       #contactForm { 
           width: 500px;
           align-self: center;
            margin-left: auto;
            margin-right: auto;
       }
       #contact h1 {
           text-align: center;
           margin-top: 90px;
           margin-bottom: 50px;
           color: rgb(40,40,40);
       }
       #contact form span{
           font-size: 10px;
           color: crimson;
           float: left;
       }
       #footer {
          max-width: 800px;
          text-align: center;
          align-self: center;
            margin-left: auto;
            margin-right: auto;
       }
       #footerSection {
            width: 100%;
           padding-top: 90px;
           padding-bottom: 90px;
           background: rgb(40,40,40);
           color: white;
       }
       #footerNavibar {
            clear: both;
            max-width: 500px;
            list-style-type: none;
            text-align: center;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
        }
        #footerNavibar li {
            width: 80px;
            margin: 5px;
            color: gray;
            transition-duration: 400ms;
            cursor: pointer;
            font-family: 'Nunito', sans-serif;
            font-size: 17px;
            float: left;
        }
        #footerNavibar li:hover {
            transition-duration: 400ms;
            color: rgb(255, 189, 0);
        }
        #stopka {
            clear: both;
        }
        #stopka2 {
            color: lightgray;
            font-size: 13px;
        }
        #stopka2 a {
            text-decoration: underline;
            color: lightgray;
        }
        #instagram {
            width: 250px;
            height:60px;
            padding: 5px;
            border: solid 1px lightgray;
            border-radius: 10px;
            align-self: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
        }
        #instagram img {
            float: left;
            margin-left: 10px;
            height: 50px;
        }
        #instagramText {
            float: left;
            margin-top: 15px;
            margin-left: 5px;
        }


         @media screen and (min-width: 600px) and (max-width: 1023px) and (max-height: 900px) {
        
            #welcomeSection {
                height: 100vh;
                padding-top: 0;
            }
            #welcome {
                height: 60%;
            }

        }

        @media screen and (min-width: 600px) and (max-width: 1023px) {

            #welcomeSection {
                height: 1000px;
            }
            #aboutSection {
                height: 1000px;
            }            
            #opinionSection {
                height: 1000px;
            }
            .offerSquare {
                float: none;
                width: 300px;
                align-self: center;
                margin-left: auto;
                margin-right: auto;
                height: 270px;
            }
            #offerSquares {
                width: 300px;
                align-items: center;
                margin-bottom: 50px;
            }
            #offerSection {
                height: 1700px;
            }
            
        }

        @media screen and (max-width: 599px) {
            .offerSquare {
                float: none;
                width: 300px;
                align-self: center;
                margin-left: auto;
                margin-right: auto;
                height: 250px;
            }
            #offerSquares {
                width: 300px;
                align-items: center;
            }
            #offerSection {
                height: 1100px;
            }
            #singleOpinion {
                width: 300px;
                height: 250px;
            }
            #opinion {
                max-width: 300px;
            }
            #welcome img {
                width: 300px;
                height: auto;
                margin: 0;
            }
            #welcome h1 {
                margin: 0;
            }
            #about img {
                width: 300px;
                height: auto;
            }
            #contactForm {
                width: 300px;
            }
            #welcomeSection {
                height: 800px;
                padding-top: 130px;
            }
            #aboutSection { 
                padding-top: 140px;
                height: 1000px;
            }
            #offerSection {
                padding-top: 80px;
                height: 1900px;
            }
            #opinionSection {
                padding-top: 80px;
                height: 2500px;
            }
            #logo {
                width: 150px;
                text-align: center;
                align-self: center;
                margin-left: auto;
                margin-right: auto;
                float: none;
            }
            #navibar {
                width: 350px;
                align-self: center;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                float: none;
                clear: both;
            }
            #navibar li {
                width: 50px;
                font-size: 14px;
                margin: 2.5;
            }

            #footerNavibar {
                width: 350px;
                align-self: center;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                float: none;
                clear: both;
            }

            #footerNavibar li{
                width: 50px;
                font-size: 14px;
                margin: 2.5;
            }
            
        }

</style>
