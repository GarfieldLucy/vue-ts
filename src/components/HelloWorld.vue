<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import * as Dag from '@/services/dag'
import * as User from '@/services/user'

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    mounted() {
        this.getDagList()
        this.verifyUser()
    }
    getDagList() {
        Dag.getDagList(127)
    }
    verifyUser() {
        User.userVerify({
            token: 'xxxxxx',
            userName: 'xi.liu'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
