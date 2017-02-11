<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  export default {
    store,
  };
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:100,400,700);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { min-height: 100%; }

  body {
		background:#f6f6f7;
    font-family: Lato, Helvetica, sans-serif;
  }
	button {
  	-webkit-app-region: no-drag;
	}
	.titlebar {
  	-webkit-user-select: none;
  	-webkit-app-region: drag;
	}
	/* slightly enhanced, universal clearfix hack */
.clearfix:after {
     visibility: hidden;
     display: block;
     font-size: 0;
     content: " ";
     clear: both;
     height: 0;
     }
.clearfix { display: inline-block; }
/* start commented backslash hack \*/
* html .clearfix { height: 1%; }
.clearfix { display: block; }
/* close commented backslash hack */
</style>
