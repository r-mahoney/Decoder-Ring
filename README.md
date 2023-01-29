<h1>Decoder Ring Capstone Project</h1>

This is the code and accompanying tests for the Decoder Ring capstone project that includes the Caesers Cipher, Substitution Cipher and Polybius Cipher

<h2>Installation Instructions</h2>

---

To install this repository:
1. Either clone the code or fork and clone the code by clicking the `Code` or `Fork` buttons at the top of the page
2. cd into the new repository
3. run `npm install`
4. run `npm start`

`npm start` will open a webpage letting you access each of the different ciphers to be able to encode and decode messages



<h2>Description</h2>

---

<h3>Caeser's Shift</h3>

The Caesar Shift is a type of substitution cipher that relies on taking the alphabet and "shifting" letters to the right or left bades on the value of the inputted shift. A negative shift will shift the alphabet to the right and positive will shift it to the left. Encoding a message will scramble the users inputted message using a shifted alphabet as reference. Decoding will unscramble the message as long as the user knows the same shift that was used to encode the message.
<br>
![Ceasers shift image](/images/ceasers.png)

<br>

<h3>Polybius Square</h3>

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For this cipher, the letters are represented by the numbers paired in the grid below, with "A" being represented by 11, "B" being represented by 21, and so on.
<br>

![Polybius Square Cipher](/images/polybius.png)
<br>
<br>

<h3>Substitution Cipher</h3>

The Substitution Cipher uses a standard alphabet as a reference and a user inputted substitution alphabet. Letters from the substitution alphabet will be transposed to the standard alphabet like so:
<br>
![Substitution Cipher](/images/subs.png)
<br>
The user inputted alphabet must be exactly 26 characters long and include all unique characters.