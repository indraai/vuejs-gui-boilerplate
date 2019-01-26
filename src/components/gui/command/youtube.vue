<template>
  <section class="youtube">
    <article class="youtube-comment" v-if="convo.type === 'commentsChannel'" v-for="comment in results">
      <div class="youtube-comment-video">
        <img :src="vidThumb(comment.snippet.videoId)" alt="">
      </div>
      <div class="youtube-comment-data">
        <div class="youtube-comment-user">
          <img :src="comment.snippet.topLevelComment.snippet.authorProfileImageUrl" alt="">
          <span v-html="comment.snippet.topLevelComment.snippet.authorDisplayName"></span>
        </div>
        <div class="youtube-comment-text" v-html="comment.snippet.topLevelComment.snippet.textDisplay"></div>
        <div class="youtube-comment-toolbar">
          <button class="btn toolbar-reply" v-on:click="youtubeAction('reply', comment.id)"><i class="icn icn-bubble"></i> {{comment.snippet.totalReplyCount}}</button>
        </div>
      </div>
    </article>

    <article class="youtube-comment" v-if="convo.type === 'reply'">
      <div class="youtube-comment-data">
        <div class="youtube-comment-user">
          <img :src="results.snippet.authorProfileImageUrl" alt="">
          <span v-html="results.snippet.authorDisplayName"></span>
        </div>
        <div class="youtube-comment-text" v-html="results.snippet.textDisplay"></div>
      </div>
    </article>

    <article class="youtube-channel" v-if="convo.type === 'channels' || convo.type === 'subscriptions'" v-for="channel in results">
      <div class="youtube-channel-thumb">
        <img :src="channel.snippet.thumbnails.default.url" alt="">
      </div>
      <div class="youtube-channel-data">
        <h3 v-html="channel.snippet.title"></h3>
        <div class="youtube-channel-info">
          <div class="youtube-channel-info-stats">
            <div class="subs" v-html="channel.statistics.subscriberCount"></div>
            <div class="vids" v-html="channel.statistics.videoCount"></div>
            <div class="views" v-html="channel.statistics.viewCount"></div>
          </div>
          <p v-html="channel.snippet.description"></p>
          <div class="youtube-channel-info-playlists">
            <a @click="youtubeAction('playlistItems', channel.contentDetails.relatedPlaylists.uploads)" class="uploads">uploads</a>
            <a @click="youtubeAction('playlistItems', channel.contentDetails.relatedPlaylists.favorites)" class="favorites">favorites</a>
            <a @click="youtubeAction('playlistItems', channel.contentDetails.relatedPlaylists.likes)" class="likes">likes</a>
          </div>
        </div>
        <!-- <div class="youtube-channel-toolbar">
          <button class="btn toolbar-reply" v-on:click="videoReply(channel.id)"><i class="icn icn-bubble"></i></button>
        </div> -->
      </div>
    </article>

    <article class="youtube-item" v-if="convo.type === 'search'" v-for="item in results" @click="youtubeAction('videos', item.id.videoId)">
      <div class="youtube-item-thumb">
        <img :src="item.snippet.thumbnails.default.url" alt="">
      </div>
      <div class="youtube-item-data">
        <h3 v-html="item.snippet.title"></h3>
        <div class="youtube-item-info">
          <p v-html="item.snippet.description"></p>
        </div>
        <!-- <div class="youtube-channel-toolbar">
          <button class="btn toolbar-reply" v-on:click="videoReply(channel.id)"><i class="icn icn-bubble"></i></button>
        </div> -->
      </div>
    </article>

    <article class="youtube-item" v-if="convo.type === 'playlists'" v-for="item in results" @click="youtubeAction('videos', item.snippet.resourceId.videoId)">
      <div class="youtube-item-thumb">
        <img :src="item.snippet.thumbnails.default.url" alt="">
      </div>
      <div class="youtube-item-data">
        <h3 v-html="item.snippet.title"></h3>
        <div class="youtube-item-info">
          <p v-html="item.snippet.description"></p>
        </div>
        <!-- <div class="youtube-channel-toolbar">
          <button class="btn toolbar-reply" v-on:click="videoReply(channel.id)"><i class="icn icn-bubble"></i></button>
        </div> -->
      </div>
    </article>

    <article class="youtube-item" v-if="convo.type === 'playlistItems'" v-for="item in results" @click="youtubeAction('videos', item.snippet.resourceId.videoId)">
      <div class="youtube-item-thumb">
        <img :src="item.snippet.thumbnails.default.url" alt="">
      </div>
      <div class="youtube-item-data">
        <h3 v-html="item.snippet.title"></h3>
        <div class="youtube-item-info">
          <p v-html="item.snippet.description"></p>
        </div>
        <!-- <div class="youtube-channel-toolbar">
          <button class="btn toolbar-reply" v-on:click="videoReply(channel.id)"><i class="icn icn-bubble"></i></button>
        </div> -->
      </div>
    </article>

    <article class="youtube-video" v-if="convo.type === 'videos'" v-for="video in results">
      <div class="youtube-video-thumb">
        <img :src="video.snippet.thumbnails.default.url" alt="">
      </div>
      <div class="youtube-video-data">
        <h3 v-html="video.snippet.title"></h3>
        <div class="youtube-video-viewer"><iframe width="560" height="315" :src="youtubeSrc(video.id)" frameborder="0" allowfullscreen></iframe></div>
        <div class="youtube-video-stats">
          <span class="views"><i class="icn icn-eye"></i>{{video.statistics.viewCount}}</span>
          <span class="comments"><i class="icn icn-bubble"></i>{{video.statistics.commentCount}}</span>
          <span class="favorites"><i class="icn icn-bookmark"></i>{{video.statistics.favoriteCount}}</span>
          <span class="likes"><i class="icn icn-thumbs-up"></i>{{video.statistics.likeCount}}</span>
          <span class="dislikes"><i class="icn icn-thumbs-down"></i>{{video.statistics.dislikeCount}}</span>
        </div>
        <div class="youtube-video-info">
          <p v-html="video.snippet.description"></p>

        </div>
        <!-- <div class="youtube-channel-toolbar">
          <button class="btn toolbar-reply" v-on:click="videoReply(channel.id)"><i class="icn icn-bubble"></i></button>
        </div> -->
      </div>
    </article>

  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraCmdYoutube',
  props: ['convo'],
  components: {},
  computed: {
    results() {
      return this.convo.result.items ? this.convo.result.items.reverse() : this.convo.result;
    },
  },
  methods: {
    checkType(type) {
      return ['mentions','home','timeline','tweet','retweet'].includes(type);
    },
    vidThumb(id) {
      return `https://img.youtube.com/vi/${id}/0.jpg`;
    },
    youtubeAction(type,id) {
      return this.$store.dispatch('gui/question', `#youtube ${type}:${id} `)
    },
    youtubeSrc(id) {
      return `https://www.youtube.com/embed/${id}`
    }

  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../../styles/vars'
  .youtube
    border: 1px dashed $colors.fire
    border-radius: .3rem
    padding: .5rem
    &-channel
    &-comment
    &-item
      padding: .5rem
      display: flex
      background-color: darken($colors.charcoal, 50%)
      margin: 0 0 .1rem 0
      border-radius: .3rem

      &-video
        padding-right: 1rem
        img
          width: 150px
          height: auto

      &-data
        flex: 1
        display: flex
        flex-flow: column nowrap

      &-user
        font-size: 1.5rem
        display: flex
        align-content: center
        img
          border-radius: 50%
          width: 30px
          height: 30px
          margin-right: .5rem

      &-text
      &-info
        flex: 1

      &-toolbar
        display: flex
        flex-flow: row nowrap
        justify-content: flex-start

        > button
          font-size: .8rem
          line-height: 0
          margin: .1rem
          padding: .5rem
          background-color: transparent
          &:hover
            color: $colors.fire

    &-channel
    &-item
      &-thumb
        margin: 0 .5rem 0 0
        img
          border-radius: .3rem
      &-data
        h3
          font-size: 1.5rem
        p
          margin: 0
          font-size: 1rem
      &-info
        &-stats
          display: flex
          flex-flow: row nowrap
          > div
            padding: 0 .3rem
            margin: 0 .1rem 0 0
            border-radius: .3rem
            &::before
              display: inline-block
              margin-right: .3rem
          .subs
            &::before
              content: "subs"
              color: $colors.water
          .vids
            &::before
              content: "vids"
              color: $colors.earth
          .views
            &::before
              content: "views"
              color: $colors.fire
        &-playlists
          border-top: 1px solid $colors.fire
          padding: .5rem
          &::before
            content: "Playlists: "
          a
            display: inline-block
            background-color: $colors.charcoal
            margin: 0
            padding: .3rem .5rem
            line-height: 1
            border-radius: .3rem
    &-item
      transition: $transition
      &:hover
        cursor: pointer
        color: $colors.fire
    &-video
      display: flex
      flex-flow: row nowrap

      &-thumb
        flex: 0
        padding-right: 1rem

      &-data
        flex: 1 auto
        display: flex
        flex-flow: column nowrap
        h3
          font-size: 1.5rem
          border-bottom: 1px solid $colors.fire
          margin-bottom: .5rem
      &-stats
        display: flex
        font-size: 1.3rem
        > span
          padding: 0 .5rem
        .likes
          color: $colors.water
        .dislikes
          color: $colors.fire
        .favorites
          color: $colors.air
        .comments
          color: $colors.earth
        .views
          color: $colors.orange-lt
</style>
