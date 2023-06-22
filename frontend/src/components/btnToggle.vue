<template>
    <button @click="$emit('showFormButton')" class="btn" :class="btnClass">{{ btnText }}</button>
</template>

<script>
export default {
    name: "btnToggle",
    props: {
        showForm: Boolean,
        btnClass: String,
        btnText: String
    }
}
</script>


<style></style>