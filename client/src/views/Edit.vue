<template>
  <div class="container py-4">
    <div class="row gx-4 justify-content-center">
      <!-- Blog entries-->
      <div class="col-lg-8">
        <!-- Featured blog post-->
        <div class="card mb-4">
          <div class="card-body">
            <form method="POST" :action="`/update/${topic._id}`">
              <div class="form-group">
                <label for="exampleFormControlInput1">Titre</label>
                <input
                  type="text"
                  class="form-control"
                  ref="title"
                  id="exampleFormControlInput1"
                  placeholder="Veille sur Firebase"
                  :value="`${topic.title}`"
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
                  :v-model="`${topic.description}`"
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
                  :value="`${topic.url}`"
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
                  :value="`${topic.author}`"
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
                  :value="`${topic.tags}`"
                />
              </div>
              <div class="form-group">
                <br />
                <button type="submit" class="btn btn-success mb-2">
                  Sauvegarder les modifications
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
      topic: [],
    };
  },
  methods: {
    getTopic() {
      const path = `http://localhost:5000/api/v1/topics/${this.$route.params.id}`;
      axios
        .get(path)
        .then((res) => {
          this.topic = res.data.result;
          console.log(this.topic);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getTopic();
  },
};
</script>
