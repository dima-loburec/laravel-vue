<template>
    <div class="col-sm-4 col-sm-offset-4">
        <preloader v-show="!loaded"></preloader>
        <h2>New article</h2>
        <simple-input type="text" placeholder="Enter name of your article" name="name" store="Article"></simple-input>
        <simple-input type="textarea" placeholder="Enter your text" name="text" store="Article"></simple-input>
        <button class="btn btn-primary" @click="submit()">Create</button>
    </div>
</template>

<script>
    import { CREATE_ARTICLE_ACTION } from 'store/article/actions'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import { RESET_INPUTS_MUTATION } from 'components/input'
    import router from 'router'
    import Vue from 'vue'
    import checkAuth from 'components/mixins/Check-auth'
    import simpleInput from 'components/input/Simpe-input.vue'
    import preloader from 'components/preloader'

    export default {
        components: { simpleInput, preloader },
        methods: {
            submit() {
                this.loaded = false

                this.$store.dispatch('Article/' + CREATE_ARTICLE_ACTION)
                    .then(() => {
                        router.push({name: 'articles'})
                        this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article has been created')
                        this.loaded = true
                    }).catch((error) => {
                        this.loaded = true
                    })
            },
        },
        mixins: [checkAuth],
        data() {
            return {
                loaded: true
            }
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('Article/' + RESET_INPUTS_MUTATION)
            next()
        },
    }
</script>