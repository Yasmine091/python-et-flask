<template>
  <div class="list">
    <div class="container py-4">
      <div class="row gx-4 justify-content-center">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Featured blog post-->
          <div class="card mb-4">
            <div class="card-body">
              <div class="small text-muted">{{ topic.author }}</div>
              <h2 class="card-title">{{ topic.title }}</h2>
              <p class="card-text" style="min-height: 400px;">{{ topic.description }}</p>
              <small class="text-muted">{{ topic.tags.join(", ") }}</small>
              <br /><br />
              <table class="w-100 mx-0">
                <td>
                  <a class="btn btn-warning mr-1" :href="`${topic.url}`"
                    >Source</a
                  >
                  <a class="btn btn-primary mx-1" href="/">Retour ⇠</a>
                </td>
                <td class="text-end">
                  <a class="btn btn-info mx-1" :href="`/edit/${topic._id}`"
                    >Modifier</a
                  >
                  <a
                      class="btn btn-danger ml-1 float-right"
                      :href="`/delete/${topic._id}`"
                    >
                      Supprimer</a
                    >
                </td>
              </table>
            </div>
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
          this.topic = error;
          console.log(error);
        });
    },
  },
  created() {
    this.getTopic();
  },
};
</script>
