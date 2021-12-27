<template>
    <div>
        <div class="auth-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Auth"
}
</script>
<style>
.auth-container{
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 52px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}
</style>
