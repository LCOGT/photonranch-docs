<template>
    <section>
        <div class="content" v-html="CommandSyntaxDescription.html" />
    
        <div style="margin-bottom: 3em;" />

        <b-tabs type="is-toggle">
            <b-tab-item label="Camera">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxCamera.html" />
            </b-tab-item>
            <b-tab-item label="Mount">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxMount.html" />
            </b-tab-item>
            <b-tab-item label="Enclosure">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxEnclosure.html" />
            </b-tab-item>
            <b-tab-item label="Focuser">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxFocuser.html" />
            </b-tab-item>
            <b-tab-item label="Rotator">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxRotator.html" />
            </b-tab-item>
            <b-tab-item label="Filter Wheel">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxFilterwheel.html" />
            </b-tab-item>
            <b-tab-item label="Selector">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxSelector.html" />
            </b-tab-item>
            <b-tab-item label="Switch">
                <div style="margin-top: 3em;" class="content" v-html="CommandSyntaxSwitch.html" />
            </b-tab-item>
        </b-tabs>

        <div style="margin-bottom: 5em;" />

    </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import CommandSyntaxCamera from '@/documentation/command-syntax-camera.md'
import CommandSyntaxEnclosure from '@/documentation/command-syntax-enclosure.md'
import CommandSyntaxFilterwheel from '@/documentation/command-syntax-filterwheel.md'
import CommandSyntaxFocuser from '@/documentation/command-syntax-focuser.md'
import CommandSyntaxMount from '@/documentation/command-syntax-mount.md'
import CommandSyntaxRotator from '@/documentation/command-syntax-rotator.md'
import CommandSyntaxSelector from '@/documentation/command-syntax-selector.md'
import CommandSyntaxSwitch from '@/documentation/command-syntax-switch.md'
import CommandSyntaxDescription from '@/documentation/command-syntax-description.md'

export default {
    name: 'Commands',
    components: {
        VueMarkdown,
    },
    data() {
        return {
            CommandSyntaxCamera,
            CommandSyntaxEnclosure,
            CommandSyntaxFilterwheel,
            CommandSyntaxFocuser,
            CommandSyntaxMount,
            CommandSyntaxRotator,
            CommandSyntaxSelector,
            CommandSyntaxSwitch,
            CommandSyntaxDescription,
            selected_device: 'camera'
        }
    },
}
</script>
<style scoped>
</style>