<template>
  <div class="container py-4">
    <div class="row gx-4 justify-content-center">
      <!-- Blog entries-->
      <div class="col-lg-8">
        <!-- Featured blog post-->
        <div class="card mb-4">
          <div class="card-body">
            <form
              method="POST"
              v-on:submit.prevent="onSubmit"
              @submit="createTopic"
            >
              <div class="form-group">
                <label for="exampleFormControlInput1">Titre</label>
                <input
                  type="text"
                  class="form-control"
                  ref="title"
                  id="exampleFormControlInput1"
                  placeholder="Veille sur Firebase"
                />
              </div>
              <div class="form-group">
                <br />
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  ref="desc"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group">
                <br />
                <label for="exampleFormControlInput1">Lien</label>
                <input
                  type="text"
                  class="form-control"
                  ref="url"
                  id="exampleFormControlInput1"
                  placeholder="https://www.example.com/topics/mytopic.html"
                />
              </div>
              <div class="form-group">
                <br />
                <label for="exampleFormControlInput1">Auteur</label>
                <input
                  type="text"
                  class="form-control"
                  ref="author"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group">
                <br />
                <label for="exampleFormControlInput1"
                  >Tags (séparés par des ,)</label
                >
                <input
                  type="text"
                  class="form-control"
                  ref="tags"
                  id="exampleFormControlInput1"
                  placeholder="Firebase, Python, Google, Django, Flask.."
                />
              </div>
              <div class="form-group">
                <br />
                <button type="submit" class="btn btn-success mb-2">
                  Ajouter la veille
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        url: '',
        author: '',
        tags: [],
      },
    };
  },
  methods: {
    createTopic() {
      const tags = this.$refs.tags.value.replace(' ', '');
      const path = 'http://localhost:5000/api/v1/topics';
      axios
        .post(path, {
          title: this.$refs.title.value,
          description: this.$refs.desc.value,
          url: this.$refs.url.value,
          author: this.$refs.author.value,
          tags: tags.split(','),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {},
  },
};
</script>
