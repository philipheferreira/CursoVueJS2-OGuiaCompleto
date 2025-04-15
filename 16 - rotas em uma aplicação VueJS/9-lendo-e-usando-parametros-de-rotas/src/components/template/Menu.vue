<template>
    <div>
        <nav class="menu">
            <ul>
                <router-link to="/" tag="li" active-class="active" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/usuario/1" tag="li" active-class="active">
                    <a>Usuarios</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'menuComponent'
}
</script>

<style>

</style>