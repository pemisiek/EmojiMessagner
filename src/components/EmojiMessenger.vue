<template>
    <div>
        <main>
          <section id="welcomeSection">
            <div id="welcomeContent">
              <h1>Welcome to emoji messenger app!</h1>
              <p>Use this simple web app to send messages written with emoticons.</p>
              <ul>
                <a href="#guide" ><li class="btn mpcoding-yellow-btn mb-1">Check the guide!</li></a>
                <a href="#application" ><li class="btn mpcoding-gray-btn">Go straight to the app!</li></a>
              </ul>
            </div>
          </section>
        
          <a id="guide"/>
          <section id="guideSection">
            <div id="guideContent">
              <h4 class="mb-4">Emoji message generator guide.</h4>
              <div class="alert alert-success">
                <ul>
                  <li><b>Step 1: </b>Select the height of your letters (9,  11 or 13 emoji)</li>
                  <li><b>Step 2: </b>Choose a word or a sentence you want to convert.</li>
                  <li><b>Step 3: </b>Pick emoji which you want to use as a background.</li>
                  <li><b>Step 4: </b>Pick emoji which you want to use as a color of your letters or numbers.</li>
                  <li><b>Step 5: </b>Send a message to your friend! Enjoy!</li>
                </ul>
              </div>
              <h4>Use one of the examples.</h4>
              <div class="alert alert-danger cur-p" @click="set('❤', '💗', 'I love you')">
                (❤, 💗) - I love you
              </div>
              <div class="alert alert-info cur-p" @click="set('🌞', '🤍', 'Good morning')">
                (🌞, 🤍) - Good morning
              </div>
              <div class="alert alert-primary cur-p" @click="set('🌙', '✨', 'Good night')">
                (🌙, ✨) - Good night
              </div>
            </div>
          </section>

          <a id="application"/>
          <section id="appSection">
            <div id="appContent">
              <h4 class="mb-4">Create your own emoji message.</h4>
              
              
              <div id="appInputs" v-if="show_form">
                <div class="alert alert-warning" v-if="this.notice">
                  {{ this.notice }}
                </div>
                <form @submit.prevent="Combine()" >
                  height: 
                    <select @change="tabChange" v-model="choice" required>
                      <option disabled value="">Choose the height</option>
                      <option value="h13">13 emoji</option>
                      <option value="h11">11 emoji</option>
                      <option value="h9">9 emoji</option>
                    </select>
                    <input id="in" type="text" v-model="entry" placeholder="Your text (ex. A)" required>
                    <span>required</span><br>
                    <input @change="emojiChange()" id="in" type="text" v-model="emoji1" placeholder="Background Emoji (ex. 🖤)" required>
                    <span>required</span><br>
                    <input @change="emojiChange()" id="in" type="text" v-model="emoji2" placeholder="Content Emoji (ex. 💛)" required>
                    <span>required</span><br>
                    <br>
                    <button type="submit" class="btn btn-success">Create</button>
                    <br>
                    Preview: <br>
                    <textarea id="visual" v-model="visualization"></textarea>
                    <br>
                </form>
              </div>
              <div v-if="!show_form" id="appResults">
                <button class="btn btn-primary mb-1" @click="copyAll()">Copy all</button><br>
                <textarea v-model="word" placeholder="Your text" id="textarea" col="6">

                </textarea><br>
                <button class="btn btn-success" @click="restart()">Done</button>
                <br>
              </div>
            </div>
          </section>
        </main>
        
    </div>
</template>
<script>
const removeDiacritics = require('diacritics').remove;
export default {
    name: 'EmojiMessenger',
    data() {
        return {
            entry: '',
                    emoji1: '',
                    emoji2: '',
                    letters: [{
                        id: 0,
                        letter: 'A',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 1,
                        letter: 'B',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 2,
                        letter: 'C',
                        sign: `oooooo\noxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\noxxxxx\n`
                    },{
                        id: 3,
                        letter: 'D',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 4,
                        letter: 'E',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 5,
                        letter: 'F',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxoo\nxxxxoo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 6,
                        letter: 'G',
                        sign: `oooooo\noxxxxx\nxoooox\nxooooo\nxooooo\nxooooo\nxooooo\nxooxxx\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 7,
                        letter: 'H',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 8,
                        letter: 'I',
                        sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 9,
                        letter: 'J',
                        sign: `oooooo\noxxxxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nxoxxoo\nxxxxoo\n`
                    },{
                        id: 10,
                        letter: 'K',
                        sign: `oooooo\nxoooox\nxoooxo\nxooxoo\nxooxoo\nxoxooo\nxxoooo\nxxoooo\nxoxooo\nxooxoo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 11,
                        letter: 'L',
                        sign: `oooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 12,
                        letter: 'M',
                        sign: `oooooo\nxoooox\nxxooxx\nxxooxx\nxoxxox\nxoxxox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 13,
                        letter: 'N',
                        sign: `oooooo\nxoooox\nxxooox\nxxooox\nxoxoox\nxoxoox\nxoxoox\nxooxox\nxooxox\nxooxox\nxoooxx\nxoooxx\nxoooox\n`
                    },{
                        id: 14,
                        letter: 'O',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 15,
                        letter: 'P',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 16,
                        letter: 'Q',
                        sign: `oooooo\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxxxxxx\noooxxo\noooxxo\nooooxx\n`
                    },{
                        id: 17,
                        letter: 'R',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\nxxoooo\nxoxooo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 18,
                        letter: 'S',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\nooooox\nooooox\nooooox\nooooox\nxxxxxx\n`
                    },{
                        id: 19,
                        letter: 'T',
                        sign: `oooooo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 20,
                        letter: 'V',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\n`
                    },{
                        id: 21,
                        letter: 'W',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxoxxox\nxoxxox\nxoxxox\noxooxo\noxooxo\n`
                    },{
                        id: 22,
                        letter: 'U',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 23,
                        letter: 'X',
                        sign: `oooooo\nxoooox\nxoooox\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\noxooxo\noxooxo\noxooxo\nxoooox\nxoooox\n`
                    },{
                        id: 24,
                        letter: 'Y',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 25,
                        letter: 'Z',
                        sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 26,
                      letter: '1',
                      sign: `oooooo\noxxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                      id: 27,
                      letter: '2',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nooooox\nooooxo\noooxoo\nooxooo\noxoooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 28,
                      letter: '3',
                      sign: `oooooo\nxxxxxo\nooooox\nooooox\nooooox\nooooox\nooxxxo\nooxxxo\nooooox\nooooox\nooooox\nooooox\nxxxxxo\n`
                    },{
                      id: 29,
                      letter: '4',
                      sign: `oooooo\noooxoo\noooxoo\nooxooo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxoxxoo\nxxxxxx\nooxxoo\nooxxoo\n`
                    },{
                      id: 30,
                      letter: '5',
                      sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxoxxxo\nxxooox\nxoooox\nooooox\nooooox\nooooox\nxoooox\nxxxxxx\n`
                    },{
                      id: 31,
                      letter: '6',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxooooo\nxooooo\nxooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 32,
                      letter: '7',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxooooo\n`
                    },{
                      id: 33,
                      letter: '8',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nosxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 34,
                      letter: '9',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxx\nooooox\nooooox\nxoooox\noxxxxo\n`
                    },{
                      id: 35,
                      letter: '0',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxooxox\nxooxox\nxoxoox\nxoxoox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 36,
                      letter: '!',
                      sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\noooooo\noooooo\nooxxoo\nooxxoo\n`
                    },{
                      id: 37,
                      letter: '@',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxooxxx\nxoxoox\nxoxoox\nxoxoox\nxooxxx\nxooooo\nxooooo\noxxxxx\n`
                    },{
                      id: 38,
                      letter: '#',
                      sign: `oooooo\nooxoox\nxxxxxx\nooxoox\noxooxo\noxooxo\noxooxo\noxooxo\noxooxo\noxooxo\nxooxoo\nxxxxxx\nxooxoo\n`
                    },{
                      id: 39,
                      letter: '$',
                      sign: `oooooo\nooxxoo\nxxxxxx\nxoxxoo\nxoxxoo\nxoxxoo\nxoxxoo\nxxxxxx\nooxxox\nooxxox\nooxxox\nxxxxxx\nooxxoo\n`
                    },{
                      id: 40,
                      letter: '%',
                      sign: `oooooo\noxxoox\nxooxox\nxooxxo\noxxoxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoxxo\noxxoox\nxoxoox\nxooxxo\n`
                    },{
                      id: 41,
                      letter: '^',
                      sign: `oooooo\nooxxoo\noxooxo\nxoooox\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 42,
                      letter: '&',
                      sign: `oooooo\noxxxxo\nxoooox\nxooooo\nxooooo\nxoooo\noxoooo\nxoxoox\nxooxox\nxooooxx\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 43,
                      letter: '*',
                      sign: `oooooo\nooxxoo\nxoxxox\noxxxxo\nxoxxox\nooxxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 44,
                      letter: '(',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 45,
                      letter: ')',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 46,
                      letter: '-',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\nxxxxxx\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 47,
                      letter: '_',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\n`
                    },{
                      id: 48,
                      letter: '+',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 49,
                      letter: '=',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\noooooo\noooooo\nxxxxxx\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 50,
                      letter: '[',
                      sign: `oooooo\noxxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxxxoo\n`
                    },{
                      id: 51,
                      letter: ']',
                      sign: `oooooo\nooxxxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxxo\n`
                    },{
                      id: 51,
                      letter: '{',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\nxooooo\nxooooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 52,
                      letter: '}',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooox\nooooox\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 53,
                      letter: '|',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 54,
                      letter: '\\',
                      sign: `oooooo\nxooooo\nxooooo\noxoooo\noxoooo\nooxooo\nooxooo\noooxoo\noooxoo\nooooxo\nooooxo\nooooox\nooooox\n`
                    },{
                      id: 55,
                      letter: ';',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\noooxoo\nooxooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 56,
                      letter: ':',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\nooxxoo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 57,
                      letter: '\'',
                      sign: `oooooo\noooxoo\noooxoo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 58,
                      letter: '"',
                      sign: `oooooo\noxoxoo\noxoxoo\noxoxoo\noxoxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 59,
                      letter: '<',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooooxx\nooxxoo\nxxoooo\nxxoooo\nooxxoo\nooooxx\noooooo\noooooo\noooooo\n`
                    },{
                      id: 60,
                      letter: ',',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\noooxoo\nooxooo\n`
                    },{
                      id: 61,
                      letter: '>',
                      sign: `oooooo\noooooo\noooooo\noooooo\nxxoooo\nooxxoo\nooooxx\nooooxx\nooxxoo\nxxoooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 62,
                      letter: '.',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\n`
                    },{
                      id: 63,
                      letter: '?',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\noooxoo\nooxooo\nooxooo\nooxooo\noooooo\nooxooo\nooxooo\nooxooo\n`
                    },{
                      id: 64,
                      letter: '/',
                      sign: `oooooo\nooooox\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxooooo\n`
                    },{
                      id: 65,
                      letter: '~',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noxxoox\nxooxxo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 66,
                      letter: '`',
                      sign: `oooooo\nooxooo\nooxooo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    }],
                    h13: [{
                        id: 0,
                        letter: 'A',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 1,
                        letter: 'B',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 2,
                        letter: 'C',
                        sign: `oooooo\noxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\noxxxxx\n`
                    },{
                        id: 3,
                        letter: 'D',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 4,
                        letter: 'E',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 5,
                        letter: 'F',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxoo\nxxxxoo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 6,
                        letter: 'G',
                        sign: `oooooo\noxxxxx\nxoooox\nxooooo\nxooooo\nxooooo\nxooooo\nxooxxx\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 7,
                        letter: 'H',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 8,
                        letter: 'I',
                        sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 9,
                        letter: 'J',
                        sign: `oooooo\noxxxxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nxoxxoo\nxxxxoo\n`
                    },{
                        id: 10,
                        letter: 'K',
                        sign: `oooooo\nxoooox\nxoooxo\nxooxoo\nxooxoo\nxoxooo\nxxoooo\nxxoooo\nxoxooo\nxooxoo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 11,
                        letter: 'L',
                        sign: `oooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 12,
                        letter: 'M',
                        sign: `oooooo\nxoooox\nxxooxx\nxxooxx\nxoxxox\nxoxxox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 13,
                        letter: 'N',
                        sign: `oooooo\nxoooox\nxxooox\nxxooox\nxoxoox\nxoxoox\nxoxoox\nxooxox\nxooxox\nxooxox\nxoooxx\nxoooxx\nxoooox\n`
                    },{
                        id: 14,
                        letter: 'O',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 15,
                        letter: 'P',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 16,
                        letter: 'Q',
                        sign: `oooooo\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxxxxxx\noooxxo\noooxxo\nooooxx\n`
                    },{
                        id: 17,
                        letter: 'R',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\nxxoooo\nxoxooo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 18,
                        letter: 'S',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\nooooox\nooooox\nooooox\nooooox\nxxxxxx\n`
                    },{
                        id: 19,
                        letter: 'T',
                        sign: `oooooo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 20,
                        letter: 'V',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\n`
                    },{
                        id: 21,
                        letter: 'W',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxoxxox\nxoxxox\nxoxxox\noxooxo\noxooxo\n`
                    },{
                        id: 22,
                        letter: 'U',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 23,
                        letter: 'X',
                        sign: `oooooo\nxoooox\nxoooox\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\noxooxo\noxooxo\noxooxo\nxoooox\nxoooox\n`
                    },{
                        id: 24,
                        letter: 'Y',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 25,
                        letter: 'Z',
                        sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 26,
                      letter: '1',
                      sign: `oooooo\noxxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                      id: 27,
                      letter: '2',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nooooox\nooooxo\noooxoo\nooxooo\noxoooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 28,
                      letter: '3',
                      sign: `oooooo\nxxxxxo\nooooox\nooooox\nooooox\nooooox\nooxxxo\nooxxxo\nooooox\nooooox\nooooox\nooooox\nxxxxxo\n`
                    },{
                      id: 29,
                      letter: '4',
                      sign: `oooooo\noooxoo\noooxoo\nooxooo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxoxxoo\nxxxxxx\nooxxoo\nooxxoo\n`
                    },{
                      id: 30,
                      letter: '5',
                      sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxoxxxo\nxxooox\nxoooox\nooooox\nooooox\nooooox\nxoooox\nxxxxxx\n`
                    },{
                      id: 31,
                      letter: '6',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxooooo\nxooooo\nxooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 32,
                      letter: '7',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxooooo\n`
                    },{
                      id: 33,
                      letter: '8',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nosxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 34,
                      letter: '9',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxx\nooooox\nooooox\nxoooox\noxxxxo\n`
                    },{
                      id: 35,
                      letter: '0',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxooxox\nxooxox\nxoxoox\nxoxoox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 36,
                      letter: '!',
                      sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\noooooo\noooooo\nooxxoo\nooxxoo\n`
                    },{
                      id: 37,
                      letter: '@',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxooxxx\nxoxoox\nxoxoox\nxoxoox\nxooxxx\nxooooo\nxooooo\noxxxxx\n`
                    },{
                      id: 38,
                      letter: '#',
                      sign: `oooooo\nooxoox\nxxxxxx\nooxoox\noxooxo\noxooxo\noxooxo\noxooxo\noxooxo\noxooxo\nxooxoo\nxxxxxx\nxooxoo\n`
                    },{
                      id: 39,
                      letter: '$',
                      sign: `oooooo\nooxxoo\nxxxxxx\nxoxxoo\nxoxxoo\nxoxxoo\nxoxxoo\nxxxxxx\nooxxox\nooxxox\nooxxox\nxxxxxx\nooxxoo\n`
                    },{
                      id: 40,
                      letter: '%',
                      sign: `oooooo\noxxoox\nxooxox\nxooxxo\noxxoxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoxxo\noxxoox\nxoxoox\nxooxxo\n`
                    },{
                      id: 41,
                      letter: '^',
                      sign: `oooooo\nooxxoo\noxooxo\nxoooox\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 42,
                      letter: '&',
                      sign: `oooooo\noxxxxo\nxoooox\nxooooo\nxooooo\nxoooo\noxoooo\nxoxoox\nxooxox\nxooooxx\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 43,
                      letter: '*',
                      sign: `oooooo\nooxxoo\nxoxxox\noxxxxo\nxoxxox\nooxxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 44,
                      letter: '(',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 45,
                      letter: ')',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 46,
                      letter: '-',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\nxxxxxx\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 47,
                      letter: '_',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\n`
                    },{
                      id: 48,
                      letter: '+',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 49,
                      letter: '=',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\noooooo\noooooo\nxxxxxx\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 50,
                      letter: '[',
                      sign: `oooooo\noxxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxxxoo\n`
                    },{
                      id: 51,
                      letter: ']',
                      sign: `oooooo\nooxxxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxxo\n`
                    },{
                      id: 51,
                      letter: '{',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\nxooooo\nxooooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 52,
                      letter: '}',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooox\nooooox\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 53,
                      letter: '|',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 54,
                      letter: '\\',
                      sign: `oooooo\nxooooo\nxooooo\noxoooo\noxoooo\nooxooo\nooxooo\noooxoo\noooxoo\nooooxo\nooooxo\nooooox\nooooox\n`
                    },{
                      id: 55,
                      letter: ';',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\noooxoo\nooxooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 56,
                      letter: ':',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\nooxxoo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 57,
                      letter: '\'',
                      sign: `oooooo\noooxoo\noooxoo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 58,
                      letter: '"',
                      sign: `oooooo\noxoxoo\noxoxoo\noxoxoo\noxoxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 59,
                      letter: '<',
                      sign: `oooooo\noooooo\noooooo\noooooo\nooooxx\nooxxoo\nxxoooo\nxxoooo\nooxxoo\nooooxx\noooooo\noooooo\noooooo\n`
                    },{
                      id: 60,
                      letter: ',',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\noooxoo\nooxooo\n`
                    },{
                      id: 61,
                      letter: '>',
                      sign: `oooooo\noooooo\noooooo\noooooo\nxxoooo\nooxxoo\nooooxx\nooooxx\nooxxoo\nxxoooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 62,
                      letter: '.',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\n`
                    },{
                      id: 63,
                      letter: '?',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\noooxoo\nooxooo\nooxooo\nooxooo\noooooo\nooxooo\nooxooo\nooxooo\n`
                    },{
                      id: 64,
                      letter: '/',
                      sign: `oooooo\nooooox\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxooooo\n`
                    },{
                      id: 65,
                      letter: '~',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noxxoox\nxooxxo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 66,
                      letter: '`',
                      sign: `oooooo\nooxooo\nooxooo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    }],
                    h11: [{
                        id: 0,
                        letter: 'A',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 1,
                        letter: 'B',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 2,
                        letter: 'C',
                        sign: `oooooo\noxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\noxxxxx\n`
                    },{
                        id: 3,
                        letter: 'D',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 4,
                        letter: 'E',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxxxxxx\nxxxxxx\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 5,
                        letter: 'F',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxxxxoo\nxxxxoo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 6,
                        letter: 'G',
                        sign: `oooooo\noxxxxx\nxoooox\nxooooo\nxooooo\nxooooo\nxooxxx\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 7,
                        letter: 'H',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 8,
                        letter: 'I',
                        sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 9,
                        letter: 'J',
                        sign: `oooooo\noxxxxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nxoxxoo\nxxxxoo\n`
                    },{
                        id: 10,
                        letter: 'K',
                        sign: `oooooo\nxoooox\nxoooxo\nxooxoo\nxoxooo\nxxoooo\nxxoooo\nxoxooo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 11,
                        letter: 'L',
                        sign: `oooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 12,
                        letter: 'M',
                        sign: `oooooo\nxoooox\nxxooxx\nxxooxx\nxoxxox\nxoxxox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 13,
                        letter: 'N',
                        sign: `oooooo\nxoooox\nxxooox\nxxooox\nxoxoox\nxoxoox\nxooxox\nxooxox\nxoooxx\nxoooxx\nxoooox\n`
                    },{
                        id: 14,
                        letter: 'O',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 15,
                        letter: 'P',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\nxooooo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 16,
                        letter: 'Q',
                        sign: `oooooo\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxxxxxx\noooxxo\noooxxo\nooooxx\n`
                    },{
                        id: 17,
                        letter: 'R',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxxxxxo\nxxoooo\nxoxooo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 18,
                        letter: 'S',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\nooooox\nooooox\nooooox\nxxxxxx\n`
                    },{
                        id: 19,
                        letter: 'T',
                        sign: `oooooo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 20,
                        letter: 'V',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\n`
                    },{
                        id: 21,
                        letter: 'W',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoxxox\nxoxxox\nxoxxox\nxoxxox\noxooxo\noxooxo\n`
                    },{
                        id: 22,
                        letter: 'U',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 23,
                        letter: 'X',
                        sign: `oooooo\nxoooox\nxoooox\noxooxo\nooxxoo\nooxxoo\nooxxoo\noxooxo\noxooxo\nxoooox\nxoooox\n`
                    },{
                        id: 24,
                        letter: 'Y',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 25,
                        letter: 'Z',
                        sign: `oooooo\nxxxxxx\nooooox\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 26,
                      letter: '1',
                      sign: `oooooo\noxxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                      id: 27,
                      letter: '2',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nooooox\nooooxo\noooxoo\nooxooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 28,
                      letter: '3',
                      sign: `oooooo\nxxxxxo\nooooox\nooooox\nooooox\nooxxxo\nooxxxo\nooooox\nooooox\nooooox\nxxxxxo\n`
                    },{
                      id: 29,
                      letter: '4',
                      sign: `oooooo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxoxxoo\nxxxxxx\nooxxoo\nooxxoo\n`
                    },{
                      id: 30,
                      letter: '5',
                      sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxooooo\nxoxxxo\nxxooox\nxoooox\nooooox\nxoooox\nxxxxxx\n`
                    },{
                      id: 31,
                      letter: '6',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxooooo\nxooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 32,
                      letter: '7',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\nooooxo\noooxoo\nooxooo\noxoooo\noxoooo\nxooooo\nxooooo\n`
                    },{
                      id: 33,
                      letter: '8',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 34,
                      letter: '9',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxx\nooooox\nooooox\nxoooox\noxxxxo\n`
                    },{
                      id: 35,
                      letter: '0',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxooxox\nxoxoox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 36,
                      letter: '!',
                      sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\noooooo\noooooo\nooxxoo\nooxxoo\n`
                    },{
                      id: 37,
                      letter: '@',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxooxxx\nxoxoox\nxoxoox\nxoxoox\nxooxxx\nxooooo\noxxxxx\n`
                    },{
                      id: 38,
                      letter: '#',
                      sign: `oooooo\nooxoox\nxxxxxx\nooxoox\noxooxo\noxooxo\noxooxo\noxooxo\nxooxoo\nxxxxxx\nxooxoo\n`
                    },{
                      id: 39,
                      letter: '$',
                      sign: `oooooo\nooxxoo\nxxxxxx\nxoxxoo\nxoxxoo\nxoxxoo\nxxxxxx\nooxxox\nooxxox\nxxxxxx\nooxxoo\n`
                    },{
                      id: 40,
                      letter: '%',
                      sign: `oooooo\noxxoox\noxxoxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoxxo\nxooxxo\n`
                    },{
                      id: 41,
                      letter: '^',
                      sign: `oooooo\nooxxoo\noxooxo\nxoooox\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 42,
                      letter: '&',
                      sign: `oooooo\noxxxxo\nxoooox\nxooooo\nxoooo\noxoooo\nxoxoox\nxooxox\nxooooxx\nxoooox\noxxxxo\n`
                    },{
                      id: 43,
                      letter: '*',
                      sign: `oooooo\nooxxoo\nxoxxox\noxxxxo\nxoxxox\nooxxoo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 44,
                      letter: '(',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 45,
                      letter: ')',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 46,
                      letter: '-',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\nxxxxxx\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 47,
                      letter: '_',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\n`
                    },{
                      id: 48,
                      letter: '+',
                      sign: `oooooo\noooooo\noooooo\nooxxoo\nooxxoo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\noooooo\noooooo\n`
                    },{
                      id: 49,
                      letter: '=',
                      sign: `oooooo\noooooo\noooooo\noooooo\nxxxxxx\noooooo\noooooo\nxxxxxx\noooooo\noooooo\noooooo\n`
                    },{
                      id: 50,
                      letter: '[',
                      sign: `oooooo\noxxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxxxoo\n`
                    },{
                      id: 51,
                      letter: ']',
                      sign: `oooooo\nooxxxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxxo\n`
                    },{
                      id: 51,
                      letter: '{',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\nxooooo\nxooooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 52,
                      letter: '}',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooox\nooooox\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 53,
                      letter: '|',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 54,
                      letter: '\\',
                      sign: `oooooo\nxooooo\noxoooo\noxoooo\nooxooo\nooxooo\noooxoo\noooxoo\nooooxo\nooooxo\nooooox\n`
                    },{
                      id: 55,
                      letter: ';',
                      sign: `oooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\noooxoo\nooxooo\noooooo\noooooo\n`
                    },{
                      id: 56,
                      letter: ':',
                      sign: `oooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\nooxxoo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 57,
                      letter: '\'',
                      sign: `oooooo\noooxoo\noooxoo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 58,
                      letter: '"',
                      sign: `oooooo\noxoxoo\noxoxoo\noxoxoo\noxoxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 59,
                      letter: '<',
                      sign: `oooooo\noooooo\noooooo\nooooxx\nooxxoo\nxxoooo\nxxoooo\nooxxoo\nooooxx\noooooo\noooooo\n`
                    },{
                      id: 60,
                      letter: ',',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\noooxoo\nooxooo\n`
                    },{
                      id: 61,
                      letter: '>',
                      sign: `oooooo\noooooo\noooooo\nxxoooo\nooxxoo\nooooxx\nooooxx\nooxxoo\nxxoooo\noooooo\noooooo\n`
                    },{
                      id: 62,
                      letter: '.',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\n`
                    },{
                      id: 63,
                      letter: '?',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\noooxoo\nooxooo\nooxooo\nooxooo\noooooo\nooxooo\nooxooo\n`
                    },{
                      id: 64,
                      letter: '/',
                      sign: `oooooo\nooooox\nooooxo\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\noxoooo\nxooooo\n`
                    },{
                      id: 65,
                      letter: '~',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noxxoox\nxooxxo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 66,
                      letter: '`',
                      sign: `oooooo\nooxooo\nooxooo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    }],
                    h9: [{
                        id: 0,
                        letter: 'A',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 1,
                        letter: 'B',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 2,
                        letter: 'C',
                        sign: `oooooo\noxxxxx\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\noxxxxx\n`
                    },{
                        id: 3,
                        letter: 'D',
                        sign: `oooooo\nxxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxo\n`
                    },{
                        id: 4,
                        letter: 'E',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxxxxxx\nxxxxxx\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 5,
                        letter: 'F',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxxxxoo\nxxxxoo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 6,
                        letter: 'G',
                        sign: `oooooo\noxxxxx\nxoooox\nxooooo\nxooooo\nxooxxx\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 7,
                        letter: 'H',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxxxxxx\nxxxxxx\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 8,
                        letter: 'I',
                        sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 9,
                        letter: 'J',
                        sign: `oooooo\noxxxxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nxoxxoo\nxxxxoo\n`
                    },{
                        id: 10,
                        letter: 'K',
                        sign: `oooooo\nxoooxo\nxooxoo\nxoxooo\nxxoooo\nxxoooo\nxoxooo\nxooxoo\nxoooxo\n`
                    },{
                        id: 11,
                        letter: 'L',
                        sign: `oooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxooooo\nxxxxxx\n`
                    },{
                        id: 12,
                        letter: 'M',
                        sign: `oooooo\nxoooox\nxxooxx\nxxooxx\nxoxxox\nxoxxox\nxoooox\nxoooox\nxoooox\n`
                    },{
                        id: 13,
                        letter: 'N',
                        sign: `oooooo\nxoooox\nxxooox\nxxooox\nxoxoox\nxooxox\nxoooxx\nxoooxx\nxoooox\n`
                    },{
                        id: 14,
                        letter: 'O',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 15,
                        letter: 'P',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxxxxxo\nxooooo\nxooooo\nxooooo\n`
                    },{
                        id: 16,
                        letter: 'Q',
                        sign: `oooooo\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoxxox\nxxxxxx\noooxxo\nooooxx\n`
                    },{
                        id: 17,
                        letter: 'R',
                        sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxxxxxo\nxoxooo\nxooxoo\nxoooxo\nxoooox\n`
                    },{
                        id: 18,
                        letter: 'S',
                        sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxxxxxx\nxxxxxx\nooooox\nooooox\nxxxxxx\n`
                    },{
                        id: 19,
                        letter: 'T',
                        sign: `oooooo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 20,
                        letter: 'V',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\noxooxo\noxooxo\noxooxo\nooxxoo\nooxxoo\n`
                    },{
                        id: 21,
                        letter: 'W',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoxxox\nxoxxox\nxoxxox\nxoxxox\noxooxo\n`
                    },{
                        id: 22,
                        letter: 'U',
                        sign: `oooooo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                        id: 23,
                        letter: 'X',
                        sign: `oooooo\nxoooox\noxooxo\nooxxoo\nooxxoo\nooxxoo\noxooxo\noxooxo\nxoooox\n`
                    },{
                        id: 24,
                        letter: 'Y',
                        sign: `oooooo\nxoooox\nxoooox\noxooxo\noxooxo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                        id: 25,
                        letter: 'Z',
                        sign: `oooooo\nxxxxxx\nooooox\nooooxo\noooxoo\nooxooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 26,
                      letter: '1',
                      sign: `oooooo\noxxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\n`
                    },{
                      id: 27,
                      letter: '2',
                      sign: `oooooo\nooxxxo\noxooox\nooooox\nooooxo\noooxoo\nooxooo\noxoooo\noxxxxx\n`
                    },{
                      id: 28,
                      letter: '3',
                      sign: `oooooo\noxxxxo\nooooox\nooooox\nooxxxo\nooxxxo\nooooox\nooooox\noxxxxo\n`
                    },{
                      id: 29,
                      letter: '4',
                      sign: `oooooo\nooxooo\nooxooo\noxoooo\nxooooo\nxoxxoo\nxxxxxx\nooxxoo\nooxxoo\n`
                    },{
                      id: 30,
                      letter: '5',
                      sign: `oooooo\nxxxxxx\nxooooo\nxooooo\nxoxxxo\nxxooox\nxoooox\nxoooox\nxxxxxx\n`
                    },{
                      id: 31,
                      letter: '6',
                      sign: `oooooo\noxxxxo\nxoooox\nxooooo\nxooooo\nxxxxxo\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 32,
                      letter: '7',
                      sign: `oooooo\noxxxxx\nooooox\nooooxo\nooooxo\noooxoo\nooxooo\noxoooo\noxoooo\n`
                    },{
                      id: 33,
                      letter: '8',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\noxxxxo\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 34,
                      letter: '9',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\noxxxxx\nooooox\nxoooox\noxxxxo\n`
                    },{
                      id: 35,
                      letter: '0',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\nxooxox\nxoxoox\nxoooox\nxoooox\noxxxxo\n`
                    },{
                      id: 36,
                      letter: '!',
                      sign: `oooooo\nooxxoo\nooxxoo\nooxxoo\nooxxoo\noooooo\noooooo\nooxxoo\nooxxoo\n`
                    },{
                      id: 37,
                      letter: '@',
                      sign: `oooooo\noxxxxo\nxoooox\nxooxxx\nxoxoox\nxoxoox\nxooxxx\nxooooo\noxxxxx\n`
                    },{
                      id: 38,
                      letter: '#',
                      sign: `oooooo\nooxoox\nxxxxxx\nooxoox\noxooxo\noxooxo\nxooxoo\nxxxxxx\nxooxoo\n`
                    },{
                      id: 39,
                      letter: '$',
                      sign: `oooooo\nxxxxxx\nxoxxoo\nxoxxoo\nxxxxxx\nooxxox\nooxxox\nxxxxxx\nooxxoo\n`
                    },{
                      id: 40,
                      letter: '%',
                      sign: `oooooo\noxxoox\noxxoxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoxxo\nxooxxo\n`
                    },{
                      id: 41,
                      letter: '^',
                      sign: `oooooo\nooxxoo\noxooxo\nxoooox\noooooo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 42,
                      letter: '&',
                      sign: `oooooo\noxxxxo\nxoooox\nxooooo\nxoooo\noxoooo\nxoxoox\nxooxox\nxooooxx\nxoooox\noxxxxo\n`
                    },{
                      id: 43,
                      letter: '*',
                      sign: `oooooo\nooxxoo\nxoxxox\noxxxxo\nxoxxox\nooxxoo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 44,
                      letter: '(',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 45,
                      letter: ')',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 46,
                      letter: '-',
                      sign: `oooooo\noooooo\noooooo\noooooo\nxxxxxx\nxxxxxx\noooooo\noooooo\noooooo\n`
                    },{
                      id: 47,
                      letter: '_',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nxxxxxx\n`
                    },{
                      id: 48,
                      letter: '+',
                      sign: `oooooo\noooooo\nooxxoo\nooxxoo\nxxxxxx\nxxxxxx\nooxxoo\nooxxoo\noooooo\n`
                    },{
                      id: 49,
                      letter: '=',
                      sign: `oooooo\noooooo\noooooo\nxxxxxx\noooooo\noooooo\nxxxxxx\noooooo\noooooo\n`
                    },{
                      id: 50,
                      letter: '[',
                      sign: `oooooo\noxxxoo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxoooo\noxxxoo\n`
                    },{
                      id: 51,
                      letter: ']',
                      sign: `oooooo\nooxxxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooooxo\nooxxxo\n`
                    },{
                      id: 51,
                      letter: '{',
                      sign: `oooooo\nooxxoo\noxoooo\noxoooo\nxooooo\nxooooo\noxoooo\noxoooo\nooxxoo\n`
                    },{
                      id: 52,
                      letter: '}',
                      sign: `oooooo\nooxxoo\nooooxo\nooooxo\nooooox\nooooox\nooooxo\nooooxo\nooxxoo\n`
                    },{
                      id: 53,
                      letter: '|',
                      sign: `oooooo\nxxxxxx\nooooox\nooooxo\noooxoo\noxoooo\noxoooo\nxooooo\nxxxxxx\n`
                    },{
                      id: 54,
                      letter: '\\',
                      sign: `oooooo\nxooooo\noxoooo\nooxooo\nooxooo\noooxoo\noooxoo\nooooxo\nooooox\n`
                    },{
                      id: 55,
                      letter: ';',
                      sign: `oooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\noooxoo\nooxooo\noooooo\n`
                    },{
                      id: 56,
                      letter: ':',
                      sign: `oooooo\noooooo\nooxxoo\nooxxoo\noooooo\nooxxoo\nooxxoo\noooooo\noooooo\n`
                    },{
                      id: 57,
                      letter: '\'',
                      sign: `oooooo\noooxoo\noooxoo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 58,
                      letter: '"',
                      sign: `oooooo\noxoxoo\noxoxoo\noxoxoo\noxoxoo\noooooo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 59,
                      letter: '<',
                      sign: `oooooo\noooooo\nooooxx\nooxxoo\nxxoooo\nxxoooo\nooxxoo\nooooxx\noooooo\n`
                    },{
                      id: 60,
                      letter: ',',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\noooxoo\nooxooo\n`
                    },{
                      id: 61,
                      letter: '>',
                      sign: `oooooo\noooooo\nxxoooo\nooxxoo\nooooxx\nooooxx\nooxxoo\nxxoooo\noooooo\n`
                    },{
                      id: 62,
                      letter: '.',
                      sign: `oooooo\noooooo\noooooo\noooooo\noooooo\noooooo\nooxxoo\nooxxoo\noooooo\n`
                    },{
                      id: 63,
                      letter: '?',
                      sign: `oooooo\noxxxxo\nxoooox\nxoooox\noooxoo\nooxooo\nooxooo\noooooo\nooxooo\n`
                    },{
                      id: 64,
                      letter: '/',
                      sign: `oooooo\nooooox\nooooxo\noooxoo\noooxoo\nooxooo\nooxooo\noxoooo\nxooooo\n`
                    },{
                      id: 65,
                      letter: '~',
                      sign: `oooooo\noooooo\noooooo\noooooo\noxxoox\nxooxxo\noooooo\noooooo\noooooo\n`
                    },{
                      id: 66,
                      letter: '`',
                      sign: `oooooo\nooxooo\nooxooo\noooxoo\noooxoo\noooooo\noooooo\noooooo\noooooo\n`
                    }],
                    choice: '',
                    visualization: `🖤🖤🖤🖤🖤🖤\n🖤💛💛💛💛🖤\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛💛💛💛💛💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n💛🖤🖤🖤🖤💛\n`,
                    word: '',
                    show_form: true,
                    notice: ''
        }
    }, 
    methods: {
                Combine() {
                    this.entry = removeDiacritics(this.entry)
                    this.word=''
                    const emoji1 = this.emoji1
                    const emoji2 = this.emoji2
                    if(!this.validEmoji(this.emoji1)){
                      this.notice = 'Background emoji is not an emoji'
                    } else if(!this.validEmoji(this.emoji2)) {
                      this.notice = 'Content emoji is not an emoji'
                    } else {
                      this.show_form = false
                      this.entry.toUpperCase().split("").forEach(element => {
                        this.letters.find(item => {
                            if(item.letter === element) {
                                item.sign = item.sign.replaceAll("o", emoji1).replaceAll("x", emoji2)
                                this.word += item.sign
                            }
                        })
                    });
                    this.notice = ''
                    }
                    
                },
                copyAll() {
                    var copyText = document.getElementById("textarea");
                    copyText.select();
                    copyText.setSelectionRange(0, 99999)
                    document.execCommand("copy");
                    alert("Copied the text!");
                }, 
                restart() {
                    location.reload()
                },
                validEmoji(emoji) {
                  var re = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
                  return re.test(emoji)
                },
                tabChange() {
                  console.log(this.choice)
                  if(this.choice == 'h13') {
                    this.letters = this.h13
                    var test = `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    if(this.emoji1 || this.emoji2){
                      this.visualization = test.replaceAll("o", this.emoji1).replaceAll("x", this.emoji2)
                    } else {
                      this.visualization = test.replaceAll("o", '🖤').replaceAll("x", '💛')
                    }
                    
                  } else if (this.choice == 'h11') {
                    this.letters = this.h11
                    var test = `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    if(this.emoji1 || this.emoji2){
                      this.visualization = test.replaceAll("o", this.emoji1).replaceAll("x", this.emoji2)
                    } else {
                      this.visualization = test.replaceAll("o", '🖤').replaceAll("x", '💛')
                    }
                    
                  } else if (this.choice == 'h9') {
                    this.letters = this.h9
                    var test = `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\n`
                    if(this.emoji1 || this.emoji2){
                      this.visualization = test.replaceAll("o", this.emoji1).replaceAll("x", this.emoji2)
                    } else {
                      this.visualization = test.replaceAll("o", '🖤').replaceAll("x", '💛')
                    }
                    
                  } else {
                    this.letters = this.h13
                    var test = `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                    if(this.emoji1 || this.emoji2){
                      this.visualization = test.replaceAll("o", this.emoji1).replaceAll("x", this.emoji2)
                    } else {
                      this.visualization = test.replaceAll("o", '🖤').replaceAll("x", '💛')
                    }
                    
                  }
                },
                emojiChange() {
                  var test = `oooooo\noxxxxo\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\nxxxxxx\nxoooox\nxoooox\nxoooox\nxoooox\nxoooox\n`
                  this.visualization = test.replaceAll("o", this.emoji1).replaceAll("x", this.emoji2)
                },
                set(emoji2, emoji1, text) {
                  this.entry = text
                  this.emoji1 = emoji1
                  this.emoji2 = emoji2
                  this.emojiChange()
                }
            },
            metaInfo: {
              title: 'Emoji Messenger | mpcoding.pl',
              titleTemplate: null,
              meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Send messages wrote using emojis! Insert your text and generate your emoji message! Send it to your friends! Use your creativity! Generate your message, NOW' },
                { name: 'keywords', content: 'MP, coding, emoji, message, emoji message, emoji message generator, message generator, emoji generator, mpcoding emoji generator, generator, mpcoding, emoji messenger, messenger, messenger generator' },
              ]
            }
}
</script>
<style scoped>
body {
    margin: 0;
    z-index: 1;
    color: rgb(40, 40, 40)
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
.cur-p {
  cursor: pointer;
}

/* welcome */
#welcomeSection {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/tile_background.png'); 
  padding-top: 25vh;
}
#welcomeContent {
  max-width: 1000px;
  align-self: center;
  margin: auto;
  padding-top: 100px;
  height: 400px;
  background-color: white;
  border-radius: 1px;
}
#welcomeContent ul {
  padding: 0;
  width: 300px;
  text-align: center;
  list-style-type: none;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}
#welcomeContent li {
  width: 200px;
}
/* guide */
#guideSection {
  width: 100%;
  background-color: white; 
  padding: 40px 0;
}
#guideContent {
  max-width: 600px;
  align-self: center;
  margin: auto;
}
#guideContent ul{
  list-style-type: none;
  padding: 0;
}

/* app */
#appSection {
  width: 100%;
  background-color: white; 
  padding: 40px 0;
}
#guideContent {
  max-width: 500px;
  align-self: center;
  margin: auto;
}
#appInputs {
  width: 500px;
  align-self: center;
  margin: auto;
}
#textarea {
    height: 50vh;
    border: 3px solid black;
    background-color: white;
}
#in {
    border: none;
    border-bottom: 3px solid black;
    background: white;
    width: 500px;
    height: 40px;
    margin-bottom: 10px;
    transition: 500ms;
}
#in:hover {
    border-color: rgb(255,189,0);
    transition: 500ms;
}
#appInputs span{
       font-size: 10px;
       color: crimson;
       float: left;
}
.mpcoding-yellow-btn {
  background: rgb(255, 189, 0);
  border-radius: 5px;
  color: white;
}
.mpcoding-yellow-btn:hover {
  color: rgb(40,40,40)
}
.mpcoding-gray-btn {
  background: rgb(40, 40, 40);
  border-radius: 5px;
  color: white;
}
.mpcoding-gray-btn:hover {
  color: rgb(255,189,0)
}
#visual {
  width: 200px;
  height: 350px;
  border: none;
  background-color: white;
  text-align: center;
  cursor: none;
}

@media screen and (max-width: 599px) {
            #in{
              width: 300px;
            }
            #appInputs{
              width: 300px;
            }
            
        }

</style>