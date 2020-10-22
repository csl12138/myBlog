<template>
    <div class="reception">
        <side-nav />
        <router-view></router-view>
    </div>
</template>

<script>
import SideNav from "cmp/sideNav"

export default {
    components: {
        SideNav
    }
}
</script>

<style scoped>

</style>
