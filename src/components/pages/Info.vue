<template>
  <section class="info">
    <h1>Informa</h1>
    <div v-if="full" class="scroll">
      <p>Lorem, ipsum dolor sit <a href="#" class="link-decorated">amet consectetur</a> adipisicing elit. Veritatis atque est tempore iusto aperiam labore pariatur, illo iste harum. Neque, cumque. Voluptas, fugiat itaque sunt at enim culpa vero omnis.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestiae laborum neque amet inventore id animi quam, veritatis ducimus corrupti quis fugiat sed! Culpa voluptates illum tempore laboriosam autem consequuntur.</p>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    full: Boolean,
  },
  data() {
    return {
      title: 'Info Page',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../scss/settings.scss";

</style>
