<template>
  <h2 class="card-title">{{ msg }}</h2>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: {},
    };
  },
  methods: {
    delTopic() {
      const path = `http://localhost:5000/api/v1/topics/${this.$route.params.id}`;
      axios
        .insert(path)
        .then((res) => {
          this.msg = res.data.result;
          console.log(res.data.result);
        })
        .catch((error) => {
          this.msg = error;
          console.log(error);
        });
    },
  },
  created() {
    this.delTopic();
  },
};
</script>
