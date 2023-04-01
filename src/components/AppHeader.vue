<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="opacity">
            <div class="container">
                <nav class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <img id="logo" src="../assets/img/logo-boolflix.svg" alt="">
                    </div>
                    <div id="section-search" class="col-4">
                        <form action="" class="d-flex" @submit.prevent="$emit('search-Film')">
                            <input type="text" id="search-bar" placeholder="Search on Boolflix..."
                                v-model="store.searchFilm">
                            <button type="button" class="btn-search" @click.="$emit('search-Film')">
                                <span>cerca</span>
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

header {
    position: relative;
    background: url(../assets/img/MOVIECLASSICSerikweb_2500_800.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;

    .opacity {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;

        nav {
            border-radius: 6px;
            height: 200px;

            #logo {
                width: 400px;
                filter: invert(1);
                border: 5px solid $border-logo;
                border-top-left-radius: 60px;
                border-bottom-right-radius: 60px;
            }

            h1 {
                font-size: 25px;
                font-weight: 800;
                text-transform: uppercase;
                color: $secondary;
                border: 3px solid $secondary;
                padding: .3125rem .9375rem
            }

            form {
                position: relative;

                input {
                    border: none;
                    border-radius: 25px;
                    padding: .625rem;
                    width: 100%;
                    height: 3.4375rem;
                }

                button {
                    background-color: inherit;
                    border: none;
                    position: absolute;
                    top: 15px;
                    right: 0;

                    span {
                        background-color: $secondary;
                        color: $text-color;
                        text-transform: uppercase;
                        font-weight: 600;
                        padding: 13px 20px;
                        border-radius: 50px;

                    }
                }
            }
        }

    }
}
form:hover input{
    box-shadow: 0px 0px 50px 10px $secondary;
}
</style>