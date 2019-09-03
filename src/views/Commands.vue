<template>
    <section>
        <div class="content" v-html="CommandSyntaxDescription.html" />
    
        <div style="margin-bottom: 3em;" />

        <b-tabs type="is-toggle">
            <b-tab-item label="Camera">
                <div class="doc content" v-html="CommandSyntaxCamera.html" />
            </b-tab-item>
            <b-tab-item label="Mount">
                <div class="doc content" v-html="CommandSyntaxMount.html" />
            </b-tab-item>
            <b-tab-item label="Enclosure">
                <div class="doc content" v-html="CommandSyntaxEnclosure.html" />
            </b-tab-item>
            <b-tab-item label="Focuser">
                <div class="doc content" v-html="CommandSyntaxFocuser.html" />
            </b-tab-item>
            <b-tab-item label="Rotator">
                <div class="doc content" v-html="CommandSyntaxRotator.html" />
            </b-tab-item>
            <b-tab-item label="Filter Wheel">
                <div class="doc content" v-html="CommandSyntaxFilterW.html" />
            </b-tab-item>
            <b-tab-item label="Sequencer">
                <div class="doc content" v-html="CommandSyntaxSequencer.html" />
            </b-tab-item>
            <b-tab-item label="Selector">
                <div class="doc content" v-html="CommandSyntaxSelector.html" />
            </b-tab-item>
            <b-tab-item label="Switch">
                <div class="doc content" v-html="CommandSyntaxSwitch.html" />
            </b-tab-item>
        </b-tabs>

        <div style="margin-bottom: 5em;" />

    </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import CommandSyntaxCamera from '@/documentation/command-syntax-camera.md'
import CommandSyntaxEnclosure from '@/documentation/command-syntax-enclosure.md'
import CommandSyntaxFilterW from '@/documentation/command-syntax-filterwheel.md'
import CommandSyntaxFocuser from '@/documentation/command-syntax-focuser.md'
import CommandSyntaxMount from '@/documentation/command-syntax-mount.md'
import CommandSyntaxRotator from '@/documentation/command-syntax-rotator.md'
import CommandSyntaxSelector from '@/documentation/command-syntax-selector.md'
import CommandSyntaxSwitch from '@/documentation/command-syntax-switch.md'
import CommandSyntaxSequencer from '@/documentation/command-syntax-switch.md'
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
            CommandSyntaxFilterW,
            CommandSyntaxFocuser,
            CommandSyntaxMount,
            CommandSyntaxRotator,
            CommandSyntaxSelector,
            CommandSyntaxSwitch,
            CommandSyntaxSequencer,
            CommandSyntaxDescription,
            selected_device: 'camera'
        }
    },
}
</script>
<style scoped>
    .doc {
        margin-top: 3em;
    }
</style>