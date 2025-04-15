<template>
    <div>
        <nav>
            <ul>
                <router-link to="/" tag="li" active-class="active" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/usuario/10" tag="li" active-class="active">
                    <a>Usuarios 1</a>
                </router-link>
                <router-link to="/usuario/20" tag="li" active-class="active">
                    <a>Usuarios 2</a>
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