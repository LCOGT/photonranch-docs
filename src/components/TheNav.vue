<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="container">

        <div class="navbar-brand">
            <router-link class="navbar-item menu-title" to="/">photon ranch - docs</router-link>
            <div></div>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

            <router-link class="navbar-item" to="/about">about</router-link>
            <router-link class="navbar-item" to="/commands">command syntax</router-link>

            </div>

            <div class="navbar-end">
            </div>

        </div>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'TheNav',
  data() {
    return {
    }
  },
  mounted () {
    let navbar = document.querySelector('.navbar-burger')
    navbar.addEventListener('click', function () {
      let target = navbar.dataset.target
      let $target = document.getElementById(target)
      navbar.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  },
  methods: {
  },
  computed: {
  }

}
</script>

<style scoped>
.menu-title {
  font: 30px 'Share Tech Mono', monospace; 
  margin-right: 2em;
}
nav {
  height: 5em;
}
</style>
