<template>
  <div class="mesage">
    <!-- Page content-->
    <div class="container py-4">
      <div class="row gx-4 justify-content-center">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Featured blog post-->
          <div class="card mb-4">
            <div class="card-body">
              <div v-if="$route.name == 'Delete'">
                <Delete />
              </div>
              <div v-if="$route.name == 'Update'">
                <Update />
              </div>
              <div v-if="$route.name == 'Save'">
                <Save />
              </div>
              <p class="card-text">
                <a class="btn btn-primary" href="/">Retour ⇠</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Delete from '@/components/Delete.vue';
import Update from '@/components/Update.vue';
import Save from '@/components/Save.vue';

export default {
  name: 'Message',
  components: {
    Delete,
    Update,
    Save,
  },
};
</script>
