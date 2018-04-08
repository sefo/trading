<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)">
        <ul class="dropdown-menu" style="width:100%">
            <li v-for="(suggestion, index) in matches" :key="index"
                v-bind:class="{'active': isActive(index)}"
                @click="suggestionClick(index)">
                    <a href="#">{{ suggestion.name }} <small>({{ suggestion.symbol }})</small></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Autocomplete',
    props: {
        value: {
            type: String,
            required: true
        },
        suggestions: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            open: false,
            current: 0
        };
    },
    computed: {
        matches () {
            return this.suggestions.filter((obj) => {
                return obj.name.indexOf(this.value) >= 0;
            });
        },
        openSuggestion () {
            return this.selection !== '' &&
                this.matches.length !== 0 &&
                this.open === true;
        }
    },
    methods: {
        updateValue (value) {
            if (this.open === false) {
                this.open = true;
                this.current = 0;
            }
            this.$emit('input', value);
        },
        isActive (index) {
            return index === this.current;
        },
        suggestionClick (index) {
            this.$emit('input', this.matches[index].symbol);
            this.$emit('change', this.matches[index].symbol);
            this.open = false;
        }
    }
};
</script>

<style>
</style>