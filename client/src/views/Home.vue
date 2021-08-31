<template>
  <div class="list">
    <div class="container py-4">
      <div class="row gx-4 justify-content-center">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Featured blog post-->
          <div v-for="topic in topics" :key="topic._id">
            <div class="card mb-4">
              <div class="card-body">
                <div class="small text-muted">{{ topic.author }}</div>
                <h2 class="card-title">{{ topic.title }}</h2>
                <p class="card-text">{{ topic.description.substring(0, 100) }}</p>
                <small class="text-muted">{{ topic.tags.join(', ') }}</small>
                <br /><br />
                <table class="w-100 mx-0">
                  <td>
                    <a class="btn btn-warning mr-1" :href="`${topic.url}`"
                      >Source</a
                    >
                    <a
                      class="btn btn-primary mx-1"
                      :href="`/topic/${topic._id}`"
                      >Voir la veille ⇢</a
                    >
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      topics: [],
    };
  },
  methods: {
    getTopics() {
      const path = 'http://localhost:5000/api/v1/topics';
      axios
        .get(path)
        .then((res) => {
          this.topics = res.data.result;
          console.log(this.topics);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delTopic(id) {
      const path = `http://localhost:5000/api/v1/topics/${id}`;
      axios
        .delete(path)
        .then((res) => {
          console.log(res.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getTopics();
  },
};
</script>
