<template>
  <section class="twitter">
    <div class="tweet" v-if="checkType(convo.type)" v-for="tweet in tweets">
      <div class="tweet-avatar"><img :src="tweet.user.profile_image_url_https" alt=""></div>
      <div class="tweet-data">
        <div class="tweet-user"><strong v-html="tweet.user.name"></strong> @{{tweet.user.screen_name}}</div>
        <div class="tweet-text" v-html="tweet.full_text || tweet.text"></div>
      </div>
      <div class="tweet-retweet" v-if="tweet.retweeted_status">
        <div class="tweet-data">
          <div class="tweet-user"><strong v-html="tweet.retweeted_status.user.name"></strong> @{{tweet.retweeted_status.user.screen_name}}</div>
          <div class="tweet-text" v-html="tweet.retweeted_status.text"></div>
        </div>
      </div>
      <div class="tweet-media" v-if="tweet.entities && tweet.entities.media">
        <img :src="tweet.entities.media[0].media_url_https" v-if="tweet.entities.media[0].type === 'photo'">
      </div>
      <div class="tweet-toolbar">
        <button class="btn tweet-toolbar-reply" v-on:click="tweetRespond('tweet', tweet.id_str)"><i class="icn icn-bubble"></i></button>
        <button class="btn tweet-toolbar-retweet" @click="tweetRespond('retweet', tweet.id_str)"><i class="icn icn-smile"></i> {{tweet.retweet_count}}</button>
        <button class="btn tweet-toolbr-like" @click="tweetRespond('favorite', tweet.id_str)"><i class="icn icn-heart"></i> {{tweet.favorite_count}}</button>
      </div>
    </div>
    <div class="tweet tweet-profile" v-if="convo.type === 'user'" :style="profileBG(convo.result.profile_banner_url)">
      <div class="tweet-avatar"><img :src="convo.result.profile_image_url_https" alt=""></div>
      <div class="tweet-data">
        <h5><strong v-html="convo.result.name"></strong> @{{convo.result.screen_name}}</h5>
        <p v-html="convo.result.description"></p>
      </div>
    </div>
    <div class="tweet" v-if="convo.type === 'search'" v-for="tweet in convo.result.statuses">
      <div class="tweet-avatar"><img :src="tweet.user.profile_image_url_https" alt=""></div>
      <div class="tweet-data" v-html="tweet.text"></div>
    </div>
    <div class="friends" v-if="convo.type === 'friends'">
      <div class="friend" v-for="user in convo.result.users">
        <div class="friend-avatar"><img :src="user.profile_image_url_https" alt=""></div>
        <div class="friend-name">{{user.name}}<br>@{{user.screen_name}}</div>
      </div>
    </div>
    <div class="followers" v-if="convo.type === 'followers'">
      <div class="follower" v-for="user in convo.result.users">
        <div class="follower-avatar"><img :src="user.profile_image_url_https" alt=""></div>
        <div class="follower-name">{{user.name}}<br>@{{user.screen_name}}</div>
      </div>
    </div>
    <div class="message" v-if="convo.type === 'messages'" v-for="message in convo.result.events">
      <div class="message-text" v-html="message.message_create.message_data.text"></div>
    </div>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraCmdTwitter',
  props: ['convo'],
  components: {},
  computed: {
    tweets() {
      return Array.isArray(this.convo.result) ? this.convo.result.reverse() : [this.convo.result];
    },
  },
  methods: {
    checkType(type) {
      return ['mentions','home','timeline','tweet','retweet'].includes(type);
    },
    tweetRespond(type, id) {
      const question = `#twitter ${type}:${id} `;
      return this.$store.dispatch('gui/question', question)
    },
    profileBG(img) {
      return `background-image: url(${img})`;
    }
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../../styles/vars'
  .twitter
    border: 1px solid rgba($colors.blue, .5)
    border-radius: .3rem
    padding: .3rem
    margin-top: .3rem
    color: $colors.orange-lt
    position: relative
    min-height: 42px

  .tweet
    &-profile
      color: red
      background-repeat: no-no-repeat
      background-size: cover

  .tweet
  .message
    display: flex
    flex-flow: row wrap
    padding: 1rem
    background-color: darken($colors.charcoal, 50%)
    margin: 0 0 .1rem 0
    border-radius: .3rem

    &-avatar
      flex: 0
      min-width: 50px
      margin-right: .5rem
      img
        width: 50px
        height: 50px
        border-radius: 25px
    &-data
      flex: 1 auto
      max-width: calc(100% - 60px)
    &-media
      flex: 0 100%
      display: flex
      flex-flow: row nowrap
      justify-content: center

      img
        max-width: 80%
        max-height: 500px
        border-radius: .5rem

    &-retweet
      flex: 0 100%
      border-top: 1px solid rgba($colors.air, 50%)
      border-bottom: 1px solid rgba($colors.air, 50%)
      margin: .5rem 0
      padding: .5rem 0

      &::before
        content: attr(data-retweets)
        display: inline-block

    &-toolbar
      flex: 0 100%
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
          color: $colors.water

  .string
    color: $colors.white
    border: 1px dotted $colors.white
    border-radius: .3rem
    padding: .3rem

  .friends
  .followers
    display: flex
    flex-flow: row wrap
    justify-content: center
    margin-left: 40px
    align-content: center

    .friend
    .follower
      text-align: center
      padding: .5rem
      &-avatar
        img
          border-radius: 50%

</style>
