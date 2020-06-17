<template>
    <div>
     <router-view/>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$router.push('../components/home');
    }
}
</script>

<style>

</style>