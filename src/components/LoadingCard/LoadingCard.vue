<template>
    <div>
      <b-card
        no-body
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-header style="height: 15rem; margin-bottom: 1em"></b-card-header>
        <b-card-title><textShimmer /></b-card-title>
        <b-card-sub-title class="mb-2"><textShimmer /></b-card-sub-title>

        <b-card-text>
          <sentencesShimmer />
        </b-card-text>

        <blockShimmer  style="display: flex; justify-content: center; margin-bottom: 20px" width="7rem" height="2rem" />
      </b-card>
    </div>
</template>

<script>
import {
    blockShimmer,
    // circleShimmer,
    // imageShimmer,
    // paragraphsShimmer,
    sentencesShimmer,
    textShimmer
} from 'vue-shimmer'

export default {
    name: 'LoadingCard',
    components: {
        blockShimmer,
        // circleShimmer,
        // imageShimmer,
        // paragraphsShimmer,
        sentencesShimmer,
        textShimmer
    }
}
</script>