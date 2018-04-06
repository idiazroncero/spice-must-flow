<template>
  <section class="grid__item grid__info grid__rotate" v-bind:class="{ 'grid__item--full' : full}">
    <router-link v-if="!full" to="/info" class="link-layer"></router-link>
    <div class="info scroll__parent">
      <h1 data-title="Quiénes somos">Quiénes Somos</h1>
      <router-link v-if="full" class="back link-decorated" to="/">← Volver a portada</router-link>
      <div v-if="full" class="scroll">
        <p>Spice Must Flow es una banda originaria de Madrid y formada por Gyanendra Wannax (guitarra y voz), Óscar Rough (batería) y Nacho Díaz (bajo).</p>
        <p>Originariamente centrados en las sonoridades afroamericanas (funk, soul, blues), el sonido de Spice Must Flow ha ido lentamente incorporando influencias del punk y el garage originales, así como del acid-rock o el grunge. En cualquier caso, y sea cual sea el estilo musical, la banda se distingue siempre por la debida atención prestada al groove, ese duende musical con efecto inmediato en las caderas y cabezas del público. El maridaje de la rítmica de la música afroamericana con la velocidad del punk y del garage resulta en un directo eléctrico y electrizante, enérgico y vital, bailongo y sudoroso.</p>
        <p>Si se quisiera generalizar hasta caer en la autoparodia se podría decir que Spice Must Flow operan con una parte de la cabeza en los años 60 y 70 y otra bien anclada en el siglo XXI, que anteponen ritmo y sonoridad a exhibiciones de técnica, que prefieren al público que baila al que asiente, que están con el 99%, que no son vanguardia ni sienten la necesidad de serlo, que ya llevan suficiente experiencia a las espaldas como para no tener ganas de dar lecciones a nadie y sí de disfrutar y hacer disfrutar con su música, que la sinceridad es visible sobre el escenario y la música puede ser un vector de cambio, aunque sea de posición sobre el sofá.</p>
      </div>
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
