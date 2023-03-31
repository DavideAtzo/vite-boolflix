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
        <div class="container-fluid">
            <nav class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <img src="../assets/img/logo-boolflix.svg" alt="">
                    <!-- <h1>boolflix</h1> -->
                </div>
                <div id="section-search" class="col-4">
                    <form action="" class="d-flex">
                        <input type="text" id="search-bar" placeholder="Search on Boolflix..." v-model="store.searchFilm">
                        <button type="button" class="btn-search" @click.="$emit('search-Film')">
                            <span>cerca</span>
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

header {
    background-color: $primary;

    nav {
        height: 100px;

        img {
            width: 300px;
            filter: invert(1);
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
</style>