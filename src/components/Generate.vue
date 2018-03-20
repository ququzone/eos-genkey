<template>
  <div class="generate">
    <h1>Welcome to EOS generate key</h1>
    <button class="pure-button" v-on:click="generate">Generate</button>
    <h2>Private Key:</h2>
    <div>
      {{privateKey}}
    </div>
    <h2>Public Key:</h2>
    <div>
      {{publicKey}}
    </div>
  </div>
</template>

<script>
import './eosjs-ecc';
const ecc = eosjs_ecc;
export default {
  name: 'Generate',
  data: function() {
    return {
      privateKey: '',
      publicKey: ''
    }
  },
  methods: {
    generate: function() {
      const c = this;
      ecc.randomKey().then(privateWif =>  {
        c.privateKey = privateWif;
        c.publicKey = ecc.privateToPublic(privateWif);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.pure-button {
    cursor: pointer;
    font-family: inherit;
    font-size: 100%;
    padding: 0.5em 1em;
    border: 1px solid #999;  /*IE 6/7/8*/
    border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/
    background: rgb(66, 184, 221);
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-decoration: none;
}

.pure-button-hover,
.pure-button:hover,
.pure-button:focus {
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
}
.pure-button:focus {
    outline: 0;
}
.pure-button-active,
.pure-button:active {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
    border-color: #000\9;
}
</style>
