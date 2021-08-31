<template>
  <div id="app">
    <div id="nav">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div class="container px-4">
          <a class="navbar-brand" href="/">Flask API</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/list">Veilles</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/new">Ajouter</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/api">Documentation</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Header-->
      <header class="bg-primary bg-gradient text-white">
        <div class="container px-4 text-center">
          <h1 class="fw-bolder">Bienvenue a Flask API</h1>
          <p class="lead">Créez, partagez et visualisez des veilles</p>
          <a class="btn btn-lg btn-light" href="/api">Documentation</a>
        </div>
      </header>

      <router-view />

      <!-- Footer-->
      <footer class="py-5 bg-dark">
        <div class="container px-4">
          <p class="m-0 text-center text-white">
            Copyright &copy; Flask API 2021
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
