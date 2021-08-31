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
    updateTopic() {
      const tags = this.$refs.tags.value.replace(' ', '');
      const path = `http://localhost:5000/api/v1/topics/${this.$route.params.id}`;
      axios
        .put(path, {
          title: this.$refs.title.value,
          description: this.$refs.desc.value,
          url: this.$refs.url.value,
          author: this.$refs.author.value,
          tags: tags.split(','),
        })
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
