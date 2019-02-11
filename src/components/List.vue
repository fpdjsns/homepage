<template>
<div>
    List
    <Test/>
</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// @ts-ignore
import Test from "../posts/test.md"

@Component({ 
    components: {Test}
})
export default class List extends Vue {
    
}
</script>