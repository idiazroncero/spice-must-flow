<template>
  <h1>{{ name }} {{title}}</h1>
</template>

<script>


export default {
  name: 'Spice Must Flow',
  data() {
    return {
      title: 'Home',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  @keyframes beat {
    from {
      transform: scale(1);
      opacity:1;
    }
    to {
      transform: scale(1.25);
      opacity:0;
    }
  }

  @keyframes fill-paths {
    0% {
      fill-opacity:0;
    }
    3% {
      fill-opacity:0;
    }
    4% {
      fill-opacity:0.1;
    }
    5% {
      fill-opacity:0;
    }
    /*85% {
      fill-opacity:0;
    }
    89% {
      fill-opacity:0.8;
    }
    90% {
      fill-opacity:0;
    }
    92% {
      fill-opacity:1;
    }
    100% {
      fill-opacity:1;
    }*/
    35% {
      fill-opacity:0;
    }
    45% {
      fill-opacity:1;
    }
    46% {
      fill-opacity:0;
    }
    47% {
      fill-opacity:1;
    }
    48% {
      fill-opacity:0;
    }
    49% {
      fill-opacity:1;
    }
    54% {
      fill-opacity:0.85;
    }
    58% {
      fill-opacity:0;
    }
    74% {
      fill-opacity:0;
    }
    75% {
      fill-opacity:0.2;
    }
    76% {
      fill-opacity:0;
    }
    100% {
      fill-opacity:0;
    }
  }

  .beating-logo {
    height:33%;
    height:43vh;
    width:43vh;
    padding: 20px;
    padding: 7vh;
    position:relative;
  }

@media(max-width: 480px) {
  .beating-logo {
    height:75vw;
    width:75vw;
    padding: 10px;
    padding: 7vw;
    position:relative;
  }
}

  .beating-logo__logo {
    height:100%;
    width:auto;
    margin: 0 auto 0 27%;
    display:block;
    position:relative;
    z-index:3;
    animation: fill-paths 14s linear 0s infinite forwards;
  }

  .beating-logo__bg,
  .beating-logo__beat {
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color:#000;
    border-radius: 50%;
    z-index:2;
  }

  .beating-logo__beat {
    background-color:rgba(255,255,255, 0.2);
    animation: beat 2s linear infinite;
    z-index:1;
  }
</style>
