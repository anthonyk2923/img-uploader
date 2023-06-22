<template>
    <div class="col">
        <div class="card h-100">
            <div class="card-body">
                <div class="center">
                    <img :src="'data:image/jpeg;base64,' + data.imgFile">
                </div>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">
                    <span class="fw-lighter">{{ data.imgCaption }}</span>
                    <button type="button" style="width: 5%;float: right;
" @click="openLink()"><img src="https://static.thenounproject.com/png/196595-200.png"></button>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        data: String,
    },
    methods: {
        openLink() {
            window.open(this.data._id, '_blank');
        },
        copyLink() {
            navigator.clipboard.writeText(window.location.hostname + '/' + this.data._id);

        }
    }

}
</script>

<style scoped>
img {
    width: 100%
}

button {
    all: unset;

}

.card-body {
    background-color: v-bind('data.color')
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
